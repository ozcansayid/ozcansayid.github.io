/**
 * Harf Tanıyalım - Core Engine
 * Renders the game board and manages logic based on dynamic gameData.
 */

class HarfTaniyalimEngine {
    constructor(data) {
        this.data = data;
        this.mountPoint = document.getElementById('game-mount-point');

        // Game State
        this.gameScore = 0;
        this.gameActive = false;
        this.timeLeft = this.data.durationSeconds || 60;
        this.timerInterval = null;
        this.bubbles = [];
        this.decorativeFish = [];
        this.animationFrameId = null;
        this.spawnIntervalId = null;
        this.soundLoopInterval = null;
        this.speedMultiplier = 1.0;
        this.hasClickedBubble = false;
        this.fishEmojis = ['🐟', '🐠', '🐡'];

        // Audio Objects
        const audioBase = window.ASSETS_PATH + 'audio/' + this.data.folderPrefix + '/';
        this.audioCorrect = new Audio(audioBase + (this.data.audio.correct || 'correct.mp3'));
        this.audioWrong = new Audio(audioBase + (this.data.audio.wrong || 'wrong.mp3'));
        this.audioTryAgain = new Audio(audioBase + (this.data.audio.tryAgain || 'try_again.mp3'));
        this.audioCongrats = new Audio(audioBase + (this.data.audio.congratulations || 'congratulations.mp3'));

        this.initUI();
    }

