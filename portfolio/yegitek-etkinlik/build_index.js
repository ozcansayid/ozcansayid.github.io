const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const distDir = path.join(srcDir, 'dist');
const indexDistDir = path.join(distDir, 'index');
const assetsSrcDir = path.join(srcDir, 'assets');

// Ensure dist/index exists
if (!fs.existsSync(indexDistDir)) {
    fs.mkdirSync(indexDistDir, { recursive: true });
}

// Copy index.html
console.log('Copying index.html...');
const htmlContent = fs.readFileSync(path.join(srcDir, 'index.html'), 'utf8');
// We need to update links in index.html because games are one level deeper from dist/index/ than from root
// index.html links are like "games/sesi_hissedelim/index.html"
// In dist structure:
// dist/
//   index/index.html
//   sesi_hissedelim/index.html
// So link should be "../sesi_hissedelim/index.html"
// BUT wait, user asked to copy games to dist folders. 
// Standard structure: 
// dist/game1/...
// dist/index/index.html
// So yes, links need to be "../game1/index.html".

let updatedHtml = htmlContent.replace(/href="games\//g, 'href="../');
fs.writeFileSync(path.join(indexDistDir, 'index.html'), updatedHtml);

// Copy specific Assets for Index
console.log('Copying index assets...');
const indexAssetsDir = path.join(indexDistDir, 'assets');
if (!fs.existsSync(indexAssetsDir)) fs.mkdirSync(indexAssetsDir, { recursive: true });

function copyRecursiveSync(src, dest) {
    if (!fs.existsSync(src)) return;
    const stats = fs.statSync(src);
    if (stats.isDirectory()) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
        fs.readdirSync(src).forEach(child => {
            copyRecursiveSync(path.join(src, child), path.join(dest, child));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

// Copy CSS
copyRecursiveSync(path.join(assetsSrcDir, 'css'), path.join(indexAssetsDir, 'css'));

// Copy JS (bootstrap, etc if in main assets)
// We might not have a js folder in assets root broadly used, but Main UI uses bootstrap from CDN mostly, 
// let's check if there are local JS files used. index.html only uses inline script and CDN bootstrap.
// But we should copy js folder just in case styles depend on it or future use.
if (fs.existsSync(path.join(assetsSrcDir, 'js'))) {
    copyRecursiveSync(path.join(assetsSrcDir, 'js'), path.join(indexAssetsDir, 'js'));
}

// Copy Images
const imgDest = path.join(indexAssetsDir, 'img');
if (!fs.existsSync(imgDest)) fs.mkdirSync(imgDest, { recursive: true });

// Copy specific background
const bgFile = 'giris_bg.png';
if (fs.existsSync(path.join(assetsSrcDir, 'img', bgFile))) {
    fs.copyFileSync(path.join(assetsSrcDir, 'img', bgFile), path.join(imgDest, bgFile));
}

// Copy Icons folder
const iconsSrc = path.join(assetsSrcDir, 'img', 'icons');
const iconsDest = path.join(imgDest, 'icons');
copyRecursiveSync(iconsSrc, iconsDest);

console.log('Index build complete.');
