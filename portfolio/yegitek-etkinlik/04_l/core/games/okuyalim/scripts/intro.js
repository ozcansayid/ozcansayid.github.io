/**
 * Okuyalım - Intro & Instruction Overlay
 * Original-style spinning wheel animation with result bubble.
 */
window.OkuyalimIntro = {
    overlayId: 'okuyalim-intro-overlay',
    audio: null,
    isPlaying: false,
    animRunning: false,
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

        const demoCss = `
            .demo-stage-ok { position:relative; width:400px; height:400px; background-color:transparent; display:flex; align-items:center; justify-content:center; margin-bottom:2rem; }
            .demo-wheel-container-ok { position:relative; width:300px; height:300px; }
            .demo-wheel-ok {
                width:100%; height:100%; border-radius:50%; border:8px solid #fff;
                box-shadow:0 0 20px rgba(0,0,0,0.3);
                background: conic-gradient(#6A4C93 0deg 60deg, #E0D4FC 60deg 120deg, #6A4C93 120deg 180deg, #E0D4FC 180deg 240deg, #6A4C93 240deg 300deg, #E0D4FC 300deg 360deg);
                transform:rotate(0deg); transition:transform 3s cubic-bezier(0.25,0.1,0.25,1);
            }
            .demo-pointer-ok { position:absolute; top:50%; right:-15px; left:auto; width:30px; height:40px; background:#ff512f; clip-path:polygon(0 50%,100% 0,100% 100%); transform:translateY(-50%); z-index:10; filter:drop-shadow(2px 2px 2px rgba(0,0,0,0.3)); }
            .demo-result-bubble-ok {
                position:absolute; top:50%; left:50%; transform:translate(-50%,-50%) scale(0);
                width:120px; height:120px; background:white; border-radius:50%; border:5px solid #2ec4b6;
                display:flex; align-items:center; justify-content:center;
                font-size:2.5rem; font-weight:bold; color:#2ec4b6;
                box-shadow:0 10px 30px rgba(0,0,0,0.3); opacity:0;
                transition:all 0.5s cubic-bezier(0.175,0.885,0.32,1.275); z-index:20;
            }
            .demo-result-bubble-ok.show { transform:translate(-50%,-50%) scale(1); opacity:1; }
        `;

        overlay.innerHTML = `
            <style>${demoCss}</style>
            <div class="intro-content text-center" style="max-width:800px;width:90%;">
                <h1 class="text-white mb-2 fw-bold" style="text-shadow:0 4px 10px rgba(0,0,0,0.5);font-size:3rem;">Okuyalım</h1>
                <p class="text-white mb-4" style="font-size:1.5rem;opacity:0.9;">Çarkı çevir, gelen hece ve sözcüğü oku!</p>

                <div class="demo-stage-ok mx-auto">
                    <div class="demo-wheel-container-ok">
                        <div id="demo-wheel-ok" class="demo-wheel-ok"></div>
                        <div class="demo-pointer-ok"></div>
                        <div id="demo-result-ok" class="demo-result-bubble-ok">in</div>
                    </div>
                </div>

                <button id="btn-start-okuyalim" disabled style="
                    background:#95a5a6; color:white; border:none; padding:1.5rem 4rem;
                    font-size:2rem; border-radius:50px; cursor:not-allowed; font-weight:bold;
                    box-shadow:none; transition:all 0.2s; opacity:1;
                ">BAŞLA <i class="bi bi-caret-right-fill"></i></button>
            </div>
            <style>
                #btn-start-okuyalim:disabled { background-color:#95a5a6 !important; cursor:not-allowed !important; opacity:1 !important; box-shadow:none !important; }
            </style>
        `;

        wrapper.appendChild(overlay);

        document.getElementById('btn-start-okuyalim').addEventListener('click', () => {
            if (!document.getElementById('btn-start-okuyalim').disabled) { this.hide(); }
        });
    },

    setupAudio: function () {
        if (this.audio) return;
        const audioPath = '../games/okuyalim/assets/audio/instruction.mp3';
        this.audio = new Audio(audioPath);

        const btn = document.getElementById('btn-start-okuyalim');

        this.audio.play().then(() => { this.isPlaying = true; }).catch(() => {
            if (btn) { btn.disabled = false; btn.style.opacity = '1'; btn.style.cursor = 'pointer'; btn.style.backgroundColor = '#2ec4b6'; btn.style.boxShadow = '0 10px 25px rgba(46,196,182,0.4)'; }
        });

        this.audio.onended = () => {
            this.isPlaying = false;
            if (btn) { btn.disabled = false; btn.style.opacity = '1'; btn.style.cursor = 'pointer'; btn.style.backgroundColor = '#2ec4b6'; btn.style.boxShadow = '0 10px 25px rgba(46,196,182,0.4)'; }
        };

        setTimeout(() => {
            if (btn && btn.disabled) { btn.disabled = false; btn.style.opacity = '1'; btn.style.cursor = 'pointer'; btn.style.backgroundColor = '#2ec4b6'; btn.style.boxShadow = '0 10px 25px rgba(46,196,182,0.4)'; }
        }, 15000);
    },

    startDemoAnimation: function () {
        const wheel = document.getElementById('demo-wheel-ok');
        const result = document.getElementById('demo-result-ok');
        if (!wheel || !result) return;

        this.animRunning = true;
        let rotation = 0;
        const syllables = (this.data && this.data.segments) ? this.data.segments : ['in', 'ti', 'an', 'en'];

        const loop = async () => {
            if (!this.animRunning || !document.getElementById(this.overlayId)) return;

            // 1. Reset
            result.classList.remove('show');
            await new Promise(r => setTimeout(r, 500));
            if (!this.animRunning) return;

            // 2. Spin
            rotation += 360 * 3 + Math.random() * 360;
            wheel.style.transition = 'transform 2s cubic-bezier(0.25, 0.1, 0.25, 1)';
            wheel.style.transform = `rotate(${rotation}deg)`;
            await new Promise(r => setTimeout(r, 2000));
            if (!this.animRunning) return;

            // 3. Show Result
            result.innerText = syllables[Math.floor(Math.random() * syllables.length)];
            result.classList.add('show');
            await new Promise(r => setTimeout(r, 2000));
            if (!this.animRunning) return;

            // Loop
            if (document.getElementById(this.overlayId)) {
                setTimeout(loop, 100);
            }
        };

        loop();
    },

    show: function () {
        const overlay = document.getElementById(this.overlayId);
        if (!overlay) return;
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
        this.startDemoAnimation();
    },

    hide: function () {
        if (this.audio) { this.audio.pause(); this.audio.currentTime = 0; }
        this.animRunning = false;

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

window.OkuyalimInstruction = {
    init: function () {
        const existing = document.getElementById(window.OkuyalimIntro.overlayId);
        if (existing) existing.remove();
        window.OkuyalimIntro.animRunning = false;

        window.OkuyalimIntro.createOverlay();

        const btn = document.getElementById('btn-start-okuyalim');
        if (btn) {
            btn.innerHTML = 'DEVAM ET <i class="bi bi-caret-right-fill"></i>';
            btn.disabled = false; btn.style.opacity = '1'; btn.style.cursor = 'pointer';
            btn.style.backgroundColor = '#2ec4b6'; btn.style.boxShadow = '0 10px 25px rgba(46,196,182,0.4)';
            btn.onclick = (e) => { e.stopPropagation(); this.hide(); };
        }

        // Play audio
        if (!window.OkuyalimIntro.audio) {
            window.OkuyalimIntro.audio = new Audio('../games/okuyalim/assets/audio/instruction.mp3');
        }
        window.OkuyalimIntro.audio.currentTime = 0;
        window.OkuyalimIntro.audio.play().catch(() => {});

        window.OkuyalimIntro.animRunning = true;
        window.OkuyalimIntro.startDemoAnimation();
    },

    hide: function () {
        if (window.OkuyalimIntro.audio) { window.OkuyalimIntro.audio.pause(); window.OkuyalimIntro.audio.currentTime = 0; }
        window.OkuyalimIntro.animRunning = false;

        const overlay = document.getElementById(window.OkuyalimIntro.overlayId);
        if (overlay) {
            overlay.style.transition = 'opacity 0.5s ease';
            overlay.style.opacity = '0';
            setTimeout(() => { overlay.remove(); }, 500);
        }
    }
};
