/**
 * Harfi Yazalım - Intro Overlay Manager
 * Handles the initial full-screen overlay, audio instructions, and "How to Play" functionality.
 */
const HarfiYazalimIntro = {
    overlayId: 'harfi-yazalim-intro-overlay',
    audioPath: '../../assets/audio/harfi_yazalim_instruction.mp3',
    audio: null,
    isPlaying: false,

    init: function () {
        console.log("HarfiYazalimIntro: Initializing...");
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
                background: url('../../assets/img/harfi_yazalim_bg.jpg') no-repeat center center;
                background-size: cover;
                border: 4px solid #fff;
                border-radius: 20px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .demo-gif {
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
                <div class="demo-stage mb-4 mx-auto">
                    <img src="../../assets/img/e_yazim.gif" class="demo-gif" alt="Yazım Animasyonu">
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
    },

    hide: function () {
        const overlay = document.getElementById(this.overlayId);
        if (!overlay) return;

        this.stopAudio();

        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.visibility = 'hidden';
            // Trigger actual game if needed (not strictly needed here as game initializes in background)
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
    setTimeout(() => HarfiYazalimIntro.init(), 100);
});
