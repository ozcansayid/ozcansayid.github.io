/**
 * Harf Tanıyalım - Intro Overlay Manager
 * Adapted for Core Engine architecture
 */
window.HarfTaniyalimIntro = {
    overlayId: 'harfi-intro-overlay',
    audio: null,
    isPlaying: false,
    timeouts: [],
    data: null,

    init: function (gameData) {
        console.log("HarfTaniyalimIntro: Initializing...");

        if (!gameData) {
            console.error("HarfTaniyalimIntro: gameData is missing!");
            return;
        }

        this.data = gameData;
        this.createOverlay();
        this.setupAudio();
        this.show();
    },

    createOverlay: function () {
        if (document.getElementById(this.overlayId)) return;

        const wrapper = document.querySelector('.game-container-fixed') || document.body;

        if (wrapper !== document.body && getComputedStyle(wrapper).position === 'static') {
            wrapper.style.position = 'relative';
        }

        const overlay = document.createElement('div');
        overlay.id = this.overlayId;
        overlay.className = 'custom-modal-overlay';

        // Styles
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

        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
        overlay.style.transition = 'all 0.5s ease';

        const assetsBase = window.ASSETS_PATH || '../../assets/';
        const bgPath = `${assetsBase}img/${this.data.folderPrefix}/${this.data.background || 'bg.jpg'}`;

        const demoCss = `
            .demo-stage {
                position: relative;
                width: 600px;
                height: 380px;
                background: url('${bgPath}') no-repeat center center;
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
                    <div id="demo-bubble-1" class="demo-bubble" style="top: 200px; left: 100px;">${this.data.distractionChars[0] || 'A'}</div>
                    <div id="demo-bubble-2" class="demo-bubble" style="top: 150px; left: 260px;">${this.data.targetCharUpper}</div>
                    <div id="demo-bubble-3" class="demo-bubble" style="top: 220px; left: 420px;">${this.data.targetCharLower}</div>
                    
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

        const btn = document.getElementById('btn-start-intro');
        if (btn) {
            btn.onclick = (e) => {
                e.stopPropagation();
                this.hide();
            };
        }

        // Allow any click on overlay to trigger audio (browser autoplay fix)
        overlay.onclick = (e) => {
            if (!this.isPlaying && this.audio) {
                this.playAudio();
            }
        };
    },

    setupAudio: function () {
        if (this.audio) return; // Prevent multiple instances

        const audioPath = '../games/harf_taniyalim/assets/audio/' + (this.data.audio.instruction || 'instruction.mp3');
        this.audio = new Audio(audioPath);
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

        this.stopAudio();

        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.visibility = 'hidden';
            this.stopDemoAnimation();

            // Notify Engine to start
            const event = new Event('HarfTaniyalimIntroFinished');
            document.dispatchEvent(event);
        }, 500);
    },

    playAudio: function () {
        if (this.audio) {
            this.audio.currentTime = 0;
            this.audio.play().then(() => {
                this.isPlaying = true;
            }).catch(e => {
                console.warn("Auto-play prevented (user interaction needed)", e);
                const btn = document.getElementById('btn-start-intro');
                if (btn) {
                    btn.disabled = false;
                    btn.style.backgroundColor = '#2ec4b6';
                    btn.style.cursor = 'pointer';
                }
                this.isPlaying = false;
            });
        }
    },

    stopAudio: function () {
        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
            this.isPlaying = false;
        }
    },

    startDemoAnimation: function () {
        this.stopDemoAnimation();

        const cursor = document.getElementById('demo-cursor');
        const b1 = document.getElementById('demo-bubble-1');
        const b2 = document.getElementById('demo-bubble-2');
        const b3 = document.getElementById('demo-bubble-3');

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

                const scaleX = containerRect.width / container.offsetWidth;
                const scaleY = containerRect.height / container.offsetHeight;

                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const relativeX = centerX - containerRect.left;
                const relativeY = centerY - containerRect.top;

                const finalLeft = relativeX / scaleX;
                const finalTop = relativeY / scaleY;

                cursor.style.left = (finalLeft + offsetX) + 'px';
                cursor.style.top = (finalTop + offsetY) + 'px';
            };

            const clickEffect = () => {
                cursor.classList.add('demo-click-effect');
                setTimeout(() => cursor.classList.remove('demo-click-effect'), 150);
            };

            await wait(1000);

            // 1. Target Upper (Correct)
            moveCursorTo(b2, 0, 0);
            await wait(1000);
            clickEffect();
            b2.classList.add('popped');
            await wait(800);

            // 2. Target Lower (Correct)
            moveCursorTo(b3, 0, 0);
            await wait(1000);
            clickEffect();
            b3.classList.add('popped');
            await wait(800);

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

function initHarfTaniyalimIntro() {
    if (typeof HarfiTaniyalimData !== 'undefined') {
        HarfTaniyalimIntro.init(HarfiTaniyalimData);
    } else {
        console.error("HarfiTaniyalimData is not defined. Make sure data.js is loaded.");
    }
}

window.HarfTaniyalimInstruction = {
    init: function () {
        if (!window.activeHarfEngine) return;

        // Pause Game
        window.activeHarfEngine.gameActive = false;

        window.HarfTaniyalimIntro.createOverlay();
        const btn = document.getElementById('btn-start-intro');
        if (btn) {
            btn.innerHTML = 'DEVAM ET <i class="bi bi-play-fill"></i>';
            btn.disabled = false;
            btn.style.backgroundColor = '#2ec4b6';
            btn.style.cursor = 'pointer';

            // Override hide behavior slightly for Instruction to resume game without dispatching IntroFinished
            btn.onclick = (e) => {
                e.stopPropagation();
                this.hide();
            }
        }

        window.HarfTaniyalimIntro.setupAudio();
        // Play instead of relying on show
        window.HarfTaniyalimIntro.playAudio();

        const overlay = document.getElementById(window.HarfTaniyalimIntro.overlayId);
        if (overlay) {
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
        }
        window.HarfTaniyalimIntro.startDemoAnimation();
    },

    hide: function () {
        window.HarfTaniyalimIntro.stopAudio();
        const overlay = document.getElementById(window.HarfTaniyalimIntro.overlayId);
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.visibility = 'hidden';
                window.HarfTaniyalimIntro.stopDemoAnimation();

                // Resume game
                if (window.activeHarfEngine) {
                    window.activeHarfEngine.gameActive = true;
                }
            }, 500);
        }
    }
};
