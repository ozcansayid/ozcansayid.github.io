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

const navigationScript = `    <!-- Combined Navigation Logic -->
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
                }
            } catch (e) { console.error(e); }

            // Local Logic
            window.location.href = '../../index.html';
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
    </script>`;

games.forEach(game => {
    const filePath = path.join(gamesDir, game, 'index.html');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Regex to find the existing Combined Navigation Logic block
        // It starts with <!-- Combined Navigation Logic --> and ends with </script>
        const regex = /<!-- Combined Navigation Logic -->[\s\S]*?<\/script>/;

        if (regex.test(content)) {
            console.log(`Updating navigation logic in ${game}`);
            content = content.replace(regex, navigationScript);
        } else {
            console.log(`Appending navigation logic to ${game}`);
            // Insert before </body>
            content = content.replace('</body>', navigationScript + '\n</body>');
        }

        fs.writeFileSync(filePath, content, 'utf8');
    } else {
        console.error(`Game file not found: ${filePath}`);
    }
});
