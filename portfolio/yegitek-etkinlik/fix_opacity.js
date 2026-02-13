const fs = require('fs');
const path = require('path');

const filesToFix = [
    'games/harfi_yazalim/index.html',
    'games/karda_yazalim/index.html',
    'games/okuyalim/index.html'
];

filesToFix.forEach(relativePath => {
    const filePath = path.join(__dirname, relativePath);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Regex to find style="opacity: 0.5;" with potential surrounding spaces
        // We want to remove it entirely from the tag.
        const opacityRegex = /\s*style="opacity:\s*0\.5;?"/g;

        if (opacityRegex.test(content)) {
            const newContent = content.replace(opacityRegex, '');
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`[FIXED] Removed opacity style from ${relativePath}`);
        } else {
            console.log(`[SKIPPED] No opacity style found in ${relativePath}`);
        }
    } else {
        console.warn(`[ERROR] File not found: ${relativePath}`);
    }
});
