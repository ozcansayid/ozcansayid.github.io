/**
 * Sesi Hissedelim - Intro Overlay Manager (DYNAMIC ENGINE VERSION)
 */
const SesiIntro = {
    overlayId: 'sesi-intro-overlay',
    audioPath: '',
    audio: null,
    isPlaying: false,
    animationInterval: null,
    timeouts: [],

    init: function () {
        if (!window.SesiHissedelimData) return;
        this.audioPath = window.ASSETS_PATH + 'audio/' + window.SesiHissedelimData.folderPrefix + '/instruction.mp3';

        console.log("SesiIntro Engine: Initializing...");
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

        // Extract first question from data to use for demo
        const demoItems = window.SesiHissedelimData.questions[0].items;

        const cardHtml = demoItems.map((item, idx) => {
            const imgPath = item.image.includes('/') ? item.image : `${window.SesiHissedelimData.folderPrefix}/${item.image}`;
            return `
                <div class="demo-card-wrapper">
                    <div class="demo-card" id="demo-card-${idx + 1}">
                        <img src="${window.ASSETS_PATH}img/${imgPath}" onerror="this.src='https://placehold.co/100?text=${item.name}'">
                    </div>
                    <div class="demo-checkbox" id="demo-check-${idx + 1}">
                        <i class="bi bi-check-lg"></i>
                    </div>
                </div>`;
        }).join('');

        const demoCss = `
            .demo-stage { position: relative; width: 600px; height: 380px; background: linear-gradient(to bottom, #f0f9ff, #cbebff); border-radius: 20px; border: 4px solid #4CC9F0; box-shadow: 0 10px 30px rgba(0,0,0,0.3); display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; }
            .demo-cards-row { display: flex; gap: 20px; margin-top: 20px; }
            .demo-card-wrapper { display: flex; flex-direction: column; align-items: center; width: 120px; }
            .demo-card { width: 100px; height: 100px; background: white; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; transition: transform 0.2s; border: 3px solid transparent; }
            .demo-card img { max-width: 70%; max-height: 70%; object-fit: contain; }
            .demo-checkbox { width: 40px; height: 40px; background: white; border: 2px solid #ddd; border-radius: 8px; margin-top: 15px; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
            .demo-checkbox.selected { background-color: #4CC9F0 !important; border-color: #4CC9F0 !important; }
            .demo-checkbox i { color: white; font-size: 2rem; display: none; font-weight: bold; }
            .demo-checkbox.selected i { display: block; animation: popInCheck 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28); }
            @keyframes popInCheck { 0% { transform: scale(0); } 100% { transform: scale(1); } }
            .demo-card.correct-reveal { border-color: #2ecc71 !important; background-color: #e8f5e9 !important; }
            .demo-btn-check { margin-top: 30px; padding: 10px 40px; background: #ff9f1c; color: white; border: none; border-radius: 50px; font-size: 1.2rem; font-weight: bold; box-shadow: 0 4px 10px rgba(255, 159, 28, 0.3); transition: transform 0.1s; }
            .demo-cursor { position: absolute; width: 40px; height: 40px; background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="%23000000"><path d="M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 6.407 31.141-12.5 31.141z"/></svg>') no-repeat center center; background-size: contain; z-index: 9999; filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.3)); transition: top 0.8s cubic-bezier(0.25, 1, 0.5, 1), left 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.1s; top: 110%; left: 50%; pointer-events: none; }
            .demo-click-effect { transform: scale(0.8); }
            .demo-feedback-modal { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0); background: white; padding: 20px 40px; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.3); border: 4px solid #2ecc71; text-align: center; z-index: 100; transition: transform 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28); }
            .demo-feedback-modal.show { transform: translate(-50%, -50%) scale(1); }
        `;

        overlay.innerHTML = `
            <style>${demoCss}</style>
            <div class="intro-content text-center" style="max-width: 800px; width: 90%;">
                <h1 class="text-white mb-3 fw-bold" style="text-shadow: 0 4px 10px rgba(0,0,0,0.5); font-size: 3rem;">
                    Nasıl Oynanır?
                </h1>
                <div class="demo-stage mb-4 mx-auto">
                    <div class="demo-cards-row">
                        ${cardHtml}
                    </div>
                    <button id="demo-btn-submit" class="demo-btn-check">KONTROL ET</button>
                    <div id="demo-feedback" class="demo-feedback-modal">
                        <i class="bi bi-star-fill text-warning" style="font-size: 3rem;"></i>
                        <h3 class="fw-bold mt-2">Tebrikler!</h3>
                    </div>
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
        if (btn) btn.onclick = () => this.hide();
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
        if (btn) { btn.disabled = true; btn.style.backgroundColor = '#95a5a6'; }

        this.playAudio();
        this.startDemoAnimation();
    },

    hide: function () {
        const overlay = document.getElementById(this.overlayId);
        if (!overlay) return;
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.visibility = 'hidden';
            this.stopDemoAnimation();
        }, 500);
        this.stopAudio();
    },

    playAudio: function () {
        if (this.audio) {
            this.audio.currentTime = 0;
            this.audio.play().catch(e => {
                console.log("Auto-play prevented (user interaction needed)", e);
                const btn = document.getElementById('btn-start-intro');
                if (btn) { btn.disabled = false; btn.style.backgroundColor = '#2ec4b6'; }
            });
            this.isPlaying = true;
        }
    },

    stopAudio: function () {
        if (this.audio) { this.audio.pause(); this.audio.currentTime = 0; this.isPlaying = false; }
    },

    startDemoAnimation: function () {
        this.stopDemoAnimation();
        const cursor = document.getElementById('demo-cursor');
        const items = window.SesiHissedelimData.questions[0].items;

        if (!cursor) return;
        // Reset
        document.querySelectorAll('.demo-checkbox').forEach(c => { c.classList.remove('selected'); });
        document.querySelectorAll('.demo-card').forEach(c => c.classList.remove('correct-reveal'));
        document.getElementById('demo-feedback').classList.remove('show');

        cursor.style.transition = 'none';
        cursor.style.top = '110%';
        cursor.style.left = '50%';
        void cursor.offsetWidth;
        cursor.style.transition = 'top 0.8s cubic-bezier(0.25, 1, 0.5, 1), left 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.1s';

        const sequence = async () => {
            if (document.getElementById(this.overlayId).style.visibility === 'hidden') return;
            const wait = ms => new Promise(res => { const id = setTimeout(res, ms); this.timeouts.push(id); });
            const moveCursorTo = (el, offsetX = 0, offsetY = 0) => {
                if (!el) return;
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
                cursor.style.left = ((relativeX / scaleX) + offsetX) + 'px';
                cursor.style.top = ((relativeY / scaleY) + offsetY) + 'px';
            };
            const clickEffect = () => { cursor.classList.add('demo-click-effect'); setTimeout(() => cursor.classList.remove('demo-click-effect'), 150); };

            await wait(1000);

            for (let i = 0; i < items.length; i++) {
                const card = document.getElementById(`demo-card-${i + 1}`);
                const check = document.getElementById(`demo-check-${i + 1}`);

                moveCursorTo(card, 0, 0);
                await wait(1000);
                clickEffect();
                card.style.transform = 'scale(0.95)';
                setTimeout(() => card.style.transform = 'scale(1)', 200);
                await wait(800);

                if (items[i].isCorrect) {
                    moveCursorTo(check, 0, 0);
                    await wait(800);
                    clickEffect();
                    await wait(150);
                    check.classList.add('selected');
                    await wait(600);
                }
            }

            const btn = document.getElementById('demo-btn-submit');
            moveCursorTo(btn, 0, 0);
            await wait(1000);
            clickEffect();
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => btn.style.transform = 'scale(1)', 200);
            await wait(300);

            for (let i = 0; i < items.length; i++) {
                if (items[i].isCorrect) {
                    document.getElementById(`demo-card-${i + 1}`).classList.add('correct-reveal');
                }
            }
            document.getElementById('demo-feedback').classList.add('show');
            cursor.style.opacity = '0';

            await wait(3000);
            cursor.style.opacity = '1';
            this.startDemoAnimation();
        };
        sequence();
    },

    stopDemoAnimation: function () {
        this.timeouts.forEach(clearTimeout);
        this.timeouts = [];
    }
};

const SesiInstruction = {
    init: function () {
        // Reuse Intro logic but change button to DEVAM ET and show immediately
        SesiIntro.createOverlay();
        const btn = document.getElementById('btn-start-intro');
        if (btn) {
            btn.innerHTML = 'DEVAM ET <i class="bi bi-play-fill"></i>';
            btn.disabled = false;
            btn.style.backgroundColor = '#2ec4b6';
            btn.style.cursor = 'pointer';
            btn.onclick = () => { SesiIntro.hide(); }
        }

        SesiIntro.setupAudio();
        SesiIntro.audio.play().catch(e => console.log(e));

        const overlay = document.getElementById(SesiIntro.overlayId);
        if (overlay) {
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
        }
        SesiIntro.startDemoAnimation();
    }
};

function initIntroApp() {
    setTimeout(() => {
        if (typeof SesiHissedelimData !== 'undefined') {
            window.SesiHissedelimData = SesiHissedelimData; // Ensure it's on window for intro.js
            SesiIntro.init();
        }
    }, 100);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIntroApp);
} else {
    initIntroApp();
}
