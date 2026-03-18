/**
 * Hece Sözcük Oluşturalım - Core Engine
 * Drag & Drop syllable matching with circuit board visual.
 */
class HeceSozcukEngine {
    constructor(data) {
        this.data = data;
        this.mountPoint = document.getElementById('game-mount-point');
        this.levels = data.levels;
        this.currentLevelIndex = 0;
        this.wrongAttempts = 0;
        this.currentAudio = null;
        this.draggedItem = null;
        // Touch state
        this.touchDragItem = null;
        this.touchClone = null;
        this.touchOffsetX = 0;
        this.touchOffsetY = 0;

        this.initUI();
    }

    initUI() {
        const GAME_ASSETS = '../games/hece_sozcuk/assets/';
        const bgPath = GAME_ASSETS + 'img/bg.jpg';

        this.mountPoint.innerHTML = `
        <div class="game-container-fixed">
            <div class="sidebar-kid">
                <div class="lives-container" style="background:var(--card-bg);padding:15px;border-radius:20px;text-align:center;">
                    <div class="lives-label">DÜZEY</div>
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
                <div class="game-header">
                    <h2 class="game-title">${this.data.title || 'Hece-Sözcük Oluşturalım'}</h2>
                    <div class="game-nav">
                        <button class="btn-nav-flat btn-nav-home" id="btn-home" title="Anasayfa"><i class="bi bi-house-fill"></i></button>
                        <button class="btn-nav-flat" id="btn-prev" title="Önceki"><i class="bi bi-chevron-left"></i></button>
                        <button class="btn-nav-flat" id="btn-next" title="Sonraki"><i class="bi bi-chevron-right"></i></button>
                    </div>
                </div>
                <div class="game-board game-board-hece" style="flex-direction:column;justify-content:center;background-image:url('${bgPath}');">
                    <div class="circuit-wrapper" style="justify-content:flex-start;padding-top:20px;flex-direction:column;align-items:center;">
                        <div class="circuit-container" style="position:relative;text-align:center;display:flex;justify-content:center;height:auto;">
                            <img id="circuit-image" src="${GAME_ASSETS}img/devre_bos.png" alt="Devre" class="img-fluid" style="max-height:450px;width:auto;object-fit:contain;">
                            <div class="drop-zones-overlay" id="drop-zones-overlay" style="position:absolute;bottom:3%;width:100%;display:flex;justify-content:center;gap:50px;align-items:flex-end;">
                            </div>
                        </div>
                        <div id="target-word-display" class="hidden text-center mt-2 mb-3"></div>
                        <div class="options-container mt-4">
                            <div class="d-flex justify-content-center gap-3 flex-wrap w-100" id="options-wrapper"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="custom-modal-template" style="display:none;">
            <div class="custom-modal-overlay" style="position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);backdrop-filter:blur(5px)!important;z-index:2000;display:flex;align-items:center;justify-content:center;">
                <div class="custom-modal-content" style="background:white;padding:2.5rem;border-radius:30px;box-shadow:0 10px 40px rgba(0,0,0,0.3);text-align:center;max-width:80%;border:5px solid #2ec4b6;">
                    <h2 class="modal-title display-6 fw-bold mb-4" style="color:#2c3e50;"></h2>
                    <div class="modal-body-content mb-5" style="font-size:1.5rem;color:#4a4a4a;line-height:1.6;"></div>
                    <div class="mt-4"><button class="btn btn-primary-kid btn-lg px-5 py-3 rounded-pill shadow-sm fw-bold" id="modal-close-btn">TAMAM</button></div>
                </div>
            </div>
        </div>
        `;

        this.dropZonesOverlay = document.getElementById('drop-zones-overlay');
        this.slots = [];
        this.circuitImage = document.getElementById('circuit-image');
        this.optionsWrapper = document.getElementById('options-wrapper');
        this.levelDisplay = document.getElementById('levelDisplay');
        this.targetDisplay = document.getElementById('target-word-display');

        this.bindEvents();

        if (window.GameEngine) window.GameEngine.resize();

        // Init intro
        if (typeof window.HeceSozcukIntro !== 'undefined') {
            window.HeceSozcukIntro.init(this.data);
        }
    }

