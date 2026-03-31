/**
 * Sözcüğü Okuyalım - Intro & Instruction Overlay
 */
window.SozcuguOkuyalimIntro = {
    overlayId: 'yumurta-intro-overlay',
    audio: null,
    isPlaying: false,
    data: null,

    init: function (gameData) {
        if (gameData) this.data = gameData;
        if (document.getElementById(this.overlayId)) return;
        this.createOverlay();
        this.setupAudio();
        this.show();
    },

    createOverlay: function () {
        const wrapper = document.querySelector('.game-container-fixed') || document.body;
        const overlay = document.createElement('div');
        overlay.id = this.overlayId;

        Object.assign(overlay.style, {
            position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.9)', zIndex: '2000', display: 'flex',
            alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
        });

        overlay.innerHTML = `
            <style>
                .demo-egg-scene {
                    position: relative; width: 500px; height: 300px;
                    background: url('../games/sozcugu_okuyalim/assets/img/bg.jpg') center/cover no-repeat;
                    border: 4px solid #fff; border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                    overflow: hidden; display: flex; align-items: center;
                    justify-content: center; gap: 20px;
                }
                .demo-egg {
                    width: 67px; height: 100px; position: relative;
                    display: flex; align-items: center; justify-content: center;
                    transition: all 0.5s ease;
                    transform: translate(0px, -45px);
                }
                .demo-egg svg { width: 80px; height: 100px; }
                .demo-egg-text {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
                    font-size: 1rem; font-weight: 800; color: #5D4037; z-index: 5;
                }
                .demo-egg.cracked { opacity: 0; transform: scale(0.5); }
                .demo-chick {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%) scale(0);
                    font-size: 3rem; transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .demo-chick.show { transform: translate(-50%,-50%) scale(1); }
                @keyframes demoBounce {
                    0%, 100% { transform: translate(-50%,-50%) scale(1) translateY(0); }
                    50% { transform: translate(-50%,-50%) scale(1.1) translateY(-8px); }
                }
                .demo-chick.bounce { animation: demoBounce 0.6s ease infinite; }
            </style>
            <div class="intro-content text-center" style="max-width:800px;width:90%;">
                <h1 class="text-white mb-2 fw-bold" style="text-shadow:0 4px 10px rgba(0,0,0,0.5);font-size:3rem;">Sözcüğü Okuyalım</h1>
                <p class="text-white mb-4" style="font-size:1.5rem;opacity:0.9;">Duyduğumuz sözcüğün yazılı olduğu yumurtaya tıklayalım.</p>

                <div class="demo-egg-scene mx-auto mb-4">
                    <div class="demo-egg" id="demo-egg-1">
                        <svg viewBox="0 0 120 160"><ellipse cx="60" cy="85" rx="50" ry="65" fill="#FFF8E1" stroke="#FFCC80" stroke-width="3"/></svg>
                        <span class="demo-egg-text">kol</span>
                    </div>
                    <div class="demo-egg" id="demo-egg-2">
                        <svg viewBox="0 0 120 160"><ellipse cx="60" cy="85" rx="50" ry="65" fill="#E8F5E9" stroke="#A5D6A7" stroke-width="3"/></svg>
                        <span class="demo-egg-text">kel</span>
                        <div class="demo-chick" id="demo-chick">🐣</div>
                    </div>
                    <div class="demo-egg" id="demo-egg-3">
                        <svg viewBox="0 0 120 160"><ellipse cx="60" cy="85" rx="50" ry="65" fill="#E3F2FD" stroke="#90CAF9" stroke-width="3"/></svg>
                        <span class="demo-egg-text">kan</span>
                    </div>
                </div>

                <button id="btn-start-yumurta" disabled style="
                    background:#95a5a6; color:white; border:none; padding:1.5rem 4rem;
                    font-size:2rem; border-radius:50px; cursor:not-allowed; font-weight:bold;
                    box-shadow:none; transition:all 0.2s; opacity:1;
                ">BAŞLA <i class="bi bi-caret-right-fill"></i></button>
            </div>
            <style>
                #btn-start-yumurta:disabled { background-color:#95a5a6 !important; cursor:not-allowed !important; }
            </style>
        `;

        wrapper.appendChild(overlay);

        document.getElementById('btn-start-yumurta').addEventListener('click', () => {
            if (!document.getElementById('btn-start-yumurta').disabled) this.hide();
        });

        // Start demo animation
        this.startDemoAnimation();
    },

    setupAudio: function () {
        if (this.audio) return;
        const audioPath = '../games/sozcugu_okuyalim/assets/audio/instruction.mp3';
        this.audio = new Audio(audioPath);

        const btn = document.getElementById('btn-start-yumurta');

        this.audio.play().then(() => { this.isPlaying = true; }).catch(() => {
            if (btn) this.enableBtn(btn);
        });

        this.audio.onended = () => {
            this.isPlaying = false;
            if (btn) this.enableBtn(btn);
        };

        setTimeout(() => {
            if (btn && btn.disabled) this.enableBtn(btn);
        }, 10000);
    },

    enableBtn: function (btn) {
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.style.cursor = 'pointer';
        btn.style.backgroundColor = '#2ec4b6';
        btn.style.boxShadow = '0 10px 25px rgba(46,196,182,0.4)';
    },

    startDemoAnimation: function () {
        const egg2 = document.getElementById('demo-egg-2');
        const chick = document.getElementById('demo-chick');
        if (!egg2 || !chick) return;

        let running = true;
        const loop = async () => {
            if (!running || !document.getElementById(this.overlayId)) return;

            // Reset
            egg2.classList.remove('cracked');
            chick.classList.remove('show', 'bounce');
            await new Promise(r => setTimeout(r, 2000));
            if (!document.getElementById(this.overlayId)) return;

            // Crack
            egg2.classList.add('cracked');
            await new Promise(r => setTimeout(r, 300));
            if (!document.getElementById(this.overlayId)) return;

            // Chick appears
            chick.classList.add('show');
            await new Promise(r => setTimeout(r, 300));
            chick.classList.add('bounce');
            await new Promise(r => setTimeout(r, 2500));

            if (document.getElementById(this.overlayId)) setTimeout(loop, 100);
        };

        this._stopDemo = () => { running = false; };
        loop();
    },

    show: function () {
        const overlay = document.getElementById(this.overlayId);
        if (!overlay) return;
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
    },

    hide: function () {
        if (this.audio) { this.audio.pause(); this.audio.currentTime = 0; }
        if (this._stopDemo) this._stopDemo();

        const overlay = document.getElementById(this.overlayId);
        if (overlay) {
            overlay.style.transition = 'opacity 0.5s ease';
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.remove();
                if (window.startGame) window.startGame();
            }, 500);
        }
    }
};

