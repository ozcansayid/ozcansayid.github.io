/**
 * Ritmik Okuma - Core Engine
 * Rhythmic reading game: click boxes to hear syllables, auto-play sequence.
 */
class RitmikOkumaEngine {
    constructor(data) {
        this.data = data;
        this.mountPoint = document.getElementById('game-mount-point');
        this.currentLevel = 0;
        this.isAutoPlaying = false;
        this.activeAudio = null;
        this.initUI();
    }

    initUI() {
        const GAME_ASSETS = '../games/ritmik_okuma/assets/';
        const bgPath = window.ASSETS_PATH + 'img/' + this.data.folderPrefix + '/bg.jpg';

        this.mountPoint.innerHTML = `
        <div class="game-container-fixed" style="overflow:hidden;margin:0 auto;">
            <div class="sidebar-kid">
                <div class="sidebar-settings" style="background:transparent;padding:0;display:flex;justify-content:center;width:100%;">
                    <button id="btn-auto-play" class="round-toggle-btn" title="Otomatik Oynat">
                        <i class="bi bi-play-fill" id="auto-play-icon"></i>
                        <span>Oynat</span>
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
                    <h2 class="game-title">${this.data.title || 'Ritmik Okuma'}</h2>
                    <div class="game-nav">
                        <button class="btn-nav-flat btn-nav-home" id="btn-home" title="Anasayfa"><i class="bi bi-house-fill"></i></button>
                        <button class="btn-nav-flat" id="btn-prev" title="Önceki"><i class="bi bi-chevron-left"></i></button>
                        <button class="btn-nav-flat" id="btn-next" title="Sonraki"><i class="bi bi-chevron-right"></i></button>
                    </div>
                </div>
                <div class="game-board" style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.4)),url('${bgPath}') no-repeat center center;background-size:cover;">
                    <div class="rhythm-container" id="rhythm-container"></div>
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

        // Init intro
        if (typeof window.RitmikOkumaIntro !== 'undefined') {
            window.RitmikOkumaIntro.init(this.data);
        }
    }

    startGame() {
        this.initLevel(0);
    }

    initLevel(index) {
        this.stopAutoPlay();
        this.currentLevel = index;

        const levels = this.data.levels;
        const container = document.getElementById('rhythm-container');
        const pageIndicator = document.getElementById('page-indicator');
        const btnPrev = document.getElementById('btn-prev-level');
        const btnNext = document.getElementById('btn-next-level');

        if (!container) return;

        pageIndicator.innerText = `${this.currentLevel + 1} / ${levels.length}`;
        btnPrev.disabled = (this.currentLevel === 0);
        btnNext.disabled = (this.currentLevel === levels.length - 1);

        container.innerHTML = '';
        const levelData = levels[this.currentLevel];

        levelData.text.forEach((word, idx) => {
            const box = document.createElement('div');
            box.className = 'rhythm-box animate-pop';
            box.innerText = word;
            box.onclick = () => this.playBox(box, levelData.audio[idx]);
            container.appendChild(box);
        });

        this.updateAutoPlayUI(false);
    }

    changeLevel(delta) {
        const newIndex = this.currentLevel + delta;
        if (newIndex >= 0 && newIndex < this.data.levels.length) {
            this.initLevel(newIndex);
        }
    }

    playBox(element, audioFile) {
        if (this.activeAudio) {
            this.activeAudio.pause();
            this.activeAudio.currentTime = 0;
        }

        document.querySelectorAll('.rhythm-box').forEach(b => b.classList.remove('active'));
        element.classList.add('active');

        const audioPath = window.ASSETS_PATH + 'audio/' + this.data.folderPrefix + '/' + audioFile;
        this.activeAudio = new Audio(audioPath);

        this.activeAudio.onended = () => {
            element.classList.remove('active');
        };

        this.activeAudio.play().catch(e => console.error(e));
    }

    toggleAutoPlay() {
        if (this.isAutoPlaying) {
            this.stopAutoPlay();
        } else {
            this.startAutoPlay();
        }
    }

    startAutoPlay() {
        this.isAutoPlaying = true;
        this.updateAutoPlayUI(true);

        const boxes = document.querySelectorAll('.rhythm-box');
        const levelData = this.data.levels[this.currentLevel];

        this.playSequenceStep(0, boxes, levelData);
    }

    playSequenceStep(index, boxes, levelData) {
        if (!this.isAutoPlaying) return;
        if (index >= boxes.length) {
            this.stopAutoPlay();
            return;
        }

        const box = boxes[index];
        const audioFile = levelData.audio[index];

        document.querySelectorAll('.rhythm-box').forEach(b => b.classList.remove('active'));
        box.classList.add('active');

        if (this.activeAudio) {
            this.activeAudio.pause();
        }

        const audioPath = window.ASSETS_PATH + 'audio/' + this.data.folderPrefix + '/' + audioFile;
        this.activeAudio = new Audio(audioPath);

        this.activeAudio.onended = () => {
            box.classList.remove('active');
            if (this.isAutoPlaying) {
                this.playSequenceStep(index + 1, boxes, levelData);
            }
        };

        this.activeAudio.play().catch(e => {
            console.error("Auto play error", e);
            this.stopAutoPlay();
        });
    }

    stopAutoPlay() {
        this.isAutoPlaying = false;
        if (this.activeAudio) {
            this.activeAudio.pause();
            this.activeAudio.currentTime = 0;
        }
        document.querySelectorAll('.rhythm-box').forEach(b => b.classList.remove('active'));
        this.updateAutoPlayUI(false);
    }

    updateAutoPlayUI(isActive) {
        const btnAutoPlay = document.getElementById('btn-auto-play');
        if (!btnAutoPlay) return;

        const icon = document.getElementById('auto-play-icon');
        const span = btnAutoPlay.querySelector('span');

        if (isActive) {
            btnAutoPlay.classList.add('active');
            icon.className = 'bi bi-pause-fill';
            span.innerText = "Durdur";
        } else {
            btnAutoPlay.classList.remove('active');
            icon.className = 'bi bi-play-fill';
            span.innerText = "Oynat";
        }
    }

    bindEvents() {
        document.getElementById('btn-auto-play').addEventListener('click', () => this.toggleAutoPlay());
        document.getElementById('btn-prev-level').addEventListener('click', () => this.changeLevel(-1));
        document.getElementById('btn-next-level').addEventListener('click', () => this.changeLevel(1));

        // Sidebar
        document.getElementById('btn-restart').onclick = () => location.reload();
        document.getElementById('btn-instruction').onclick = () => {
            if (typeof window.RitmikOkumaInstruction !== 'undefined') window.RitmikOkumaInstruction.init();
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
    if (window.activeRitmikOkumaEngine) window.activeRitmikOkumaEngine.startGame();
};

function initApp() {
    if (typeof RitmikOkumaData !== 'undefined') {
        window.activeRitmikOkumaEngine = new RitmikOkumaEngine(RitmikOkumaData);
    } else { console.error("RitmikOkumaData is not defined."); }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initApp);
else initApp();