    initUI() {
        const bgPath = window.ASSETS_PATH + 'img/' + this.data.folderPrefix + '/' + (this.data.background || 'bg.jpg');

        this.mountPoint.innerHTML = `
        <div class="game-container-fixed">
            <!-- Sidebar (Left) -->
            <div class="sidebar-kid">
                <!-- Top Section -->
                <div class="d-flex flex-column align-items-center gap-3 w-100">
                    <!-- Lives Indicator -->
                    <div class="lives-container" id="livesDisplay">
                        <!-- Injected dynamically by engine or main.js if GameEngine.lives exists -->
                    </div>

                    <!-- Timer Indicator -->
                    <div class="sidebar-box">
                        <div class="sidebar-label">Süre</div>
                        <div style="font-size: 2rem; color: #dc3545; font-weight: 700;" id="timerDisplay">${this.timeLeft}</div>
                    </div>

                    <!-- Score Indicator -->
                    <div class="sidebar-box">
                        <div class="sidebar-label">Avlanan<br>Harf</div>
                        <div style="font-size: 2rem; color: var(--success-color); font-weight: 700;" id="scoreDisplay">0</div>
                    </div>
                </div>

                <!-- Bottom: Navigation Buttons -->
                <div class="nav-buttons-container" style="position: relative; overflow: visible !important;">

                    <!-- Audio Control (TOP) -->
                    <div class="position-relative mb-2 d-flex justify-content-center">
                        <div id="audio-slider-container" class="audio-slider-popup">
                            <div id="volume-val-display">20</div>
                            <div class="slider-track-wrapper">
                                <input type="range" id="volume-range" class="horizontal-range" min="0" max="100" value="20">
                            </div>
                        </div>
                        <button id="btn-audio-toggle" class="btn btn-kid btn-icon-only" title="Ses Ayarı"
                            style="background-color: #2ecc71 !important; color: white !important; border: none !important;">
                            <i class="bi bi-volume-up-fill"></i>
                        </button>
                    </div>

                    <button class="btn btn-kid btn-primary-kid btn-icon-only mb-2" title="Yeniden Başlat" id="btn-restart">
                        <i class="bi bi-arrow-clockwise"></i>
                    </button>
                    <button class="btn btn-kid btn-info-kid btn-icon-only mb-2" id="btn-instruction" title="Yönerge">
                        <i class="bi bi-question-lg"></i>
                    </button>
                    <!-- Tam Ekran Butonu -->
                    <button id="btn-fullscreen" class="btn btn-kid btn-icon-only mb-2" style="background-color: #6f42c1; color: white; border: none;" title="Tam Ekran">
                        <i class="bi bi-arrows-fullscreen"></i>
                    </button>
                </div>
            </div>

            <!-- Main Content (Right) -->
            <div class="main-content-kid">
                <!-- Header -->
                <div class="game-header">
                    <h2 class="game-title">${this.data.title}</h2>
                    <div class="game-nav">
                        <button class="btn-nav-flat btn-nav-home" id="btn-home" title="Anasayfa">
                            <i class="bi bi-house-fill"></i>
                        </button>
                        <button class="btn-nav-flat" id="btn-prev" title="Önceki">
                            <i class="bi bi-chevron-left"></i>
                        </button>
                        <button class="btn-nav-flat" id="btn-next" title="Sonraki">
                            <i class="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>

                <!-- Inner Game Board -->
                <div class="game-board" id="game-board" style="background-image: url('${bgPath}'); background-size: cover; background-position: center;">
                    <!-- Result Screen -->
                    <div id="game-over-screen" class="game-overlay hidden">
                        <h2 class="display-4 mb-4" id="end-title" style="color: var(--primary-color);"> Harikasın! </h2>
                        <p class="lead mb-4" id="end-message">Gayretin için tebrikler.</p>
                        <div class="d-flex justify-content-center gap-4 mb-4">
                            <div class="text-center">
                                <h3 class="text-muted">Avlanan Harf</h3>
                                <div class="display-3 text-success fw-bold" id="final-score">0</div>
                            </div>
                        </div>
                        <button class="btn btn-kid btn-primary-kid" id="btn-play-again">
                            Tekrar Oyna <i class="bi bi-arrow-counterclockwise"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;

        this.bindEvents();
        if (window.GameEngine) window.GameEngine.resize();

        // Start Intro explicitly
        if (typeof window.HarfTaniyalimIntro !== 'undefined') {
            window.HarfTaniyalimIntro.init(this.data);
            document.addEventListener('HarfTaniyalimIntroFinished', () => {
                this.startGame();
            });
        } else {
            // No intro script? Start immediately
            this.startGame();
        }

        // Setup initial lives display and scale container
        if (typeof GameEngine !== 'undefined') {
            GameEngine.lives = 3;
            GameEngine.updateLivesDisplay();
            if (typeof GameEngine.resize === 'function') {
                GameEngine.resize();
            }
        }
    }

    bindEvents() {
        document.getElementById('btn-restart').onclick = () => location.reload();
        document.getElementById('btn-play-again').onclick = () => location.reload();

        document.getElementById('btn-instruction').onclick = () => {
            if (typeof window.HarfTaniyalimInstruction !== 'undefined') {
                window.HarfTaniyalimInstruction.init();
            }
        };

        // Nav + Fullscreen (via shared GameNav helper)
        if (window.GameNav) window.GameNav.bindNavButtons();

        /* Audio Slider Logic (Only for Background Music tracking) */
        (function () {
            const btn = document.getElementById('btn-audio-toggle');
            const popup = document.getElementById('audio-slider-container');
            const range = document.getElementById('volume-range');
            const valDisplay = document.getElementById('volume-val-display');
            let isOpen = false;

            if (btn) {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    isOpen = !isOpen;
                    togglePopup(isOpen);
                });
                document.addEventListener('click', (e) => {
                    if (isOpen && popup && !popup.contains(e.target) && !btn.contains(e.target)) {
                        isOpen = false;
                        togglePopup(false);
                    }
                });
                if (popup) popup.addEventListener('click', (e) => e.stopPropagation());
            }

            function togglePopup(show) {
                if (!popup) return;
                if (show) popup.classList.add('show');
                else popup.classList.remove('show');
            }

            if (range) {
                range.addEventListener('input', function () { updateVolume(this.value); });

                let defaultVolume = 20;
                const savedVol = localStorage.getItem('bg_music_volume');
                if (savedVol !== null) {
                    defaultVolume = Number(savedVol);
                }

                range.value = defaultVolume;
                updateVolume(range.value);
            }

            function updateVolume(val) {
                if (!range) return;
                const percent = Number(val);
                range.style.background = `linear-gradient(to right, #f1c40f ${percent}%, #555 ${percent}%)`;
                if (valDisplay) valDisplay.innerText = Math.round(percent);

                if (btn) {
                    if (percent === 0) {
                        btn.innerHTML = '<i class="bi bi-volume-mute-fill"></i>';
                    } else {
                        btn.innerHTML = '<i class="bi bi-volume-up-fill"></i>';
                    }
                }

                localStorage.setItem('bg_music_volume', percent);

                const volumeEvent = new CustomEvent('bgVolumeChanged', { detail: { volume: percent } });
                window.dispatchEvent(volumeEvent);
                if (window.parent) {
                    window.parent.dispatchEvent(new CustomEvent('bgVolumeChanged', { detail: { volume: percent } }));
                }
            }
        })();
    }

    startGame() {
        if (this.gameActive) return;
        this.gameActive = true;
        if (typeof GameEngine !== 'undefined') {
            GameEngine.lives = 3;
            GameEngine.updateLivesDisplay();
        }

        this.gameScore = 0;
        this.timeLeft = this.data.durationSeconds || 60;
        this.speedMultiplier = 1.0;
        this.hasClickedBubble = false;

        this.updateScoreUI();
        this.updateTimerUI();

        this.startSoundLoop();
        this.gameLoop();

        this.timerInterval = setInterval(() => {
            if (!this.gameActive) return;
            this.timeLeft--;
            this.updateTimerUI();
            if (this.timeLeft <= 0) {
                this.endGame();
            }
        }, 1000);

        this.spawnIntervalId = setInterval(() => {
            if (!this.gameActive) return;
            const container = document.getElementById('game-board');
            if (!container || container.offsetWidth < 100) return;

            if (this.bubbles.length < 10) {
                this.spawnBubble();
            }
            if (this.decorativeFish.length < 4 && Math.random() < 0.2) {
                this.spawnFish();
            }
        }, 800);
    }

    startSoundLoop() {
        this.stopSoundLoop();

        if (this.gameActive && this.data.audio.loopSound) {
            const soundPath = window.ASSETS_PATH + 'audio/' + this.data.folderPrefix + '/' + this.data.audio.loopSound;
            const initialSnd = new Audio(soundPath);
            initialSnd.play().catch(e => console.warn("Initial loop sound error", e));
        }

        this.soundLoopInterval = setInterval(() => {
            if (!this.gameActive) return;
            if (this.data.audio.loopSound) {
                const soundPath = window.ASSETS_PATH + 'audio/' + this.data.folderPrefix + '/' + this.data.audio.loopSound;
                const eAudio = new Audio(soundPath);
                eAudio.play().catch(e => console.warn("Periodic loop sound error", e));
            }
        }, 8000);
    }

    stopSoundLoop() {
        if (this.soundLoopInterval) {
            clearInterval(this.soundLoopInterval);
            this.soundLoopInterval = null;
        }
    }

    updateScoreUI() {
        document.getElementById('scoreDisplay').innerText = this.gameScore;
        if (this.gameScore >= 60) this.speedMultiplier = 2.0;
        else if (this.gameScore >= 40) this.speedMultiplier = 1.6;
        else if (this.gameScore >= 20) this.speedMultiplier = 1.3;
        else this.speedMultiplier = 1.0;
    }

    updateTimerUI() {
        const timerDisplay = document.getElementById('timerDisplay');
        if (timerDisplay) timerDisplay.innerText = this.timeLeft;
    }

    gameLoop() {
        if (!this.gameActive) {
            // Keep loop alive even when paused
            this.animationFrameId = requestAnimationFrame(() => this.gameLoop());
            return;
        }

        // Update Bubbles
        for (let i = this.bubbles.length - 1; i >= 0; i--) {
            if (!this.bubbles[i].update()) {
                this.bubbles[i].remove();
                this.bubbles.splice(i, 1);
            }
        }

        // Update Fish
        for (let i = this.decorativeFish.length - 1; i >= 0; i--) {
            if (!this.decorativeFish[i].update()) {
                this.decorativeFish[i].remove();
                this.decorativeFish.splice(i, 1);
            }
        }

        this.animationFrameId = requestAnimationFrame(() => this.gameLoop());
    }

    endGame(title, msg) {
        this.gameActive = false;
        clearInterval(this.spawnIntervalId);
        clearInterval(this.timerInterval);
        this.stopSoundLoop();
        cancelAnimationFrame(this.animationFrameId);

        // Cleanup DOM bubbles
        this.bubbles.forEach(b => b.remove());
        this.bubbles = [];

        if (this.gameScore > 0) {
            title = title || "Harikasın!";
            msg = msg || "Gayretin için tebrikler.";
        } else {
            title = "Yeniden Dene";
            msg = "Tekrar denemeye ne dersin?";
        }

        document.getElementById('end-title').innerText = title;
        document.getElementById('end-message').innerText = msg;
        document.getElementById('final-score').innerText = this.gameScore;

        if (this.gameScore > 0) {
            this.audioCongrats.currentTime = 0;
            this.audioCongrats.play().catch(e => console.error(e));
        } else {
            this.audioTryAgain.currentTime = 0;
            this.audioTryAgain.play().catch(e => console.error(e));
        }

        document.getElementById('game-over-screen').classList.remove('hidden');
    }

    spawnFish() {
        const container = document.getElementById('game-board');
        if (!container) return;

        const fish = {
            element: document.createElement('div'),
            x: 0,
            y: 0,
            vx: 0,
            update: null,
            remove: null
        };

        fish.element.className = 'fish';
        fish.element.innerText = this.fishEmojis[Math.floor(Math.random() * this.fishEmojis.length)];

        const fromRight = Math.random() > 0.5;
        const size = 60 + Math.random() * 50;
        fish.element.style.fontSize = `${size}px`;

        const containerH = container.offsetHeight;
        const containerW = container.offsetWidth;

        fish.y = 100 + Math.random() * (containerH - 200);
        fish.vx = fromRight ? -(0.5 + Math.random()) : (0.5 + Math.random());
        fish.x = fromRight ? containerW + 50 : -150;

        if (fish.vx > 0) fish.element.style.transform = 'scaleX(-1)';
        else fish.element.style.transform = 'scaleX(1)';

        container.appendChild(fish.element);

        fish.update = () => {
            fish.x += fish.vx;
            fish.element.style.left = `${fish.x}px`;
            fish.element.style.top = `${fish.y}px`;

            if ((fish.vx > 0 && fish.x > container.offsetWidth + 100) ||
                (fish.vx < 0 && fish.x < -200)) {
                return false;
            }
            return true;
        };

        fish.remove = () => {
            if (fish.element.parentNode) fish.element.parentNode.removeChild(fish.element);
        };

        this.decorativeFish.push(fish);
    }

    spawnBubble() {
        const container = document.getElementById('game-board');
        if (!container) return;

        const isTarget = Math.random() < 0.4;
        let char;

        if (isTarget) {
            char = Math.random() > 0.5 ? this.data.targetCharUpper : this.data.targetCharLower;
        } else {
            const dist = this.data.distractionChars;
            char = dist[Math.floor(Math.random() * dist.length)];
            char = Math.random() > 0.5 ? char : char.toLocaleLowerCase('tr-TR');
        }

        const isActuallyTarget = (char.toLocaleUpperCase('tr-TR') === this.data.targetCharUpper.toLocaleUpperCase('tr-TR'));

        const bubble = {
            element: document.createElement('div'),
            x: 0, y: 0, vx: 0, vy: 0, size: 0, popped: false,
            update: null, remove: null
        };

        bubble.element.className = 'bubble';
        bubble.element.innerText = char;

        bubble.size = 90 + Math.random() * 40;
        bubble.element.style.width = `${bubble.size}px`;
        bubble.element.style.height = `${bubble.size}px`;
        bubble.element.style.fontSize = `${bubble.size * 0.5}px`;

        const maxX = Math.max(0, container.offsetWidth - bubble.size);
        bubble.x = Math.random() * maxX;
        bubble.y = container.offsetHeight + 10;

        bubble.vy = -(1.5 + Math.random() * 2) * this.speedMultiplier;
        bubble.vx = (Math.random() - 0.5) * 0.5;

        const handlePop = (e) => {
            e.preventDefault();
            if (!this.gameActive || bubble.popped) return;
            bubble.popped = true;
            this.hasClickedBubble = true;

            const rect = bubble.element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            if (isActuallyTarget) {
                this.gameScore++;
                this.updateScoreUI();

                this.audioCorrect.currentTime = 0;
                this.audioCorrect.play().catch(err => console.error(err));

                bubble.element.style.background = "rgba(164, 209, 58, 0.9)";
                bubble.element.style.transform += " scale(1.5)";
                bubble.element.style.opacity = "0";
                bubble.element.style.transition = "all 0.15s ease-out";

                if (window.confetti) {
                    confetti({
                        particleCount: 20, spread: 40,
                        origin: { x: centerX / window.innerWidth, y: centerY / window.innerHeight }
                    });
                }
            } else {
                this.showFloatFeedback(centerX, centerY, "❌", "feedback-wrong");
                this.audioWrong.currentTime = 0;
                this.audioWrong.play().catch(err => console.error(err));

                bubble.element.style.background = "rgba(255, 77, 109, 0.8)";

                if (typeof GameEngine !== 'undefined' && GameEngine.lives > 0) {
                    GameEngine.lives--;
                    GameEngine.updateLivesDisplay();
                }

                if (typeof GameEngine !== 'undefined' && GameEngine.lives <= 0) {
                    this.endGame();
                }
            }

            setTimeout(() => bubble.remove(), 200);
        };

        bubble.element.onmousedown = handlePop;
        bubble.element.ontouchstart = handlePop;

        container.appendChild(bubble.element);

        bubble.update = () => {
            bubble.x += bubble.vx;
            bubble.y += bubble.vy;

            if (bubble.x <= 0) {
                bubble.x = 0;
                bubble.vx = Math.abs(bubble.vx);
            } else if (bubble.x + bubble.size >= container.offsetWidth) {
                bubble.x = container.offsetWidth - bubble.size;
                bubble.vx = -Math.abs(bubble.vx);
            }

            bubble.element.style.transform = `translate(${bubble.x}px, ${bubble.y}px)`;

            if (bubble.y < -bubble.size - 50) {
                return false;
            }
            return true;
        };

        bubble.remove = () => {
            if (bubble.element.parentNode) bubble.element.parentNode.removeChild(bubble.element);
        };

        this.bubbles.push(bubble);
    }

    showFloatFeedback(x, y, text, cssClass) {
        const el = document.createElement('div');
        el.className = `floating-feedback ${cssClass}`;
        el.innerText = text;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        document.body.appendChild(el);
        setTimeout(() => { if (el.parentNode) el.parentNode.removeChild(el); }, 1000);
    }
}

function initApp() {
    if (typeof HarfiTaniyalimData !== 'undefined') {
        window.activeHarfEngine = new HarfTaniyalimEngine(HarfiTaniyalimData);
    } else {
        console.error("HarfiTaniyalimData is not defined. Load data.js before engine.js");
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(initApp, 100);
    });
} else {
    setTimeout(initApp, 100);
}
