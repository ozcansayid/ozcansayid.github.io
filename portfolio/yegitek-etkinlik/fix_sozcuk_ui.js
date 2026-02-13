const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'games', 'sozcuk_olusturalim', 'index.html');

if (fs.existsSync(targetFile)) {
    let content = fs.readFileSync(targetFile, 'utf8');

    // 1. Inject Buttons
    const buttonsHTML = `
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

    // Look for the Instruction button start
    const anchor = '<button class="btn btn-kid btn-info-kid btn-icon-only"';
    if (!content.includes('id="btn-fullscreen"') && content.includes(anchor)) {
        content = content.replace(anchor, buttonsHTML + '\n' + anchor);
        console.log('Injected buttons.');
    }

    // 2. Inject Script
    const scriptLogic = `
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
        // Check if variable exists from previous injection or default
        let isAudioOn = false; 

        function updateAudioState() {
            if (isAudioOn) {
                // Turn ON - Active Color (Green/Teal)
                btnAudio.style.backgroundColor = '#2ecc71'; 
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
                    player.SetVar("bg_audio", isAudioOn);
                }
            } catch (e) { console.error(e); }
        }

        if(btnAudio) {
            updateAudioState();
            btnAudio.addEventListener('click', () => {
                isAudioOn = !isAudioOn;
                updateAudioState();
            });
        }
    </script>
    `;

    if (!content.includes('const btnFullscreen')) {
        content = content.replace('</body>', scriptLogic + '\n</body>');
        console.log('Injected script.');
    }

    fs.writeFileSync(targetFile, content, 'utf8');
}
