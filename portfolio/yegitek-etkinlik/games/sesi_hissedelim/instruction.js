/**
 * Sesi Hissedelim - Instruction Module
 * Independent "How to Play" logic.
 */
const SesiInstruction = {
    overlayId: 'sesi-instruction-overlay',
    audioPath: '../../assets/audio/sesi_hissedelim_talimat.mp3',
    audio: null,
    isPlaying: false,
    timeouts: [],

    init: function () {
        if (document.getElementById(this.overlayId)) return;

        // PAUSE GAME
        if (typeof isPaused !== 'undefined') isPaused = true;

        this.createOverlay();
        this.setupAudio();
        this.show();
    },

    createOverlay: function () {
        const wrapper = document.querySelector('.game-board-wrapper') || document.body;

        const overlay = document.createElement('div');
        overlay.id = this.overlayId;
        overlay.className = 'custom-modal-overlay';

        overlay.style.position = 'absolute';
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

        // Demo CSS
        const demoCss = `
            .demo-stage-inst {
                position: relative;
                width: 600px;
                height: 380px; 
                background: linear-gradient(to bottom, #f0f9ff, #cbebff);
                border-radius: 20px;
                border: 4px solid #4CC9F0;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                overflow: hidden;
            }
            .demo-cards-row-inst {
                display: flex;
                gap: 20px;
                margin-top: 20px;
            }
            .demo-card-wrapper-inst {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 120px;
            }
            .demo-card-inst {
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
                border: 3px solid transparent;
                transition: transform 0.2s, border-color 0.3s;
            }
            .demo-card-inst img {
                max-width: 70%;
                max-height: 70%;
                object-fit: contain;
            }
            .demo-card-inst.correct-reveal {
                border-color: #2ecc71;
                background-color: #e8f5e9;
                transform: scale(1.1);
            }
            .demo-checkbox-inst {
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
            }
            .demo-checkbox-inst.selected {
                background-color: #4CC9F0;
                border-color: #4CC9F0;
            }
            .demo-checkbox-inst i {
                color: white;
                font-size: 2rem;
                display: none;
                font-weight: bold;
            }
            .demo-checkbox-inst.selected i {
                display: block;
            }
            .demo-btn-check-inst {
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
            .demo-feedback-inst {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0);
                background: white;
                padding: 20px 40px;
                border-radius: 20px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                text-align: center;
                z-index: 100;
                opacity: 0;
                transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                pointer-events: none;
                color: #2ecc71;
            }
            .demo-feedback-inst.show {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
            .demo-cursor-inst {
                position: absolute;
                width: 40px;
                height: 40px;
                background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="%23000000"><path d="M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 6.407 31.141-12.5 31.141z"/></svg>') no-repeat center center;
                background-size: contain;
                z-index: 9999; 
                filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.3));
                transition: top 0.8s, left 0.8s;
                top: 110%; 
                left: 50%;
            }
            .demo-click-effect-inst {
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
                <div class="demo-stage-inst mb-4 mx-auto">
                    <div class="demo-cards-row-inst">
                        <!-- Card 1: Correct -->
                        <div class="demo-card-wrapper-inst">
                            <div id="demo-card-1-inst" class="demo-card-inst"><img src="../../assets/img/sesi_hissedelim_img_1_1.png" onerror="this.src='https://placehold.co/100?text=Elbise'"></div>
                            <div id="demo-check-1-inst" class="demo-checkbox-inst"><i class="bi bi-check-lg"></i></div>
                        </div>
                        <!-- Card 2: Correct -->
                        <div class="demo-card-wrapper-inst">
                            <div id="demo-card-2-inst" class="demo-card-inst"><img src="../../assets/img/sesi_hissedelim_img_1_2.png" onerror="this.src='https://placehold.co/100?text=Eşek'"></div>
                            <div id="demo-check-2-inst" class="demo-checkbox-inst"><i class="bi bi-check-lg"></i></div>
                        </div>
                        <!-- Card 3: Incorrect -->
                        <div class="demo-card-wrapper-inst">
                            <div id="demo-card-3-inst" class="demo-card-inst"><img src="../../assets/img/sesi_hissedelim_img_1_3.png" onerror="this.src='https://placehold.co/100?text=Mandalina'"></div>
                            <div id="demo-check-3-inst" class="demo-checkbox-inst"><i class="bi bi-check-lg"></i></div>
                        </div>
                    </div>

                    <button id="demo-btn-submit-inst" class="demo-btn-check-inst">KONTROL ET</button>

                    <!-- Feedback -->
                    <div id="demo-feedback-inst" class="demo-feedback-inst">
                        <i class="bi bi-star-fill text-warning" style="font-size: 3rem;"></i>
                        <h3 class="fw-bold mt-2">Tebrikler!</h3>
                    </div>

                    <div id="demo-cursor-inst" class="demo-cursor-inst"></div>
                </div>

                <div class="actions mt-2">
                    <button id="btn-continue-inst" class="btn btn-lg px-5 py-3 fw-bold shadow-lg" 
                        style="background-color: #2ec4b6; color: white; border: none; font-size: 2rem; border-radius: 50px; min-width: 250px; transform: scale(1); transition: transform 0.2s; cursor: pointer;">
                        DEVAM ET <i class="bi bi-play-fill"></i>
                    </button>
                </div>
            </div>
        `;

        wrapper.appendChild(overlay);

        document.getElementById('btn-continue-inst').addEventListener('click', () => {
            this.hide();
        });
    },

    setupAudio: function () {
        this.audio = new Audio(this.audioPath);
        this.audio.loop = false;
        this.audio.play().catch(e => {
            console.warn("Auto-play prevented", e);
        });
    },

    show: function () {
        const overlay = document.getElementById(this.overlayId);
        if (!overlay) return;
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';

        this.startDemoAnimation();
    },

    hide: function () {
        const overlay = document.getElementById(this.overlayId);
        if (!overlay) return;

        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
        }

        this.stopDemoAnimation();

        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.remove();
            // RESUME GAME
            if (typeof isPaused !== 'undefined') isPaused = false;
        }, 500);
    },

    startDemoAnimation: function () {
        this.stopDemoAnimation(); // Clear existing

        const cursor = document.getElementById('demo-cursor-inst');
        const card1 = document.getElementById('demo-card-1-inst');
        const check1 = document.getElementById('demo-check-1-inst');
        const card2 = document.getElementById('demo-card-2-inst');
        const check2 = document.getElementById('demo-check-2-inst');
        const btn = document.getElementById('demo-btn-submit-inst');
        const feedback = document.getElementById('demo-feedback-inst');

        if (!cursor || !card1 || !check1) return;

        // Reset UI
        document.querySelectorAll('.demo-checkbox-inst').forEach(c => {
            c.classList.remove('selected');
        });
        document.querySelectorAll('.demo-card-inst').forEach(c => c.classList.remove('correct-reveal'));
        feedback.classList.remove('show');

        // Reset Cursor
        cursor.style.transition = 'none';
        cursor.style.top = '110%';
        cursor.style.left = '50%';
        cursor.style.opacity = '1';
        void cursor.offsetWidth; // Force reflow
        cursor.style.transition = 'top 0.8s cubic-bezier(0.25, 1, 0.5, 1), left 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.1s';

        const sequence = async () => {
            if (!document.getElementById(this.overlayId)) return; // Stop if overlay removed

            // Helper for delays
            const wait = ms => new Promise(res => {
                const id = setTimeout(res, ms);
                this.timeouts.push(id);
            });

            // Helper to move cursor
            const moveCursorTo = (el, offsetX = 0, offsetY = 0) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const container = document.querySelector('.demo-stage-inst');
                if (!container) return;
                const containerRect = container.getBoundingClientRect();

                const centerX = rect.left - containerRect.left + rect.width / 2;
                const centerY = rect.top - containerRect.top + rect.height / 2;

                cursor.style.left = (centerX + offsetX) + 'px';
                cursor.style.top = (centerY + offsetY) + 'px';
            };

            const clickEffect = () => {
                cursor.classList.add('demo-click-effect-inst');
                setTimeout(() => cursor.classList.remove('demo-click-effect-inst'), 150);
            };

            await wait(1000);

            // --- ITEM 1 ---
            moveCursorTo(card1, 15, 55);
            await wait(1000);

            // Click Card
            clickEffect();
            card1.style.transform = 'scale(0.95)';
            setTimeout(() => card1.style.transform = 'scale(1)', 200);
            await wait(800);

            // Move to Checkbox
            moveCursorTo(check1, 5, 20);
            await wait(800);

            // Click Checkbox
            clickEffect();
            await wait(150);
            check1.classList.add('selected');
            await wait(600);


            // --- ITEM 2 ---
            // Move to Card 2
            moveCursorTo(card2, 15, 55);
            await wait(1000);

            // Click Card 2
            clickEffect();
            card2.style.transform = 'scale(0.95)';
            setTimeout(() => card2.style.transform = 'scale(1)', 200);
            await wait(800);

            // Move to Checkbox 2
            moveCursorTo(check2, 5, 20);
            await wait(800);

            // Click Checkbox
            clickEffect();
            await wait(150);
            check2.classList.add('selected');
            await wait(600);

            // --- SUBMIT ---
            moveCursorTo(btn, 0, 0);
            await wait(1000);
            clickEffect();
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => btn.style.transform = 'scale(1)', 200);
            await wait(300);

            // Show Feedback & Reveal
            card1.classList.add('correct-reveal');
            card2.classList.add('correct-reveal');
            feedback.classList.add('show');

            // Hide Cursor
            cursor.style.opacity = '0';

            // Loop delay
            await wait(3000);

            // Restart Loop
            this.startDemoAnimation();
        };

        sequence();
    },

    stopDemoAnimation: function () {
        this.timeouts.forEach(id => clearTimeout(id));
        this.timeouts = [];
    }
};
