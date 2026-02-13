const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const gamesDir = path.join(projectRoot, 'games');
const assetsDir = path.join(projectRoot, 'assets');
const distDir = path.join(projectRoot, 'dist');

const commonAssetFolders = ['css', 'js'];
// Always include these audio files if they exist, as they are used by shared main.js
const commonAudioFiles = ['correct.mp3', 'wrong.mp3'];

function copyRecursiveSync(src, dest) {
    if (!fs.existsSync(src)) return;
    const stats = fs.statSync(src);
    const isDirectory = stats.isDirectory();

    const destDir = isDirectory ? dest : path.dirname(dest);
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }

    if (isDirectory) {
        fs.readdirSync(src).forEach(function (childItemName) {
            copyRecursiveSync(path.join(src, childItemName),
                path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

console.log('Cleaning dist folder...');
try {
    if (fs.existsSync(distDir)) {
        fs.rmSync(distDir, { recursive: true, force: true });
    }
} catch (e) {
    console.log("Could not fully clean dist, attempting to proceed:", e.message);
}

if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

const availableImages = fs.existsSync(path.join(assetsDir, 'img'))
    ? fs.readdirSync(path.join(assetsDir, 'img')).filter(f => !fs.statSync(path.join(assetsDir, 'img', f)).isDirectory())
    : [];
const availableAudio = fs.existsSync(path.join(assetsDir, 'audio'))
    ? fs.readdirSync(path.join(assetsDir, 'audio')).filter(f => !fs.statSync(path.join(assetsDir, 'audio', f)).isDirectory())
    : [];

console.log(`Pool: ${availableImages.length} images, ${availableAudio.length} audio files.`);

const games = fs.readdirSync(gamesDir);

games.forEach(gameName => {
    const srcGameDir = path.join(gamesDir, gameName);
    if (!fs.statSync(srcGameDir).isDirectory()) return;

    console.log(`Processing game: ${gameName}`);

    const distGameDir = path.join(distDir, gameName);

    // Copy Game Files first
    copyRecursiveSync(srcGameDir, distGameDir);

    // Prepare structure for localized assets
    const distAssetsDir = path.join(distGameDir, 'assets');
    if (!fs.existsSync(distAssetsDir)) fs.mkdirSync(distAssetsDir, { recursive: true });

    // Copy common CSS/JS
    commonAssetFolders.forEach(folder => {
        copyRecursiveSync(path.join(assetsDir, folder), path.join(distAssetsDir, folder));
    });

    const distImgDir = path.join(distAssetsDir, 'img');
    const distAudioDir = path.join(distAssetsDir, 'audio');
    if (!fs.existsSync(distImgDir)) fs.mkdirSync(distImgDir, { recursive: true });
    if (!fs.existsSync(distAudioDir)) fs.mkdirSync(distAudioDir, { recursive: true });

    // Always copy common audio
    commonAudioFiles.forEach(f => {
        const src = path.join(assetsDir, 'audio', f);
        if (fs.existsSync(src)) {
            fs.copyFileSync(src, path.join(distAudioDir, f));
        }
    });

    // Scan for usage
    const gameFiles = [];
    function findGameFiles(dir) {
        fs.readdirSync(dir).forEach(file => {
            if (file === 'assets') return;

            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                findGameFiles(fullPath);
            } else {
                if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.css')) {
                    gameFiles.push(fullPath);
                }
            }
        });
    }
    findGameFiles(distGameDir);

    const usedImages = new Set();
    const usedAudio = new Set();

    gameFiles.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');

        // Fix paths (ensure they point to local assets)
        content = content.replace(/\.\.\/\.\.\/assets\//g, 'assets/');
        content = content.replace(/\.\.\/assets\//g, 'assets/');
        fs.writeFileSync(file, content, 'utf8');

        // Check usage against available pool
        availableImages.forEach(img => { if (content.includes(img)) usedImages.add(img); });
        availableAudio.forEach(aud => { if (content.includes(aud)) usedAudio.add(aud); });
    });

    console.log(`  - Assets (Scanned): ${usedImages.size} img, ${usedAudio.size} audio`);

    usedImages.forEach(img => {
        const src = path.join(assetsDir, 'img', img);
        if (fs.existsSync(src)) fs.copyFileSync(src, path.join(distImgDir, img));
    });
    usedAudio.forEach(aud => {
        const src = path.join(assetsDir, 'audio', aud);
        if (fs.existsSync(src)) {
            // Check if already copied (common) to avoid error? copyFileSync overwrites so it's fine.
            fs.copyFileSync(src, path.join(distAudioDir, aud));
        }
    });
});


// --- Root Index Handling ---
console.log("Processing root index.html...");
const rootIndexSrc = path.join(projectRoot, 'index.html');
const rootIndexDest = path.join(distDir, 'index.html');

if (fs.existsSync(rootIndexSrc)) {
    let indexContent = fs.readFileSync(rootIndexSrc, 'utf8');

    // Update Links: games/foo/index.html -> foo/index.html
    // The build flattens 'games/foo' -> 'dist/foo'
    indexContent = indexContent.replace(/games\/([^\/"]+)\/index.html/g, '$1/index.html');

    // Prepare root assets
    const rootDistAssets = path.join(distDir, 'assets');
    if (!fs.existsSync(rootDistAssets)) fs.mkdirSync(rootDistAssets, { recursive: true });

    // Copy common CSS/JS to root assets (needed for index styling/scripts)
    commonAssetFolders.forEach(folder => {
        copyRecursiveSync(path.join(assetsDir, folder), path.join(rootDistAssets, folder));
    });

    // Scan index.html for specific images
    const usedImagesIndex = new Set();
    availableImages.forEach(img => {
        if (indexContent.includes(img)) usedImagesIndex.add(img);
    });

    // Copy used images to dist/assets/img
    const rootDistImg = path.join(rootDistAssets, 'img');
    if (!fs.existsSync(rootDistImg)) fs.mkdirSync(rootDistImg, { recursive: true });

    usedImagesIndex.forEach(img => {
        const src = path.join(assetsDir, 'img', img);
        if (fs.existsSync(src)) fs.copyFileSync(src, path.join(rootDistImg, img));
    });

    // Copy specific bg if missed (giris_bg.png often used in css/style but check index usage)
    // If it's in style.css, it was copied with css folder. 
    // If it's inline style (like line 34 of index.html), scanning catches it.

    fs.writeFileSync(rootIndexDest, indexContent, 'utf8');
    console.log(`  - Root Index copied with ${usedImagesIndex.size} images.`);
}

console.log('Build Complete.');
