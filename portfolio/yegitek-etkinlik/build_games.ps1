# Storyline Web Object Exporter
# Usage: .\build_games.ps1
# 
# This script does the following for EVERY .html file in the 'games' folder:
# 1. Creates a folder in 'dist/[filename]'
# 2. Copies the HTML file there and renames it to 'index.html' (Standard for Web Objects)
# 3. Copies the 'assets' folder into that dist folder.
# 4. Updates reference links in the HTML (Changes '../assets' to './assets')

$sourceDir = ".\games"
$distBase = ".\dist"

# Create dist if not exists
if (-not (Test-Path $distBase)) {
    New-Item -ItemType Directory -Force -Path $distBase | Out-Null
}

# Get all HTML files in games (excluding template if you want, but compiling template is good for testing)
$games = Get-ChildItem -Path $sourceDir -Filter "*.html"

foreach ($game in $games) {
    if ($game.Name -eq "template.html") { continue } # Skip template if desired, or keep it. Let's skip for now.

    Write-Host "Packaging $($game.Name)..." -ForegroundColor Cyan
    
    # Define generic folder name
    $gameName = $game.BaseName
    $targetDir = Join-Path $distBase $gameName
    
    # 1. Clean/Create Target Directory
    if (Test-Path $targetDir) { Remove-Item -Recurse -Force $targetDir }
    New-Item -ItemType Directory -Force -Path $targetDir | Out-Null
    
    # 2. Copy Assets
    $assetsSource = Join-Path $sourceDir "assets"
    $assetsTarget = Join-Path $targetDir "assets"
    Copy-Item -Recurse -Force $assetsSource $assetsTarget
    
    # 3. Read HTML Content
    $content = Get-Content $game.FullName -Raw -Encoding UTF8
    
    # 4. Fix Paths ( ../assets -> ./assets ) AND ( ../index.html -> # )
    $content = $content -replace '\.\./assets', './assets'
    $content = $content -replace 'games/assets', 'assets' # Just in case
    $content = $content -replace '\.\./index\.html', '#' # Disable Home button in packaged version (optional)
    
    # 5. Write to index.html in target
    $targetFile = Join-Path $targetDir "index.html"
    $content | Set-Content -Path $targetFile -Encoding UTF8
    
    Write-Host "  -> Exported to: $targetDir\index.html" -ForegroundColor Green
}

Write-Host "`nAll games built successfully!" -ForegroundColor Yellow
