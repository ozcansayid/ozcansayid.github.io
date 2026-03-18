// Sesi Hissedelim Motoru (Core Engine)
class SesiHissedelimEngine {
    constructor(data) {
        this.data = data;
        this.init();
    }

    init() {
        this.renderHTML();
        this.initGameObj();
        this.initNavigation();
    }

    renderHTML() {
        const container = document.getElementById('game-mount-point');
        if (!container) return;

        const assetsBase = window.ASSETS_PATH || '../../assets/';
        const bgImg = `${assetsBase}img/${this.data.folderPrefix}/${this.data.background || 'bg.jpg'}`;

        container.innerHTML = `
<div class="game-container-fixed">

        <!-- Sidebar (Left) -->
        <div class="sidebar-kid">

            <!-- Top Section -->
            <div class="d-flex flex-column align-items-center gap-3 w-100">
                <div id="livesDisplay" style="display: none;"></div>
            </div>

            <!-- Bottom: Navigation Buttons -->
            <div class="nav-buttons-container"
                style="position: relative; overflow: visible !important; margin-top: auto;">

                <!-- Audio Control (TOP) -->
                <div class="position-relative mb-2 d-flex justify-content-center">

                    <!-- Slider Popup (Horizontal) -->
                    <div id="audio-slider-container" class="audio-slider-popup">
                        <div id="volume-val-display">20</div>
                        <div class="slider-track-wrapper">
                            <input type="range" id="volume-range" class="horizontal-range" min="0" max="100" value="20">
                        </div>
                    </div>

                    <!-- Toggle Button (Always Green, White Icon) -->
                    <button id="btn-audio-toggle" class="btn btn-kid btn-icon-only" title="Ses Ayarı"
                        style="background-color: #2ecc71 !important; color: white !important; border: none !important;">
                        <i class="bi bi-volume-up-fill"></i>
                    </button>

                </div>

                <button onclick="location.reload()" class="btn btn-kid btn-primary-kid btn-icon-only"
                    title="Yeniden Başlat">
                    <i class="bi bi-arrow-clockwise"></i>
                </button>

                <button class="btn btn-kid btn-info-kid btn-icon-only" title="Yönerge" onclick="SesiInstruction.init()">
                    <i class="bi bi-question-lg"></i>
                </button>

                <!-- Fullscreen -->
                <button id="btn-fullscreen" class="btn btn-kid btn-icon-only"
                    style="background-color: #6f42c1; color: white; border: none;" title="Tam Ekran">
                    <i class="bi bi-arrows-fullscreen"></i>
                </button>
            </div>

        </div>

        <!-- Main Content (Right) -->
        <div class="main-content-kid">

            <!-- Standard Game Header -->
            <div class="game-header">
                <h2 class="game-title">Sesi Hissedelim</h2>
                <div class="game-nav">

                    <button id="btn-home" class="btn-nav-flat btn-nav-home" title="Anasayfa">
                        <i class="bi bi-house-fill"></i>
                    </button>
                    <button id="btn-prev" class="btn-nav-flat" title="Önceki">
                        <i class="bi bi-chevron-left"></i>
                    </button>
                    <button id="btn-next" class="btn-nav-flat" title="Sonraki">
                        <i class="bi bi-chevron-right"></i>
                    </button>
                </div>
            </div>

            <div class="game-board-wrapper" id="game-board-bg"
                style="background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${bgImg}') no-repeat center center; background-size: cover; border-radius: 0 0 20px 20px; padding: 2rem;  flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">

                <div class="text-center mb-4">
                    <!-- Pagination (Numbers Only) -->
                    <div id="pageIndicator" class="display-6 fw-bold"
                        style="font-family: 'Quicksand', sans-serif; color: white;">
                        1 / 3
                    </div>

                    <!-- Question Text -->
                    <div class="question-text mt-3" id="questionText" style="background: rgba(255,255,255,0.9);">
                        ...
                    </div>
                </div>

                <!-- Cards -->
                <div class="cards-container" id="cardsContainer">
                    <!-- Dynamic -->
                </div>

                <!-- Controls -->
                <div class="controls-area justify-content-center mt-4 w-100">
                    <button class="btn btn-kid btn-primary-kid px-5 py-3" id="btnCheck"
                        onclick="SesiBulGame.checkAnswer()">
                        KONTROL ET
                    </button>

                    <button class="btn btn-kid btn-success-kid px-5 py-3 d-none" id="btnNext"
                        onclick="SesiBulGame.nextQuestion()">
                        İLERİ <i class="bi bi-arrow-right"></i>
                    </button>
                </div>

            </div>

        </div>

    </div>

    <!-- Custom Modal Structure (Hidden by default) -->
    <div id="custom-modal-template" style="display: none;">
        <div class="custom-modal-overlay"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); backdrop-filter: blur(5px) !important; z-index: 2000; display: flex; align-items: center; justify-content: center;">
            <div class="custom-modal-content"
                style="background: white; padding: 2.5rem; border-radius: 30px; box-shadow: 0 10px 40px rgba(0,0,0,0.3); text-align: center; max-width: 80%; border: 5px solid #2ec4b6;">
                <h2 class="modal-title display-6 fw-bold mb-4" style="color: #2c3e50;"></h2>
                <div class="modal-body-content mb-5" style="font-size: 1.5rem; color: #4a4a4a; line-height: 1.6;">
                </div>
                <div class="mt-4">
                    <button class="btn btn-primary-kid btn-lg px-5 py-3 rounded-pill shadow-sm fw-bold"
                        onclick="SesiBulGame.closeCustomModal()">TAMAM</button>
                </div>
            </div>
        </div>
    </div>`;
    }

