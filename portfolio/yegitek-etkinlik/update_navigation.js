const fs = require('fs');
const path = require('path');

const projectRoot = 'c:\\wamp64\\www\\yegitek-etkinlik';
const gamesDir = path.join(projectRoot, 'games');

// Updated Order with NEW NAMES
const GAMES_ORDER = [
    'sesi_hissedelim',
    'harfi_taniyalim',
    'harfi_yazalim',
    'karda_yazalim',
    'hece_sozcuk_olusturalim',
    'sozcuk_olusturalim',
    'okuyalim'
];

const navigationScript = `
    <!-- Combined Navigation Logic -->
    <script>
        const GAMES_ORDER_NAMES = [
            'sesi_hissedelim',
            'harfi_taniyalim',
            'harfi_yazalim',
            'karda_yazalim',
            'hece_sozcuk_olusturalim',
            'sozcuk_olusturalim',
            'okuyalim'
        ];

        function getCurrentGameIndex() {
            const currentPath = window.location.pathname;
            // Handle both / and \\ separators
            for (let i = 0; i < GAMES_ORDER_NAMES.length; i++) {
                if (currentPath.includes(GAMES_ORDER_NAMES[i])) {
                    return i;
                }
            }
            return -1;
        }

        function navigateHome() {
            // Storyline Logic
            try {
                var player = null;
                if (window.GetPlayer) player = window.GetPlayer();
                else if (window.parent && window.parent.GetPlayer) player = window.parent.GetPlayer();

                if (player) {
                    player.SetVar("homepage", true);
                    console.log("Storyline variable 'homepage' set to true");
                    return;
                }
            } catch (e) { console.error(e); }

            // Local Logic
            window.location.href = '../index/index.html';
        }

        function navigateNext() {
            // Storyline Logic
            try {
                var player = null;
                if (window.GetPlayer) player = window.GetPlayer();
                else if (window.parent && window.parent.GetPlayer) player = window.parent.GetPlayer();

                if (player) {
                    var currentId = player.GetVar("game_id");
                    if (typeof currentId === 'number') {
                         player.SetVar("game_id", currentId + 1);
                         console.log("Storyline variable 'game_id' incremented");
                         return;
                    }
                }
            } catch (e) { console.error(e); }

            // Local Logic
            const idx = getCurrentGameIndex();
            if (idx !== -1 && idx < GAMES_ORDER_NAMES.length - 1) {
                window.location.href = '../' + GAMES_ORDER_NAMES[idx + 1] + '/index.html';
            } else {
                console.log("Last game or index not found.");
            }
        }

        function navigatePrev() {
            // Storyline Logic
            try {
                var player = null;
                if (window.GetPlayer) player = window.GetPlayer();
                else if (window.parent && window.parent.GetPlayer) player = window.parent.GetPlayer();

                if (player) {
                    var currentId = player.GetVar("game_id");
                    if (typeof currentId === 'number') {
                         player.SetVar("game_id", currentId - 1);
                         console.log("Storyline variable 'game_id' decremented");
                         return;
                    }
                }
            } catch (e) { console.error(e); }

            // Local Logic
            const idx = getCurrentGameIndex();
            if (idx > 0) {
                window.location.href = '../' + GAMES_ORDER_NAMES[idx - 1] + '/index.html';
            } else {
                console.log("First game or index not found.");
            }
        }
    </script>
`;

GAMES_ORDER.forEach(gameFolder => {
    const indexPath = path.join(gamesDir, gameFolder, 'index.html');
    if (fs.existsSync(indexPath)) {
        let content = fs.readFileSync(indexPath, 'utf8');

        // Clean old script
        // We will just replace the GAMES_ORDER_NAMES array content if possible, or append fresh.
        // Given we are refactoring, let's aggressively replace the whole block if found.
        // Or simpler: Just append. JS allows re-definition of functions (last one wins), 
        // but const GAMES_ORDER_NAMES will error if redefined within same scope (global).
        // Since we are appending to body, they are global. 
        // To avoid "Identifier 'GAMES_ORDER_NAMES' has already been declared", we should remove the old block.

        // Regex to remove the previous script block related to navigation
        // It starts with <script> and contains GAMES_ORDER_NAMES
        content = content.replace(/<script>[\s\S]*?GAMES_ORDER_NAMES[\s\S]*?<\/script>/, '');

        // 2. Replace Home/Next/Prev handlers just in case they were reverted or need refresh
        content = content.replace(
            /(<a\s+[^>]*title=["']Anasayfa["'][^>]*>)/gi,
            (match) => {
                let newTag = match.replace(/href=["'][^"']*["']/, 'href="#"');
                if (newTag.includes('onclick=')) {
                    newTag = newTag.replace(/onclick=["'][^"']*["']/, 'onclick="navigateHome(); return false;"');
                } else {
                    newTag = newTag.replace('>', ' onclick="navigateHome(); return false;">');
                }
                return newTag;
            }
        );

        content = content.replace(
            /(<button\s+[^>]*title=["']Sonraki["'][^>]*>)/gi,
            (match) => {
                if (match.includes('onclick=')) {
                    return match.replace(/onclick=["'][^"']*["']/, 'onclick="navigateNext()"');
                } else {
                    return match.replace('>', ' onclick="navigateNext()">');
                }
            }
        );

        content = content.replace(
            /(<button\s+[^>]*title=["']Önceki["'][^>]*>)/gi,
            (match) => {
                if (match.includes('onclick=')) {
                    return match.replace(/onclick=["'][^"']*["']/, 'onclick="navigatePrev()"');
                } else {
                    return match.replace('>', ' onclick="navigatePrev()">');
                }
            }
        );

        // 5. Inject Script
        content = content.replace('</body>', navigationScript + '\n</body>');

        fs.writeFileSync(indexPath, content, 'utf8');
        console.log(`Updated Nav: ${gameFolder}/index.html`);
    } else {
        console.log(`Missing: ${gameFolder}/index.html`);
    }
});
