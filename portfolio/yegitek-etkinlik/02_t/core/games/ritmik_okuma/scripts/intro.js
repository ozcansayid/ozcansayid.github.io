/**
 * Ritmik Okuma - Intro & Instruction Overlay
 * Demo animation: boxes light up in sequence.
 */
window.RitmikOkumaIntro = {
    overlayId: 'ritmik-okuma-intro-overlay',
    audio: null,
    isPlaying: false,
    animRunning: false,
    data: null,
    animTimeouts: [],

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

        // Get demo words from first level
        const demoWords = this.data && this.data.levels && this.data.levels[0]
            ? this.data.levels[0].text
            : ['in', 'in', 'in'];

        const demoCss = `
            .demo-word-box {
                background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
                border: 4px solid #fff;
                border-radius: 20px;
                width: 150px;
                height: 150px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2.5rem;
                font-weight: 700;
                color: #333;
                box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
                transition: all 0.3s;
            }
            .demo-word-box.active {
                background: #FFD166;
                color: white;
                transform: scale(1.1);
                box-shadow: 0 0 20px rgba(255, 209, 102, 0.6);
                border-color: #FFD166;
            }
        `;

        let boxesHtml = '';
        for (let i = 0; i < Math.min(demoWords.length, 4); i++) {
            boxesHtml += `<div class="demo-word-box" id="intro-box-${i}">${demoWords[i]}</div>`;
        }

        overlay.innerHTML = `
            <style>${demoCss}</style>
            <div class="intro-content text-center" style="max-width: 800px; width: 90%;">
                <h1 class="text-white mb-2 fw-bold" style="text-shadow: 0 4px 10px rgba(0,0,0,0.5); font-size: 3rem;">
                    Ritmik Okuma
                </h1>
                <p class="text-white mb-4" style="font-size: 1.5rem; opacity: 0.9;">
                    Ritmik okuma yapmaya hazır mısın?
                </p>

                <div class="d-flex justify-content-center gap-4 mb-5">
                    ${boxesHtml}
                </div>

                <button id="btn-start-ritmik" disabled style="
                    background: #95a5a6; color: white; border: none; padding: 1.5rem 4rem;
                    font-size: 2rem; border-radius: 50px; cursor: not-allowed; font-weight: bold;
                    box-shadow: none; transition: all 0.2s; opacity: 1;
                ">BAŞLA <i class="bi bi-caret-right-fill"></i></button>
            </div>
            <style>
                #btn-start-ritmik:disabled { background-color:#95a5a6 !important; cursor:not-allowed !important; opacity:1 !important; box-shadow:none !important; }
            </style>
        `;

        wrapper.appendChild(overlay);

        document.getElementById('btn-start-ritmik').addEventListener('click', (e) => {
            e.stopPropagation();
            if (!document.getElementById('btn-start-ritmik').disabled) { this.hide(); }
        });

        // Click anywhere on overlay to play audio (user gesture bypasses autoplay policy)
        overlay.addEventListener('click', () => {
            if (this.audio && !this.isPlaying) {
                this.playAudio();
            }
        });
    },

    setupAudio: function () {
        if (this.audio) return;
        const audioPath = '../games/ritmik_okuma/assets/audio/' + (this.data.audio?.instruction || 'instruction.mp3');
        this.audio = new Audio(audioPath);

        const enableBtn = () => {
            const btn = document.getElementById('btn-start-ritmik');
            if (btn) { btn.disabled = false; btn.style.opacity = '1'; btn.style.cursor = 'pointer'; btn.style.backgroundColor = '#2ec4b6'; btn.style.boxShadow = '0 10px 25px rgba(46,196,182,0.4)'; }
        };

        this.audio.onended = () => {
            this.isPlaying = false;
            enableBtn();
        };

        // Try to autoplay — if blocked by browser, audio will play on first overlay click
        this.audio.play().then(() => {
            this.isPlaying = true;
        }).catch(() => {
            this.isPlaying = false;
            // Don't enable button yet — wait for user to click overlay to play audio
        });

        // Fallback: enable button after 15 seconds regardless
        setTimeout(() => {
            enableBtn();
        }, 15000);
    },

    playAudio: function () {
        if (this.audio) {
            this.audio.currentTime = 0;
            this.audio.play().then(() => { this.isPlaying = true; }).catch(() => { this.isPlaying = false; });
        }
    },

    startDemoAnimation: function () {
        this.stopDemoAnimation();
        this.animRunning = true;

        const demoWords = this.data && this.data.levels && this.data.levels[0]
            ? this.data.levels[0].text
            : ['in', 'in', 'in'];

        const boxes = [];
        for (let i = 0; i < Math.min(demoWords.length, 4); i++) {
            boxes.push(document.getElementById('intro-box-' + i));
        }

        const loop = async () => {
            if (!this.animRunning || !document.getElementById(this.overlayId)) return;

            const wait = ms => new Promise(res => {
                const id = setTimeout(res, ms);
                this.animTimeouts.push(id);
            });

            // Reset
            boxes.forEach(b => { if (b) b.classList.remove('active'); });
            await wait(500);

            // Sequence
            for (let i = 0; i < boxes.length; i++) {
                if (!this.animRunning || !document.getElementById(this.overlayId) || !boxes[i]) return;
                boxes[i].classList.add('active');
                await wait(600);
                boxes[i].classList.remove('active');
                await wait(200);
            }

            await wait(1000);
            if (this.animRunning && document.getElementById(this.overlayId)) {
                loop();
            }
        };

        loop();
    },

    stopDemoAnimation: function () {
        this.animRunning = false;
        this.animTimeouts.forEach(id => clearTimeout(id));
        this.animTimeouts = [];
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
        this.stopDemoAnimation();

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

window.RitmikOkumaInstruction = {
    init: function () {
        const existing = document.getElementById(window.RitmikOkumaIntro.overlayId);
        if (existing) existing.remove();
        window.RitmikOkumaIntro.stopDemoAnimation();

        window.RitmikOkumaIntro.createOverlay();

        const btn = document.getElementById('btn-start-ritmik');
        if (btn) {
            btn.innerHTML = 'DEVAM ET <i class="bi bi-caret-right-fill"></i>';
            btn.disabled = false; btn.style.opacity = '1'; btn.style.cursor = 'pointer';
            btn.style.backgroundColor = '#2ec4b6'; btn.style.boxShadow = '0 10px 25px rgba(46,196,182,0.4)';
            btn.onclick = (e) => { e.stopPropagation(); this.hide(); };
        }

        // Play audio
        if (!window.RitmikOkumaIntro.audio) {
            const audioPath = '../games/ritmik_okuma/assets/audio/' + (window.RitmikOkumaIntro.data.audio?.instruction || 'instruction.mp3');
            window.RitmikOkumaIntro.audio = new Audio(audioPath);
        }
        window.RitmikOkumaIntro.audio.currentTime = 0;
        window.RitmikOkumaIntro.audio.play().catch(() => {});

        window.RitmikOkumaIntro.animRunning = true;
        window.RitmikOkumaIntro.startDemoAnimation();
    },

    hide: function () {
        if (window.RitmikOkumaIntro.audio) { window.RitmikOkumaIntro.audio.pause(); window.RitmikOkumaIntro.audio.currentTime = 0; }
        window.RitmikOkumaIntro.stopDemoAnimation();

        const overlay = document.getElementById(window.RitmikOkumaIntro.overlayId);
        if (overlay) {
            overlay.style.transition = 'opacity 0.5s ease';
            overlay.style.opacity = '0';
            setTimeout(() => { overlay.remove(); }, 500);
        }
    }
};
