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

// Helper: send postMessage to ALL parent frames (walks up the chain)
function postToAllParents(msg) {
    var w = window;
    while (w.parent !== w) {
        try {
            w.parent.postMessage(msg, '*');
            w = w.parent;
        } catch(e) { break; }
    }
}

// Forward BGM volume changes to SCORM wrapper
window.addEventListener('bgVolumeChanged', function(e) {
    var vol = e.detail ? e.detail.volume : 20;
    postToAllParents({ type: 'setBGMVolume', volume: vol });
});

// Tell SCORM wrapper to keep BGM playing (game page loaded)
postToAllParents({ type: 'startBGM' });

// Init GameEngine on DOMContentLoaded (for pages that load main.js statically)
// When loaded dynamically by player.html, GameEngine.init() is called by the player itself
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        GameEngine.init();
    });
}

// ========== GameNav: Shared Navigation & Fullscreen Helper ==========
// When running inside player.html iframe (embedded=true), uses postMessage.
// When running standalone, uses direct window.location navigation.
window.GameNav = (function () {
    const urlParams = new URLSearchParams(window.location.search);
    const isEmbedded = urlParams.get('embedded') === 'true';
    const letter = urlParams.get('letter') || 'e';
    const currentGame = urlParams.get('game') || '';

    // Use per-letter game order if available, otherwise fall back to full list
    const GAMES = (window.LETTER_GAME_ORDER && window.LETTER_GAME_ORDER[letter])
        || window.GAME_ORDER
        || [
            '01_sesi_hissedelim', '02_harf_taniyalim', '03_harf_yazalim',
            '04_karda_yazalim', '05_hece_sozcuk', '06_sozcuk_olusturma',
            '07_okuyalim', '08_ritmik_okuma', '09_yumurtayi_kiralim', '10_cumle_okuyalim'
        ];

    function getGameIndex() {
        // First try to get game from URL parameter (unified player)
        if (currentGame) {
            const idx = GAMES.indexOf(currentGame);
            if (idx !== -1) return idx;
        }
        // Fallback: detect from path (backward compatibility with individual player files)
        const path = decodeURIComponent(window.location.pathname).toLowerCase();
        return GAMES.findIndex(n => path.includes(n.toLowerCase()));
    }

    return {
        letter: letter,
        isEmbedded: isEmbedded,

        goHome: function () {
            if (isEmbedded && window.parent !== window) {
                window.parent.postMessage({ type: 'goHome', letter: letter }, '*');
            } else {
                window.location.href = `../index/index.html?letter=${letter}`;
            }
        },

        goPrev: function () {
            const i = getGameIndex();
            if (i > 0) {
                if (isEmbedded && window.parent !== window) {
                    window.parent.postMessage({ type: 'navigate', game: GAMES[i - 1], letter: letter }, '*');
                } else {
                    window.location.href = `player.html?game=${GAMES[i - 1]}&letter=${letter}`;
                }
            }
        },

        goNext: function () {
            const i = getGameIndex();
            if (i !== -1 && i < GAMES.length - 1) {
                if (isEmbedded && window.parent !== window) {
                    window.parent.postMessage({ type: 'navigate', game: GAMES[i + 1], letter: letter }, '*');
                } else {
                    window.location.href = `player.html?game=${GAMES[i + 1]}&letter=${letter}`;
                }
            } else if (i === GAMES.length - 1) {
                // Last game — navigate to outro video
                if (isEmbedded && window.parent !== window) {
                    window.parent.postMessage({ type: 'goOutro', letter: letter }, '*');
                } else {
                    window.location.href = `../video/outro.html?letter=${letter}`;
                }
            }
        },

        toggleFullscreen: function () {
            // Walk up the iframe chain to find the topmost same-origin window
            let targetWin = window;
            if (isEmbedded) {
                try {
                    let w = window;
                    while (w.parent !== w) {
                        // Test same-origin access (will throw if cross-origin)
                        void w.parent.document;
                        w = w.parent;
                    }
                    targetWin = w;
                } catch (e) {
                    // Reached cross-origin boundary, use last accessible window
                    // Fall back to postMessage for the cross-origin parent
                    window.parent.postMessage({ type: 'toggleFullscreen' }, '*');
                    return;
                }
            }

            try {
                if (!targetWin.document.fullscreenElement) {
                    targetWin.document.documentElement.requestFullscreen().then(() => {
                        localStorage.setItem('isFullscreen', 'true');
                    }).catch(err => console.warn('Fullscreen failed:', err));
                } else {
                    targetWin.document.exitFullscreen();
                    localStorage.setItem('isFullscreen', 'false');
                }
            } catch (e) {
                // Final fallback
                window.parent.postMessage({ type: 'toggleFullscreen' }, '*');
            }
        },

        // Bind standard nav buttons (call from engine bindEvents)
        bindNavButtons: function () {
            const btnHome = document.getElementById('btn-home');
            const btnPrev = document.getElementById('btn-prev');
            const btnNext = document.getElementById('btn-next');
            const btnFS = document.getElementById('btn-fullscreen');

            if (btnHome) btnHome.onclick = () => this.goHome();
            if (btnPrev) btnPrev.onclick = () => this.goPrev();
            if (btnNext) btnNext.onclick = () => this.goNext();

            if (btnFS) {
                // Check fullscreen state (works for both embedded and standalone)
                const isFullscreen = () => {
                    if (isEmbedded && window.parent !== window) {
                        try { return !!window.parent.document.fullscreenElement; } catch(e) {}
                    }
                    return !!document.fullscreenElement;
                };

                // Sync icon on load
                if (isFullscreen()) {
                    btnFS.innerHTML = '<i class="bi bi-fullscreen-exit"></i>';
                }

                // Listen for fullscreen changes
                const syncIcon = () => {
                    btnFS.innerHTML = isFullscreen()
                        ? '<i class="bi bi-fullscreen-exit"></i>'
                        : '<i class="bi bi-arrows-fullscreen"></i>';
                };

                document.addEventListener('fullscreenchange', syncIcon);
                // Also listen on parent for embedded mode
                if (isEmbedded && window.parent !== window) {
                    try {
                        window.parent.document.addEventListener('fullscreenchange', syncIcon);
                    } catch(e) {
                        // Fallback: listen for postMessage
                        window.addEventListener('message', (e) => {
                            if (e.data && e.data.type === 'fullscreenChanged') {
                                btnFS.innerHTML = e.data.isFullscreen
                                    ? '<i class="bi bi-fullscreen-exit"></i>'
                                    : '<i class="bi bi-arrows-fullscreen"></i>';
                            }
                        });
                    }
                }

                btnFS.onclick = () => this.toggleFullscreen();
            }
        }
    };
})();
