/**
 * Sözcüğü Okuyalım - Core Engine
 * Listen to the word/syllable, click the correct egg to crack it and reveal a chick.
 */
class SozcuguOkuyalimEngine {
    constructor(data) {
        this.data = data;
        this.mountPoint = document.getElementById('game-mount-point');
        this.currentLevel = 0;
        this.score = 0;
        this.totalLevels = data.levels.length;
        this.loopAudioTimer = null;
        this.loopAudio = null;
        this.isProcessing = false;

        this.initUI();
    }

    initUI() {
        const GAME_ASSETS = '../games/sozcugu_okuyalim/assets/';

        this.mountPoint.innerHTML = `
        <div class="game-container-fixed" style="overflow:hidden;margin:0 auto;">
            <div class="sidebar-kid">
                <div class="lives-container" style="background:var(--card-bg);padding:15px;border-radius:20px;text-align:center;">
                    <div class="lives-label">DÜZEY</div>
                    <div style="font-size:2rem;color:var(--primary-color);font-weight:700;margin-bottom:10px;" id="levelDisplay">1/${this.totalLevels}</div>
                    
                    <div class="lives-label mt-2"></div>
                    
                    <button class="btn btn-kid w-100 p-2 d-flex align-items-center justify-content-center" id="btn-replay-sound" title="Sesi Tekrar Çal"
                        style="border-radius:15px;background-color:#FFC107;color:white;border:none;">
                        <i class="bi bi-volume-up-fill fs-3"></i>
                    </button>
                </div>

                <div class="nav-buttons-container" style="position:relative;overflow:visible !important; margin-top: auto;">
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
                    <h2 class="game-title">${this.data.title || 'Sözcüğü Okuyalım'}</h2>
                    <div class="game-nav">
                        <button class="btn-nav-flat btn-nav-home" id="btn-home" title="Anasayfa"><i class="bi bi-house-fill"></i></button>
                        <button class="btn-nav-flat" id="btn-prev" title="Önceki"><i class="bi bi-chevron-left"></i></button>
                        <button class="btn-nav-flat" id="btn-next" title="Sonraki"><i class="bi bi-chevron-right"></i></button>
                    </div>
                </div>
                <div class="egg-game-board" id="eggGameBoard">
                    <div class="eggs-container" id="eggsContainer"></div>

                    <!-- End screen -->
                    <div id="game-over-screen" class="game-overlay hidden">
                        <h2 class="display-4 mb-4" style="color:#2ec4b6;">🐣 Harikasın!</h2>
                        <p class="lead mb-4" style="font-size:1.5rem;">Tüm yumurtaları kırdın!</p>
                        <button class="btn btn-kid btn-primary-kid" id="btn-replay-game" style="font-size:1.5rem;padding:15px 40px;">
                            Tekrar Oyna <i class="bi bi-arrow-counterclockwise"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;

        this.eggsContainer = document.getElementById('eggsContainer');
        this.scoreDisplay = document.getElementById('eggScore');
        this.levelDisplay = document.getElementById('levelDisplay');

        this.bindEvents();
        if (window.GameEngine) window.GameEngine.resize();

        // Init intro
        if (typeof window.SozcuguOkuyalimIntro !== 'undefined') {
            window.SozcuguOkuyalimIntro.init(this.data);
        }
    }

    startGame() {
        this.loadLevel();
    }

    loadLevel() {
        if (this.currentLevel >= this.totalLevels) {
            this.victory();
            return;
        }

        const level = this.data.levels[this.currentLevel];
        this.isProcessing = false;

        // Clear container
        this.eggsContainer.innerHTML = '';

        // Create 5 eggs
        const eggs = level.options.map((opt, i) => {
            const isCorrect = opt.text === level.target;
            return this.createEgg(opt.text, isCorrect, i);
        });

        // Shuffle eggs visually
        const shuffled = eggs.sort(() => Math.random() - 0.5);
        shuffled.forEach(egg => this.eggsContainer.appendChild(egg));

        // Update instruction
        if (this.levelDisplay) {
            this.levelDisplay.innerText = `${this.currentLevel + 1}/${this.totalLevels}`;
        }

        // Play target audio
        setTimeout(() => this.playTargetAudio(), 500);

        // Setup loop audio
        this.setupLoopAudio();
    }

    createEgg(text, isCorrect, index) {
        const wrapper = document.createElement('div');
        wrapper.className = 'egg-wrapper';
        wrapper.setAttribute('data-correct', isCorrect);
        wrapper.setAttribute('data-text', text);

        // Egg colors - different tints for variety
        const eggColors = [
            { main: '#FFF8E1', spot: '#FFE0B2', outline: '#FFCC80' },
            { main: '#E8F5E9', spot: '#C8E6C9', outline: '#A5D6A7' },
            { main: '#E3F2FD', spot: '#BBDEFB', outline: '#90CAF9' },
            { main: '#FCE4EC', spot: '#F8BBD0', outline: '#F48FB1' },
            { main: '#F3E5F5', spot: '#E1BEE7', outline: '#CE93D8' }
        ];
        const color = eggColors[index % eggColors.length];

        wrapper.innerHTML = `
            <div class="egg-svg-container">
                <svg class="egg-svg" viewBox="0 -80 120 280" width="300" height="500" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="eggGrad${index}" cx="40%" cy="35%" r="60%">
                            <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9"/>
                            <stop offset="50%" stop-color="${color.main}"/>
                            <stop offset="100%" stop-color="${color.outline}"/>
                        </radialGradient>
                        <clipPath id="topClip${index}">
                            <polygon points="-10,-80 130,-80 130,82 108,82 100,78 90,84 80,77 70,83 60,76 50,84 40,77 30,85 22,78 12,82 0,82 -10,82"/>
                        </clipPath>
                        <clipPath id="bottomClip${index}">
                            <polygon points="-10,200 130,200 130,82 108,82 100,78 90,84 80,77 70,83 60,76 50,84 40,77 30,85 22,78 12,82 0,82 -10,82"/>
                        </clipPath>
                    </defs>

                    <!-- 1. Chick (drawn FIRST = behind everything) -->
                    <g class="chick-body" id="chick-${index}">
                        <!-- Smaller body so it doesn't leak outside the shell rx=50 -->
                        <ellipse cx="60" cy="110" rx="34" ry="46" fill="#FFD54F"/>
                        <ellipse cx="60" cy="108" rx="30" ry="42" fill="#FFEB3B"/>
                        <!-- Belly highlight -->
                        <ellipse cx="60" cy="116" rx="18" ry="24" fill="#FFF176" opacity="0.5"/>
                        <!-- Wings (brought in to fit rx=50 bounds) -->
                        <ellipse cx="28" cy="100" rx="12" ry="18" fill="#FFD54F" transform="rotate(-15,28,100)"/>
                        <ellipse cx="30" cy="100" rx="8" ry="14" fill="#FFCA28" transform="rotate(-15,30,100)"/>
                        <ellipse cx="92" cy="100" rx="12" ry="18" fill="#FFD54F" transform="rotate(15,92,100)"/>
                        <ellipse cx="90" cy="100" rx="8" ry="14" fill="#FFCA28" transform="rotate(15,90,100)"/>
                        <!-- Feet -->
                        <ellipse cx="50" cy="140" rx="6" ry="3" fill="#FF8F00"/>
                        <ellipse cx="70" cy="140" rx="6" ry="3" fill="#FF8F00"/>

                        <!-- Head (smaller) -->
                        <circle cx="60" cy="62" r="24" fill="#FFD54F"/>
                        <circle cx="60" cy="60" r="20" fill="#FFEB3B"/>
                        <!-- Eyes -->
                        <circle class="chick-eye" cx="51" cy="56" r="4" fill="#333"/>
                        <circle class="chick-eye" cx="69" cy="56" r="4" fill="#333"/>
                        <circle cx="52" cy="54.5" r="1.5" fill="#fff"/>
                        <circle cx="70" cy="54.5" r="1.5" fill="#fff"/>
                        <!-- Eyelids for blink -->
                        <ellipse class="chick-eyelid" cx="51" cy="56" rx="5" ry="0" fill="#FFEB3B"/>
                        <ellipse class="chick-eyelid" cx="69" cy="56" rx="5" ry="0" fill="#FFEB3B"/>
                        <!-- Beak -->
                        <polygon points="54,64 66,64 60,72" fill="#FF8F00"/>
                        <line x1="54" y1="64" x2="66" y2="64" stroke="#E65100" stroke-width="1.5"/>
                        <!-- Blush -->
                        <ellipse cx="43" cy="63" rx="5" ry="3" fill="#FFAB91" opacity="0.5"/>
                        <ellipse cx="77" cy="63" rx="5" ry="3" fill="#FFAB91" opacity="0.5"/>
                        <!-- Hair tuft -->
                        <path d="M57,38 Q60,30 63,38" fill="none" stroke="#FFB300" stroke-width="3" stroke-linecap="round"/>
                        <path d="M53,41 Q55,34 57,41" fill="none" stroke="#FFB300" stroke-width="2" stroke-linecap="round"/>
                        <path d="M63,41 Q65,34 67,41" fill="none" stroke="#FFB300" stroke-width="2" stroke-linecap="round"/>
                    </g>

                    <!-- 2. Bottom half (covers chick body) -->
                    <g class="egg-bottom-half">
                        <g clip-path="url(#bottomClip${index})">
                            <ellipse cx="60" cy="95" rx="50" ry="65" fill="url(#eggGrad${index})" stroke="${color.outline}" stroke-width="3"/>
                            <ellipse cx="45" cy="125" rx="7" ry="5" fill="${color.spot}" opacity="0.5"/>
                            <ellipse cx="72" cy="115" rx="5" ry="4" fill="${color.spot}" opacity="0.4"/>
                            <!-- Zigzag crack edge bottom -->
                            <path class="crack-line" d="M12,82 L22,78 L30,85 L40,77 L50,84 L60,76 L70,83 L80,77 L90,84 L100,78 L108,82"
                                  fill="none" stroke="${color.outline}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0"/>
                        </g>
                    </g>

                    <!-- 3. Top half (covers chick head, lifts on crack) -->
                    <g class="egg-top-half">
                        <g clip-path="url(#topClip${index})">
                            <ellipse cx="60" cy="95" rx="50" ry="65" fill="url(#eggGrad${index})" stroke="${color.outline}" stroke-width="3"/>
                            <!-- Spots -->
                            <ellipse cx="40" cy="55" rx="8" ry="6" fill="${color.spot}" opacity="0.6"/>
                            <ellipse cx="78" cy="68" rx="6" ry="5" fill="${color.spot}" opacity="0.5"/>
                            <ellipse cx="55" cy="40" rx="5" ry="4" fill="${color.spot}" opacity="0.4"/>
                            <!-- Zigzag crack edge top -->
                            <path class="crack-line" d="M12,82 L22,78 L30,85 L40,77 L50,84 L60,76 L70,83 L80,77 L90,84 L100,78 L108,82"
                                  fill="none" stroke="${color.outline}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0"/>
                        </g>
                    </g>
                    
                    <!-- Invisible hitbox covering exact egg shape -->
                    <ellipse class="egg-hitbox" cx="60" cy="95" rx="50" ry="65" fill="transparent" style="pointer-events: all; cursor: pointer;"/>
                </svg>
            </div>
            <span class="egg-text">${text}</span>
        `;

        wrapper.addEventListener('click', () => this.onEggClick(wrapper, isCorrect, index));

        return wrapper;
    }

    onEggClick(wrapper, isCorrect, index) {
        if (this.isProcessing || wrapper.classList.contains('cracked')) return;

        if (isCorrect) {
            this.isProcessing = true;
            this.clearLoopAudio();

            // Play crack sound
            const crackAudio = this.playSound('crack');

            // Step 1: Show crack lines
            setTimeout(() => {
                const crackLines = wrapper.querySelectorAll('.crack-line');
                crackLines.forEach(line => {
                    line.style.transition = 'opacity 0.3s ease';
                    line.style.opacity = '1';
                });

                // Step 2: Chick rises, pushing top half up
                setTimeout(() => {
                    wrapper.classList.add('cracking');
                    wrapper.classList.add('cracked');

                    // Start blink animation
                    this.startChickBlink(wrapper);

                    // Play correct sound when crack finishes
                    const playCorrectSequence = () => {
                        this.playSound('correct');
                        this.score++;
                        setTimeout(() => {
                            this.currentLevel++;
                            this.loadLevel();
                        }, 2000);
                    };

                    if (crackAudio) {
                        crackAudio.onended = playCorrectSequence;
                    } else {
                        playCorrectSequence();
                    }
                }, 300);
            }, 150);

        } else {
            // Wrong answer
            this.playSound('wrong');
            wrapper.classList.add('egg-shake');
            this.showScorePopup(wrapper, false);
            setTimeout(() => wrapper.classList.remove('egg-shake'), 600);
        }
    }

    startChickBlink(wrapper) {
        const eyelids = wrapper.querySelectorAll('.chick-eyelid');
        if (!eyelids.length) return;

        const doBlink = () => {
            // Close eyes
            eyelids.forEach(lid => lid.setAttribute('ry', '5.5'));
            // Open eyes after 150ms
            setTimeout(() => {
                eyelids.forEach(lid => lid.setAttribute('ry', '0'));
            }, 150);
        };

        // First blink after 800ms, then every 2.5s
        setTimeout(doBlink, 800);
        const blinkInterval = setInterval(doBlink, 2500);
        // Clean up when leaving level
        setTimeout(() => clearInterval(blinkInterval), 5000);
    }

    showScorePopup(wrapper, isCorrect) {
        const popup = document.createElement('div');
        popup.className = `score-popup ${isCorrect ? 'correct' : 'wrong'}`;
        popup.textContent = isCorrect ? '+1' : '-';
        popup.style.left = '50%';
        popup.style.top = '30%';
        popup.style.transform = 'translateX(-50%)';
        wrapper.appendChild(popup);
        setTimeout(() => popup.remove(), 800);
    }

    playTargetAudio() {
        const level = this.data.levels[this.currentLevel];
        if (!level) return;

        const assetsBase = window.ASSETS_PATH || '../../assets/';
        const audioPath = `${assetsBase}audio/${this.data.folderPrefix}/${level.audio}`;

        if (this.currentTargetAudio) {
            this.currentTargetAudio.pause();
        }

        this.currentTargetAudio = new Audio(audioPath);
        this.currentTargetAudio.play().catch(() => {});
    }

    setupLoopAudio() {
        this.clearLoopAudio();
        this.loopAudioTimer = setInterval(() => {
            if (!this.isProcessing) {
                this.playTargetAudio();
            }
        }, 8000);
    }

    clearLoopAudio() {
        if (this.loopAudioTimer) {
            clearInterval(this.loopAudioTimer);
            this.loopAudioTimer = null;
        }
    }

    playSound(type) {
        const GAME_ASSETS = '../games/sozcugu_okuyalim/assets/audio/';
        let file;
        switch(type) {
            case 'correct': file = 'correct.mp3'; break;
            case 'wrong': file = 'wrong.mp3'; break;
            case 'crack': file = 'crack.mp3'; break;
            case 'congratulations': file = 'congratulations.mp3'; break;
            default: return null;
        }
        const audio = new Audio(GAME_ASSETS + file);
        audio.play().catch(() => {});
        return audio;
    }

    victory() {
        this.clearLoopAudio();
        this.playSound('congratulations');
        if (window.confetti) {
            confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
        }
        document.getElementById('game-over-screen').classList.remove('hidden');
    }

    bindEvents() {
        document.getElementById('btn-restart').onclick = () => location.reload();
        document.getElementById('btn-replay-game').onclick = () => location.reload();
        document.getElementById('btn-replay-sound').onclick = () => this.playTargetAudio();
        document.getElementById('btn-instruction').onclick = () => {
            if (typeof window.SozcuguOkuyalimInstruction !== 'undefined') {
                window.SozcuguOkuyalimInstruction.init();
            }
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
    if (window.activeYumurtaEngine) window.activeYumurtaEngine.startGame();
};

function initApp() {
    if (typeof SozcuguOkuyalimData !== 'undefined') {
        window.activeYumurtaEngine = new SozcuguOkuyalimEngine(SozcuguOkuyalimData);
    } else {
        console.error("SozcuguOkuyalimData is not defined.");
    }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initApp);
else initApp();
