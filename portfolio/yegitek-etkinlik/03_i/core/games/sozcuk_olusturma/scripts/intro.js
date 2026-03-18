/**
 * Sözcük Oluşturalım - Intro & Instruction Overlay
 * Original-style snake animation with tongue and eating effect.
 */
window.SozcukOlusturmaIntro = {
    overlayId: 'sozcuk-olusturma-intro-overlay',
    audio: null,
    isPlaying: false,
    animationInterval: null,
    data: null,

    init: function (gameData) {
        if (gameData) this.data = gameData;
        if (document.getElementById(this.overlayId)) return;
        this.createOverlay();
        this.setupAudio();
        setTimeout(() => this.startDemoAnimation(), 500);
    },

    createOverlay: function () {
        const container = document.querySelector('.game-container-fixed') || document.body;
        const overlay = document.createElement('div');
        overlay.id = this.overlayId;

        Object.assign(overlay.style, {
            position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)', zIndex: '2000', display: 'flex',
            flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(5px)'
        });

        overlay.innerHTML = `
            <div style="position:relative; z-index:2; text-align:center; width:100%; max-width:800px;">
                <h1 style="color:white; font-size:4rem; font-weight:800; text-shadow:0 5px 15px rgba(0,0,0,0.5); margin-bottom:2rem;">
                    Sözcük Oluşturalım
                </h1>

                <!-- Animation Container -->
                <div id="demo-stage" style="
                    position:relative; width:500px; height:250px;
                    background:rgba(255,255,255,0.1); border:4px solid #4CC9F0;
                    border-radius:20px; margin:0 auto 3rem auto; overflow:hidden;
                    box-shadow:0 10px 30px rgba(0,0,0,0.3);
                ">
                    <!-- Snake Container (Head + Body) -->
                    <div id="demo-snake-container" style="position:absolute; left:50px; top:100px; width:150px; height:50px; transition:left 0.5s linear;">
                        <!-- Body 2 -->
                        <div style="position:absolute; left:-100px; width:48px; height:48px; background:#4CC9F0; border:2px solid #3aa9cc; border-radius:8px;"></div>
                        <!-- Body 1 -->
                        <div style="position:absolute; left:-50px; width:48px; height:48px; background:#4CC9F0; border:2px solid #3aa9cc; border-radius:8px;"></div>
                        <!-- Head -->
                        <div id="demo-snake" style="
                            position:absolute; left:0; width:50px; height:50px;
                            background:#ffffff; border:3px solid #e0e0e0; border-radius:10px;
                            display:flex; justify-content:center; align-items:center;
                            box-shadow:0 5px 10px rgba(0,0,0,0.2); z-index:2;
                        ">
                            <div style="width:8px; height:8px; background:black; border-radius:50%; margin-right:5px;"></div>
                            <div style="width:8px; height:8px; background:black; border-radius:50%;"></div>
                            <div id="demo-tongue" style="position:absolute; right:-10px; width:10px; height:4px; background:red; display:none;"></div>
                        </div>
                    </div>

                    <!-- Target Syllable -->
                    <div id="demo-target" style="
                        position:absolute; width:60px; height:60px; right:50px; top:95px;
                        background:#fff; border-radius:12px; display:flex; justify-content:center;
                        align-items:center; font-weight:800; font-size:1.5rem; color:#118AB2;
                        box-shadow:0 5px 0 #0e7c9e;
                    ">in</div>
                </div>

                <!-- Play Button -->
                <button id="btn-start-sozcuk" disabled style="
                    background:#95a5a6; color:white; border:none; padding:1.5rem 4rem;
                    font-size:2rem; border-radius:50px; cursor:not-allowed; font-weight:bold;
                    box-shadow:none; transition:all 0.2s; opacity:1;
                ">
                    BAŞLA <i class="bi bi-caret-right-fill"></i>
                </button>
            </div>

            <style>
                #btn-start-sozcuk:disabled {
                    background-color: #95a5a6 !important; cursor: not-allowed !important;
                    opacity: 1 !important; box-shadow: none !important; animation: none !important;
                }
                .eating-effect { animation: eatPop 0.3s ease-out; }
                @keyframes eatPop { 0% { transform: scale(1); } 50% { transform: scale(1.3); } 100% { transform: scale(1); } }
            </style>
        `;

        container.appendChild(overlay);

        document.getElementById('btn-start-sozcuk').onclick = () => {
            if (!document.getElementById('btn-start-sozcuk').disabled) {
                this.hide();
            }
        };
    },

    setupAudio: function () {
        if (this.audio) return;
        const audioPath = '../games/sozcuk_olusturma/assets/audio/instruction.mp3';
        this.audio = new Audio(audioPath);

        const btn = document.getElementById('btn-start-sozcuk');

        this.audio.play().then(() => {
            this.isPlaying = true;
        }).catch(() => {
            if (btn) { btn.disabled = false; btn.style.opacity = '1'; btn.style.cursor = 'pointer'; btn.style.backgroundColor = '#2ec4b6'; btn.style.boxShadow = '0 10px 25px rgba(46,196,182,0.4)'; }
        });

        this.audio.onended = () => {
            this.isPlaying = false;
            if (btn) { btn.disabled = false; btn.style.opacity = '1'; btn.style.cursor = 'pointer'; btn.style.backgroundColor = '#2ec4b6'; btn.style.boxShadow = '0 10px 25px rgba(46,196,182,0.4)'; }
        };

        // Fallback
        setTimeout(() => {
            if (btn && btn.disabled) { btn.disabled = false; btn.style.opacity = '1'; btn.style.cursor = 'pointer'; btn.style.backgroundColor = '#2ec4b6'; btn.style.boxShadow = '0 10px 25px rgba(46,196,182,0.4)'; }
        }, 12000);
    },

    startDemoAnimation: function () {
        const snakeContainer = document.getElementById('demo-snake-container');
        const target = document.getElementById('demo-target');
        const tongue = document.getElementById('demo-tongue');
        const snakeHead = document.getElementById('demo-snake');

        if (!snakeContainer || !target) return;

        let step = 0;
        const startLeft = 50;
        const targetLeft = 390;

        // Initial State
        snakeContainer.style.left = startLeft + 'px';
        target.style.opacity = '1';
        target.style.transform = 'scale(1)';
        if (tongue) tongue.style.display = 'none';

        if (this.animationInterval) clearInterval(this.animationInterval);

        this.animationInterval = setInterval(() => {
            step++;

            // Move Snake
            if (step <= 6) {
                const currentLeft = startLeft + (step * 50);
                snakeContainer.style.left = currentLeft + 'px';

                // Tongue flick
                if (tongue && step % 2 === 0) {
                    tongue.style.display = 'block';
                    setTimeout(() => tongue.style.display = 'none', 200);
                }
            }

            // Eat
            if (step === 7) {
                snakeContainer.style.left = (targetLeft - 10) + 'px';

                target.style.transition = 'all 0.2s';
                target.style.transform = 'scale(0) rotate(180deg)';
                target.style.opacity = '0';

                if (snakeHead) {
                    snakeHead.classList.add('eating-effect');
                    setTimeout(() => snakeHead.classList.remove('eating-effect'), 300);
                }
            }

            // Reset
            if (step === 10) {
                step = 0;
                snakeContainer.style.transition = 'none';
                snakeContainer.style.left = startLeft + 'px';
                target.style.transition = 'none';
                target.style.transform = 'scale(1) rotate(0deg)';
                target.style.opacity = '1';

                setTimeout(() => {
                    snakeContainer.style.transition = 'left 0.5s linear';
                }, 50);
            }
        }, 600);
    },

    hide: function () {
        if (this.audio) { this.audio.pause(); this.audio.currentTime = 0; }
        if (this.animationInterval) { clearInterval(this.animationInterval); this.animationInterval = null; }

        const overlay = document.getElementById(this.overlayId);
        if (overlay) {
            overlay.style.transition = 'opacity 0.5s ease';
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.remove();
                if (window.startGame) window.startGame();
            }, 500);
        }
    },

    toggle: function () {
        const overlay = document.getElementById(this.overlayId);
        if (overlay) { this.hide(); } else { this.init(); }
    }
};

