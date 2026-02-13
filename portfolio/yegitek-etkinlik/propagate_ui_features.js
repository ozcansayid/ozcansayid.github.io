const fs = require('fs');
const path = require('path');

const gamesDir = path.join(__dirname, 'games');
const games = [
    'sesi_hissedelim',
    'harfi_taniyalim',
    'harfi_yazalim',
    'karda_yazalim',
    'hece_sozcuk_olusturalim',
    'okuyalim'
    // 'sozcuk_olusturalim' is ALREADY done manually
];

// Helper to inject HTML for buttons
function injectButtonsHtml(content) {
    if (content.includes('id="btn-fullscreen"')) {
        console.log("Buttons already exist.");
        return content;
    }

    // Attempt to find the nav-buttons-container div
    // Pattern: <div class="nav-buttons-container [anything]">
    // We want to prepend the buttons inside this container.
    const navRegex = /(<div class="nav-buttons-container[^>]*">)/i;

    const buttonsHtml = `
                <!-- Fullscreen -->
                <button id="btn-fullscreen" class="btn btn-kid btn-icon-only" 
                    style="background-color: #6f42c1; color: white; border: none;" 
                    title="Tam Ekran">
                    <i class="bi bi-arrows-fullscreen"></i>
                </button>
                
                <!-- Audio Toggle -->
                <button id="btn-audio-toggle" class="btn btn-kid btn-icon-only" 
                    title="Ses Aç/Kapat"
                    style="background-color: #95a5a6; color: white; border: none;"> 
                    <i class="bi bi-volume-mute-fill"></i>
                </button>
    `;

    return content.replace(navRegex, `$1${buttonsHtml}`);
}

// Helper to inject JS logic
function injectJavascript(content) {
    // We will append this script before </body>
    // But we should check if we already have the script to avoid duplicates
    // We'll replace existing similar logic if found, or append.

    const scriptLogic = `
    <!-- Fullscreen & Audio Logic -->
    <script>
        // Fullscreen Toggle
        const btnFullscreen = document.getElementById('btn-fullscreen');
        if(btnFullscreen) {
            btnFullscreen.addEventListener('click', () => {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen().catch(e => console.log(e));
                    btnFullscreen.innerHTML = '<i class="bi bi-fullscreen-exit"></i>';
                } else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                        btnFullscreen.innerHTML = '<i class="bi bi-arrows-fullscreen"></i>';
                    }
                }
            });
        }

        // Audio Toggle
        const btnAudio = document.getElementById('btn-audio-toggle');
        let isAudioOn = false; // Default: False

        function updateAudioState() {
            if (isAudioOn) {
                // Turn ON - Active Color (Green)
                btnAudio.style.backgroundColor = '#28a745'; 
                btnAudio.innerHTML = '<i class="bi bi-volume-up-fill"></i>';
            } else {
                // Turn OFF - Inactive Color (Gray)
                btnAudio.style.backgroundColor = '#95a5a6';
                btnAudio.innerHTML = '<i class="bi bi-volume-mute-fill"></i>';
            }
            
            // Storyline Update
            try {
                var player = null;
                if (window.GetPlayer) player = window.GetPlayer();
                else if (window.parent && window.parent.GetPlayer) player = window.parent.GetPlayer();

                if (player) {
                    player.SetVar("bg_music", isAudioOn); // Variable: bg_music
                    console.log("Storyline variable 'bg_music' updated to: " + isAudioOn);
                }
            } catch (e) { console.error(e); }
        }

        if(btnAudio) {
            // Initial State
            updateAudioState();
            
            btnAudio.addEventListener('click', () => {
                isAudioOn = !isAudioOn;
                updateAudioState();
            });
        }
    </script>
    `;

    // Remove old injections if they exist to be safe (simple regex)
    // Looking for previous block: <!-- Fullscreen & Audio Logic --> ... </script>
    const oldRegex = /<!-- Fullscreen & Audio Logic -->[\s\S]*?<\/script>/;
    let newContent = content.replace(oldRegex, '');

    // Append new before body close
    return newContent.replace('</body>', `${scriptLogic}\n</body>`);
}

games.forEach(game => {
    const filePath = path.join(gamesDir, game, 'index.html');
    if (fs.existsSync(filePath)) {
        console.log(`Processing ${game}...`);
        let content = fs.readFileSync(filePath, 'utf8');

        content = injectButtonsHtml(content);
        content = injectJavascript(content);

        fs.writeFileSync(filePath, content, 'utf8');
    } else {
        console.warn(`Skipping ${game} (File not found)`);
    }
});
