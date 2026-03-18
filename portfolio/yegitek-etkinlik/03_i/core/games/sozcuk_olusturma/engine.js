/**
 * Sözcük Oluşturalım - Core Engine
 * Snake game where player collects syllables in correct order to form words.
 */
class SozcukOlusturmaEngine {
    constructor(data) {
        this.data = data;
        this.mountPoint = document.getElementById('game-mount-point');
        this.levels = data.levels;
        const cfg = data.config || {};
        this.config = { gridSize: cfg.gridSize || 50, baseSpeed: cfg.baseSpeed || 250, rows: 20, cols: 30 };

        this.currentLevelIndex = 0;
        this.currentSentenceWords = [];
        this.collectedWords = [];
        this.snake = [];
        this.direction = { x: 1, y: 0 };
        this.nextDirection = { x: 1, y: 0 };
        this.activeWordsOnBoard = [];
        this.gameLoopId = null;
        this.isPaused = false;
        this.canSwitchDir = true;
        this.runningAudio = null;
        this.wordColors = ["#EF476F", "#FFD166", "#06D6A0", "#118AB2", "#9D4EDD"];

        this.initUI();
    }

    initUI() {
        const GAME_ASSETS = '../games/sozcuk_olusturma/assets/';
        const bgPath = GAME_ASSETS + 'img/bg.jpg';

        this.mountPoint.innerHTML = `
        <div class="game-container-fixed">
            <div class="sidebar-kid">
                <div class="lives-container w-100" style="background:#f8f9fa;padding:15px;border-radius:20px;text-align:center;margin-top:5px;">
                    <div class="lives-label" style="font-size:0.8rem;font-weight:700;color:#6c757d;">DÜZEY</div>
                    <div style="font-size:2rem;color:var(--primary-color);font-weight:700;margin-bottom:10px;" id="levelDisplay">1/${this.levels.length}</div>
                    <button class="btn btn-kid w-100 p-2 d-flex align-items-center justify-content-center" id="btn-replay-sound" title="Sesi Tekrar Çal"
                        style="border-radius:15px;background-color:#FFC107;color:white;border:none;">
                        <i class="bi bi-volume-up-fill fs-3"></i>
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

            <div class="main-content-kid">
                <div class="game-header" style="margin-bottom:0;padding:5px 20px;">
                    <h2 class="game-title" style="margin:0;font-size:1.8rem;">${this.data.title || 'Sözcük Oluşturalım'}</h2>
                    <div class="game-nav">
                        <button class="btn-nav-flat btn-nav-home" id="btn-home" title="Anasayfa"><i class="bi bi-house-fill"></i></button>
                        <button class="btn-nav-flat" id="btn-prev" title="Önceki"><i class="bi bi-chevron-left"></i></button>
                        <button class="btn-nav-flat" id="btn-next" title="Sonraki"><i class="bi bi-chevron-right"></i></button>
                    </div>
                </div>
                <div class="game-board" style="background:url('${bgPath}') no-repeat center center;background-size:cover;">
                    <div class="game-main-wrapper">
                        <div class="sentence-container" id="sentenceContainer"></div>
                        <div class="canvas-wrapper">
                            <canvas id="game-canvas"></canvas>
                        </div>
                        <div class="d-pad-container">
                            <div class="d-btn d-up" id="dpad-up"><i class="bi bi-caret-up-fill"></i></div>
                            <div class="d-btn d-left" id="dpad-left"><i class="bi bi-caret-left-fill"></i></div>
                            <div class="d-btn d-right" id="dpad-right"><i class="bi bi-caret-right-fill"></i></div>
                            <div class="d-btn d-down" id="dpad-down"><i class="bi bi-caret-down-fill"></i></div>
                        </div>
                        <div id="game-over-screen" class="game-overlay hidden">
                            <h2 class="display-4 mb-4" id="end-title" style="color:#4CC9F0;">Harikasın!</h2>
                            <p class="lead mb-4" id="end-message" style="font-size:1.5rem;">Tüm kelimeleri başarıyla tamamladın.</p>
                            <button class="btn btn-kid btn-primary-kid" id="btn-replay-game" style="font-size:1.5rem;padding:15px 40px;">
                                Tekrar Oyna <i class="bi bi-arrow-counterclockwise"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.sentenceContainer = document.getElementById('sentenceContainer');
        this.levelDisplay = document.getElementById('levelDisplay');

        this.bindEvents();
        this.initCanvas();

        if (window.GameEngine) window.GameEngine.resize();

        // Init intro
        if (typeof window.SozcukOlusturmaIntro !== 'undefined') {
            window.SozcukOlusturmaIntro.init(this.data);
        }
    }

    initCanvas() {
        const wrapper = document.querySelector('.canvas-wrapper');
        if (!wrapper) return;
        this.canvas.width = wrapper.clientWidth;
        this.canvas.height = wrapper.clientHeight;
        this.config.cols = Math.floor(this.canvas.width / this.config.gridSize);
        this.config.rows = Math.floor(this.canvas.height / this.config.gridSize);
    }

    startGame() {
        this.currentLevelIndex = 0;
        this.startLevel(0);
    }

    startLevel(index) {
        if (index >= this.levels.length) { this.victory(); return; }
        this.currentLevelIndex = index;
        this.levelDisplay.innerText = `${index + 1}/${this.levels.length}`;

        const levelData = this.levels[index];
        this.playAudioFile(levelData.audio);

        this.currentSentenceWords = (levelData.text || levelData.word || '').split(' ');
        this.collectedWords = [];
        this.updateSentenceUI();
        this.resetSnake();
        this.spawnWords();

        this.isPaused = false;
        clearInterval(this.gameLoopId);
        this.gameLoopId = setInterval(() => this.gameTick(), this.config.baseSpeed);

        // Hide game over screen
        const gos = document.getElementById('game-over-screen');
        if (gos) gos.classList.add('hidden');
    }

    resetSnake() {
        const startY = Math.floor(this.config.rows / 2);
        const startX = Math.floor(this.config.cols / 4);
        this.snake = [
            { x: startX + 4, y: startY },
            { x: startX + 3, y: startY },
            { x: startX + 2, y: startY }
        ];
        this.direction = { x: 1, y: 0 };
        this.nextDirection = { x: 1, y: 0 };
    }

    updateSentenceUI() {
        this.sentenceContainer.innerHTML = '';
        const div = document.createElement('div');
        div.className = 'sentence-word w-50 mx-auto';
        div.style.minWidth = '200px';
        const text = this.collectedWords.join('');
        if (text.length > 0) { div.innerText = text; div.classList.add('filled'); }
        else { div.innerText = '...'; }
        this.sentenceContainer.appendChild(div);
    }

    spawnWords() {
        this.activeWordsOnBoard = [];
        this.ctx.font = "bold 32px Quicksand";
        for (let i = this.collectedWords.length; i < this.currentSentenceWords.length; i++) {
            const w = this.currentSentenceWords[i];
            const widthPx = this.ctx.measureText(w).width + 30;
            const widthCells = Math.ceil(widthPx / this.config.gridSize);
            const pos = this.getRandomEmptyPos(widthCells);
            if (pos) {
                this.activeWordsOnBoard.push({
                    word: w, originalIndex: i, x: pos.x, y: pos.y,
                    widthCells: widthCells, color: this.wordColors[i % this.wordColors.length]
                });
            }
        }
    }

    getRandomEmptyPos(widthCells) {
        let safe = false, attempts = 0, x, y;
        while (!safe && attempts < 100) {
            x = 1 + Math.floor(Math.random() * (this.config.cols - 2 - widthCells));
            y = 1 + Math.floor(Math.random() * (this.config.rows - 2));
            const hitsSnake = this.snake.some(s => s.y === y && s.x >= x - 2 && s.x <= x + widthCells + 1);
            const hitsWord = this.activeWordsOnBoard.some(w => w.y === y && !((x + widthCells + 1 < w.x - 1) || (x - 1 > w.x + w.widthCells + 1)));
            if (!hitsSnake && !hitsWord) safe = true;
            attempts++;
        }
        return safe ? { x, y } : null;
    }

    handleDirInput(dx, dy) {
        if (this.isPaused || !this.canSwitchDir) return;
        if (dx !== 0 && this.direction.x !== 0) return;
        if (dy !== 0 && this.direction.y !== 0) return;
        this.nextDirection = { x: dx, y: dy };
        this.canSwitchDir = false;
    }

    gameTick() {
        if (this.isPaused) return;
        this.direction = this.nextDirection;
        this.canSwitchDir = true;

        const head = { x: this.snake[0].x + this.direction.x, y: this.snake[0].y + this.direction.y };

        // Wall collision
        if (head.x < 0 || head.x >= this.config.cols || head.y < 0 || head.y >= this.config.rows) { this.hitError(); return; }
        // Self collision
        if (this.snake.some(s => s.x === head.x && s.y === head.y)) { this.hitError(); return; }

        this.snake.unshift(head);

        // Word collision
        let ateIndex = -1;
        for (let i = 0; i < this.activeWordsOnBoard.length; i++) {
            const w = this.activeWordsOnBoard[i];
            if (head.y === w.y && head.x >= w.x && head.x < w.x + w.widthCells) { ateIndex = i; break; }
        }

        if (ateIndex !== -1) {
            const eaten = this.activeWordsOnBoard[ateIndex];
            const nextIdx = this.collectedWords.length;
            const expected = this.currentSentenceWords[nextIdx];

            if (eaten.word.toLocaleLowerCase('tr-TR') === expected.toLocaleLowerCase('tr-TR')) {
                this.playCoreSound('correct.mp3');
                this.collectedWords.push(expected);
                this.snake.push({}, {});
                this.activeWordsOnBoard.splice(ateIndex, 1);
                this.updateSentenceUI();

                if (this.collectedWords.length === this.currentSentenceWords.length) {
                    this.isPaused = true;
                    if (window.confetti) confetti();
                    setTimeout(() => {
                        const levelData = this.levels[this.currentLevelIndex];
                        this.playAudioFile(levelData.audio, () => this.startLevel(this.currentLevelIndex + 1));
                    }, 1500);
                }
            } else {
                this.hitError(); return;
            }
        } else {
            this.snake.pop();
        }

        this.render();
    }

    hitError() {
        this.playCoreSound('wrong.mp3');
        this.resetSnake();
    }

    render() {
        const ctx = this.ctx;
        const gs = this.config.gridSize;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Snake
        this.snake.forEach((seg, i) => {
            ctx.fillStyle = (i === 0) ? '#ffffff' : '#4CC9F0';
            const px = seg.x * gs, py = seg.y * gs, size = gs - 2;
            ctx.beginPath();
            ctx.roundRect(px, py, size, size, 8);
            ctx.fill();
            if (i === 0) {
                ctx.fillStyle = '#2b2d42';
                ctx.beginPath();
                ctx.arc(px + size * 0.3, py + size * 0.3, size * 0.15, 0, Math.PI * 2);
                ctx.arc(px + size * 0.7, py + size * 0.3, size * 0.15, 0, Math.PI * 2);
                ctx.fill();
            }
        });

        // Words
        ctx.textAlign = "left"; ctx.textBaseline = "middle"; ctx.font = "bold 32px Quicksand";
        this.activeWordsOnBoard.forEach(w => {
            const px = w.x * gs, py = w.y * gs;
            const boxW = w.widthCells * gs - 4, boxH = gs - 4;
            ctx.fillStyle = w.color;
            ctx.beginPath(); ctx.roundRect(px + 2, py + 2, boxW, boxH, 15); ctx.fill();
            ctx.fillStyle = "#fff"; ctx.shadowColor = "rgba(0,0,0,0.5)"; ctx.shadowBlur = 4;
            const tm = ctx.measureText(w.word);
            ctx.fillText(w.word, px + 2 + (boxW / 2) - (tm.width / 2), py + (gs / 2));
            ctx.shadowBlur = 0;
        });
    }

    victory() {
        this.isPaused = true;
        clearInterval(this.gameLoopId);
        if (this.runningAudio) { this.runningAudio.pause(); this.runningAudio.currentTime = 0; }
        setTimeout(() => {
            this.playCoreSound('congratulations.mp3');
            if (window.confetti) confetti();
            document.getElementById('end-title').innerText = "Harikasın!";
            document.getElementById('end-message').innerText = "Tüm kelimeleri başarıyla tamamladın.";
            document.getElementById('game-over-screen').classList.remove('hidden');
        }, 3000);
    }

    playAudioFile(filename, onEnded) {
        if (this.runningAudio) { this.runningAudio.pause(); this.runningAudio.currentTime = 0; this.runningAudio.onended = null; }
        this.runningAudio = new Audio(`${window.ASSETS_PATH}audio/${this.data.folderPrefix}/${filename}`);
        if (onEnded) this.runningAudio.onended = onEnded;
        this.runningAudio.play().catch(() => { if (onEnded) onEnded(); });
    }

    playCoreSound(filename) {
        new Audio(`../games/sozcuk_olusturma/assets/audio/${filename}`).play().catch(() => {});
    }

    bindEvents() {
        // D-pad
        document.getElementById('dpad-up').onpointerdown = () => this.handleDirInput(0, -1);
        document.getElementById('dpad-down').onpointerdown = () => this.handleDirInput(0, 1);
        document.getElementById('dpad-left').onpointerdown = () => this.handleDirInput(-1, 0);
        document.getElementById('dpad-right').onpointerdown = () => this.handleDirInput(1, 0);

        // Keyboard
        document.addEventListener('keydown', (e) => {
            if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)) e.preventDefault();
            switch (e.key) {
                case 'ArrowUp': this.handleDirInput(0, -1); break;
                case 'ArrowDown': this.handleDirInput(0, 1); break;
                case 'ArrowLeft': this.handleDirInput(-1, 0); break;
                case 'ArrowRight': this.handleDirInput(1, 0); break;
            }
        });

        // Sidebar
        document.getElementById('btn-restart').onclick = () => location.reload();
        document.getElementById('btn-replay-game').onclick = () => location.reload();
        document.getElementById('btn-replay-sound').onclick = () => {
            const ld = this.levels[this.currentLevelIndex];
            if (ld && ld.audio) this.playAudioFile(ld.audio);
        };
        document.getElementById('btn-instruction').onclick = () => {
            this.isPaused = true;
            clearInterval(this.gameLoopId);
            if (typeof window.SozcukOlusturmaInstruction !== 'undefined') window.SozcukOlusturmaInstruction.init();
        };

        // Nav + Fullscreen (via shared GameNav helper)
        if (window.GameNav) window.GameNav.bindNavButtons();

        // Window resize
        window.addEventListener('resize', () => this.initCanvas());

        // Resume game when instruction overlay closes
        document.addEventListener('SozcukOlusturmaInstructionClosed', () => {
            if (this.isPaused && this.currentSentenceWords.length > 0) {
                this.isPaused = false;
                clearInterval(this.gameLoopId);
                this.gameLoopId = setInterval(() => this.gameTick(), this.config.baseSpeed);
            }
        });

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

// Global hook for intro
window.startGame = function() {
    if (window.activeSozcukEngine) window.activeSozcukEngine.startGame();
};

function initApp() {
    if (typeof SozcukOlusturmaData !== 'undefined') {
        window.activeSozcukEngine = new SozcukOlusturmaEngine(SozcukOlusturmaData);
    } else { console.error("SozcukOlusturmaData is not defined."); }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initApp);
else initApp();
