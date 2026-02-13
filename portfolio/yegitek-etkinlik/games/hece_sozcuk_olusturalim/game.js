const levels = [
    {
        id: 1,
        audio: 'devre_1_en.mp3',
        target: 'en',
        parts: ['e', 'n'],
        options: ['e', 't', 'a', 'n']
    },
    {
        id: 2,
        audio: 'devre_2_ne.mp3',
        target: 'ne',
        parts: ['n', 'e'],
        options: ['l', 'a', 'e', 'n']
    },
    {
        id: 3,
        audio: 'devre_3_anne.mp3',
        target: 'anne',
        parts: ['an', 'ne'],
        options: ['na', 'ta', 'ne', 'an']
    },
    {
        id: 4,
        audio: 'devre_4_nane.mp3',
        target: 'nane',
        parts: ['na', 'ne'],
        options: ['al', 'ne', 'na', 'ta']
    },
    {
        id: 5,
        audio: 'devre_5_nene.mp3',
        target: 'nene',
        parts: ['ne', 'ne'],
        options: ['ne', 'la', 'an', 'ne']
    }
];

let currentLevelIndex = 0;
let wrongAttempts = 0;
let currentAudio = null;

const levelDisplay = document.getElementById('levelDisplay');
const circuitImage = document.getElementById('circuit-image'); // New Image Element
const optionsWrapper = document.getElementById('options-wrapper');
const slot0 = document.getElementById('slot-0');
const slot1 = document.getElementById('slot-1');
const targetDisplay = document.getElementById('target-word-display');
const btnReplay = document.getElementById('btn-replay-sound');

// document.addEventListener('DOMContentLoaded', () => {
//     initLevel(0);
// });

window.startGame = function () {
    initLevel(0);
};

btnReplay.addEventListener('click', () => {
    playLevelAudio();
});

function initLevel(index) {
    // Reset visuals
    currentLevelIndex = index;
    levelDisplay.innerText = `${currentLevelIndex + 1}/${levels.length}`;

    // Reset Slots
    slot0.innerHTML = '';
    slot1.innerHTML = '';
    slot0.classList.remove('filled');
    slot1.classList.remove('filled');

    // Reset Image
    if (circuitImage) circuitImage.src = '../../assets/img/devre_bos.png';

    // Reset Target Text
    targetDisplay.classList.add('hidden');
    targetDisplay.innerText = '';

    // Load Options
    const levelData = levels[currentLevelIndex];
    loadOptions(levelData.options);

    // Play Audio
    setTimeout(() => {
        playLevelAudio();
    }, 500);
}

function loadOptions(optList) {
    optionsWrapper.innerHTML = '';
    // Shuffle options
    const shuffled = [...optList].sort(() => Math.random() - 0.5);

    shuffled.forEach((text, i) => {
        const el = document.createElement('div');
        el.className = 'draggable-item';
        el.draggable = true;
        el.innerText = text;
        el.id = `opt-${i}`;
        el.dataset.text = text;

        // Drag Events (Desktop)
        el.addEventListener('dragstart', handleDragStart);
        el.addEventListener('dragend', handleDragEnd);

        // Touch Events (Mobile)
        el.addEventListener('touchstart', handleTouchStart, { passive: false });
        el.addEventListener('touchmove', handleTouchMove, { passive: false });
        el.addEventListener('touchend', handleTouchEnd);

        optionsWrapper.appendChild(el);
    });
}

function playLevelAudio() {
    // Path handling
    const assetPath = window.ASSETS_PATH || '../../assets/';
    const levelData = levels[currentLevelIndex];
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    // Updated path to subfolder
    currentAudio = new Audio(`${assetPath}audio/hece_sozcuk_olusturma/${levelData.audio}`);
    currentAudio.play().catch(e => console.log("Audio waiting for interaction"));
}

// Drag & Drop Logic
let draggedItem = null;

function handleDragStart(e) {
    draggedItem = this;
    setTimeout(() => this.classList.add('dragging'), 0);
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    draggedItem = null;
}

// --- TOUCH HANDLING (Mobile Support) ---
let touchDragItem = null;
let touchClone = null;
let touchOffsetX = 0;
let touchOffsetY = 0;

