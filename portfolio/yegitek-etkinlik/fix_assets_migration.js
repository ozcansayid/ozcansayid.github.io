const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const assetsDir = path.join(projectRoot, 'assets');

const changes = [
    { oldPath: 'sesi_bul', newPath: 'sesi_hissedelim' },
    { oldPath: 'baloncuk', newPath: 'harfi_taniyalim' },
    { oldPath: 'a_harf_yazma', newPath: 'harfi_yazalim' },
    { oldPath: 'kar_yazi', newPath: 'karda_yazalim' },
    { oldPath: 'elektrik_devresi', newPath: 'hece_sozcuk_olusturalim' },
    { oldPath: 'yilan_cumle', newPath: 'sozcuk_olusturalim' },
    { oldPath: 'cark_etkinligi', newPath: 'okuyalim' }
];

['img', 'audio'].forEach(type => {
    const parentDir = path.join(assetsDir, type);
    if (!fs.existsSync(parentDir)) return;

    changes.forEach(change => {
        const oldDir = path.join(parentDir, change.oldPath);

        // 1. Check if OLD directory exists (Nested state)
        if (fs.existsSync(oldDir) && fs.statSync(oldDir).isDirectory()) {
            console.log(`Flattening and renaming content of ${change.oldPath} in ${type}...`);
            const files = fs.readdirSync(oldDir);
            files.forEach(file => {
                const src = path.join(oldDir, file);
                // Avoid renaming if it's a directory (unlikely but safe)
                if (fs.statSync(src).isDirectory()) return;

                // New Name: newPath_filename
                // e.g. sesi_hissedelim_img_1_1.png

                // BE CAREFUL: Check if file already has the prefix?
                // Nested files usually don't have the folder prefix yet, or they might.
                // e.g. sesi_bul/img_1_1.png
                // We want sesi_hissedelim_img_1_1.png

                let newFileName = file;
                // If file already starts with oldPath_, remove it first to avoid double prefix?
                // e.g. if file is "sesi_bul_img.png" inside "sesi_bul" folder
                if (newFileName.startsWith(change.oldPath + '_')) {
                    newFileName = newFileName.substring(change.oldPath.length + 1);
                }

                const destName = `${change.newPath}_${newFileName}`;
                const dest = path.join(parentDir, destName);

                fs.copyFileSync(src, dest); // Copy first
                // fs.unlinkSync(src); // Then delete? Or just leave old dir for now?
                // Let's safe move: copy then delete file.
                fs.unlinkSync(src);
                console.log(`  Moved: ${file} -> ${destName}`);
            });

            // Remove empty dir
            try {
                fs.rmdirSync(oldDir);
                console.log(`  Removed dir: ${change.oldPath}`);
            } catch (e) {
                console.log(`  Could not remove dir (not empty?): ${change.oldPath}`);
            }
        }
    });

    // Also handle files that might have been flattened but with OLD names
    // e.g. assets/img/sesi_bul_img_1_1.png
    const rootFiles = fs.readdirSync(parentDir);
    rootFiles.forEach(file => {
        changes.forEach(change => {
            if (file.startsWith(change.oldPath + '_')) {
                const newName = file.replace(change.oldPath + '_', change.newPath + '_');
                const src = path.join(parentDir, file);
                const dest = path.join(parentDir, newName);
                if (!fs.existsSync(dest)) {
                    fs.renameSync(src, dest);
                    console.log(`Renamed Root File: ${file} -> ${newName}`);
                }
            }
        });
    });
});
