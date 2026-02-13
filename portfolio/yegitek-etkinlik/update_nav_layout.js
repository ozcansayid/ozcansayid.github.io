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

function updateGameFile(gameName) {
    const filePath = path.join(gamesDir, gameName, 'index.html');
    if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 1. Remove Sidebar Home Button
    // Pattern: <a href="#" class="btn btn-kid btn-danger btn-icon-only" title="Anasayfa" ... > ... </a>
    // We need to be careful with whitespace.
    const sidebarHomeRegex = /<a\s+href="#"\s+class="btn\s+btn-kid\s+btn-danger\s+btn-icon-only"\s+title="Anasayfa"[\s\S]*?<\/a>/g;

    if (sidebarHomeRegex.test(content)) {
        content = content.replace(sidebarHomeRegex, '');
        console.log(`[${gameName}] Removed sidebar home button.`);
    } else {
        console.log(`[${gameName}] Sidebar home button not found (might be already removed).`);
    }

    // 2. Add Header Home Button
    // We want to insert it at the beginning of "game-nav" container.
    // Pattern: <div class="game-nav">

    const headerHomeButtonHtml = `
                    <a href="#" class="btn-nav-flat btn-nav-home" title="Anasayfa" onclick="navigateHome(); return false;">
                        <i class="bi bi-house-fill"></i>
                    </a>`;

    const navDivRegex = /(<div class="game-nav">\s*)/;

    // Check if we already have a home button in game-nav to avoid duplicates
    const hasHomeInNav = /class="[^"]*btn-nav-home"/.test(content);

    if (!hasHomeInNav) {
        if (navDivRegex.test(content)) {
            content = content.replace(navDivRegex, `$1${headerHomeButtonHtml}\n                    `);
            console.log(`[${gameName}] Added header home button.`);
        } else {
            console.warn(`[${gameName}] Could not find <div class="game-nav">.`);
        }
    } else {
        console.log(`[${gameName}] Header home button already exists.`);
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`[${gameName}] File updated.`);
    } else {
        console.log(`[${gameName}] No changes made.`);
    }
}

games.forEach(game => updateGameFile(game));
