const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const gamesDir = path.join(projectRoot, 'games');
const assetsDir = path.join(projectRoot, 'assets');

const changes = [
    { oldPath: 'sesi_bul', newPath: 'sesi_hissedelim', title: 'Sesi Hissedelim' },
    { oldPath: 'baloncuk', newPath: 'harfi_taniyalim', title: 'Harfi Tanıyalım' },
    { oldPath: 'a_harf_yazma', newPath: 'harfi_yazalim', title: 'Harfi Yazalım' },
    { oldPath: 'kar_yazi', newPath: 'karda_yazalim', title: 'Karda Yazalım' },
    { oldPath: 'elektrik_devresi', newPath: 'hece_sozcuk_olusturalim', title: 'Hece-Sözcük Oluşturalım' },
    { oldPath: 'yilan_cumle', newPath: 'sozcuk_olusturalim', title: 'Sözcük Oluşturalım' },
    { oldPath: 'cark_etkinligi', newPath: 'okuyalim', title: 'Okuyalım' }
];

function replaceInFile(filePath, replacements) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    replacements.forEach(r => {
        // Simple replaceAll
        content = content.split(r.from).join(r.to);
    });
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated content: ${path.basename(filePath)}`);
    }
}

// 1. Rename Directories
console.log('--- Renaming Directories ---');
changes.forEach(change => {
    const oldDir = path.join(gamesDir, change.oldPath);
    const newDir = path.join(gamesDir, change.newPath);
    if (fs.existsSync(oldDir)) {
        if (!fs.existsSync(newDir)) {
            fs.renameSync(oldDir, newDir);
            console.log(`Renamed Dir: ${change.oldPath} -> ${change.newPath}`);
        } else {
            console.log(`Target Dir exists, skipping rename: ${change.newPath}`);
        }
    } else {
        console.log(`Source Dir not found (maybe already renamed): ${change.oldPath}`);
    }
});

// 2. Rename Assets and Update Content Refs
console.log('--- Processing Assets & Content ---');
const textReplacements = [];
changes.forEach(c => {
    textReplacements.push({ from: c.oldPath, to: c.newPath });
    // Also nicely formatted titles if possible, but keep it simple for now to avoid breaking HTML attributes
});

// 2a. Rename Asset Files
['img', 'audio'].forEach(sub => {
    const dir = path.join(assetsDir, sub);
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        changes.forEach(change => {
            if (file.startsWith(change.oldPath + '_')) {
                const newName = file.replace(change.oldPath + '_', change.newPath + '_');
                const oldFilePath = path.join(dir, file);
                const newFilePath = path.join(dir, newName);
                if (!fs.existsSync(newFilePath)) {
                    fs.renameSync(oldFilePath, newFilePath);
                    console.log(`Renamed Asset: ${file} -> ${newName}`);
                }
            }
        });
    });
});

// 2b. Global Search & Replace in NEW Game Dirs
changes.forEach(change => {
    const d = path.join(gamesDir, change.newPath);
    if (fs.existsSync(d)) {
        const files = fs.readdirSync(d);
        files.forEach(f => {
            if (f.endsWith('.html') || f.endsWith('.js') || f.endsWith('.css')) {
                const replacements = [
                    { from: change.oldPath, to: change.newPath },
                    { from: change.oldPath.replace(/_/g, ' '), to: change.title } // e.g. "kar yazi" -> "Karda Yazalim" (rough)
                ];
                // Better: explicit title replacements from the 'changes' array
                // But context matters. Let's just do path refs first.

                // Specific Title Replacements
                if (change.oldPath === 'sesi_bul') replacements.push({ from: 'Sesi Bul', to: change.title });
                if (change.oldPath === 'baloncuk') replacements.push({ from: 'Harf Avı', to: change.title }); // Baloncuk key
                if (change.oldPath === 'a_harf_yazma') replacements.push({ from: 'Harf Yazma Atölyesi', to: change.title }, { from: 'Harf Yazma', to: change.title });

                // Add specific replacements based on the user request details
                if (change.oldPath === 'yilan_cumle') replacements.push(
                    { from: 'Cümle Yılanı', to: change.title },
                    { from: 'İngilizce cümleleri kur!', to: 'Hecelerle sözcükler oluştur!' }
                );

                replaceInFile(path.join(d, f), replacements);
            }
        });
    }
});

// 3. Update Root Index and Menu Index
console.log('--- Updating Menus ---');
const indices = [
    path.join(projectRoot, 'index.html'),
    path.join(gamesDir, 'index', 'index.html')
];

indices.forEach(idxPath => {
    if (fs.existsSync(idxPath)) {
        let content = fs.readFileSync(idxPath, 'utf8');
        changes.forEach(change => {
            // Replace path refs: 'games/oldPath' -> 'games/newPath'
            content = content.split(`games/${change.oldPath}`).join(`games/${change.newPath}`);
            content = content.split(`../${change.oldPath}`).join(`../${change.newPath}`);
            content = content.split(`'${change.oldPath}'`).join(`'${change.newPath}'`);

            // Replace Titles (Manually based on known previous titles in index.html)
            if (change.oldPath === 'sesi_bul') content = content.replace(/Sesi Bul/g, change.title);
            if (change.oldPath === 'baloncuk') content = content.replace(/Harf Avı/g, change.title).replace(/Sualtı Harf Avı/g, change.title);
            if (change.oldPath === 'a_harf_yazma') content = content.replace(/Harf Yazma Atölyesi/g, change.title).replace(/Harf Yazma/g, change.title);
            if (change.oldPath === 'kar_yazi') content = content.replace(/Kar Üzerine Yazı Yazma/g, change.title).replace(/Kar Yazı/g, change.title).replace(/Kar Üzerine Yazı Yaz/g, change.title);
            if (change.oldPath === 'elektrik_devresi') content = content.replace(/Elektrik Devresi/g, change.title).replace(/Devreyi Tamamla/g, change.title);
            if (change.oldPath === 'yilan_cumle') content = content.replace(/Cümle Yılanı/g, change.title);
            if (change.oldPath === 'cark_etkinligi') content = content.replace(/Çark Etkinliği/g, change.title);
        });
        fs.writeFileSync(idxPath, content, 'utf8');
        console.log(`Updated Menu: ${path.basename(idxPath)}`);
    }
});

console.log('Migration Complete');