function handleTouchStart(e) {
    // If locked (already placed), ignore
    if (this.style.cursor === 'default') return;

    e.preventDefault();
    touchDragItem = this;
    const touch = e.touches[0];

    // Clone for visual feedback
    touchClone = this.cloneNode(true);
    touchClone.style.position = 'absolute';

    // Calculate Scale (Game Container Scale)
    // We compare visual size (rect) with source size (offset)
    const rect = this.getBoundingClientRect();
    const scale = rect.width / this.offsetWidth;

    // Apply strict sizing and scale
    touchClone.style.width = this.offsetWidth + 'px';
    touchClone.style.height = this.offsetHeight + 'px';
    touchClone.style.transform = `scale(${scale})`;
    touchClone.style.transformOrigin = 'top left'; // Pivot from corner so positioning matches rect.left

    touchClone.style.opacity = '0.9';
    touchClone.style.zIndex = '9999';
    touchClone.style.pointerEvents = 'none'; // Let clicks pass through to detect drop zone

    // Position exactly over original (Visual coordinates match Body coordinates)
    // Offset relative to touch point
    touchOffsetX = touch.clientX - rect.left;
    touchOffsetY = touch.clientY - rect.top;

    touchClone.style.left = rect.left + 'px';
    touchClone.style.top = rect.top + 'px';

    document.body.appendChild(touchClone);
    this.classList.add('dragging'); // Hide original slightly
}

function handleTouchMove(e) {
    if (!touchDragItem || !touchClone) return;
    e.preventDefault(); // Prevent scrolling
    const touch = e.touches[0];

    const x = touch.clientX - touchOffsetX;
    const y = touch.clientY - touchOffsetY;

    touchClone.style.left = x + 'px';
    touchClone.style.top = y + 'px';
}

function handleTouchEnd(e) {
    if (!touchDragItem) return;

    const touch = e.changedTouches[0];
    if (touchClone) {
        touchClone.remove();
        touchClone = null;
    }
    touchDragItem.classList.remove('dragging');

    // Detect what is under the finger
    // We temporarily hide the clone (already removed) to find elementFromPoint
    const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
    const slot = dropTarget ? dropTarget.closest('.drop-zone') : null;

    if (slot) {
        // Logic duplicated from Drop Event
        if (slot.hasChildNodes()) return; // Already filled

        const droppedText = touchDragItem.dataset.text;
        const slotIndex = parseInt(slot.dataset.index);
        const levelData = levels[currentLevelIndex];
        const correctText = levelData.parts[slotIndex];

        if (droppedText === correctText) {
            // Correct
            touchDragItem.parentNode.removeChild(touchDragItem);
            slot.appendChild(touchDragItem);

            // Lock Item
            touchDragItem.draggable = false;
            touchDragItem.style.cursor = 'default';
            // Remove Listeners
            touchDragItem.removeEventListener('touchstart', handleTouchStart);
            touchDragItem.removeEventListener('touchmove', handleTouchMove);
            touchDragItem.removeEventListener('touchend', handleTouchEnd);

            if (checkCompletion()) {
                handleLevelSuccess(droppedText);
            } else {
                playSound('hece_sozcuk_olusturma/' + droppedText + '.mp3');
            }
        } else {
            // Wrong
            wrongAttempts++;
            playSound('wrong.mp3');
            animateWrong(touchDragItem);
        }
    }

    touchDragItem = null;
}

[slot0, slot1].forEach(slot => {
    slot.addEventListener('dragover', e => {
        e.preventDefault(); // Allow drop
        if (!slot.hasChildNodes()) {
            slot.classList.add('drag-over');
        }
    });

    slot.addEventListener('dragleave', () => {
        slot.classList.remove('drag-over');
    });

    slot.addEventListener('drop', e => {
        e.preventDefault();
        slot.classList.remove('drag-over');

        if (slot.hasChildNodes()) return; // Already filled
        if (!draggedItem) return;

        const droppedText = draggedItem.dataset.text;
        const slotIndex = parseInt(slot.dataset.index);
        const levelData = levels[currentLevelIndex];
        const correctText = levelData.parts[slotIndex]; // Expected part for this slot

        if (droppedText === correctText) {
            // Correct! Snap to slot
            draggedItem.parentNode.removeChild(draggedItem);
            slot.appendChild(draggedItem);
            draggedItem.draggable = false; // Lock it
            draggedItem.style.cursor = 'default';

            if (checkCompletion()) {
                handleLevelSuccess(droppedText);
            } else {
                playSound('hece_sozcuk_olusturma/' + droppedText + '.mp3');
            }
        } else {
            // Wrong!
            wrongAttempts++;
            playSound('wrong.mp3');
            animateWrong(draggedItem);
        }
    });
});