    initGameObj() {
        // Override the image/audio paths to use the folderPrefix automatically
        // If data.js provided them with the prefix, that's fine too. But we can centralize it.
        // Wait, the data currently has the full relative path e.g. "03_i/03_i_01_sesi_hissedelim/01_01.mp3".
        // Let's just use it as is for now to ensure we don't break existing Data structure.

        window.SesiBulGame = {
            folderPrefix: this.data.folderPrefix,
            questions: this.data.questions,
            currentIndex: 0,
            lives: 3,
            maxLives: 3,
            selectedIndices: [],
            isAnswered: false,

            init: function () {
                // Resize handling
                GameEngine.resize();
                window.addEventListener('resize', () => GameEngine.resize());

                this.renderQuestion();
                // Ensure overlay is visible if re-initialized, though usually static in HTML
            },

            startGame: function () {
                const overlay = document.getElementById('startOverlay');
                if (overlay) {
                    overlay.style.transition = 'opacity 0.5s';
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.style.display = 'none';
                    }, 500);
                }
                // Stop instruction audio when game starts
                this.stopInstruction();
            },

            instructionAudio: null, // Track audio instance

            playInstruction: function () {
                if (this.instructionAudio) {
                    this.instructionAudio.pause();
                    this.instructionAudio.currentTime = 0;
                }
                this.instructionAudio = new Audio(window.ASSETS_PATH + 'audio/' + this.folderPrefix + '/instruction.mp3');

                const btnStart = document.getElementById('btnStartGame');

                this.instructionAudio.onended = () => {
                    if (btnStart) {
                        btnStart.disabled = false;
                        btnStart.style.opacity = '1';
                        btnStart.style.cursor = 'pointer';
                        btnStart.classList.add('pulse-animation'); // Optional
                    }
                };

                // Fallback Timer (15s)
                setTimeout(() => {
                    if (btnStart && btnStart.disabled) {
                        btnStart.disabled = false;
                        btnStart.style.opacity = '1';
                        btnStart.style.cursor = 'pointer';
                    }
                }, 15000);

                this.instructionAudio.play().catch(e => {
                    console.log("Auto-play prevented", e);
                    // If autoplay fails, enable button immediately so user isn't stuck
                    if (btnStart) {
                        btnStart.disabled = false;
                        btnStart.style.opacity = '1';
                        btnStart.style.cursor = 'pointer';
                    }
                });
            },

            stopInstruction: function () {
                if (this.instructionAudio) {
                    this.instructionAudio.pause();
                    this.instructionAudio.currentTime = 0;
                }
            },

            renderQuestion: function () {
                const q = this.questions[this.currentIndex];
                document.getElementById('questionText').innerText = q.text;
                document.getElementById('pageIndicator').innerText = `${this.currentIndex + 1} / ${this.questions.length}`;

                // Reset state
                this.selectedIndices = [];
                this.isAnswered = false;

                // UI Reset
                document.getElementById('btnCheck').classList.remove('d-none');
                document.getElementById('btnNext').classList.add('d-none');
                document.getElementById('btnCheck').disabled = false;

                const container = document.getElementById('cardsContainer');
                container.innerHTML = '';

                q.items.forEach((item, index) => {
                    // Wrapper for Card + Checkbox
                    const wrapper = document.createElement('div');
                    wrapper.className = 'card-wrapper';

                    // Card Item (Audio Only)
                    const card = document.createElement('div');
                    card.className = 'card-item';
                    card.onclick = (e) => {
                        e.stopPropagation();
                        this.playAudio(index);
                    };
                    const imgPath = item.image.includes('/') ? item.image : `${this.folderPrefix}/${item.image}`;
                    card.innerHTML = `
                        <img src="${window.ASSETS_PATH}img/${imgPath}" alt="${item.name}" onerror="this.src='https://placehold.co/300x300?text=${item.name}'">
                    `;

                    // Checkbox (Selection)
                    const checkbox = document.createElement('div');
                    checkbox.className = 'custom-checkbox';
                    checkbox.id = `checkbox-${index}`;
                    checkbox.onclick = () => this.toggleSelection(index);
                    checkbox.innerHTML = `<i class="bi bi-check-lg"></i>`;

                    wrapper.appendChild(card);
                    wrapper.appendChild(checkbox);
                    container.appendChild(wrapper);
                });
            },

