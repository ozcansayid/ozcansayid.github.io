/**
 * Harf Yazalim - Intro Overlay Manager
 */
window.HarfYazalimIntro = {
    overlayId: 'harf-yazalim-intro-overlay',
    audio: null,
    isPlaying: false,
    isHidden: false,
    data: null,

    init: function (gameData) {
        if (!gameData) return;
        this.data = gameData;
        this.createOverlay();
        this.setupAudio();
        this.show();
    },

    createOverlay: function () {
        if (document.getElementById(this.overlayId)) return;

        const wrapper = document.querySelector('.game-container-fixed') || document.body;
        const overlay = document.createElement('div');
        overlay.id = this.overlayId;
        overlay.className = 'custom-modal-overlay';

        // Styles
        Object.assign(overlay.style, {
            position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.9)', zIndex: '2000', display: 'flex',
            alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
            opacity: '0', visibility: 'hidden', transition: 'all 0.5s ease'
        });

        const assetsBase = window.ASSETS_PATH || '../../assets/';
        const bgPath = `${assetsBase}img/${this.data.folderPrefix}/${this.data.background || 'bg.jpg'}`;
        
        const writingGif = (this.data.images && this.data.images.writing) || (this.data.charUpper ? this.data.charUpper.split('_')[0] + '_yazim.gif' : 'yazim.gif');
        const gifPath = `${assetsBase}img/${this.data.folderPrefix}/${writingGif}`;

        const demoCss = `
            .demo-stage {
                position: relative; width: 600px; height: 380px;
                background: url('${bgPath}') no-repeat center center;
                background-size: cover; border: 4px solid #fff;
                border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                overflow: hidden; display: flex; align-items: center; justify-content: center;
            }
            .demo-gif { max-width: 90%; max-height: 90%; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
        `;

        overlay.innerHTML = `
            <style>${demoCss}</style>
            <div class="intro-content text-center" style="max-width: 800px; width: 90%;">
                <h1 class="text-white mb-3 fw-bold" style="text-shadow: 0 4px 10px rgba(0,0,0,0.5); font-size: 3rem;">Nasıl Oynanır?</h1>
                <div class="demo-stage mb-4 mx-auto">
                    <img src="${gifPath}" class="demo-gif" alt="Yazım Animasyonu">
                </div>
                <div class="actions mt-2">
                    <button id="btn-start-intro" class="btn btn-lg px-5 py-3 fw-bold shadow-lg" 
                        style="background-color: #95a5a6; color: white; border: none; font-size: 2rem; border-radius: 50px; min-width: 250px; cursor: not-allowed;" 
                        disabled>BAŞLA <i class="bi bi-play-fill"></i></button>
                </div>
            </div>
        `;

        wrapper.appendChild(overlay);
        const btn = document.getElementById('btn-start-intro');
        if (btn) btn.onclick = (e) => { e.stopPropagation(); this.hide(); };
    },

    setupAudio: function () {
        if (this.audio) return;
        const assetsBase = window.ASSETS_PATH || '../../assets/';
        const audioPath = `${assetsBase}audio/${this.data.folderPrefix}/${this.data.audio.instruction || 'instruction.mp3'}`;
        this.audio = new Audio(audioPath);

        const btn = document.getElementById('btn-start-intro');
        this.audio.onended = () => {
            this.isPlaying = false;
            if (btn) {
                btn.disabled = false;
                btn.style.backgroundColor = '#2ec4b6';
                btn.style.cursor = 'pointer';
                btn.classList.add('pulse-animation');
            }
        };

        setTimeout(() => {
            if (btn && btn.disabled) {
                btn.disabled = false;
                btn.style.backgroundColor = '#2ec4b6';
            }
        }, 10000);
    },

    show: function () {
        const overlay = document.getElementById(this.overlayId);
        if (!overlay) return;
        this.isHidden = false;
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
        this.playAudio();
    },

    hide: function () {
        const overlay = document.getElementById(this.overlayId);
        if (!overlay) return;
        this.isHidden = true;
        this.stopAudio();
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.visibility = 'hidden';
            document.dispatchEvent(new Event('HarfYazalimIntroFinished'));
        }, 500);
    },

    playAudio: function () {
        if (this.isHidden) return;
        if (this.audio) {
            this.audio.currentTime = 0;
            this.audio.play().then(() => { this.isPlaying = true; }).catch(() => {
                this.isPlaying = false;
                const btn = document.getElementById('btn-start-intro');
                if (btn) { btn.disabled = false; btn.style.backgroundColor = '#2ec4b6'; }
            });
        }
    },

    stopAudio: function () {
        if (this.audio) { this.audio.pause(); this.audio.currentTime = 0; this.isPlaying = false; }
    }
};

window.HarfYazalimInstruction = {
    init: function () {
        window.HarfYazalimIntro.createOverlay();
        const btn = document.getElementById('btn-start-intro');
        if (btn) {
            btn.innerHTML = 'DEVAM ET <i class="bi bi-play-fill"></i>';
            btn.disabled = false; btn.style.backgroundColor = '#2ec4b6'; btn.style.cursor = 'pointer';
            btn.onclick = (e) => { e.stopPropagation(); this.hide(); };
        }
        window.HarfYazalimIntro.setupAudio();
        window.HarfYazalimIntro.playAudio();
        const overlay = document.getElementById(window.HarfYazalimIntro.overlayId);
        if (overlay) { overlay.style.visibility = 'visible'; overlay.style.opacity = '1'; }
    },
    hide: function () {
        window.HarfYazalimIntro.stopAudio();
        const overlay = document.getElementById(window.HarfYazalimIntro.overlayId);
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => { overlay.style.visibility = 'hidden'; }, 500);
        }
    }
};