    startGame() { this.initLevel(0); }

    initLevel(index) {
        this.currentLevelIndex = index;
        const levelData = this.levels[this.currentLevelIndex];
        this.levelDisplay.innerText = `${index + 1}/${this.levels.length}`;

        // Dynamically create drop zones based on parts count
        this.createDropZones(levelData.parts.length);

        const GAME_ASSETS = '../games/hece_sozcuk/assets/';
        if (this.circuitImage) this.circuitImage.src = GAME_ASSETS + 'img/devre_bos.png';

        this.targetDisplay.classList.add('hidden');
        this.targetDisplay.innerText = '';

        this.loadOptions(levelData.options);
        setTimeout(() => this.playLevelAudio(), 500);
    }

    createDropZones(count) {
        this.dropZonesOverlay.innerHTML = '';
        this.slots = [];
        for (let i = 0; i < count; i++) {
            const slot = document.createElement('div');
            slot.className = 'drop-zone';
            slot.id = `slot-${i}`;
            slot.dataset.index = i;
            this.dropZonesOverlay.appendChild(slot);
            this.slots.push(slot);
        }
        this.bindSlots();
    }

    loadOptions(optList) {
        this.optionsWrapper.innerHTML = '';
        const shuffled = [...optList].sort(() => Math.random() - 0.5);
        shuffled.forEach((text, i) => {
            const el = document.createElement('div');
            el.className = 'draggable-item'; el.draggable = true;
            el.innerText = text; el.id = `opt-${i}`; el.dataset.text = text;
            el.addEventListener('dragstart', (e) => this.handleDragStart(e, el));
            el.addEventListener('dragend', () => el.classList.remove('dragging'));
            el.addEventListener('touchstart', (e) => this.handleTouchStart(e, el), { passive: false });
            el.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
            el.addEventListener('touchend', (e) => this.handleTouchEnd(e));
            this.optionsWrapper.appendChild(el);
        });
    }

    playLevelAudio() {
        const levelData = this.levels[this.currentLevelIndex];
        if (this.currentAudio) { this.currentAudio.pause(); this.currentAudio.currentTime = 0; }
        this.currentAudio = new Audio(`${window.ASSETS_PATH}audio/${this.data.folderPrefix}/${levelData.audio}`);
        this.currentAudio.play().catch(() => { });
    }

    // Convert text to audio-safe filename: lowercase + Turkish chars to ASCII
    toAudioFileName(text) {
        const trMap = { 'İ': 'i', 'I': 'i', 'ı': 'i', 'Ş': 's', 'ş': 's', 'Ç': 'c', 'ç': 'c', 'Ğ': 'g', 'ğ': 'g', 'Ö': 'o', 'ö': 'o', 'Ü': 'u', 'ü': 'u' };
        return text.replace(/./g, ch => trMap[ch] || ch).toLowerCase();
    }

    playSound(filename) {
        new Audio(`${window.ASSETS_PATH}audio/${this.data.folderPrefix}/${filename}`).play().catch(() => { });
    }

    playCoreSound(filename) {
        new Audio(`../games/hece_sozcuk/assets/audio/${filename}`).play().catch(() => { });
    }

    // Desktop Drag
    handleDragStart(e, el) { this.draggedItem = el; setTimeout(() => el.classList.add('dragging'), 0); }

