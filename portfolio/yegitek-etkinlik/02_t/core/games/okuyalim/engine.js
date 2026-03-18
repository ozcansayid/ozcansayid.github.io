/**
 * Okuyalım - Core Engine
 * Spinning wheel game: spin to land on a syllable/word, read it aloud.
 */
class OkuyalimEngine {
    constructor(data) {
        this.data = data;
        this.mountPoint = document.getElementById('game-mount-point');
        this.segments = [...data.segments];
        this.colors = data.colors;
        this.currentAngle = 0;
        this.isSpinning = false;
        this.spinSpeed = 0;
        this.lastTimestamp = 0;
        this.pendingDeletionIndex = -1;
        this.spinAudio = null;
        this.initUI();
    }

    initUI() {
        const GAME_ASSETS = '../games/okuyalim/assets/';
        const bgPath = GAME_ASSETS + 'img/bg.jpg';

        this.mountPoint.innerHTML = `
        <div class="game-container-fixed" style="overflow:hidden;margin:0 auto;">
            <div class="sidebar-kid">
                <div class="sidebar-settings" style="background:transparent;padding:0;display:flex;justify-content:center;width:100%;">
                    <button id="btn-toggle-delete" class="round-toggle-btn" title="Bölme Silinsin">
                        <i class="bi bi-eraser-fill"></i> Silinsin
                    </button>
                </div>
                <div class="nav-buttons-container" style="position:relative;overflow:visible !important;">
                    <div class="position-relative mb-2 d-flex justify-content-center">
                        <div id="audio-slider-container" class="audio-slider-popup">
                            <div id="volume-val-display">20</div>
                            <div class="slider-track-wrapper"><input type="range" id="volume-range" class="horizontal-range" min="0" max="100" value="20"></div>
                        </div>
                        <button id="btn-audio-toggle" class="btn btn-kid btn-icon-only" title="Ses Ayarı"
                            style="background-color:#2ecc71!important;color:white!important;border:none!important;">
                            <i class="bi bi-volume-up-fill"></i>
                        </button>
                    </div>
                    <button id="btn-restart" class="btn btn-kid btn-primary-kid btn-icon-only" title="Yeniden Başlat"><i class="bi bi-arrow-clockwise"></i></button>
                    <button class="btn btn-kid btn-info-kid btn-icon-only" id="btn-instruction" title="Yönerge"><i class="bi bi-question-lg"></i></button>
                    <button id="btn-fullscreen" class="btn btn-kid btn-icon-only" style="background-color:#6f42c1;color:white;border:none;" title="Tam Ekran"><i class="bi bi-arrows-fullscreen"></i></button>
                </div>
            </div>

            <div class="main-content-kid" style="border-radius:40px !important;">
                <div class="game-header">
                    <h2 class="game-title">${this.data.title || 'Okuyalım'}</h2>
                    <div class="game-nav">
                        <button class="btn-nav-flat btn-nav-home" id="btn-home" title="Anasayfa"><i class="bi bi-house-fill"></i></button>
                        <button class="btn-nav-flat" id="btn-prev" title="Önceki"><i class="bi bi-chevron-left"></i></button>
                        <button class="btn-nav-flat" id="btn-next" title="Sonraki"><i class="bi bi-chevron-right"></i></button>
                    </div>
                </div>
                <div class="game-board" style="background:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('${bgPath}') no-repeat center center;background-size:cover;border-radius:0 0 30px 30px;padding:0;position:relative;display:flex;align-items:center;justify-content:center;">
                    <div class="wheel-wrapper d-flex flex-column align-items-center justify-content-center w-100 h-100">
                        <div class="wheel-container">
                            <div id="pointer"></div>
                            <div id="result-display" title="Dinlemek için tıkla">SONUÇ</div>
                            <canvas id="wheelCanvas" width="550" height="550"></canvas>
                        </div>
                        <button id="spinBtn" class="modern-spin-btn">ÇEVİR <i class="bi bi-arrow-repeat"></i></button>
                    </div>
                    <div id="game-over-screen" class="game-overlay hidden">
                        <h2 class="display-4 mb-4" id="end-title" style="color:#2ec4b6;">Harikasın!</h2>
                        <p class="lead mb-4" id="end-message" style="font-size:1.5rem;">Çarkı başarıyla tamamladın.</p>
                        <button class="btn btn-kid btn-primary-kid" id="btn-replay-game" style="font-size:1.5rem;padding:15px 40px;">
                            Tekrar Oyna <i class="bi bi-arrow-counterclockwise"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;

        this.canvas = document.getElementById('wheelCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.spinBtn = document.getElementById('spinBtn');
        this.btnToggleDelete = document.getElementById('btn-toggle-delete');
        this.resultDisplay = document.getElementById('result-display');

        // Preload spin audio
        this.spinAudio = new Audio(GAME_ASSETS + 'audio/cark.mp3');
        this.spinAudio.loop = true;
        this.spinAudio.volume = 1.0;
        this.spinAudio.load();

        this.bindEvents();

        if (window.GameEngine) window.GameEngine.resize();

        // Draw wheel after fonts loaded
        document.fonts.ready.then(() => this.drawWheel());

        // Init intro
        if (typeof window.OkuyalimIntro !== 'undefined') {
            window.OkuyalimIntro.init(this.data);
        }
    }

    startGame() {
        // Game is always ready (just spin the wheel)
    }

    adjustColor(color, amount) {
        return '#' + color.replace(/^#/, '').replace(/../g, c =>
            ('0' + Math.min(255, Math.max(0, parseInt(c, 16) + amount)).toString(16)).substr(-2)
        );
    }

    drawWheel() {
        const ctx = this.ctx;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const radius = this.canvas.width / 2 - 15;
        const arcSize = (2 * Math.PI) / this.segments.length;

        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.segments.length === 0) {
            ctx.font = "bold 50px fillip, Quicksand"; ctx.fillStyle = "#333";
            ctx.textAlign = "center"; ctx.textBaseline = "middle";
            ctx.fillText("Bitti!", centerX, centerY);
            return;
        }

        // Shadow
        ctx.save();
        ctx.beginPath(); ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(0,0,0,0.2)";
        ctx.shadowColor = "rgba(0,0,0,0.5)"; ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 10; ctx.shadowOffsetY = 10;
        ctx.fill(); ctx.restore();

        this.segments.forEach((segment, index) => {
            const angle = this.currentAngle + index * arcSize;
            ctx.beginPath(); ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, angle, angle + arcSize);

            let grad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
            grad.addColorStop(0, '#ffffff');
            const colorIndex = index % 2;
            const segColor = this.colors[colorIndex];
            grad.addColorStop(0.3, segColor);
            grad.addColorStop(1, this.adjustColor(segColor, -20));
            ctx.fillStyle = grad; ctx.fill();

            ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 4; ctx.stroke();

            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(angle + arcSize / 2);
            ctx.textAlign = "right";
            ctx.fillStyle = (colorIndex === 0) ? "#ffffff" : "#333333";
            ctx.font = "bold 32px fillip, Quicksand";
            ctx.shadowColor = (colorIndex === 0) ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0)";
            ctx.shadowBlur = 4; ctx.shadowOffsetX = 2; ctx.shadowOffsetY = 2;
            ctx.fillText(segment, radius - 40, 10);
            ctx.restore();
        });

        // Center cap
        ctx.beginPath(); ctx.arc(centerX, centerY, 40, 0, 2 * Math.PI);
        let cGrad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, 40);
        cGrad.addColorStop(0, '#ffffff'); cGrad.addColorStop(1, '#e0e0e0');
        ctx.fillStyle = cGrad; ctx.fill();
        ctx.strokeStyle = "#ddd"; ctx.lineWidth = 2; ctx.stroke();
        ctx.fillStyle = "#FFD700"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.font = "24px Arial"; ctx.fillText("★", centerX, centerY + 2);
    }

    spin() {
        if (this.isSpinning) return;
        this.resultDisplay.classList.remove('show');
        this.resultDisplay.innerText = "";

        if (this.pendingDeletionIndex !== -1) {
            this.segments.splice(this.pendingDeletionIndex, 1);
            this.pendingDeletionIndex = -1;
            if (this.segments.length === 0) { this.drawWheel(); this.spinBtn.disabled = true; return; }
        }

        if (this.segments.length <= 2) { this.spinBtn.style.display = 'none'; }

        this.spinSpeed = 15 + Math.random() * 10;
        this.isSpinning = true;
        this.spinBtn.disabled = true;
        this.spinAudio.currentTime = 0;
        this.spinAudio.play().catch(() => {});
        this.lastTimestamp = performance.now();
        requestAnimationFrame((t) => this.animate(t));
    }

    animate(timestamp) {
        if (!this.isSpinning) return;
        const deltaTime = (timestamp - this.lastTimestamp) / 1000;
        this.lastTimestamp = timestamp;
        this.spinSpeed *= Math.pow(0.5, deltaTime);
        if (this.spinSpeed < 0.1) { this.stopSpin(); return; }
        this.currentAngle += this.spinSpeed * deltaTime;
        this.drawWheel();
        requestAnimationFrame((t) => this.animate(t));
    }

    stopSpin() {
        this.isSpinning = false;
        this.spinBtn.disabled = false;
        this.spinAudio.pause();
        this.spinAudio.currentTime = 0;

        const arcSize = (2 * Math.PI) / this.segments.length;
        let relativeAngle = (0 - this.currentAngle) % (2 * Math.PI);
        if (relativeAngle < 0) relativeAngle += 2 * Math.PI;
        const winningIndex = Math.floor(relativeAngle / arcSize) % this.segments.length;
        const winningWord = this.segments[winningIndex];

        this.resultDisplay.innerText = winningWord;
        this.resultDisplay.classList.add('show');

        if (window.confetti) confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });

        if (this.btnToggleDelete && this.btnToggleDelete.classList.contains('active')) {
            this.pendingDeletionIndex = winningIndex;
            if (this.segments.length === 2) { setTimeout(() => this.victory(), 1500); }
        } else {
            this.pendingDeletionIndex = -1;
        }
    }

    victory() {
        this.spinBtn.style.display = 'none';
        new Audio('../games/okuyalim/assets/audio/congratulations.mp3').play().catch(() => {});
        document.getElementById('end-title').innerText = "Harikasın!";
        document.getElementById('end-message').innerText = "Çarkı başarıyla tamamladın.";
        document.getElementById('game-over-screen').classList.remove('hidden');
    }

    bindEvents() {
        this.spinBtn.addEventListener('click', () => this.spin());

        // Toggle delete
        if (this.btnToggleDelete) {
            this.btnToggleDelete.addEventListener('click', () => this.btnToggleDelete.classList.toggle('active'));
        }

        // Result click -> play word audio
        if (this.resultDisplay) {
            this.resultDisplay.addEventListener('click', () => {
                if (this.resultDisplay.innerText && this.resultDisplay.classList.contains('show')) {
                    const word = this.resultDisplay.innerText.trim();
                    new Audio(`${window.ASSETS_PATH}audio/${this.data.folderPrefix}/${word}.mp3`).play().catch(() => {});
                }
            });
        }

        // Sidebar
        document.getElementById('btn-restart').onclick = () => location.reload();
        document.getElementById('btn-replay-game').onclick = () => location.reload();
        document.getElementById('btn-instruction').onclick = () => {
            if (typeof window.OkuyalimInstruction !== 'undefined') window.OkuyalimInstruction.init();
        };

        // Nav + Fullscreen (via shared GameNav helper)
        if (window.GameNav) window.GameNav.bindNavButtons();

        this.initAudioSlider();
    }

    initAudioSlider() {
        const btn = document.getElementById('btn-audio-toggle');
        const popup = document.getElementById('audio-slider-container');
        const range = document.getElementById('volume-range');
        const valDisplay = document.getElementById('volume-val-display');
        let isOpen = false;
        const toggle = (show) => { if(!popup) return; if(show) popup.classList.add('show'); else popup.classList.remove('show'); };
        if (btn) {
            btn.onclick = (e) => { e.stopPropagation(); isOpen=!isOpen; toggle(isOpen); };
            document.addEventListener('click', (e) => { if(isOpen&&popup&&!popup.contains(e.target)&&!btn.contains(e.target)){isOpen=false;toggle(false);} });
        }
        const update = (val) => {
            if(!range) return; const p=Number(val);
            range.style.background=`linear-gradient(to right, #f1c40f ${p}%, #555 ${p}%)`;
            if(valDisplay) valDisplay.innerText=Math.round(p);
            if(btn) btn.innerHTML=p===0?'<i class="bi bi-volume-mute-fill"></i>':'<i class="bi bi-volume-up-fill"></i>';
            localStorage.setItem('bg_music_volume', p);
            window.dispatchEvent(new CustomEvent('bgVolumeChanged', { detail: { volume: p } }));
        };
        if (range) {
            range.oninput = function(){update(this.value);};
            const sv=localStorage.getItem('bg_music_volume');
            range.value=sv!==null?Number(sv):20; update(range.value);
        }
    }
}

window.startGame = function() {
    if (window.activeOkuyalimEngine) window.activeOkuyalimEngine.startGame();
};

function initApp() {
    if (typeof OkuyalimData !== 'undefined') {
        window.activeOkuyalimEngine = new OkuyalimEngine(OkuyalimData);
    } else { console.error("OkuyalimData is not defined."); }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initApp);
else initApp();
