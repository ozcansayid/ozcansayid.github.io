/**
 * Okuyalım - Intro Module
 * Handles the initial "How to Play" overlay with a spinning wheel animation.
 */
const OkuyalimIntro = {
    overlayId: 'okuyalim-intro-overlay',
    // Using existing instruction audio
    audioPath: '../../assets/audio/okuyalin_instruction.mp3',
    audio: null,
    isPlaying: false,
    animInterval: null,

    init: function () {
        if (document.getElementById(this.overlayId)) return;

        // PAUSE GAME
        if (typeof isPaused !== 'undefined') isPaused = true;

        this.createOverlay();
        this.setupAudio();
        this.show();
    },

    createOverlay: function () {
        const wrapper = document.querySelector('.game-container-fixed') || document.body;

        // Ensure wrapper has relative positioning for absolute overlay
        if (wrapper !== document.body && getComputedStyle(wrapper).position === 'static') {
            wrapper.style.position = 'relative';
        }

        const overlay = document.createElement('div');
        overlay.id = this.overlayId;
        overlay.className = 'custom-modal-overlay';

        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.9)';
        overlay.style.zIndex = '2000';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.flexDirection = 'column';
        overlay.style.flexDirection = 'column';

        const demoCss = `
            .demo-stage {
                position: relative;
                width: 400px;
                height: 400px;
                background-color: transparent;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 2rem;
            }
            .demo-wheel-container {
                position: relative;
                width: 300px;
                height: 300px;
            }
            .demo-wheel {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                border: 8px solid #fff;
                box-shadow: 0 0 20px rgba(0,0,0,0.3);
                background: conic-gradient(
                    #FF9F1C 0deg 60deg,
                    #2EC4B6 60deg 120deg,
                    #E71D36 120deg 180deg,
                    #FF9F1C 180deg 240deg,
                    #2EC4B6 240deg 300deg,
                    #E71D36 300deg 360deg
                );
                transform: rotate(0deg);
                transition: transform 3s cubic-bezier(0.25, 0.1, 0.25, 1);
            }
            .demo-pointer {
                position: absolute;
                top: 50%;
                right: -15px; /* Moved to right */
                left: auto;
                width: 30px;
                height: 40px;
                background: #ff512f;
                clip-path: polygon(0 50%, 100% 0, 100% 100%); /* Points Left towards center */
                transform: translateY(-50%);
                z-index: 10;
                filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3));
            }
            .demo-result-bubble {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0);
                width: 120px;
                height: 120px;
                background: white;
                border-radius: 50%;
                border: 5px solid #2ec4b6;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2.5rem;
                font-weight: bold;
                color: #2ec4b6;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                opacity: 0;
                transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                z-index: 20;
            }
            .demo-result-bubble.show {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
        `;

        overlay.innerHTML = `
            <style>${demoCss}</style>
            <div class="intro-content text-center" style="max-width: 800px; width: 90%;">
                
                <h1 class="text-white mb-2 fw-bold" style="text-shadow: 0 4px 10px rgba(0,0,0,0.5); font-size: 3rem;">
                    Okuyalım
                </h1>
                <p class="text-white mb-4" style="font-size: 1.5rem; opacity: 0.9;">
                    Çarkı çevir, gelen heceyi oku!
                </p>

                <!-- Demo Stage -->
                <div class="demo-stage mx-auto">
                    <div class="demo-wheel-container">
                        <div id="demo-wheel" class="demo-wheel"></div>
                        <div class="demo-pointer"></div>
                        <div id="demo-result" class="demo-result-bubble">LA</div>
                    </div>
                </div>

                <!-- Play Button -->
                <button id="btn-start-intro" disabled style="
                    background: #2ec4b6;
                    color: white;
                    border: none;
                    padding: 1.5rem 4rem;
                    font-size: 2rem;
                    border-radius: 50px;
                    cursor: not-allowed;
                    font-weight: bold;
                    box-shadow: 0 10px 25px rgba(46, 196, 182, 0.4);
                    transition: all 0.2s;
                    opacity: 0.5;
                ">
                    BAŞLA <i class="bi bi-caret-right-fill"></i>
                </button>
            </div>
            
            <style>
                #btn-start-intro:disabled {
                    background-color: #95a5a6 !important;
                    cursor: not-allowed !important;
                    opacity: 1 !important;
                    box-shadow: none !important;
                    animation: none !important; 
                }
                .eating-effect {
                    animation: eatPop 0.3s ease-out;
                }
                @keyframes eatPop {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.3); }
                    100% { transform: scale(1); }
                }
            </style>
        `;

        wrapper.appendChild(overlay);

        document.getElementById('btn-start-intro').addEventListener('click', () => {
            if (!document.getElementById('btn-start-intro').disabled) {
                this.hide();
            }
        });
    },

    setupAudio: function () {
        this.audio = new Audio(this.audioPath);
        this.audio.loop = false;

        const btn = document.getElementById('btn-start-intro');

        this.audio.play().then(() => {
            this.isPlaying = true;
        }).catch(e => {
            console.log("Autoplay blocked");
            if (btn) {
                btn.disabled = false;
                btn.style.opacity = '1';
                btn.style.cursor = 'pointer';
            }
        });

        this.audio.onended = () => {
            this.isPlaying = false;
            // Enable Button
            if (btn) {
                btn.disabled = false;
                btn.style.opacity = '1';
                btn.style.cursor = 'pointer';
            }
        };
    },

    startDemoAnimation: function () {
        const wheel = document.getElementById('demo-wheel');
        const result = document.getElementById('demo-result');
        if (!wheel || !result) return;

        let rotation = 0;

        // Sequence: Spin -> Stop -> Show Result -> Wait -> Hide Result -> Repeat
        const loop = async () => {
            if (!document.getElementById(this.overlayId)) return;

            // 1. Reset
            result.classList.remove('show');
            await new Promise(r => setTimeout(r, 500));

            // 2. Spin
            rotation += 360 * 3 + Math.random() * 360; // 3+ spins
            wheel.style.transition = 'transform 2s cubic-bezier(0.25, 0.1, 0.25, 1)';
            wheel.style.transform = `rotate(${rotation}deg)`;

            await new Promise(r => setTimeout(r, 2000)); // Wait for spin

            // 3. Show Result
            const syllables = ['LA', 'LE', 'LI', 'LO', 'LU'];
            result.innerText = syllables[Math.floor(Math.random() * syllables.length)];
            result.classList.add('show');

            await new Promise(r => setTimeout(r, 2000)); // Show duration

            // Loop
            if (document.getElementById(this.overlayId)) {
                setTimeout(loop, 100);
            }
        };

        loop();
    },

    show: function () {
        const overlay = document.getElementById(this.overlayId);
        if (!overlay) return;
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';

        // Start Animation
        this.startDemoAnimation();
    },

    hide: function () {
        const overlay = document.getElementById(this.overlayId);
        if (!overlay) return;

        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
        }

        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.remove();

            // RESUME GAME
            if (typeof isPaused !== 'undefined') isPaused = false;
        }, 500);
    }
};

// Auto-init logic if needed, but usually index.html calls it
window.addEventListener('load', () => {
    // Optional: Check if we should show it automatically
    // OkuyalimIntro.init(); 
});
