const fs = require('fs');
const path = require('path');

const audioDir = path.join(__dirname, 'assets', 'audio');

const commonFiles = ['correct.mp3', 'wrong.mp3'];
// Fallback source prefix if common file missing
const sourcePrefix = 'harfi_taniyalim_';

commonFiles.forEach(file => {
    const commonPath = path.join(audioDir, file);
    if (!fs.existsSync(commonPath)) {
        console.log(`Common file missing: ${file}`);
        // Try to find a source
        const srcPath = path.join(audioDir, sourcePrefix + file);
        if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, commonPath);
            console.log(`Restored ${file} from ${sourcePrefix + file}`);
        } else {
            console.log(`Could not find fallback for ${file} (tried ${sourcePrefix + file})`);
            // Try any file ending in file
            const allFiles = fs.readdirSync(audioDir);
            const fallback = allFiles.find(f => f.endsWith('_' + file));
            if (fallback) {
                fs.copyFileSync(path.join(audioDir, fallback), commonPath);
                console.log(`Restored ${file} from ${fallback}`);
            }
        }
    } else {
        console.log(`Common file exists: ${file}`);
    }
});
