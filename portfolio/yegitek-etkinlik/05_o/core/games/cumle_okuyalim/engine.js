/**
 * Cümle Okuyalım - Core Engine
 */
class CumleOkuyalimEngine {
    constructor(data) {
        this.data = data;
        this.mountPoint = document.getElementById('game-mount-point');
        this.currentLevel = 0;
        this.activeAudio = null;
        this.initUI();
    }

    initUI() {
        // Fixed background image from core/games/cumle_okuyalim/assets/img
        const bgPath = '../games/cumle_okuyalim/assets/img/bg.jpg';

        this.mountPoint.innerHTML = `
        <div class="game-container-fixed" style="overflow:hidden;margin:0 auto;">
            <div class="sidebar-kid">
                <div class="sidebar-settings" style="background:transparent;padding:0;display:flex;justify-content:center;width:100%;">
                    <button id="btn-auto-play" class="round-toggle-btn" title="Cümleyi Dinle">
                        <i class="bi bi-play-fill" id="auto-play-icon"></i>
                        <span>Dinle</span>
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
                    <h2 class="game-title">${this.data.title || 'Cümle Okuyalım'}</h2>
                    <div class="game-nav">
                        <button class="btn-nav-flat btn-nav-home" id="btn-home" title="Anasayfa"><i class="bi bi-house-fill"></i></button>
                        <button class="btn-nav-flat" id="btn-prev" title="Önceki"><i class="bi bi-chevron-left"></i></button>
                        <button class="btn-nav-flat" id="btn-next" title="Sonraki"><i class="bi bi-chevron-right"></i></button>
                    </div>
                </div>
                <div class="game-board" style="background:url('${bgPath}') no-repeat center center;background-size:cover;">
                    <div class="rhythm-container" id="sentence-container">
                        <div class="sentence-box" id="sentence-box"></div>
                    </div>
                    <div class="level-nav-container">
                        <button class="btn-level-nav" id="btn-prev-level"><i class="bi bi-chevron-left"></i></button>
                        <span id="page-indicator" style="font-size:1.5rem;font-weight:bold;color:white;background:rgba(0,0,0,0.2);padding:5px 15px;border-radius:15px;">1 / 1</span>
                        <button class="btn-level-nav" id="btn-next-level"><i class="bi bi-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
        `;

        this.bindEvents();

        if (window.GameEngine) window.GameEngine.resize();

        // No intro needed for now unless specified
        if (typeof window.CumleOkuyalimIntro !== 'undefined') {
            window.CumleOkuyalimIntro.init(this.data);
        } else {
            this.startGame();
        }
    }

    startGame() {
        this.initLevel(0);
    }

    initLevel(index) {
        if (this.activeAudio) {
            this.activeAudio.pause();
            this.activeAudio.currentTime = 0;
        }

        this.currentLevel = index;

        const levels = this.data.levels;
        const sentenceBox = document.getElementById('sentence-box');
        const pageIndicator = document.getElementById('page-indicator');
        const btnPrev = document.getElementById('btn-prev-level');
        const btnNext = document.getElementById('btn-next-level');

        if (!sentenceBox) return;

        pageIndicator.innerText = `${this.currentLevel + 1} / ${levels.length}`;
        btnPrev.disabled = (this.currentLevel === 0);
        btnNext.disabled = (this.currentLevel === levels.length - 1);

        sentenceBox.innerHTML = '';

        const levelData = levels[this.currentLevel];
        const sentence = levelData.text;
        const words = sentence.split(' ');

        // Determine prefix for this level (1-indexed), e.g., '01'
        const levelPrefix = String(this.currentLevel + 1).padStart(2, '0');

        words.forEach((word, idx) => {
            const span = document.createElement('span');
            span.className = 'word animate-pop';
            span.innerText = word;

            // Generate e.g. "01_01.mp3"
            const wordSuffix = String(idx + 1).padStart(2, '0');
            const audioFileName = `${levelPrefix}_${wordSuffix}.mp3`;

            // Store the audio filename on the element for sequential playback
            span.dataset.audio = audioFileName;

            span.onclick = () => this.playWord(span, audioFileName);
            sentenceBox.appendChild(span);
        });

        this.updatePlayUI(false);
    }

    changeLevel(delta) {
        const newIndex = this.currentLevel + delta;
        if (newIndex >= 0 && newIndex < this.data.levels.length) {
            this.initLevel(newIndex);
        }
    }

    playWord(element, audioFile) {
        if (this.activeAudio) {
            this.activeAudio.pause();
            this.activeAudio.currentTime = 0;
        }

        document.querySelectorAll('.word').forEach(w => w.classList.remove('active'));
        element.classList.add('active');

        // Words audio path typically in the games specific audio folder
        const audioPath = window.ASSETS_PATH + 'audio/' + this.data.folderPrefix + '/' + audioFile;
        this.activeAudio = new Audio(audioPath);

        this.activeAudio.onended = () => {
            element.classList.remove('active');
        };

        this.activeAudio.play().catch(e => {
            console.error("Audio play error", e);
            element.classList.remove('active');
        });
    }