function playSound(filename) {
    const assetPath = window.ASSETS_PATH || '../../assets/';
    new Audio(`${assetPath}audio/${filename}`).play().catch(e => console.warn("Audio play failed", e));
}

function animateWrong(item) {
    item.classList.add('wrong-shake');
    setTimeout(() => {
        item.classList.remove('wrong-shake');
    }, 500);
}

function checkCompletion() {
    // Are both slots filled?
    const filled0 = slot0.hasChildNodes();
    const filled1 = slot1.hasChildNodes();
    return filled0 && filled1;
}

function handleLevelSuccess(lastSyllable) {
    const levelData = levels[currentLevelIndex];

    // Light up bulb (Switch Image)
    if (circuitImage) circuitImage.src = '../../assets/img/devre_dolu.png';

    // Show Target Word
    targetDisplay.innerText = levelData.target;
    targetDisplay.classList.remove('hidden');

    // Audio Sequence: Last Syllable -> Full Word
    // Audio Sequence: Last Syllable -> Correct Sound -> Full Word
    const assetPath = window.ASSETS_PATH || '../../assets/';
    const folder = 'audio/hece_sozcuk_olusturma/'; // Subfolder

    // 1. Play Syllable
    const syllableAudio = new Audio(`${assetPath}${folder}${lastSyllable}.mp3`);

    syllableAudio.onended = () => {
        // 2. Play Correct Sound
        const correctAudio = new Audio(`${assetPath}audio/correct.mp3`);

        correctAudio.onended = () => {
            // 3. Play Full Word
            const wordAudio = new Audio(`${assetPath}${folder}${levelData.audio}`);

            wordAudio.onended = () => {
                proceedToNext();
            };

            wordAudio.play().catch(e => {
                console.warn("Word audio play failed", e);
                proceedToNext();
            });
        };

        correctAudio.play().catch(e => {
            console.warn("Correct audio play failed", e);
            // Skip to word if correct fails
            const wordAudio = new Audio(`${assetPath}${folder}${levelData.audio}`);
            wordAudio.play();
            wordAudio.onended = proceedToNext;
        });
    };

    syllableAudio.play().catch(e => {
        console.warn("Syllable audio play failed", e);
        // Fallback chain
        const correctAudio = new Audio(`${assetPath}audio/correct.mp3`);
        correctAudio.play();
        correctAudio.onended = () => {
            const wordAudio = new Audio(`${assetPath}${folder}${levelData.audio}`);
            wordAudio.play();
            wordAudio.onended = proceedToNext;
        };
    });

    function proceedToNext() {
        // Delay then Next Level or Finish
        setTimeout(() => {
            if (currentLevelIndex < levels.length - 1) {
                initLevel(currentLevelIndex + 1);
            } else {
                showFinalResult();
            }
        }, 1000);
    }
}

function showFinalResult() {
    playSound('harikasin.mp3'); // Assuming file exists, or use generic victory
    const mistakes = wrongAttempts;

    // Using showCustomModal from index.html
    if (window.showCustomModal) {
        window.showCustomModal(
            "Harika İş Çıkardın! 🎉",
            `<p class="fs-4">Tüm devreleri başarıyla tamamladın.</p>
            <div class="row mt-4 justify-content-center">
                <div class="col-6">
                    <div class="p-3 bg-success bg-opacity-10 rounded">
                        <div class="fs-1">⚡</div>
                        <div class="fw-bold fs-5">Tamamlandı</div>
                    </div>
                </div>
            </div>
            <p class="mt-3">Yanlış Sayısı: ${mistakes}</p>`
        );

        // Customize the button to be "Tekrar Oyna"
        setTimeout(() => {
            const modal = document.getElementById('active-custom-modal');
            if (modal) {
                const btn = modal.querySelector('button');
                if (btn) {
                    btn.innerHTML = 'Tekrar Oyna <i class="bi bi-arrow-counterclockwise"></i>';
                    btn.onclick = () => location.reload();
                    btn.classList.remove('btn-primary-kid');
                    btn.classList.add('btn-success', 'btn-lg', 'shadow-lg'); // Make it pop
                }
            }
        }, 100);
    }
}
