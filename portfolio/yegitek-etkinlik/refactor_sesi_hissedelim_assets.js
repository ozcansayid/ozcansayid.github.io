const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const gamePath = path.join(projectRoot, 'games', 'sesi_hissedelim', 'index.html');

if (fs.existsSync(gamePath)) {
    let content = fs.readFileSync(gamePath, 'utf8');

    // 1. Fix JS Data Objects
    // image: "img_1_1.png" -> image: "sesi_hissedelim_img_1_1.png"
    // audio: "audio_1_1.mp3" -> audio: "sesi_hissedelim_audio_1_1.mp3"
    // We can use a regex that looks for image: "..." and prepends if not already present.

    content = content.replace(
        /image:\s*"([^"]+)"/g,
        (match, filename) => {
            if (filename.startsWith('sesi_hissedelim_')) return match;
            return `image: "sesi_hissedelim_${filename}"`;
        }
    );

    content = content.replace(
        /audio:\s*"([^"]+)"/g,
        (match, filename) => {
            if (filename.startsWith('sesi_hissedelim_')) return match;
            return `audio: "sesi_hissedelim_${filename}"`;
        }
    );

    // Also instruction.mp3 in init()
    // const audio = new Audio('../../assets/audio/sesi_hissedelim/instruction.mp3'); 
    // This was already replaced by fix_references_to_flattened.js to:
    // .../sesi_hissedelim_instruction.mp3
    // But let's check manually or just rely on the previous fix.
    // The previous fix replaced `assets/audio/sesi_hissedelim/` with `assets/audio/sesi_hissedelim_`.
    // So it should be `../../assets/audio/sesi_hissedelim_instruction.mp3`.
    // Valid.

    // 2. Fix Template
    // <img src="../../assets/img/sesi_hissedelim_${item.image}" ...
    // Since item.image now has the prefix, we need to remove the hardcoded prefix in the src string.
    // The previous fix (Step 332) might have changed it to `sesi_hissedelim_${item.image}`.
    // We want just `${item.image}`.

    // Regex for the template string
    // It likely looks like: src="../../assets/img/sesi_hissedelim_${item.image}"
    // or src="../../assets/img/sesi_hissedelim_${item.image}"

    content = content.replace(
        /src="\.\.\/\.\.\/assets\/img\/sesi_hissedelim_\$\{item\.image\}"/g,
        'src="../../assets/img/${item.image}"'
    );

    // Also audio path construction?
    // const audio = new Audio(`../../assets/audio/sesi_hissedelim/${item.audio}`);
    // Step 332 changed this to `sesi_hissedelim_${item.audio}`.
    // Now item.audio has prefix. So we remove hardcoded prefix.

    content = content.replace(
        /new Audio\(`\.\.\/\.\.\/assets\/audio\/sesi_hissedelim_\$\{item\.audio\}`\)/g,
        'new Audio(`../../assets/audio/${item.audio}`)'
    );

    fs.writeFileSync(gamePath, content, 'utf8');
    console.log('Refactored sesi_hissedelim assets to dynamic full names.');
} else {
    console.log('sesi_hissedelim/index.html not found.');
}
