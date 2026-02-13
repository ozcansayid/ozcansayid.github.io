/**
 * Harfi Tanıyalım - Intro Overlay Manager
 * Handles the initial full-screen overlay, audio instructions, and "How to Play" functionality.
 */
const HarfiIntro = {
    overlayId: 'harfi-intro-overlay',
    audioPath: '../../assets/audio/harfi_taniyalim_instruction.mp3',
    audio: null,
    isPlaying: false,
    timeouts: [],

    init: function () {
        console.log("HarfiIntro: Initializing...");
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
                height: 380px;
                background: url('../../assets/img/harfi_taniyalim_bg.jpg') no-repeat center center;
                background-size: cover;
                border-radius: 20px;
                border: 4px solid #fff;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                overflow: hidden;
            }
            .demo-bubble {
                position: absolute;
                width: 80px;
                height: 80px;
                background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.5));
                border: 2px solid rgba(255, 255, 255, 0.6);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2.5rem;
                font-weight: bold;
                color: #1e3a8a;
                box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.3);
                transition: transform 0.3s, background-color 0.3s;
            }
            .demo-bubble.popped {
                transform: scale(1.2);
                background: rgba(164, 209, 58, 0.9) !important;
                color: white;
                border-color: #fff;
            }
            .demo-bubble.wrong {
                animation: shake 0.5s;
                background: rgba(255, 77, 109, 0.9) !important;
            }
            @keyframes shake {
                0% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                50% { transform: translateX(5px); }
                75% { transform: translateX(-5px); }
                100% { transform: translateX(0); }
            }

            .demo-cursor {
                position: absolute;
                width: 40px;
                height: 40px;
                background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="%23000000"><path d="M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 6.407 31.141-12.5 31.141z"/></svg>') no-repeat center center;
                background-size: contain;
                z-index: 9999;
                filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.3));
                transition: top 0.8s, left 0.8s;
                pointer-events: none;
                top: 110%;
                left: 50%;
            }
            .demo-click-effect {
                transform: scale(0.8);
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
                    <!-- Bubbles -->
                    <div id="demo-bubble-1" class="demo-bubble" style="top: 200px; left: 100px;">A</div>
                    <div id="demo-bubble-2" class="demo-bubble" style="top: 150px; left: 260px;">E</div>
                    <div id="demo-bubble-3" class="demo-bubble" style="top: 220px; left: 420px;">e</div>
                    
                    <!-- Fake Cursor -->
                    <div id="demo-cursor" class="demo-cursor"></div>
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

        this.playAudio();
        this.startDemoAnimation();
    },

    hide: function () {
        const overlay = document.getElementById(this.overlayId);
        if (!overlay) return;

        // Stop Instruction
        this.stopAudio();

        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.visibility = 'hidden';
            this.stopDemoAnimation();

            // Trigger actual game start if needed
            if (typeof startGame === 'function') {
                startGame(); // existing function in index.html to init game
            }
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
    },

    // --- Demo Animation ---

    startDemoAnimation: function () {
        this.stopDemoAnimation();

        const cursor = document.getElementById('demo-cursor');
        const b1 = document.getElementById('demo-bubble-1'); // A (Wrong)
        const b2 = document.getElementById('demo-bubble-2'); // E (Correct)
        const b3 = document.getElementById('demo-bubble-3'); // e (Correct)

        if (!cursor || !b1 || !b2 || !b3) return;

        // Reset
        [b1, b2, b3].forEach(b => {
            b.classList.remove('popped', 'wrong');
            b.style.opacity = '1';
        });

        cursor.style.top = '110%';
        cursor.style.left = '50%';
        cursor.style.transition = 'none';
        void cursor.offsetWidth;
        cursor.style.transition = 'top 0.8s, left 0.8s';

        const sequence = async () => {
            if (document.getElementById(this.overlayId).style.visibility === 'hidden') return;

            const wait = ms => new Promise(res => {
                const id = setTimeout(res, ms);
                this.timeouts.push(id);
            });

            const moveCursorTo = (el, offsetX = 0, offsetY = 0) => {
                const rect = el.getBoundingClientRect();
                const container = document.querySelector('.demo-stage');
                if (!container) return;
                const containerRect = container.getBoundingClientRect();

                // Center + offset logic
                // For bubbles, perfectly centered is fine
                const top = rect.top - containerRect.top + rect.height / 2;
                const left = rect.left - containerRect.left + rect.width / 2;

                cursor.style.top = (top + offsetY) + 'px';
                cursor.style.left = (left + offsetX) + 'px';
            };

            const clickEffect = () => {
                cursor.classList.add('demo-click-effect');
                setTimeout(() => cursor.classList.remove('demo-click-effect'), 150);
            };

            await wait(1000);

            // 1. Target E (Correct)
            // Shift right (+20px)
            moveCursorTo(b2, 20, 0);
            await wait(1000);
            clickEffect();
            b2.classList.add('popped');
            await wait(800);

            // 2. Target A (Wrong - just hover or skip?)
            // Let's show clicking e (Correct) next to reinforce "E/e"
            moveCursorTo(b3, 20, 0);
            await wait(1000);
            clickEffect();
            b3.classList.add('popped');
            await wait(800);

            // 3. Ignore A (Maybe move towards it then move away?)
            // Or just loop. Simple is better.

            // Hide Cursor
            cursor.style.opacity = '0';
            await wait(2000);

            // Reset
            cursor.style.opacity = '1';
            this.startDemoAnimation();
        };

        sequence();
    },

    stopDemoAnimation: function () {
        this.timeouts.forEach(id => clearTimeout(id));
        this.timeouts = [];
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Delay slightly to ensure fonts/layout
    setTimeout(() => HarfiIntro.init(), 100);
});
