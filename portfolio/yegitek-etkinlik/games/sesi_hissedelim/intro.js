/**
 * Sesi Hissedelim - Intro Overlay Manager
 * Handles the initial full-screen overlay, audio instructions, and "How to Play" functionality.
 */
const SesiIntro = {
    overlayId: 'sesi-intro-overlay',
    audioPath: '../../assets/audio/sesi_hissedelim_talimat.mp3',
    audio: null,
    isPlaying: false,
    animationInterval: null,
    timeouts: [],

    init: function () {
        console.log("SesiIntro: Initializing...");
        this.createOverlay();
        this.setupAudio();

        // Auto-show on load
        this.show();
    },

    createOverlay: function () {
        if (document.getElementById(this.overlayId)) return;

        const wrapper = document.querySelector('.game-board-wrapper') || document.body;

        const overlay = document.createElement('div');
        overlay.id = this.overlayId;
        overlay.className = 'custom-modal-overlay';

        // Styles are inline to be self-contained, but use classes where possible
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.9)'; // Darker
        overlay.style.zIndex = '2000';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.flexDirection = 'column';
        overlay.style.borderRadius = '0'; // No radius

        // Start hidden
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
        overlay.style.transition = 'all 0.5s ease';

        // --- Demo CSS ---
        const demoCss = `
            .demo-stage {
                position: relative;
                width: 600px;
                height: 380px; /* Increased height */
                background: linear-gradient(to bottom, #f0f9ff, #cbebff);
                border-radius: 20px;
                border: 4px solid #4CC9F0;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                overflow: hidden; /* Clips cursor if outside */
            }
            .demo-cards-row {
                display: flex;
                gap: 20px;
                margin-top: 20px;
            }
            .demo-card-wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 120px;
            }
            .demo-card {
                width: 100px;
                height: 100px;
                background: white;
                border-radius: 15px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: relative;
                transition: transform 0.2s;
                border: 3px solid transparent;
                cursor: pointer;
            }
            .demo-card img {
                max-width: 70%;
                max-height: 70%;
                object-fit: contain;
            }
            /* Checkbox */
            .demo-checkbox {
                width: 40px;
                height: 40px;
                background: white;
                border: 2px solid #ddd;
                border-radius: 8px;
                margin-top: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.2s;
            }
            .demo-checkbox.selected {
                background-color: #4CC9F0 !important;
                border-color: #4CC9F0 !important;
            }
            .demo-checkbox i {
                color: white;
                font-size: 2rem;
                display: none;
                font-weight: bold;
            }
            .demo-checkbox.selected i {
                display: block;
                animation: popInCheck 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
            }
            @keyframes popInCheck {
                0% { transform: scale(0); }
                100% { transform: scale(1); }
            }
            
            /* Reveal Styles */
            .demo-card.correct-reveal {
                border-color: #2ecc71 !important;
                background-color: #e8f5e9 !important;
            }
            
            .demo-btn-check {
                margin-top: 30px;
                padding: 10px 40px;
                background: #ff9f1c;
                color: white;
                border: none;
                border-radius: 50px;
                font-size: 1.2rem;
                font-weight: bold;
                box-shadow: 0 4px 10px rgba(255, 159, 28, 0.3);
                transition: transform 0.1s;
            }
            .demo-btn-check:active {
                transform: scale(0.95);
            }

            .demo-cursor {
                position: absolute;
                width: 40px;
                height: 40px;
                background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="%23000000"><path d="M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 6.407 31.141-12.5 31.141z"/></svg>') no-repeat center center;
                background-size: contain;
                z-index: 9999; /* Ensure visible */
                margin-top: 0; 
                margin-left: 0;
                filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.3));
                transition: top 0.8s cubic-bezier(0.25, 1, 0.5, 1), left 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.1s;
                top: 110%; 
                left: 50%;
                pointer-events: none;
            }
            .demo-click-effect {
                transform: scale(0.8);
            }
            
            /* Audio Wave Removed */

            .demo-feedback-modal {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0);
                background: white;
                padding: 20px 40px;
                border-radius: 20px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                border: 4px solid #2ecc71;
                text-align: center;
                z-index: 100;
                transition: transform 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
            }
            .demo-feedback-modal.show {
                transform: translate(-50%, -50%) scale(1);
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
                    <!-- Cards -->
                    <div class="demo-cards-row">
                        <!-- Card 1 (Elbise - Correct) -->
                        <div class="demo-card-wrapper">
                            <div class="demo-card" id="demo-card-1">
                                <img src="../../assets/img/sesi_hissedelim_img_1_1.png" onerror="this.src='https://placehold.co/100?text=Elbise'">
                            </div>
                            <div class="demo-checkbox" id="demo-check-1">
                                <i class="bi bi-check-lg"></i>
                            </div>
                        </div>

                        <!-- Card 2 (Eşek - Correct) -->
                        <div class="demo-card-wrapper">
                            <div class="demo-card" id="demo-card-2">
                                <img src="../../assets/img/sesi_hissedelim_img_1_2.png" onerror="this.src='https://placehold.co/100?text=Eşek'">
                            </div>
                            <div class="demo-checkbox" id="demo-check-2">
                                <i class="bi bi-check-lg"></i>
                            </div>
                        </div>

                        <!-- Card 3 (Mandalina - Wrong) -->
                        <div class="demo-card-wrapper">
                            <div class="demo-card" id="demo-card-3">
                                <img src="../../assets/img/sesi_hissedelim_img_1_3.png" onerror="this.src='https://placehold.co/100?text=Mandalina'">
                            </div>
                            <div class="demo-checkbox" id="demo-check-3">
                                <i class="bi bi-check-lg"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Button -->
                    <button id="demo-btn-submit" class="demo-btn-check">KONTROL ET</button>

                    <!-- Feedback Modal -->
                    <div id="demo-feedback" class="demo-feedback-modal">
                        <i class="bi bi-star-fill text-warning" style="font-size: 3rem;"></i>
                        <h3 class="fw-bold mt-2">Tebrikler!</h3>
                    </div>

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
        this.audio.onerror = (e) => console.warn("SesiIntro: Audio file not found", e);

        const btn = document.getElementById('btn-start-intro');

        this.audio.addEventListener('ended', () => {
            if (btn) {
                btn.disabled = false;
                btn.style.backgroundColor = '#2ec4b6';
                btn.style.cursor = 'pointer';
                btn.classList.add('pulse-animation');
            }
        });

        // Fallback in case audio fails or is too long for preview context
        setTimeout(() => {
            if (btn && btn.disabled) {
                btn.disabled = false;
                btn.style.backgroundColor = '#2ec4b6';
                btn.style.cursor = 'pointer';
            }
        }, 12000); // 12s fallback
    },

    show: function () {
        const overlay = document.getElementById(this.overlayId);
        if (!overlay) return;

        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';

        // Reset Button State if showing again
        const btn = document.getElementById('btn-start-intro');
        if (btn) {
            // Only disable if we are actually playing audio from start
            // For "How to Play" toggle, maybe we don't want to force wait? 
            // The user request said "girişte" (at entry).
            // But let's act safe: if audio plays, button waits.
            btn.disabled = true;
            btn.style.backgroundColor = '#95a5a6';
        }

        this.playAudio();
        this.startDemoAnimation();
    },

    hide: function () {
        const overlay = document.getElementById(this.overlayId);
        if (!overlay) return;

        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.visibility = 'hidden';
            this.stopDemoAnimation(); // Stop visuals
        }, 500);

        this.stopAudio();
    },

    playAudio: function () {
        if (this.audio) {
            this.audio.currentTime = 0;
            this.audio.play().catch(e => {
                console.log("Auto-play prevented (user interaction needed)", e);
                // If blocked, enable button
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

    // --- Demo Animation Logic ---

    startDemoAnimation: function () {
        this.stopDemoAnimation(); // Clear existing

        const cursor = document.getElementById('demo-cursor');
        const card1 = document.getElementById('demo-card-1');
        const check1 = document.getElementById('demo-check-1');
        const card2 = document.getElementById('demo-card-2');
        const check2 = document.getElementById('demo-check-2');
        const btn = document.getElementById('demo-btn-submit');
        const feedback = document.getElementById('demo-feedback');

        if (!cursor || !card1 || !check1) return;

        // Reset UI
        document.querySelectorAll('.demo-checkbox').forEach(c => {
            c.classList.remove('selected');
            c.style.backgroundColor = 'white';
        });
        document.querySelectorAll('.demo-card').forEach(c => c.classList.remove('correct-reveal'));
        feedback.classList.remove('show');

        cursor.style.transition = 'none';
        cursor.style.top = '110%';
        cursor.style.left = '50%';
        // Force reflow
        void cursor.offsetWidth;
        cursor.style.transition = 'top 0.8s cubic-bezier(0.25, 1, 0.5, 1), left 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.1s';

        const sequence = async () => {
            if (document.getElementById(this.overlayId).style.visibility === 'hidden') return;

            // Helper for delays
            const wait = ms => new Promise(res => {
                const id = setTimeout(res, ms);
                this.timeouts.push(id);
            });

            // Helper to move cursor with precise calibration
            const moveCursorTo = (el, offsetX = 0, offsetY = 0) => {
                if (!el) return; // Added check for el
                const rect = el.getBoundingClientRect();
                const container = document.querySelector('.demo-stage');
                if (!container) return;
                const containerRect = container.getBoundingClientRect();

                // Calculate center relative to container
                const centerX = rect.left - containerRect.left + rect.width / 2;
                const centerY = rect.top - containerRect.top + rect.height / 2;

                // Adjust for cursor hotspot (Top-Left of image is pointer tip)
                // We want Top-Left of cursor div to be at (centerX, centerY) + offsets
                cursor.style.left = (centerX + offsetX) + 'px';
                cursor.style.top = (centerY + offsetY) + 'px';
            };

            const clickEffect = () => {
                cursor.classList.add('demo-click-effect');
                setTimeout(() => cursor.classList.remove('demo-click-effect'), 150);
            };

            await wait(1000);

            // --- ITEM 1 ---
            // 1. Move to Card 1 (Image)
            // Offset slightly to lower-right (15, 55) - User requested even lower
            moveCursorTo(card1, 15, 55);
            await wait(1000);

            // 2. Click Card (Audio Play)
            clickEffect();
            card1.style.transform = 'scale(0.95)';
            setTimeout(() => card1.style.transform = 'scale(1)', 200);
            await wait(800); // Listen

            // 3. Move to Checkbox 1
            // User requested calibration.
            moveCursorTo(check1, 5, 20);
            await wait(800);

            // 4. Click Checkbox (Select)
            clickEffect();
            // Wait for click effect to finish partially before selecting
            await wait(150);
            check1.classList.add('selected');
            await wait(600);


            // --- ITEM 2 ---
            // 5. Move to Card 2
            moveCursorTo(card2, 15, 55);
            await wait(1000);

            // 6. Click Card 2 (Audio)
            clickEffect();
            card2.style.transform = 'scale(0.95)';
            setTimeout(() => card2.style.transform = 'scale(1)', 200);
            await wait(800);

            // 7. Move to Checkbox 2
            moveCursorTo(check2, 5, 20);
            await wait(800);

            // 8. Click Checkbox
            clickEffect();
            await wait(150);
            check2.classList.add('selected');
            await wait(600);

            // --- SUBMIT ---
            // 9. Move to Button
            moveCursorTo(btn, 0, 0);
            await wait(1000);
            clickEffect();
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => btn.style.transform = 'scale(1)', 200);
            await wait(300);

            // 10. Show Feedback & Reveal
            card1.classList.add('correct-reveal');
            card2.classList.add('correct-reveal');
            feedback.classList.add('show');

            // Hide Cursor
            cursor.style.opacity = '0';

            // Loop delay
            await wait(3000);

            // Reset for loop
            feedback.classList.remove('show');
            card1.classList.remove('correct-reveal');
            card2.classList.remove('correct-reveal');
            check1.classList.remove('selected');
            check2.classList.remove('selected');

            cursor.style.opacity = '1';
            this.startDemoAnimation(); // Loop
        };

        sequence();
    },

    stopDemoAnimation: function () {
        this.timeouts.forEach(id => clearTimeout(id));
        this.timeouts = [];
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => SesiIntro.init(), 100);
});