    playSentence() {
        if (this.activeAudio) {
            this.activeAudio.pause();
            this.activeAudio.currentTime = 0;
        }

        this.updatePlayUI(true);
        const sentenceBox = document.getElementById('sentence-box');
        const wordsElements = sentenceBox.querySelectorAll('.word');

        if (wordsElements.length === 0) {
            this.updatePlayUI(false);
            return;
        }

        this.playSequenceStep(0, wordsElements);
    }

    playSequenceStep(index, elements) {
        if (index >= elements.length) {
            this.updatePlayUI(false);
            return;
        }

        const span = elements[index];
        const audioFile = span.dataset.audio;

        document.querySelectorAll('.word').forEach(w => w.classList.remove('active'));
        span.classList.add('active');

        const audioPath = window.ASSETS_PATH + 'audio/' + this.data.folderPrefix + '/' + audioFile;
        this.activeAudio = new Audio(audioPath);

        this.activeAudio.onended = () => {
            span.classList.remove('active');

            // Proceed to the next word only if the play button wasn't toggled off
            const btnPlay = document.getElementById('btn-auto-play');
            if (btnPlay.classList.contains('active')) {
                this.playSequenceStep(index + 1, elements);
            }
        };

        this.activeAudio.play().catch(e => {
            console.error("Sentence play error", e);
            span.classList.remove('active');
            this.updatePlayUI(false);
        });
    }

    updatePlayUI(isActive) {
        const btnPlay = document.getElementById('btn-auto-play');
        if (!btnPlay) return;

        const icon = document.getElementById('auto-play-icon');
        const span = btnPlay.querySelector('span');

        if (isActive) {
            btnPlay.classList.add('active');
            icon.className = 'bi bi-pause-fill';
            span.innerText = "Durdur";
        } else {
            btnPlay.classList.remove('active');
            icon.className = 'bi bi-play-fill';
            span.innerText = "Dinle";
        }
    }

    bindEvents() {
        document.getElementById('btn-auto-play').addEventListener('click', () => {
            if (this.activeAudio && !this.activeAudio.paused) {
                this.activeAudio.pause();
                this.updatePlayUI(false);
            } else {
                this.playSentence();
            }
        });
        document.getElementById('btn-prev-level').addEventListener('click', () => this.changeLevel(-1));
        document.getElementById('btn-next-level').addEventListener('click', () => this.changeLevel(1));

        // Sidebar
        document.getElementById('btn-restart').onclick = () => location.reload();

        // Let's use generic instruction or ignore if none exists for this specific generic game
        document.getElementById('btn-instruction').onclick = () => {
            if (typeof window.CumleOkuyalimInstruction !== 'undefined') window.CumleOkuyalimInstruction.init();
        };

        if (window.GameNav) window.GameNav.bindNavButtons();
        this.initAudioSlider();
    }

    initAudioSlider() {
        const btn = document.getElementById('btn-audio-toggle');
        const popup = document.getElementById('audio-slider-container');
        const range = document.getElementById('volume-range');
        const valDisplay = document.getElementById('volume-val-display');
        let isOpen = false;
        const toggle = (show) => { if (!popup) return; if (show) popup.classList.add('show'); else popup.classList.remove('show'); };
        if (btn) {
            btn.onclick = (e) => { e.stopPropagation(); isOpen = !isOpen; toggle(isOpen); };
            document.addEventListener('click', (e) => { if (isOpen && popup && !popup.contains(e.target) && !btn.contains(e.target)) { isOpen = false; toggle(false); } });
        }
        const update = (val) => {
            if (!range) return; const p = Number(val);
            range.style.background = `linear-gradient(to right, #f1c40f ${p}%, #555 ${p}%)`;
            if (valDisplay) valDisplay.innerText = Math.round(p);
            if (btn) btn.innerHTML = p === 0 ? '<i class="bi bi-volume-mute-fill"></i>' : '<i class="bi bi-volume-up-fill"></i>';
            localStorage.setItem('bg_music_volume', p);
            window.dispatchEvent(new CustomEvent('bgVolumeChanged', { detail: { volume: p } }));
        };
        if (range) {
            range.oninput = function () { update(this.value); };
            const sv = localStorage.getItem('bg_music_volume');
            range.value = sv !== null ? Number(sv) : 20; update(range.value);
        }
    }
}

window.startGame = function () {
    if (window.activeCumleOkuyalimEngine) window.activeCumleOkuyalimEngine.startGame();
};

function initApp() {
    if (typeof CumleOkuyalimData !== 'undefined') {
        window.activeCumleOkuyalimEngine = new CumleOkuyalimEngine(CumleOkuyalimData);
    } else { console.error("CumleOkuyalimData is not defined."); }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initApp);
else initApp();
