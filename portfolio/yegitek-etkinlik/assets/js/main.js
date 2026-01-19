/**
 * Game Engine for Kids Activities
 */

/**
 * Game Engine for Kids Activities
 */

window.GameEngine = {
    // State
    lives: 3,
    maxLives: 3,

    sounds: {
        correct: null,
        wrong: null
    },

    init: function () {
        console.log("GameEngine: Initialized");
        const basePath = window.ASSETS_PATH || 'assets/';
        this.sounds.correct = new Audio(basePath + 'audio/correct.mp3');
        this.sounds.wrong = new Audio(basePath + 'audio/wrong.mp3');

        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.updateLivesDisplay();
    },

    /**
     * Auto-scales the 1920x1080 container to fit the current window.
     */
    resize: function () {
        const targetW = 1920;
        const targetH = 1080;
        const container = document.querySelector('.game-container-fixed');

        if (!container) return;

        const windowW = window.innerWidth;
        const windowH = window.innerHeight;

        const scaleW = windowW / targetW;
        const scaleH = windowH / targetH;

        // Fit contained
        const scale = Math.min(scaleW, scaleH);

        container.style.transform = `scale(${scale})`;
    },

    updateLivesDisplay: function () {
        const container = document.getElementById('livesDisplay');
        if (!container) return;

        // Using inline SVG for Heart to avoid copyright/load issues
        const heartSVG = `
        <svg class="life-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 88.9L16.2 55.2C8.3 47.3 8.3 34.5 16.2 26.6C24.1 18.7 36.9 18.7 44.8 26.6L50 31.8L55.2 26.6C63.1 18.7 75.9 18.7 83.8 26.6C91.7 34.5 91.7 47.3 83.8 55.2L50 88.9Z" 
            fill="#FF4D6D" stroke="#fff" stroke-width="5"/>
        </svg>`;

        let heartsHtml = '';
        for (let i = 0; i < this.maxLives; i++) {
            const isLost = i >= this.lives;
            const className = isLost ? 'life-icon life-lost' : 'life-icon';
            const svgContent = heartSVG.replace('class="life-icon"', `class="${className}"`);
            heartsHtml += svgContent;
        }

        // Wrap in label and row container
        container.innerHTML = `
            <div class="lives-label">Kalan Can</div>
            <div class="hearts-row">
                ${heartsHtml}
            </div>
        `;
    },

    decreaseLife: function () {
        if (this.lives > 0) {
            this.lives--;
            this.updateLivesDisplay();

            if (this.lives === 0) {
                // Game Over logic can go here
                this.showTryAgain("Üzgünüm, canın kalmadı! Tekrar deneyelim mi?");
            } else {
                this.showTryAgain("Dikkatli ol, bir canın gitti!");
            }
        }
    },

    // ... existing feedback methods
    showCorrect: function (message = "Harikasın! Doğru Cevap!") {
        console.log("GameEngine: showCorrect called with message:", message);

        // Play Sound
        try {
            if (this.sounds.correct) {
                this.sounds.correct.currentTime = 0;
                this.sounds.correct.play().catch(e => console.error("Audio play failed:", e));
            }
        } catch (e) {
            console.error("Sound error:", e);
        }

        const modalEl = document.getElementById('feedbackModal');
        if (!modalEl) {
            console.error("GameEngine: #feedbackModal not found!");
            alert("Tebrikler! " + message); // Fallback
            return;
        }

        const modalBody = document.getElementById('feedbackModalBody');
        const modalTitle = document.getElementById('feedbackModalLabel');
        const modalContent = modalEl.querySelector('.modal-content');

        if (modalContent) modalContent.className = 'modal-content modal-content-kid modal-success';

        if (modalTitle) modalTitle.innerHTML = '<span class="feedback-icon">🌟</span> Tebrikler!';
        if (modalBody) {
            modalBody.innerHTML = `
                <div class="text-center animate-pop">
                    <div class="star-rating">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </div>
                    <h3 class="mt-3">${message}</h3>
                </div>
            `;
        }

        try {
            const feedbackModal = new bootstrap.Modal(modalEl);
            feedbackModal.show();
        } catch (e) {
            console.error("GameEngine: Bootstrap Modal error", e);
        }

        if (window.confetti) {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        }
    },

    showTryAgain: function (message = "Tekrar deneyelim, başarabilirsin!") {
        console.log("GameEngine: showTryAgain called with message:", message);

        // Play Sound
        try {
            if (this.sounds.wrong) {
                this.sounds.wrong.currentTime = 0;
                this.sounds.wrong.play().catch(e => console.error("Audio play failed:", e));
            }
        } catch (e) {
            console.error("Sound error:", e);
        }

        const modalEl = document.getElementById('feedbackModal');
        if (!modalEl) {
            console.error("GameEngine: #feedbackModal not found!");
            return;
        }

        const modalBody = document.getElementById('feedbackModalBody');
        const modalTitle = document.getElementById('feedbackModalLabel');
        const modalContent = modalEl.querySelector('.modal-content');

        if (modalContent) modalContent.className = 'modal-content modal-content-kid modal-fail';

        if (modalTitle) modalTitle.innerHTML = '<span class="feedback-icon">🤔</span> Hımm...';
        if (modalBody) {
            modalBody.innerHTML = `
                <div class="text-center animate-pop">
                    <h4 class="mt-3 text-muted">${message}</h4>
                    <div class="mt-3">
                        <i class="bi bi-arrow-counterclockwise" style="font-size: 3rem; color: #ccc;"></i>
                    </div>
                </div>
            `;
        }

        try {
            const feedbackModal = new bootstrap.Modal(modalEl);
            feedbackModal.show();
        } catch (e) {
            console.error("GameEngine: Bootstrap Modal error", e);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    GameEngine.init();
});