    // Touch
    handleTouchStart(e, el) {
        if (el.style.cursor === 'default') return;
        e.preventDefault(); this.touchDragItem = el;
        const touch = e.touches[0]; const rect = el.getBoundingClientRect();
        const scale = rect.width / el.offsetWidth;
        this.touchClone = el.cloneNode(true);
        Object.assign(this.touchClone.style, {
            position: 'absolute', width: el.offsetWidth + 'px', height: el.offsetHeight + 'px',
            transform: `scale(${scale})`, transformOrigin: 'top left',
            opacity: '0.9', zIndex: '9999', pointerEvents: 'none',
            left: rect.left + 'px', top: rect.top + 'px'
        });
        this.touchOffsetX = touch.clientX - rect.left;
        this.touchOffsetY = touch.clientY - rect.top;
        document.body.appendChild(this.touchClone);
        el.classList.add('dragging');
    }

    handleTouchMove(e) {
        if (!this.touchDragItem || !this.touchClone) return;
        e.preventDefault();
        const touch = e.touches[0];
        this.touchClone.style.left = (touch.clientX - this.touchOffsetX) + 'px';
        this.touchClone.style.top = (touch.clientY - this.touchOffsetY) + 'px';
    }

    handleTouchEnd(e) {
        if (!this.touchDragItem) return;
        const touch = e.changedTouches[0];
        if (this.touchClone) { this.touchClone.remove(); this.touchClone = null; }
        this.touchDragItem.classList.remove('dragging');
        const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
        const slot = dropTarget ? dropTarget.closest('.drop-zone') : null;
        if (slot) this.handleDrop(slot, this.touchDragItem);
        this.touchDragItem = null;
    }

    bindSlots() {
        this.slots.forEach(slot => {
            slot.addEventListener('dragover', (e) => { e.preventDefault(); if (!slot.hasChildNodes()) slot.classList.add('drag-over'); });
            slot.addEventListener('dragleave', () => slot.classList.remove('drag-over'));
            slot.addEventListener('drop', (e) => {
                e.preventDefault(); slot.classList.remove('drag-over');
                if (slot.hasChildNodes() || !this.draggedItem) return;
                this.handleDrop(slot, this.draggedItem);
                this.draggedItem = null;
            });
        });
    }

    handleDrop(slot, item) {
        if (slot.hasChildNodes()) return;
        const droppedText = item.dataset.text;
        const slotIndex = parseInt(slot.dataset.index);
        const levelData = this.levels[this.currentLevelIndex];
        const correctText = levelData.parts[slotIndex];

        if (droppedText === correctText) {
            item.parentNode.removeChild(item);
            slot.appendChild(item);
            item.draggable = false; item.style.cursor = 'default';
            // Remove touch listeners
            item.removeEventListener('touchstart', this.handleTouchStart);
            item.removeEventListener('touchmove', this.handleTouchMove);
            item.removeEventListener('touchend', this.handleTouchEnd);

            if (this.checkCompletion()) {
                this.handleLevelSuccess(droppedText);
            } else {
                this.playSound(this.toAudioFileName(droppedText) + '.mp3');
            }
        } else {
            this.wrongAttempts++;
            this.playCoreSound('wrong.mp3');
            item.classList.add('wrong-shake');
            setTimeout(() => item.classList.remove('wrong-shake'), 500);
        }
    }

    checkCompletion() { return this.slots.every(slot => slot.hasChildNodes()); }

