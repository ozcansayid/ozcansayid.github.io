/**
 * Karda Yazalım - Instruction Module
 * Independent "How to Play" logic.
 */
const KardaYazalimInstruction = {
    overlayId: 'karda-yazalim-instruction-overlay',
    // Using same audio as intro (Harfi Yazalim instruction)
    audioPath: '../../assets/audio/harfi_yazalim_instruction.mp3',
    audio: null,
    isPlaying: false,

    init: function () {
        if (document.getElementById(this.overlayId)) return;

        // PAUSE GAME
        if (typeof isPaused !== 'undefined') isPaused = true;

        this.createOverlay();
        this.setupAudio();
        this.show();
    },

    createOverlay: function () {
        const wrapper = document.querySelector('.game-board') || document.querySelector('.game-board-wrapper') || document.body;

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
                background: url('../../assets/img/karda_yazi_bg.jpg') no-repeat center center;
                background-size: cover;
                border: 4px solid #fff;
                border-radius: 20px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .demo-gif-inst {
                max-width: 90%;
                max-height: 90%;
                border-radius: 15px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
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
                    <img id="demo-gif-inst" src="../../assets/img/e_yazim.gif" class="demo-gif-inst" alt="Yazım Animasyonu">
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

        this.resetGif();
    },

    hide: function () {
        const overlay = document.getElementById(this.overlayId);
        if (!overlay) return;

        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
        }

        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.remove();

            // RESUME GAME
            if (typeof isPaused !== 'undefined') isPaused = false;
        }, 500);
    },

    resetGif: function () {
        const img = document.getElementById('demo-gif-inst');
        if (img) {
            const src = img.src;
            img.src = '';
            img.src = src; // Reload gif
        }
    }
};
