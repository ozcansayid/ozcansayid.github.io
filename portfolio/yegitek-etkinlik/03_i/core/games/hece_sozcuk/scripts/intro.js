/**
 * Hece Sözcük - Intro & Instruction Overlay
 * Animated drag-drop demo with bulb lighting.
 */
window.HeceSozcukIntro = {
    overlayId: 'hece-sozcuk-intro-overlay',
    audio: null,
    isPlaying: false,
    animInterval: null,
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
        Object.assign(overlay.style, {
            position:'absolute', top:'0', left:'0', width:'100%', height:'100%',
            backgroundColor:'rgba(0,0,0,0.9)', zIndex:'2000', display:'flex',
            alignItems:'center', justifyContent:'center', flexDirection:'column',
            opacity:'0', visibility:'hidden', transition:'all 0.5s ease'
        });

        const demoCss = `
            .demo-stage-hs { position:relative; width:600px; height:400px; background-color:#f8f9fa; border-radius:20px; border:4px solid #fff; box-shadow:0 10px 30px rgba(0,0,0,0.3); overflow:hidden; display:flex; flex-direction:column; align-items:center; justify-content:center; }
            .demo-drop-zone-hs { width:120px; height:60px; border:3px dashed #ccc; border-radius:10px; background-color:rgba(255,255,255,0.8); display:flex; align-items:center; justify-content:center; margin-top:50px; position:relative; z-index:2; transition:all 0.3s; }
            .demo-drop-zone-hs.active { border-color:#ffd700; background-color:rgba(255,215,0,0.2); box-shadow:0 0 15px rgba(255,215,0,0.5); }
            .demo-bulb-hs { position:absolute; top:40px; font-size:4rem; color:#555; transition:color 0.3s, filter 0.3s; z-index:2; }
            .demo-bulb-hs.on { color:#ffeb3b; filter:drop-shadow(0 0 20px #ffeb3b); animation:bulbPulseHS 1s infinite alternate; }
            @keyframes bulbPulseHS { from { filter:drop-shadow(0 0 10px #ffeb3b); } to { filter:drop-shadow(0 0 30px #ffeb3b); } }
            .demo-draggable-hs { width:100px; height:50px; background-color:#FF9F1C; color:white; font-size:1.5rem; font-weight:bold; border-radius:10px; display:flex; align-items:center; justify-content:center; position:absolute; bottom:50px; left:50%; transform:translateX(-50%); z-index:10; box-shadow:0 4px 8px rgba(0,0,0,0.2); }
            .demo-hand-hs { position:absolute; width:50px; height:50px; background:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23333" stroke="%23333" stroke-width="2"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>') no-repeat center center; background-size:contain; pointer-events:none; z-index:20; top:300px; left:320px; transition:transform 0.2s; }
        `;

        overlay.innerHTML = `
            <style>${demoCss}</style>
            <div class="intro-content text-center" style="max-width:800px;width:90%;">
                <h1 class="text-white mb-3 fw-bold" style="text-shadow:0 4px 10px rgba(0,0,0,0.5);font-size:3rem;">Nasıl Oynanır?</h1>
                <div class="demo-stage-hs mb-4 mx-auto">
                    <i id="demo-bulb-hs" class="bi bi-lightbulb-fill demo-bulb-hs"></i>
                    <div id="demo-zone-hs" class="demo-drop-zone-hs"></div>
                    <div id="demo-item-hs" class="demo-draggable-hs">ne</div>
                    <div id="demo-hand-hs" class="demo-hand-hs"></div>
                </div>
                <div class="actions mt-2">
                    <button id="btn-start-hece" class="btn btn-lg px-5 py-3 fw-bold shadow-lg"
                        style="background-color:#95a5a6;color:white;border:none;font-size:2rem;border-radius:50px;min-width:250px;cursor:not-allowed;"
                        disabled>BAŞLA <i class="bi bi-play-fill"></i></button>
                </div>
            </div>
        `;

        wrapper.appendChild(overlay);
        const btn = document.getElementById('btn-start-hece');
        if (btn) btn.onclick = (e) => { e.stopPropagation(); this.hide(); };
    },

    setupAudio: function () {
        if (this.audio) return;
        const audioPath = '../games/hece_sozcuk/assets/audio/' + (this.data.audio.instruction || 'instruction.mp3');
        this.audio = new Audio(audioPath);
        const btn = document.getElementById('btn-start-hece');
        this.audio.onended = () => {
            if (btn) { btn.disabled=false; btn.style.backgroundColor='#2ec4b6'; btn.style.cursor='pointer'; }
        };
        setTimeout(() => { if (btn && btn.disabled) { btn.disabled=false; btn.style.backgroundColor='#2ec4b6'; } }, 12000);
    },

    startDemoAnimation: function () {
        if (this.animInterval) clearInterval(this.animInterval);
        const loop = () => {
            const hand = document.getElementById('demo-hand-hs');
            const item = document.getElementById('demo-item-hs');
            const zone = document.getElementById('demo-zone-hs');
            const bulb = document.getElementById('demo-bulb-hs');
            if (!hand || !item || !zone || !bulb) return;

            hand.style.transition = 'top 1s, left 1s, transform 0.2s';
            item.style.transition = 'none';
            item.style.transform = 'translateX(-50%)'; item.style.top = ''; item.style.bottom = '50px';
            zone.classList.remove('active'); bulb.classList.remove('on');
            hand.style.top = '300px'; hand.style.left = '50%'; hand.style.transform = 'translate(-50%,0) scale(1)';

            setTimeout(() => {
                hand.style.top = '315px';
                setTimeout(() => {
                    hand.style.transform = 'translate(-50%,0) scale(0.8)';
                    setTimeout(() => {
                        hand.style.transition = 'top 1s'; hand.style.top = '220px';
                        item.style.transition = 'bottom 1s'; item.style.bottom = '145px';
                        zone.classList.add('active');
                        setTimeout(() => {
                            hand.style.transform = 'translate(-50%,0) scale(1)';
                            zone.classList.remove('active'); bulb.classList.add('on');
                            setTimeout(() => { hand.style.top = '400px'; }, 500);
                        }, 1000);
                    }, 500);
                }, 1000);
            }, 500);
        };
        loop();
        this.animInterval = setInterval(loop, 4000);
    },

    show: function () {
        const overlay = document.getElementById(this.overlayId);
        if (!overlay) return;
        overlay.style.visibility = 'visible'; overlay.style.opacity = '1';
        const btn = document.getElementById('btn-start-hece');
        if (btn) { btn.disabled=true; btn.style.backgroundColor='#95a5a6'; btn.style.cursor='not-allowed'; btn.innerHTML='BAŞLA <i class="bi bi-play-fill"></i>'; }
        this.isPlaying = true;
        this.playAudio();
        this.startDemoAnimation();
    },

    hide: function () {
        const overlay = document.getElementById(this.overlayId);
        if (!overlay) return;
        this.stopAudio();
        if (this.animInterval) clearInterval(this.animInterval);
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.visibility = 'hidden';
            if (window.startGame) window.startGame();
        }, 500);
    },

    playAudio: function () {
        if (this.audio) {
            this.audio.currentTime = 0;
            this.audio.play().then(() => { this.isPlaying = true; }).catch(() => {
                this.isPlaying = false;
                const btn = document.getElementById('btn-start-hece');
                if (btn) { btn.disabled=false; btn.style.backgroundColor='#2ec4b6'; }
            });
        }
    },

    stopAudio: function () {
        if (this.audio) { this.audio.pause(); this.audio.currentTime = 0; this.isPlaying = false; }
    }
};

window.HeceSozcukInstruction = {
    init: function () {
        window.HeceSozcukIntro.createOverlay();
        const btn = document.getElementById('btn-start-hece');
        if (btn) {
            btn.innerHTML = 'DEVAM ET <i class="bi bi-play-fill"></i>';
            btn.disabled = false; btn.style.backgroundColor = '#2ec4b6'; btn.style.cursor = 'pointer';
            btn.onclick = (e) => { e.stopPropagation(); this.hide(); };
        }
        window.HeceSozcukIntro.setupAudio();
        window.HeceSozcukIntro.playAudio();
        window.HeceSozcukIntro.startDemoAnimation();
        const overlay = document.getElementById(window.HeceSozcukIntro.overlayId);
        if (overlay) { overlay.style.visibility = 'visible'; overlay.style.opacity = '1'; }
    },
    hide: function () {
        window.HeceSozcukIntro.stopAudio();
        if (window.HeceSozcukIntro.animInterval) clearInterval(window.HeceSozcukIntro.animInterval);
        const overlay = document.getElementById(window.HeceSozcukIntro.overlayId);
        if (overlay) { overlay.style.opacity = '0'; setTimeout(() => { overlay.style.visibility = 'hidden'; }, 500); }
    }
};
