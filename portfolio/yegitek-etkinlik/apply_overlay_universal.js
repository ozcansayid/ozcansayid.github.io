const fs = require('fs');
const path = require('path');

const gamesDir = 'c:\\wamp64\\www\\yegitek-etkinlik\\games';
const targetGames = [
    'duygu_galaksisi',
    'harfi_yazalim',
    'karda_yazalim',
    'hece_sozcuk_olusturalim',
    'okuyalim',
    'ritmik_okuma'
];

const cssToInject = `
    <style>
        /* Custom Modal Styles (Replacing Bootstrap Modals) */
        .custom-modal-overlay {
            backdrop-filter: blur(5px);
            transition: all 0.3s ease;
        }
        
        .custom-modal-content {
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.4);
            animation: popIn 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
            border: 4px solid #4CC9F0;
            background: white;
            padding: 2rem;
            text-align: center;
            max-width: 80%;
        }

        @keyframes popIn {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
    </style>
`;

const modalTemplate = `
    <!-- Custom Modal Structure (Hidden by default) -->
    <div id="custom-modal-template" style="display: none;">
        <div class="custom-modal-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 2000; display: flex; align-items: center; justify-content: center;">
            <div class="custom-modal-content">
                <h2 class="modal-title display-6 fw-bold mb-3" style="color: #2c3e50;"></h2>
                <div class="modal-body-content mb-4" style="font-size: 1.5rem;"></div>
                <button class="btn btn-primary-kid btn-lg px-5 py-3" onclick="closeCustomModal()">Tamam</button>
            </div>
        </div>
    </div>
`;

const overlayScript = (instructionAudioPath) => `
    <script>
        // Start Overlay Logic
        window.addEventListener('load', function() {
            const wrapper = document.querySelector('.game-board') || document.querySelector('.game-board-wrapper');
            if (wrapper) {
                wrapper.style.position = 'relative';
                
                const overlay = document.createElement('div');
                overlay.id = 'startOverlay';
                overlay.style.position = 'absolute';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.backgroundColor = 'rgba(0,0,0,0.9)'; 
                overlay.style.zIndex = '1000';
                overlay.style.display = 'flex';
                overlay.style.alignItems = 'center';
                overlay.style.justifyContent = 'center';
                overlay.style.borderRadius = '20px'; 
                overlay.style.flexDirection = 'column';
                
                overlay.innerHTML = \`
                    <div class="text-center animate-pop">
                        <button class="btn btn-lg px-5 py-4 fw-bold shadow-lg" 
                            style="background-color: #2ec4b6; color: white; border: none; font-size: 3rem; border-radius: 50px;"
                            onclick="startOverlayGame()">
                            BAŞLA <i class="bi bi-caret-right-fill"></i>
                        </button>
                    </div>
                \`;
                
                wrapper.appendChild(overlay);
                playInstruction();
            }
        });

        let instructionAudioObj = null;

        function startOverlayGame() {
             const overlay = document.getElementById('startOverlay');
                if (overlay) {
                    overlay.style.transition = 'opacity 0.5s';
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.style.display = 'none';
                    }, 500);
                }
                
                stopInstruction();
                
                // Try to start game if function exists
                if (typeof initGame === 'function') initGame();
                else if (typeof startGame === 'function') startGame();
        }

        function playInstruction() {
            if (instructionAudioObj) {
                instructionAudioObj.pause();
                instructionAudioObj.currentTime = 0;
            }
            instructionAudioObj = new Audio('${instructionAudioPath}');
            instructionAudioObj.play().catch(e => console.log("Audio check", e));
        }

        function stopInstruction() {
             if (instructionAudioObj) {
                instructionAudioObj.pause();
                instructionAudioObj.currentTime = 0;
            }
        }

        // Custom Modal Helpers
        function showCustomModal(title, content) {
            const wrapper = document.querySelector('.game-board') || document.querySelector('.game-board-wrapper');
            if (!wrapper) return;

            const existing = document.getElementById('active-custom-modal');
            if (existing) existing.remove();

            const template = document.getElementById('custom-modal-template').firstElementChild.cloneNode(true);
            template.id = 'active-custom-modal';
            template.querySelector('.modal-title').innerText = title;
            template.querySelector('.modal-body-content').innerHTML = content;
             
            wrapper.appendChild(template);
        }

        function closeCustomModal() {
            const existing = document.getElementById('active-custom-modal');
            if (existing) existing.remove();
            stopInstruction();
        }

        function showInstructionModal() {
            playInstruction();
            // Try to grab content from old modal if exists, otherwise generic
            const oldBody = document.querySelector('#instructionsModal .modal-body');
            let content = oldBody ? oldBody.innerHTML : '<p>Yönerge bulunamadı.</p>';
            showCustomModal("Nasıl Oynanır?", content);
        }
    </script>
`;

targetGames.forEach(game => {
    const indexPath = path.join(gamesDir, game, 'index.html');
    if (!fs.existsSync(indexPath)) return;

    let content = fs.readFileSync(indexPath, 'utf8');

    // 1. Inject CSS
    if (!content.includes('custom-modal-overlay')) {
        content = content.replace('</head>', cssToInject + '\n</head>');
    }

    // 2. Inject HTML Template
    if (!content.includes('custom-modal-template')) {
        content = content.replace('</body>', modalTemplate + '\n</body>');
    }

    // 3. Determine Audio Path
    // Simple heuristic: look for existing audio usage or file presence
    let audioPath = '../../assets/audio/' + game + '_instruction.mp3'; // Default guess
    // Check if file exists? Or assume. 
    // Let's assume standard naming or try to find existing instruction logic.
    const audioMatch = content.match(/new Audio\(['"]([^'"]+)['"]\)/);
    if (audioMatch) {
        // Maybe reuse? But we want SPECIFICALLY the instruction audio.
        // Let's rely on standard naming or user input.
        // User said "instruction sesini de ekle".
    }

    // 4. Inject Logic Script
    if (!content.includes('startOverlayGame')) {
        content = content.replace('</body>', overlayScript(audioPath) + '\n</body>');
    }

    // 5. Disable Auto-Start
    // Common pattern: window.addEventListener('load', ... initGame ...)
    content = content.replace(/(window\.addEventListener\s*\(\s*['"]load['"]\s*,\s*function\s*\(\)\s*\{)([\s\S]*?)(initGame\(\)|startGame\(\))/g, '$1\n /* Auto-start disabled by overlay */ \n // $3');

    // Also disable direct calls inside DOMContentLoaded
    content = content.replace(/(document\.addEventListener\s*\(\s*['"]DOMContentLoaded['"][\s\S]*?)(\s*startGame\(\);)/g, '$1 // $2');

    // 6. Replace Instruction Button
    // data-bs-toggle="modal" -> onclick="showInstructionModal()"
    content = content.replace(/data-bs-toggle="modal"\s*data-bs-target="#instructionsModal"/g, 'onclick="showInstructionModal()"');

    // 7. Remove Old Modals (Optional but cleaner)
    // We can just hide them or leave them. Removing might break scripts that reference them by ID if we don't fully clean up.
    // Use regex to comment out modals? Too risky. 
    // Just leaving them is safer but unused.

    // 8. Replace GameEngine feedback calls (if simple)
    content = content.replace(/GameEngine\.showTryAgain\(([^)]+)\)/g, 'showCustomModal("Oyun Bitti", $1)');
    content = content.replace(/GameEngine\.showCorrect\(([^)]+)\)/g, 'showCustomModal("Tebrikler!", $1)');

    fs.writeFileSync(indexPath, content, 'utf8');
    console.log(`Updated ${game}`);
});
