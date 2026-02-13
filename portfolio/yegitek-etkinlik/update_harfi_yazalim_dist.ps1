$source = "c:\wamp64\www\yegitek-etkinlik"
$dist = "$source\dist"
$gameName = "harfi_yazalim"
$g = Get-Item "$source\games\$gameName"
$targetDir = "$dist\$gameName"

Write-Host "Updating $gameName..."

# Clean target if exists for clean update
if (Test-Path $targetDir) { Remove-Item $targetDir -Recurse -Force }
New-Item $targetDir -ItemType Directory -Force | Out-Null

# Copy Game Files
Copy-Item "$($g.FullName)\*" $targetDir -Recurse -Force

# Copy Assets
$assetsDir = "$targetDir\assets"
if (-not (Test-Path $assetsDir)) { New-Item $assetsDir -ItemType Directory | Out-Null }
Copy-Item "$source\assets\*" $assetsDir -Recurse -Force

# Fix HTML
$idx = "$targetDir\index.html"
if (Test-Path $idx) {
    $c = Get-Content $idx -Raw -Encoding UTF8
    $c = $c -replace '\.\./\.\./assets/', 'assets/'
    $c = $c -replace '"\.\./\.\./assets"', '"assets"'
    $c = $c -replace "window.ASSETS_PATH = '../../assets/';", "window.ASSETS_PATH = 'assets/';"
    Set-Content $idx -Value $c -Encoding UTF8
}

Write-Host "Done."
