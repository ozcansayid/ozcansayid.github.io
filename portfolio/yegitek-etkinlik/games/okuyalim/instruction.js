/**
 * Okuyalım - Instruction Module
 * Independent "How to Play" logic.
 */
const OkuyalimInstruction = {
    overlayId: 'okuyalim-instruction-overlay',
    audioPath: '../../assets/audio/okuyalin_instruction.mp3',
    audio: null,
    isPlaying: false,
    animTimeouts: [],

    init: function () {
        if (document.getElementById(this.overlayId)) return;

        // PAUSE GAME
        if (typeof isPaused !== 'undefined') isPaused = true;

        this.createOverlay();
        this.setupAudio();
        this.show();
    },

    createOverlay: function () {
        const wrapper = document.querySelector('.game-container-fixed') || document.body;

        if (wrapper !== document.body && getComputedStyle(wrapper).position === 'static') {
            wrapper.style.position = 'relative';
        }

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
        overlay.style.justifyContent = 'center';

        const demoCss = `
            .demo-stage-inst {
                position: relative;
                width: 400px;
                height: 400px;
                background-color: transparent;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 2rem;
            }
            .demo-wheel-container-inst {
                position: relative;
                width: 300px;
                height: 300px;
            }
            .demo-wheel-inst {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                border: 8px solid #fff;
                box-shadow: 0 0 20px rgba(0,0,0,0.3);
                background: conic-gradient(
                    #FF9F1C 0deg 60deg,
                    #2EC4B6 60deg 120deg,
                    #E71D36 120deg 180deg,
                    #FF9F1C 180deg 240deg,
                    #2EC4B6 240deg 300deg,
                    #E71D36 300deg 360deg
                );
                transform: rotate(0deg);
                transition: transform 2s cubic-bezier(0.25, 0.1, 0.25, 1);
            }
            .demo-pointer-inst {
                position: absolute;
                top: 50%;
                right: -15px; /* Moved to right */
                left: auto;
                width: 30px;
                height: 40px;
                background: #ff512f;
                clip-path: polygon(0 50%, 100% 0, 100% 100%); /* Points Left towards center */
                transform: translateY(-50%);
                z-index: 10;
                filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3));
            }
            .demo-result-bubble-inst {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0);
                width: 120px;
                height: 120px;
                background: white;
                border-radius: 50%;
                border: 5px solid #2ec4b6;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2.5rem;
                font-weight: bold;
                color: #2ec4b6;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                opacity: 0;
                transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                z-index: 20;
            }
            .demo-result-bubble-inst.show {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
            .demo-hand-inst {
                position: absolute;
                bottom: -50px;
                left: 50%;
                width: 50px;
                height: 50px;
                background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23333" stroke="%23333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>') no-repeat center center;
                background-size: contain;
                z-index: 30;
                transform: translateX(-50%);
                transition: transform 0.2s;
                opacity: 0;
            }
        `;

        overlay.innerHTML = `
            <style>${demoCss}</style>
            <div class="intro-content text-center" style="max-width: 800px; width: 90%;">
                
                <h1 class="text-white mb-2 fw-bold" style="text-shadow: 0 4px 10px rgba(0,0,0,0.5); font-size: 3rem;">
                    Nasıl Oynanır?
                </h1>

                <!-- Demo Stage -->
                <div class="demo-stage-inst mx-auto">
                    <div class="demo-wheel-container-inst">
                        <div id="demo-wheel-inst" class="demo-wheel-inst"></div>
                        <div class="demo-pointer-inst"></div>
                        <div id="demo-result-inst" class="demo-result-bubble-inst">LA</div>
                        <div id="demo-hand-inst" class="demo-hand-inst"></div>
                    </div>
                </div>

                <div class="actions mt-2">
                    <button id="btn-continue-inst" style="
                        background: #2ec4b6;
                        color: white;
                        border: none;
                        padding: 1.5rem 4rem;
                        font-size: 2rem;
                        border-radius: 50px;
                        cursor: pointer;
                        font-weight: bold;
                        box-shadow: 0 10px 25px rgba(46, 196, 182, 0.4);
                        transition: transform 0.2s;
                    ">
                        DEVAM ET <i class="bi bi-caret-right-fill"></i>
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

        const wheel = document.getElementById('demo-wheel-inst');
        const result = document.getElementById('demo-result-inst');

        if (!wheel || !result) return;

        let rotation = 0;

        const loop = async () => {
            if (!document.getElementById(this.overlayId)) return;

            // Wait helper
            const wait = ms => new Promise(res => {
                const id = setTimeout(res, ms);
                this.animTimeouts.push(id);
            });

            // 1. Reset
            result.classList.remove('show');
            await wait(500);

            // 2. Spin
            rotation += 360 * 3 + Math.random() * 360;
            wheel.style.transition = 'transform 2s cubic-bezier(0.25, 0.1, 0.25, 1)';
            wheel.style.transform = `rotate(${rotation}deg)`;

            await wait(2000);

            // 3. Show Result
            const syllables = ['LA', 'LE', 'LI', 'LO', 'LU', 'KE', 'KA'];
            result.innerText = syllables[Math.floor(Math.random() * syllables.length)];
            result.classList.add('show');

            await wait(2000);

            // Loop
            if (document.getElementById(this.overlayId)) {
                loop();
            }
        };

        loop();
    },

    stopDemoAnimation: function () {
        this.animTimeouts.forEach(id => clearTimeout(id));
        this.animTimeouts = [];
    }
};