            playAudio: function (index) {
                const item = this.questions[this.currentIndex].items[index];
                const audioPath = item.audio.includes('/') ? item.audio : `${this.folderPrefix}/${item.audio}`;
                const audio = new Audio(`${window.ASSETS_PATH}audio/${audioPath}`);
                audio.play().catch(e => console.log("Audio missing: " + item.audio));
            },

            toggleSelection: function (index) {
                if (this.isAnswered) return;

                const idxOf = this.selectedIndices.indexOf(index);
                if (idxOf === -1) {
                    this.selectedIndices.push(index);
                } else {
                    this.selectedIndices.splice(idxOf, 1);
                }
                this.updateCardStyles();
            },

            updateCardStyles: function () {
                const checkboxes = document.querySelectorAll('.custom-checkbox');
                checkboxes.forEach((box, index) => {
                    if (this.selectedIndices.includes(index)) {
                        box.classList.add('selected');
                    } else {
                        box.classList.remove('selected');
                    }
                });
            },

            checkAnswer: function () {
                if (this.isAnswered) return;

                console.log("Checking answer. Selected indices:", this.selectedIndices);

                const q = this.questions[this.currentIndex];
                const correctIndices = q.items
                    .map((item, i) => (item.isCorrect === true || item.isCorrect === "true") ? i : -1)
                    .filter(i => i !== -1);
                
                const userIndices = [...this.selectedIndices];

                const correctSorted = JSON.stringify(correctIndices.sort((a, b) => a - b));
                const userSorted = JSON.stringify(userIndices.sort((a, b) => a - b));

                console.log("Correct indices sorted:", correctSorted);
                console.log("User indices sorted:", userSorted);

                const isCorrect = correctSorted === userSorted;

                if (isCorrect) {
                    console.log("Answer is CORRECT");
                    const snd = new Audio(`../games/sesi_hissedelim/assets/audio/correct.mp3`);
                    snd.play().catch(e => console.warn('correct.mp3 missing', e));
                    this.handleSuccess();
                } else {
                    console.log("Answer is WRONG");
                    const snd = new Audio(`../games/sesi_hissedelim/assets/audio/wrong.mp3`);
                    snd.play().catch(e => console.warn('wrong.mp3 missing', e));
                    this.showFeedback("Yanlış cevap, tekrar dene!", "warning");
                }
            },

