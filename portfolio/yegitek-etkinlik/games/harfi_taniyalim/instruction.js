/**
 * Harfi Tanıyalım - Instruction Module
 * Independent "How to Play" logic.
 */
const HarfiInstruction = {
    overlayId: 'harfi-instruction-overlay',
    audioPath: '../../assets/audio/harfi_taniyalim_instruction.mp3',
    audio: null,
    isPlaying: false,
    timeouts: [],

    init: function () {
        if (document.getElementById(this.overlayId)) return;

        // PAUSE GAME
        if (typeof isPaused !== 'undefined') isPaused = true;
        if (typeof gameInterval !== 'undefined') clearInterval(gameInterval);

        this.createOverlay();
        this.setupAudio();
        this.show();
    },

    createOverlay: function () {
        const wrapper = document.querySelector('.game-board') || document.body;

        const overlay = document.createElement('div');
        overlay.id = this.overlayId;
        overlay.className = 'custom-modal-overlay';

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

        const demoCss = `
            .demo-stage-inst {
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
            .demo-bubble-inst {
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
            .demo-bubble-inst.popped {
                transform: scale(1.2);
                background: rgba(164, 209, 58, 0.9) !important;
                color: white;
                border-color: #fff;
            }
            .demo-cursor-inst {
                position: absolute;
                width: 40px;
                height: 40px;
                background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="%23000000"><path d="M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 6.407 31.141-12.5 31.141z"/></svg>') no-repeat center center;
                background-size: contain;
                z-index: 9999;
                filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.3));
                pointer-events: none;
                top: 110%; /* Start outside */
                left: 50%;
                transition: top 0.8s, left 0.8s;
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
                    <!-- Static Bubbles for Instruction -->
                    <div id="demo-bubble-1-inst" class="demo-bubble-inst" style="top: 200px; left: 100px;">A</div>
                    <div id="demo-bubble-2-inst" class="demo-bubble-inst" style="top: 150px; left: 260px;">E</div>
                    <div id="demo-bubble-3-inst" class="demo-bubble-inst" style="top: 220px; left: 420px;">e</div>
                    
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
        this.stopDemoAnimation();

        const cursor = document.getElementById('demo-cursor-inst');
        const b1 = document.getElementById('demo-bubble-1-inst'); // A
        const b2 = document.getElementById('demo-bubble-2-inst'); // E (Correct)
        const b3 = document.getElementById('demo-bubble-3-inst'); // e (Correct)

        if (!cursor || !b1 || !b2 || !b3) return;

        // Reset
        [b1, b2, b3].forEach(b => {
            b.classList.remove('popped');
            b.style.opacity = '1';
        });

        cursor.style.top = '110%';
        cursor.style.left = '50%';
        cursor.style.transition = 'none';
        void cursor.offsetWidth;
        cursor.style.transition = 'top 0.8s, left 0.8s';

        const sequence = async () => {
            if (!document.getElementById(this.overlayId)) return;

            const wait = ms => new Promise(res => {
                const id = setTimeout(res, ms);
                this.timeouts.push(id);
            });

            const moveCursorTo = (el, offsetX = 0, offsetY = 0) => {
                const rect = el.getBoundingClientRect();
                const container = document.querySelector('.demo-stage-inst');
                if (!container) return;
                const containerRect = container.getBoundingClientRect();

                const top = rect.top - containerRect.top + rect.height / 2;
                const left = rect.left - containerRect.left + rect.width / 2;

                cursor.style.top = (top + offsetY) + 'px';
                cursor.style.left = (left + offsetX) + 'px';
            };

            const clickEffect = () => {
                cursor.classList.add('demo-click-effect-inst');
                setTimeout(() => cursor.classList.remove('demo-click-effect-inst'), 150);
            };

            await wait(1000);

            // 1. Target E (Correct) - Bubble 2
            moveCursorTo(b2, 20, 0);
            await wait(1000); // reduced slightly from intro

            clickEffect();
            b2.classList.add('popped');
            await wait(800);

            // 2. Target e (Correct) - Bubble 3
            moveCursorTo(b3, 0, 0);
            await wait(1000);

            clickEffect();
            b3.classList.add('popped');
            await wait(800);

            // Hide
            cursor.style.opacity = '0';
            await wait(2000);
            cursor.style.opacity = '1';

            // Loop
            this.startDemoAnimation();
        };

        sequence();
    },

    stopDemoAnimation: function () {
        this.timeouts.forEach(id => clearTimeout(id));
        this.timeouts = [];
    }
};
