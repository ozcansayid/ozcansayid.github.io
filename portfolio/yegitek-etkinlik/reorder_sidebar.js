const fs = require('fs');
const path = require('path');

const gamesDir = path.join(__dirname, 'games');
const games = [
    'sesi_hissedelim',
    'harfi_taniyalim',
    'harfi_yazalim',
    'karda_yazalim',
    'hece_sozcuk_olusturalim',
    'sozcuk_olusturalim',
    'okuyalim'
];

function reorderButtons(gameName) {
    const filePath = path.join(gamesDir, gameName, 'index.html');
    if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Regex to capture the nav-buttons-container content
    const containerRegex = /(<div class="nav-buttons-container[^>]*">)([\s\S]*?)(<\/div>)/i;
    const match = content.match(containerRegex);

    if (!match) {
        console.warn(`[${gameName}] nav-buttons-container not found.`);
        return;
    }

    const startTag = match[1];
    const innerContent = match[2];
    const endTag = match[3];

    // Extract individual buttons using regex
    // We look for button blocks. 
    // Note: Fullscreen and Audio preserve their comments if captured carefully.

    // 1. Fullscreen
    const fullscreenRegex = /<!-- Fullscreen -->\s*<button id="btn-fullscreen"[\s\S]*?<\/button>/i;
    const fullscreenMatch = innerContent.match(fullscreenRegex) || innerContent.match(/<button id="btn-fullscreen"[\s\S]*?<\/button>/i);
    const fullscreenBtn = fullscreenMatch ? fullscreenMatch[0] : '';

    // 2. Audio
    const audioRegex = /<!-- Audio Toggle -->\s*<button id="btn-audio-toggle"[\s\S]*?<\/button>/i;
    const audioMatch = innerContent.match(audioRegex) || innerContent.match(/<button id="btn-audio-toggle"[\s\S]*?<\/button>/i);
    const audioBtn = audioMatch ? audioMatch[0] : '';

    // 3. Instructions
    // Could be various comments or none
    const instrRegex = /(<!-- Instructions Button -->\s*)?<button[^>]*data-bs-target="#instructionsModal"[\s\S]*?<\/button>/i;
    const instrMatch = innerContent.match(instrRegex);
    const instrBtn = instrMatch ? instrMatch[0] : '';

    // 4. Restart / Clear
    // Look for onclick reload or clearCanvas OR title "Yeniden Başlat" / "Hepsini Sil" / "Temizle"
    const restartRegex = /(<!-- Reload\/Retry Button -->|<!-- [^>]* -->\s*)?<button[^>]*onclick="(location\.reload\(\)|clearCanvas\(\))"[^>]*>[\s\S]*?<\/button>/i;
    const restartMatch = innerContent.match(restartRegex);
    let restartBtn = restartMatch ? restartMatch[0] : '';

    // Fallback for restart if not found via onclick (some might vary)
    if (!restartBtn) {
        // Try strict title search if strict regex failed
        const titleRegex = /<button[^>]*title="(Yeniden Başlat|Hepsini Sil|Temizle)"[\s\S]*?<\/button>/i;
        const m = innerContent.match(titleRegex);
        if (m) restartBtn = m[0];
    }

    // Check if we found all expected parts
    if (!fullscreenBtn && !audioBtn && !instrBtn && !restartBtn) {
        console.warn(`[${gameName}] Could not identify buttons correctly. Skipping reorder.`);
        return;
    }

    // Home button should be gone from sidebar, but if present rename/remove logic is elsewhere. 
    // We strictly assume we only put back what we found.

    // Desired Order (Top to Bottom):
    // 1. Restart
    // 2. Instructions
    // 3. Audio
    // 4. Fullscreen

    const newInnerContent = `
                ${restartBtn}

                ${instrBtn}

                ${audioBtn}

                ${fullscreenBtn}
    `;

    const newContainerBlock = `${startTag}${newInnerContent}${endTag}`;

    // Replace in original content
    const newFileContent = content.replace(containerRegex, newContainerBlock);

    fs.writeFileSync(filePath, newFileContent, 'utf8');
    console.log(`[${gameName}] Buttons reordered.`);
}

games.forEach(game => reorderButtons(game));