    handleLevelSuccess(lastSyllable) {
        const levelData = this.levels[this.currentLevelIndex];
        const GAME_ASSETS = '../games/hece_sozcuk/assets/';
        if (this.circuitImage) this.circuitImage.src = GAME_ASSETS + 'img/devre_dolu.png';
        this.targetDisplay.innerText = levelData.target;
        this.targetDisplay.classList.remove('hidden');

        const folder = `${window.ASSETS_PATH}audio/${this.data.folderPrefix}/`;

        // Sequence: syllable -> correct -> full word -> next
        const syllableAudio = new Audio(`${folder}${this.toAudioFileName(lastSyllable)}.mp3`);
        syllableAudio.onended = () => {
            const correctAudio = new Audio(GAME_ASSETS + 'audio/correct.mp3');
            correctAudio.onended = () => {
                const wordAudio = new Audio(`${folder}${levelData.audio}`);
                wordAudio.onended = () => this.proceedToNext();
                wordAudio.play().catch(() => this.proceedToNext());
            };
            correctAudio.play().catch(() => {
                const wordAudio = new Audio(`${folder}${levelData.audio}`);
                wordAudio.play().catch(() => { }); wordAudio.onended = () => this.proceedToNext();
            });
        };
        syllableAudio.play().catch(() => {
            const correctAudio = new Audio(GAME_ASSETS + 'audio/correct.mp3');
            correctAudio.play().catch(() => { });
            correctAudio.onended = () => {
                const wordAudio = new Audio(`${folder}${levelData.audio}`);
                wordAudio.play().catch(() => { }); wordAudio.onended = () => this.proceedToNext();
            };
        });
    }

    proceedToNext() {
        setTimeout(() => {
            if (this.currentLevelIndex < this.levels.length - 1) {
                this.initLevel(this.currentLevelIndex + 1);
            } else {
                this.showFinalResult();
            }
        }, 1000);
    }

    showFinalResult() {
        this.playCoreSound('congratulations.mp3');
        const mistakes = this.wrongAttempts;
        this.showCustomModal(
            "Harikasın! 🎉",
            `<p class="fs-4">Tüm devreleri başarıyla tamamladın.</p>
            <div class="row mt-4 justify-content-center"><div class="col-6">
                <div class="p-3 bg-success bg-opacity-10 rounded"><div class="fs-1">⚡</div><div class="fw-bold fs-5">Tamamlandı</div></div>
            </div></div><p class="mt-3">Yanlış Sayısı: ${mistakes}</p>`,
            true
        );
    }

    showCustomModal(title, content, isFinal = false) {
        const wrapper = document.querySelector('.game-board') || document.body;
        const existing = document.getElementById('active-custom-modal');
        if (existing) existing.remove();
        const templateEl = document.getElementById('custom-modal-template');
        if (!templateEl) return;
        const template = templateEl.firstElementChild.cloneNode(true);
        template.id = 'active-custom-modal';
        template.querySelector('.modal-title').innerText = title;
        template.querySelector('.modal-body-content').innerHTML = content;
        const modalBox = template.querySelector('.custom-modal-content');
        if (title === "Nasıl Oynanır?") {
            Object.assign(modalBox.style, { width: '900px', maxWidth: '95%', minHeight: '550px', height: 'auto', display: 'block', padding: '3rem' });
        } else {
            Object.assign(modalBox.style, { width: '500px', maxWidth: '90%', minHeight: '500px', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' });
        }
        wrapper.appendChild(template);
        const closeBtn = template.querySelector('#modal-close-btn');
        if (closeBtn) {
            if (isFinal) {
                closeBtn.innerHTML = 'Tekrar Oyna <i class="bi bi-arrow-counterclockwise"></i>';
                closeBtn.onclick = () => location.reload();
            } else {
                closeBtn.onclick = () => { const m = document.getElementById('active-custom-modal'); if (m) m.remove(); };
            }
        }
    }

    bindEvents() {
        document.getElementById('btn-restart').onclick = () => location.reload();
        document.getElementById('btn-replay-sound').onclick = () => this.playLevelAudio();
        document.getElementById('btn-instruction').onclick = () => {
            if (typeof window.HeceSozcukInstruction !== 'undefined') window.HeceSozcukInstruction.init();
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

// Global start hook for intro
window.startGame = function () {
    if (window.activeHeceSozcukEngine) window.activeHeceSozcukEngine.startGame();
};

function initApp() {
    if (typeof HeceSozcukData !== 'undefined') {
        window.activeHeceSozcukEngine = new HeceSozcukEngine(HeceSozcukData);
    } else { console.error("HeceSozcukData is not defined."); }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initApp);
else initApp();
