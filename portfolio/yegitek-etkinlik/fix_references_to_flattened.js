const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const gamesDir = path.join(projectRoot, 'games');

const prefixes = [
    'sesi_hissedelim',
    'harfi_taniyalim',
    'harfi_yazalim',
    'karda_yazalim',
    'hece_sozcuk_olusturalim',
    'sozcuk_olusturalim',
    'okuyalim',
    'duygu_galaksisi' // Just in case
];

function scanAndFix(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'assets') scanAndFix(fullPath);
        } else if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;

            prefixes.forEach(prefix => {
                // Replace 'img/prefix/' with 'img/prefix_'
                // And 'audio/prefix/' with 'audio/prefix_'
                // Be careful with overlapping replacements.
                // Regex is safer.

                // Matches: assets/img/prefix/
                const regexImg = new RegExp(`assets/img/${prefix}/`, 'g');
                content = content.replace(regexImg, `assets/img/${prefix}_`);

                // Matches: assets/audio/prefix/
                const regexAudio = new RegExp(`assets/audio/${prefix}/`, 'g');
                content = content.replace(regexAudio, `assets/audio/${prefix}_`);
            });

            if (content !== original) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Fixed paths in: ${path.relative(projectRoot, fullPath)}`);
            }
        }
    });
}

scanAndFix(gamesDir);
