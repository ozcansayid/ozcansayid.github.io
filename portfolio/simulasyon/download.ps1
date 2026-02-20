mkdir -Force libs
$urls = @{
    "libs/three.min.js" = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
    "libs/GLTFLoader.js" = "https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js"
    "libs/PointerLockControls.js" = "https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/PointerLockControls.js"
}

foreach ($filePath in $urls.Keys) {
    Write-Output "Downloading $($urls[$filePath])..."
    Invoke-WebRequest -Uri $urls[$filePath] -OutFile $filePath
}
mkdir -Force assets
Move-Item -Path sergi.glb -Destination assets/sergi.glb -ErrorAction SilentlyContinue
Write-Output "Done."