window.SozcukOlusturmaInstruction = {
    init: function () {
        // Re-create the overlay if it was removed
        const existing = document.getElementById(window.SozcukOlusturmaIntro.overlayId);
        if (existing) existing.remove();

        window.SozcukOlusturmaIntro.createOverlay();

        const btn = document.getElementById('btn-start-sozcuk');
        if (btn) {
            btn.innerHTML = 'DEVAM ET <i class="bi bi-caret-right-fill"></i>';
            btn.disabled = false;
            btn.style.opacity = '1';
            btn.style.cursor = 'pointer';
            btn.style.backgroundColor = '#2ec4b6';
            btn.style.boxShadow = '0 10px 25px rgba(46,196,182,0.4)';
            btn.onclick = (e) => { e.stopPropagation(); this.hide(); };
        }

        // Play audio
        if (!window.SozcukOlusturmaIntro.audio) {
            window.SozcukOlusturmaIntro.audio = new Audio('../games/sozcuk_olusturma/assets/audio/instruction.mp3');
        }
        window.SozcukOlusturmaIntro.audio.currentTime = 0;
        window.SozcukOlusturmaIntro.audio.play().catch(() => {});

        setTimeout(() => window.SozcukOlusturmaIntro.startDemoAnimation(), 500);
    },

    hide: function () {
        if (window.SozcukOlusturmaIntro.audio) {
            window.SozcukOlusturmaIntro.audio.pause();
            window.SozcukOlusturmaIntro.audio.currentTime = 0;
        }
        if (window.SozcukOlusturmaIntro.animationInterval) {
            clearInterval(window.SozcukOlusturmaIntro.animationInterval);
            window.SozcukOlusturmaIntro.animationInterval = null;
        }

        const overlay = document.getElementById(window.SozcukOlusturmaIntro.overlayId);
        if (overlay) {
            overlay.style.transition = 'opacity 0.5s ease';
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.remove();
                document.dispatchEvent(new Event('SozcukOlusturmaInstructionClosed'));
            }, 500);
        }
    }
};
