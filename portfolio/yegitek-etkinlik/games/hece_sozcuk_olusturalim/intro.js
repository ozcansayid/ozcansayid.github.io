/**
 * Hece Sözcük Oluşturalım - Intro Overlay Manager
 * Handles the initial full-screen overlay with a drag-and-drop animation.
 */
const HeceSozcukIntro = {
    overlayId: 'hece-sozcuk-intro-overlay',
    audioPath: '../../assets/audio/devreyi_tamamla_instruction.mp3',
    audio: null,
    isPlaying: false,

    init: function () {
        console.log("HeceSozcukIntro: Initializing...");
        this.createOverlay();
        this.setupAudio();
        this.show();
    },

    createOverlay: function () {
        if (document.getElementById(this.overlayId)) return;

        const wrapper = document.querySelector('.game-board') || document.body;

        const overlay = document.createElement('div');
        overlay.id = this.overlayId;
        overlay.className = 'custom-modal-overlay';

        // Styles
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.9)';
        overlay.style.zIndex = '2000';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.flexDirection = 'column';
        overlay.style.borderRadius = '0';

        // Start hidden
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
        overlay.style.transition = 'all 0.5s ease';

        // --- Demo CSS ---
        const demoCss = `
            .demo-stage {
                position: relative;
                width: 600px;
                height: 400px;
                background-color: #f8f9fa;
                border-radius: 20px;
                border: 4px solid #fff;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                overflow: hidden;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .circuit-bg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 80%;
                opacity: 0.3;
                z-index: 1;
            }

            .demo-drop-zone {
                width: 120px;
                height: 60px;
                border: 3px dashed #ccc;
                border-radius: 10px;
                background-color: rgba(255,255,255,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 100px; /* Push down */
                position: relative;
                z-index: 2;
                transition: all 0.3s;
            }
            
            .demo-drop-zone.active {
                border-color: #ffd700;
                background-color: rgba(255, 215, 0, 0.2);
                box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
            }

            .demo-bulb {
                position: absolute;
                top: 40px;
                font-size: 4rem;
                color: #555;
                transition: color 0.3s, filter 0.3s;
                z-index: 2;
            }
            
            .demo-bulb.on {
                color: #ffeb3b;
                filter: drop-shadow(0 0 20px #ffeb3b);
                animation: bulbPulse 1s infinite alternate;
            }

            @keyframes bulbPulse {
                from { filter: drop-shadow(0 0 10px #ffeb3b); }
                to { filter: drop-shadow(0 0 30px #ffeb3b); }
            }

            .demo-draggable {
                width: 100px;
                height: 50px;
                background-color: #FF9F1C;
                color: white;
                font-size: 1.5rem;
                font-weight: bold;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 10;
                box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            }

            .demo-hand {
                position: absolute;
                width: 50px;
                height: 50px;
                /* Filled Mouse Cursor */
                background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23333" stroke="%23333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>') no-repeat center center;
                background-size: contain;
                pointer-events: none;
                z-index: 20;
                top: 300px;
                left: 320px;
                filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3));
                transition: transform 0.2s;
            }

            @keyframes demoDragAnim {
                0% { top: 300px; left: 320px; transform: scale(1); }
                20% { top: 300px; left: 320px; transform: scale(0.9); } /* Click */
                60% { top: 180px; left: 300px; transform: scale(0.9); } /* Drag to zone */
                80% { top: 180px; left: 300px; transform: scale(1); } /* Release */
                100% { top: 300px; left: 320px; transform: scale(1); } /* Reset */
            }
        `;

        overlay.innerHTML = `
            <style>${demoCss}</style>
            <div class="intro-content text-center" style="max-width: 800px; width: 90%;">
                
                <h1 class="text-white mb-3 fw-bold" style="text-shadow: 0 4px 10px rgba(0,0,0,0.5); font-size: 3rem;">
                    Nasıl Oynanır?
                </h1>

                <!-- Demo Stage -->
                <div class="demo-stage mb-4 mx-auto">
                    <!-- Bulb -->
                    <i id="demo-bulb" class="bi bi-lightbulb-fill demo-bulb"></i>
                    
                    <!-- Drop Zone -->
                    <div id="demo-zone" class="demo-drop-zone"></div>

                    <!-- Draggable -->
                    <div id="demo-item" class="demo-draggable">NE</div>

                    <!-- Fake Hand -->
                    <div id="demo-hand" class="demo-hand"></div>
                </div>

                <div class="actions mt-2">
                    <button id="btn-start-intro" class="btn btn-lg px-5 py-3 fw-bold shadow-lg" 
                        style="background-color: #95a5a6; color: white; border: none; font-size: 2rem; border-radius: 50px; min-width: 250px; transform: scale(1); transition: transform 0.2s; cursor: not-allowed;" 
                        disabled>
                        BAŞLA <i class="bi bi-play-fill"></i>
                    </button>
                </div>
            </div>
        `;

        wrapper.appendChild(overlay);

        // Bind Start Button
        const btn = document.getElementById('btn-start-intro');
        if (btn) {
            btn.onclick = () => this.hide();
        }
    },

    setupAudio: function () {
        this.audio = new Audio(this.audioPath);
        this.audio.loop = false;

        const btn = document.getElementById('btn-start-intro');

        this.audio.addEventListener('ended', () => {
            if (btn) {
                btn.disabled = false;
                btn.style.backgroundColor = '#2ec4b6';
                btn.style.cursor = 'pointer';
                btn.classList.add('pulse-animation');
            }
        });

        // Fallback
        setTimeout(() => {
            if (btn && btn.disabled) {
                btn.disabled = false;
                btn.style.backgroundColor = '#2ec4b6';
                btn.style.cursor = 'pointer';
            }
        }, 12000);
    },

    startDemoAnimation: function () {
        const hand = document.getElementById('demo-hand');
        const item = document.getElementById('demo-item');
        const zone = document.getElementById('demo-zone');
        const bulb = document.getElementById('demo-bulb');

        if (!hand || !item || !zone || !bulb) return;

        let tl = [
            // Step 1: Move to item
            { t: 0, x: 250, y: 300, scale: 1, itemX: 0, itemY: 0, zoneActive: false, bulbOn: false },
            // Step 2: Click item
            { t: 1000, x: 250, y: 300, scale: 0.8, itemX: 0, itemY: 0, zoneActive: false, bulbOn: false },
            // Step 3: Drag to zone
            { t: 2000, x: 250, y: 190, scale: 0.8, itemX: 0, itemY: -110, zoneActive: true, bulbOn: false },
            // Step 4: Release
            { t: 2500, x: 250, y: 190, scale: 1, itemX: 0, itemY: -110, zoneActive: false, bulbOn: true }, /* Item stays dropped */
            // Step 5: Wait & Reset
            { t: 4000, x: 320, y: 300, scale: 1, itemX: 0, itemY: 0, zoneActive: false, bulbOn: false }
        ];

        let index = 0;

        const animate = () => {
            if (!this.isPlaying) return;

            // Reset loop
            hand.style.transition = 'all 1s ease';
            item.style.transition = 'all 1s ease';

            // Logic to play through simplified timeline
            // Since JS animation loop is complex here without a library, simpler setInterval logic:
        };

        // Simpler Interval Approach
        this.animInterval = setInterval(() => {
            if (!document.getElementById(this.overlayId)) {
                clearInterval(this.animInterval);
                return;
            }

            // Phase 1: Move Hand to Item
            hand.style.transition = 'top 1s, left 1s, transform 0.2s';
            // Start Pos (relative to stage center mostly, using fixed pixels for simplicity in demo-stage)
            // demo-stage is flex, creating item relation is tricky.
            // Using absolute positioning in CSS for demo-hand.

            // Reset state
            item.style.transform = 'translateX(-50%)';
            item.style.top = '';
            item.style.bottom = '50px';
            zone.classList.remove('active');
            bulb.classList.remove('on');

            hand.style.top = '320px'; // Near item
            hand.style.left = '50%';
            hand.style.transform = 'translate(-50%, 0) scale(1)';

            setTimeout(() => {
                // Click
                hand.style.transform = 'translate(-50%, 0) scale(0.8)';

                setTimeout(() => {
                    // Drag Up
                    hand.style.top = '250px';
                    item.style.transition = 'bottom 1s';
                    item.style.bottom = '120px'; // Move up (Lowered to 120px)
                    zone.classList.add('active');

                    setTimeout(() => {
                        // Drop
                        hand.style.transform = 'translate(-50%, 0) scale(1)';
                        zone.classList.remove('active');
                        bulb.classList.add('on');

                        setTimeout(() => {
                            // Hand moves away
                            hand.style.top = '350px';
                            hand.style.left = '60%';
                        }, 500);

                    }, 1000);
                }, 500);
            }, 1000);

        }, 4000);

        // Trigger first run immediately
        // (Just relies on interval for simplicity, slight delay ok)
    },

    show: function () {
        const overlay = document.getElementById(this.overlayId);
        if (!overlay) return;

        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';

        // Reset Button
        const btn = document.getElementById('btn-start-intro');
        if (btn) {
            btn.disabled = true;
            btn.style.backgroundColor = '#95a5a6';
        }

        this.isPlaying = true;
        this.playAudio();
        this.startDemoAnimation();
    },

    hide: function () {
        const overlay = document.getElementById(this.overlayId);
        if (!overlay) return;

        this.stopAudio();
        if (this.animInterval) clearInterval(this.animInterval);

        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.visibility = 'hidden';
            if (window.startGame) window.startGame();
        }, 500);
    },

    playAudio: function () {
        if (this.audio) {
            this.audio.currentTime = 0;
            this.audio.play().catch(e => {
                console.warn("Auto-play prevented", e);
                const btn = document.getElementById('btn-start-intro');
                if (btn) {
                    btn.disabled = false;
                    btn.style.backgroundColor = '#2ec4b6';
                }
            });
            this.isPlaying = true;
        }
    },

    stopAudio: function () {
        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
            this.isPlaying = false;
        }
    },

    toggle: function () {
        const overlay = document.getElementById(this.overlayId);
        if (overlay && overlay.style.visibility === 'visible') {
            this.hide();
        } else {
            this.show();
        }
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => HeceSozcukIntro.init(), 100);
});
