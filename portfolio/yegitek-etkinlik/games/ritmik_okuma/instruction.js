/**
 * Ritmik Okuma - Instruction Module
 */
const RitmikOkumaInstruction = {
    overlayId: 'ritmik-instruction-overlay',
    audioPath: '../../assets/audio/ritmik_okuma_instruction.mp3',
    audio: null,
    isPlaying: false,
    animTimeouts: [],

    init: function () {
        if (document.getElementById(this.overlayId)) return;

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
        overlay.style.flexDirection = 'column';

        const demoCss = `
            .demo-word-box-inst {
                background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
                border: 4px solid #fff;
                border-radius: 20px;
                width: 120px;
                height: 120px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
                font-weight: 700;
                color: #333;
                box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
                transition: all 0.3s;
            }
            .demo-word-box-inst.active {
                background: #FFD166;
                color: white;
                transform: scale(1.1);
                box-shadow: 0 0 20px rgba(255, 209, 102, 0.6);
                border-color: #FFD166;
            }
        `;

        overlay.innerHTML = `
            <style>${demoCss}</style>
            <div class="intro-content text-center" style="max-width: 800px; width: 90%;">
                
                <h1 class="text-white mb-2 fw-bold" style="text-shadow: 0 4px 10px rgba(0,0,0,0.5); font-size: 3rem;">
                    Nasıl Oynanır?
                </h1>

                <!-- Demo Stage -->
                <div class="d-flex justify-content-center gap-3 mb-5" id="demo-container-inst">
                    <div class="demo-word-box-inst" id="demo-box-1">NA</div>
                    <div class="demo-word-box-inst" id="demo-box-2">NA</div>
                    <div class="demo-word-box-inst" id="demo-box-3">NA</div>
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
            console.warn("Auto-play prevented");
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
            if (typeof isPaused !== 'undefined') isPaused = false;
        }, 500);
    },

    startDemoAnimation: function () {
        this.stopDemoAnimation();

        const boxes = [
            document.getElementById('demo-box-1'),
            document.getElementById('demo-box-2'),
            document.getElementById('demo-box-3')
        ];

        const loop = async () => {
            if (!document.getElementById(this.overlayId)) return;

            const wait = ms => new Promise(res => {
                const id = setTimeout(res, ms);
                this.animTimeouts.push(id);
            });

            // Reset
            boxes.forEach(b => b.classList.remove('active'));
            await wait(500);

            // Sequence
            for (let i = 0; i < boxes.length; i++) {
                if (!document.getElementById(this.overlayId)) return;
                boxes[i].classList.add('active');
                await wait(600);
                boxes[i].classList.remove('active');
                await wait(200);
            }

            await wait(1000);

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