            handleSuccess: function () {
                this.isAnswered = true;
                document.getElementById('btnCheck').classList.add('d-none');
                document.getElementById('btnNext').classList.remove('d-none');

                // Show confetti
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 }
                });

                // Visual reveal
                this.revealAnswers();

                // Use Custom Modal for Success
                this.showCustomModal("Tebrikler!",
                    `<div class="text-center">
                        <i class="bi bi-star-fill text-warning" style="font-size: 4rem;"></i>
                        <div class="mt-3">Harikasın! Doğru cevapladın.</div>
                    </div>`
                );
            },

            revealAnswers: function () {
                const q = this.questions[this.currentIndex];
                const cards = document.querySelectorAll('.card-item');
                const checkboxes = document.querySelectorAll('.custom-checkbox');

                cards.forEach((card, index) => {
                    if (q.items[index].isCorrect) {
                        card.classList.add('correct-reveal');
                    } else {
                        card.classList.add('wrong-reveal');
                    }
                });

                // Disable checkboxes
                checkboxes.forEach(box => {
                    box.style.pointerEvents = 'none';
                    box.style.cursor = 'default';
                });
            },

            nextQuestion: function () {
                if (this.currentIndex < this.questions.length - 1) {
                    this.currentIndex++;
                    this.renderQuestion();
                } else {
                    // Game Over / Finish
                    this.showFinishScreen();
                }
            },
            showFinishScreen: function () {
                const snd = new Audio(`../games/sesi_hissedelim/assets/audio/harikasin_dogru_cevapladin.mp3`);
                snd.play().catch(e => console.log('harikasin.mp3 missing', e));

                const board = document.querySelector('.game-board-wrapper');
                board.innerHTML = `
                    <div class="text-center animate-pop text-white">
                        <i class="bi bi-trophy-fill text-warning" style="font-size: 8rem;"></i>
                        <h1 class="display-3 fw-bold mt-4 text-white">Tebrikler!</h1>
                        <p class="lead mb-5">Oyunu başarıyla tamamladın.</p>
                        <button onclick="location.reload()" class="btn btn-kid btn-primary-kid px-5 py-3">
                            <i class="bi bi-arrow-clockwise me-2"></i> Tekrar Oyna
                        </button>
                    </div>
                `;
            },

            showFeedback: function (msg, type) {
                // Use Custom Modal for Feedback
                this.showCustomModal("Yeniden Dene", msg);
                // If previously used GameEngine.showTryAgain, we are replacing it here for consistency in scaling
            },

            showCustomModal: function (title, content) {
                const wrapper = document.querySelector('.game-board') || document.querySelector('.game-board-wrapper') || document.body;
                if (!wrapper) return;

                // Remove existing if any
                const existing = document.getElementById('active-custom-modal');
                if (existing) existing.remove();

                // Template Handling
                const templateEl = document.getElementById('custom-modal-template');
                if (!templateEl) { console.warn('Modal template missing'); return; }

                const template = templateEl.firstElementChild.cloneNode(true);
                template.id = 'active-custom-modal';
                template.querySelector('.modal-title').innerText = title;
                template.querySelector('.modal-body-content').innerHTML = content;

                const modalBox = template.querySelector('.custom-modal-content');

                // STANDARD SIZE LOGIC
                if (title === "Nasıl Oynanır?") {
                    // Large Rectangle
                    modalBox.style.width = '900px';
                    modalBox.style.maxWidth = '95%';
                    modalBox.style.minHeight = '550px';
                    modalBox.style.height = 'auto';
                    modalBox.style.display = 'block'; // Default block for text flow
                    modalBox.style.padding = '3rem';
                } else {
                    // Feedback / Success / Fail (Square-ish)
                    modalBox.style.width = '500px';
                    modalBox.style.maxWidth = '90%';
                    modalBox.style.height = '500px';
                    modalBox.style.display = 'flex';
                    modalBox.style.flexDirection = 'column';
                    modalBox.style.justifyContent = 'center';
                    modalBox.style.alignItems = 'center';
                    modalBox.style.padding = '2rem';
                }

                wrapper.appendChild(template);
                if (typeof isPaused !== 'undefined') isPaused = true;
            },
            closeCustomModal: function () {
                const existing = document.getElementById('active-custom-modal');
                if (existing) existing.remove();

                // If audio instruction was playing for modal, stop it
                this.stopInstruction();
            },

            showInstructionModal: function () {
                this.playInstruction();
                const letterUpper = (this.questions[0].text.match(/'([^']*)'/) || [null, "İ"])[1];
                const content = `
                    <p class="lead">İsmi "${letterUpper}" sesi ile başlayan nesneleri bulalım!</p>
                    <ul class="list-unstyled" style="font-size: 1.2rem; text-align: left; display: inline-block;">
                        <li class="mb-2">👉 Resimlere tıkla ve ismini dinle.</li>
                        <li class="mb-2">👉 "${letterUpper}" sesi olanları seçelim.</li>
                        <li class="mb-2">👉 "Kontrol Et" butonuna bas.</li>
                    </ul>
                `;
                this.showCustomModal("Nasıl Oynanır?", content);
            }
        };

        // Initial call
        SesiBulGame.init();
    }

    initNavigation() {
        // Use GameNav for navigation (supports unified player)
        if (window.GameNav) {
            GameNav.bindNavButtons();
        }

        // Backward compatibility: keep global functions in case anything references them
        window.navigateHome = function() {
            if (window.GameNav) GameNav.goHome();
        };
        window.navigateNext = function() {
            if (window.GameNav) GameNav.goNext();
        };
        window.navigatePrev = function() {
            if (window.GameNav) GameNav.goPrev();
        };



        // Fullscreen is handled by GameNav.bindNavButtons() above

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

                // Initialize from local storage or default to 20
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

                // Toggle Icon
                if (btn) {
                    if (percent === 0) {
                        btn.innerHTML = '<i class="bi bi-volume-mute-fill"></i>';
                    } else {
                        btn.innerHTML = '<i class="bi bi-volume-up-fill"></i>';
                    }
                }

                // Save to localStorage for the main player/other games to pick up
                localStorage.setItem('bg_music_volume', percent);

                // Dispatch a custom event so the parent window/main logic can react dynamically
                const volumeEvent = new CustomEvent('bgVolumeChanged', { detail: { volume: percent } });
                window.dispatchEvent(volumeEvent);
                if (window.parent) {
                    window.parent.dispatchEvent(new CustomEvent('bgVolumeChanged', { detail: { volume: percent } }));
                }
            }
        })();



    }
}

function initApp() {
    if (typeof SesiHissedelimData !== 'undefined') {
        new SesiHissedelimEngine(SesiHissedelimData);
    } else {
        console.error("SesiHissedelimData is not defined in data.js. Did it load correctly?");
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
