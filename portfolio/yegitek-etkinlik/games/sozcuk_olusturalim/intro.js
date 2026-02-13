const SozcukIntro = {
    overlayId: 'sozcuk-intro-overlay',
    audioPath: '../../assets/audio/sozcuk_olusturalim/sozcuk_olusturalim_instruction.mp3',
    audio: null,
    isPlaying: false,
    animationInterval: null,

    init: function () {
        if (document.getElementById(this.overlayId)) return;
        this.createOverlay();
        this.setupAudio();
        setTimeout(() => this.startDemoAnimation(), 500);
    },

    createOverlay: function () {
        // Find the fixed game container to scope the overlay
        const container = document.querySelector('.game-container-fixed') || document.body;

        const overlay = document.createElement('div');
        overlay.id = this.overlayId;

        // Styles - Scoped to container
        overlay.style.position = 'absolute'; // Changed from fixed
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.85)'; // Black overlay
        overlay.style.zIndex = '2000'; // Match other overlays
        overlay.style.display = 'flex';
        overlay.style.flexDirection = 'column';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.backdropFilter = 'blur(5px)';
        overlay.style.borderRadius = '20px'; // Match container radius if any

        overlay.innerHTML = `
            <div style="position:relative; z-index:2; text-align:center; width: 100%; max-width: 800px;">
                <h1 style="color:white; font-size:4rem; font-weight:800; text-shadow: 0 5px 15px rgba(0,0,0,0.5); margin-bottom: 2rem;">
                    Sözcük Oluşturalım
                </h1>

                <!-- Animation Container -->
                <div id="demo-stage" style="
                    position: relative;
                    width: 500px;
                    height: 250px;
                    background: rgba(255, 255, 255, 0.1);
                    border: 4px solid #4CC9F0;
                    border-radius: 20px;
                    margin: 0 auto 3rem auto;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                ">
                    <!-- Snake Container (Head + Body) -->
                    <div id="demo-snake-container" style="position: absolute; left: 50px; top: 100px; width: 150px; height: 50px; transition: left 0.5s linear;">
                        <!-- Body 2 -->
                        <div style="position: absolute; left: -100px; width: 48px; height: 48px; background: #4CC9F0; border: 2px solid #3aa9cc; border-radius: 8px;"></div>
                        <!-- Body 1 -->
                        <div style="position: absolute; left: -50px; width: 48px; height: 48px; background: #4CC9F0; border: 2px solid #3aa9cc; border-radius: 8px;"></div>
                        
                        <!-- Head -->
                        <div id="demo-snake" style="
                            position: absolute;
                            left: 0;
                            width: 50px;
                            height: 50px;
                            background: #ffffff;
                            border: 3px solid #e0e0e0;
                            border-radius: 10px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            box-shadow: 0 5px 10px rgba(0,0,0,0.2);
                            z-index: 2;
                        ">
                            <!-- Eyes -->
                            <div style="width: 8px; height: 8px; background: black; border-radius: 50%; margin-right: 5px;"></div>
                            <div style="width: 8px; height: 8px; background: black; border-radius: 50%;"></div>
                            <!-- Tongue -->
                            <div id="demo-tongue" style="
                                position: absolute;
                                right: -10px;
                                width: 10px;
                                height: 4px;
                                background: red;
                                display: none;
                            "></div>
                        </div>
                    </div>

                    <!-- Target Syllable -->
                    <div id="demo-target" style="
                        position: absolute;
                        width: 60px;
                        height: 60px;
                        right: 50px;
                        top: 95px;
                        background: #fff;
                        border-radius: 12px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-weight: 800;
                        font-size: 1.5rem;
                        color: #118AB2;
                        box-shadow: 0 5px 0 #0e7c9e;
                    ">
                        NA
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

        container.appendChild(overlay);

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
            // If blocked, enable button
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
        const snakeContainer = document.getElementById('demo-snake-container');
        const target = document.getElementById('demo-target');
        const tongue = document.getElementById('demo-tongue');
        const snakeHead = document.getElementById('demo-snake');

        if (!snakeContainer || !target) return;

        let step = 0;
        const startLeft = 50;
        const targetLeft = 390;

        // Initial State
        snakeContainer.style.left = startLeft + 'px';
        target.style.opacity = '1';
        target.style.transform = 'scale(1)';
        tongue.style.display = 'none';

        this.animationInterval = setInterval(() => {
            step++;

            // Move Snake
            if (step <= 6) {
                const currentLeft = startLeft + (step * 50);
                snakeContainer.style.left = currentLeft + 'px';

                // Tongue
                if (step % 2 === 0) {
                    tongue.style.display = 'block';
                    setTimeout(() => tongue.style.display = 'none', 200);
                }
            }

            // Eat
            if (step === 7) {
                snakeContainer.style.left = targetLeft - 10 + 'px';

                target.style.transition = 'all 0.2s';
                target.style.transform = 'scale(0) rotate(180deg)';
                target.style.opacity = '0';

                snakeHead.classList.add('eating-effect');
                setTimeout(() => snakeHead.classList.remove('eating-effect'), 300);
            }

            // Reset
            if (step === 10) {
                step = 0;
                snakeContainer.style.transition = 'none';
                snakeContainer.style.left = startLeft + 'px';
                target.style.transition = 'none';
                target.style.transform = 'scale(1) rotate(0deg)';
                target.style.opacity = '1';

                setTimeout(() => {
                    snakeContainer.style.transition = 'left 0.5s linear';
                }, 50);
            }

        }, 600);
    },

    hide: function () {
        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
        }
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
        }

        const overlay = document.getElementById(this.overlayId);
        if (overlay) {
            overlay.style.transition = 'opacity 0.5s ease';
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.remove();
                if (window.startGame) window.startGame();
            }, 500);
        }
    },

    toggle: function () {
        const overlay = document.getElementById(this.overlayId);
        if (overlay) {
            this.hide();
        } else {
            this.init();
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    SozcukIntro.init();
});