window.SozcuguOkuyalimInstruction = {
    init: function () {
        const existing = document.getElementById(window.SozcuguOkuyalimIntro.overlayId);
        if (existing) existing.remove();
        if (window.SozcuguOkuyalimIntro._stopDemo) window.SozcuguOkuyalimIntro._stopDemo();

        window.SozcuguOkuyalimIntro.createOverlay();

        const btn = document.getElementById('btn-start-yumurta');
        if (btn) {
            btn.innerHTML = 'DEVAM ET <i class="bi bi-caret-right-fill"></i>';
            btn.disabled = false; btn.style.opacity = '1'; btn.style.cursor = 'pointer';
            btn.style.backgroundColor = '#2ec4b6'; btn.style.boxShadow = '0 10px 25px rgba(46,196,182,0.4)';
            btn.onclick = (e) => { e.stopPropagation(); this.hide(); };
        }

        // Play audio
        if (!window.SozcuguOkuyalimIntro.audio) {
            window.SozcuguOkuyalimIntro.audio = new Audio('../games/sozcugu_okuyalim/assets/audio/instruction.mp3');
        }
        window.SozcuguOkuyalimIntro.audio.currentTime = 0;
        window.SozcuguOkuyalimIntro.audio.play().catch(() => { });
    },

    hide: function () {
        if (window.SozcuguOkuyalimIntro.audio) {
            window.SozcuguOkuyalimIntro.audio.pause();
            window.SozcuguOkuyalimIntro.audio.currentTime = 0;
        }
        if (window.SozcuguOkuyalimIntro._stopDemo) window.SozcuguOkuyalimIntro._stopDemo();

        const overlay = document.getElementById(window.SozcuguOkuyalimIntro.overlayId);
        if (overlay) {
            overlay.style.transition = 'opacity 0.5s ease';
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 500);
        }
    }
};
