# Dist Kopyalama İşlemi

Bu dosya, projenin `dist` klasörünü oluşturmak için kullanılan PowerShell betiğini içerir.
Bu işlem:
1. Mevcut `dist` klasörünü temizler.
2. Tüm oyunları kendi klasörlerine (`dist/[oyun_adı]`) kopyalar.
3. Her oyunun içine `assets` klasörünü kopyalar (bağımsız çalışma için).
4. Oyunların `index.html`, **`.js`** ve **`.css`** dosyalarındaki dosya yollarını günceller (`../../assets` -> `assets`).
5. Ana `index.html` dosyasını `dist/index` klasörüne kopyalar ve bağlantıları düzenler (`games/` -> `../`).
6. Tüm okuma/yazma işlemlerinde **UTF-8** kodlamasını zorlar (Türkçe karakter sorunu için).

## Çalıştırma Komutu

Aşağıdaki PowerShell betiğini çalıştırarak işlemi gerçekleştirebilirsiniz:

```powershell
$source = "c:\wamp64\www\yegitek-etkinlik"
$dist = "$source\dist"

Write-Host "Recreating dist with UTF-8 encoding..."

# Clean
if (Test-Path $dist) { Remove-Item $dist -Recurse -Force }
New-Item $dist -ItemType Directory | Out-Null

# --- Games ---
$games = Get-ChildItem "$source\games" -Directory
foreach ($g in $games) {
    if ($g.Name -eq "_template") { continue }
    
    $targetDir = "$dist\$($g.Name)"
    New-Item $targetDir -ItemType Directory | Out-Null
    Write-Host "Processing $($g.Name)..."
    
    # Copy Game Files
    Copy-Item "$($g.FullName)\*" $targetDir -Recurse -Force
    
    # Copy Assets (Global Assets into Game Folder)
    $assetsDir = "$targetDir\assets"
    if (-not (Test-Path $assetsDir)) { New-Item $assetsDir -ItemType Directory | Out-Null }
    Copy-Item "$source\assets\*" $assetsDir -Recurse -Force
    
    # Fix HTML with UTF-8
    $idx = "$targetDir\index.html"
    if (Test-Path $idx) {
        $c = Get-Content $idx -Raw -Encoding UTF8
        # Path Replacements
        $c = $c -replace '\.\./\.\./assets/', 'assets/'
        $c = $c -replace '"\.\./\.\./assets"', '"assets"'
        $c = $c -replace "window.ASSETS_PATH = '../../assets/';", "window.ASSETS_PATH = 'assets/';"
        Set-Content $idx -Value $c -Encoding UTF8
    }

    # Fix JS files (Generic replacement for '../../assets/')
    $jsFiles = Get-ChildItem $targetDir -Filter "*.js"
    foreach ($js in $jsFiles) {
        $content = Get-Content $js.FullName -Raw -Encoding UTF8
        if ($content -match '\.\./\.\./assets/') {
            Write-Host "  Fixed asset path in $($js.Name)"
            $content = $content -replace '\.\./\.\./assets/', 'assets/'
            Set-Content $js.FullName -Value $content -Encoding UTF8
        }
    }

    # Fix CSS files (for background-image urls)
    $cssFiles = Get-ChildItem $targetDir -Filter "*.css"
    foreach ($css in $cssFiles) {
        $content = Get-Content $css.FullName -Raw -Encoding UTF8
        if ($content -match '\.\./\.\./assets/') {
            Write-Host "  Fixed asset path in $($css.Name)"
            $content = $content -replace '\.\./\.\./assets/', 'assets/'
            Set-Content $css.FullName -Value $content -Encoding UTF8
        }
    }
}

# --- Index ---
$indexDist = "$dist\index"
New-Item $indexDist -ItemType Directory -Force | Out-Null

# Copy Assets to Index Folder
$assetsTarget = "$indexDist\assets"
New-Item $assetsTarget -ItemType Directory -Force | Out-Null
Copy-Item "$source\assets\*" $assetsTarget -Recurse -Force

# Fix Main Index with UTF-8
$mainIndexSource = "$source\index.html"
$mainIndexDest = "$indexDist\index.html"
if (Test-Path $mainIndexSource) {
    $c = Get-Content $mainIndexSource -Raw -Encoding UTF8
    # Update links: games/game_name -> ../game_name (Since games are in ../game_name and we are in index/)
    $c = $c -replace 'href="games/', 'href="../'
    Set-Content $mainIndexDest -Value $c -Encoding UTF8
}

Write-Host "Done. Dist created successfully."
```
