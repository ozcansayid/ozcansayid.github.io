/**
 * Hece Sözcük Oluşturalım - Instruction Module
 * Independent "How to Play" logic.
 */
const HeceSozcukInstruction = {
    overlayId: 'hece-sozcuk-instruction-overlay',
    audioPath: '../../assets/audio/devreyi_tamamla_instruction.mp3',
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
        const wrapper = document.querySelector('.game-board') || document.body;

        const overlay = document.createElement('div');
        overlay.id = this.overlayId;
        overlay.className = 'custom-modal-overlay';

        overlay.style.position = 'fixed';
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

        const demoCss = `
            .demo-stage-inst {
                position: relative;
                width: 600px;
                height: 400px;
                background-color: #f8f9fa;
                border: 4px solid #fff;
                border-radius: 20px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                overflow: hidden;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .demo-drop-zone-inst {
                width: 120px;
                height: 60px;
                border: 3px dashed #ccc;
                border-radius: 10px;
                background-color: rgba(255,255,255,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 50px;
                position: relative;
                z-index: 2;
                transition: all 0.3s;
            }
            .demo-drop-zone-inst.active {
                border-color: #ffd700;
                background-color: rgba(255, 215, 0, 0.2);
                box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
            }
            .demo-bulb-inst {
                position: absolute;
                top: 40px;
                font-size: 4rem;
                color: #555; 
                transition: color 0.3s, filter 0.3s;
                z-index: 2;
            }
            .demo-bulb-inst.on {
                color: #ffeb3b;
                filter: drop-shadow(0 0 20px #ffeb3b);
                animation: bulbPulse 1s infinite alternate;
            }
            @keyframes bulbPulse {
                from { filter: drop-shadow(0 0 10px #ffeb3b); }
                to { filter: drop-shadow(0 0 30px #ffeb3b); }
            }
            .demo-draggable-inst {
                width: 100px;
                height: 50px;
                background-color: #FF9F1C;
                color: white;
                font-size: 1.5rem;
                font-weight: bold;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 10;
                box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            }
            .demo-hand-inst {
                position: absolute;
                width: 50px;
                height: 50px;
                background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23333" stroke="%23333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>') no-repeat center center;
                background-size: contain;
                z-index: 20;
                top: 300px;
                left: 320px;
                transition: transform 0.2s;
            }
        `;

        overlay.innerHTML = `
            <style>${demoCss}</style>
            <div class="intro-content text-center" style="max-width: 800px; width: 90%;">
                
                <h1 class="text-white mb-3 fw-bold" style="text-shadow: 0 4px 10px rgba(0,0,0,0.5); font-size: 3rem;">
                    Nasıl Oynanır?
                </h1>

                <!-- Demo Stage -->
                <div class="demo-stage-inst mb-4 mx-auto">
                    <i id="demo-bulb-inst" class="bi bi-lightbulb-fill demo-bulb-inst"></i>
                    <div id="demo-zone-inst" class="demo-drop-zone-inst"></div>
                    <div id="demo-item-inst" class="demo-draggable-inst">NE</div> 
                    <div id="demo-hand-inst" class="demo-hand-inst"></div>
                </div>

                <div class="actions mt-2">
                    <button id="btn-continue-inst" class="btn btn-lg px-5 py-3 fw-bold shadow-lg" 
                        style="background-color: #2ec4b6; color: white; border: none; font-size: 2rem; border-radius: 50px; min-width: 250px; transform: scale(1); transition: transform 0.2s; cursor: pointer;">
                        DEVAM ET <i class="bi bi-play-fill"></i>
                    </button>
                </div>
            </div>
        `;

        wrapper.appendChild(overlay);

        document.getElementById('btn-continue-inst').addEventListener('click', () => {
            this.hide();
        });
    },

    setupAudio: function () {
        this.audio = new Audio(this.audioPath);
        this.audio.loop = false;
        this.audio.play().catch(e => {
            console.warn("Auto-play prevented", e);
        });
    },

    show: function () {
        const overlay = document.getElementById(this.overlayId);
        if (!overlay) return;
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';

        this.startDemoAnimation();
    },

    hide: function () {
        const overlay = document.getElementById(this.overlayId);
        if (!overlay) return;

        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
        }

        this.stopDemoAnimation();

        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.remove();

            // RESUME GAME
            if (typeof isPaused !== 'undefined') isPaused = false;
        }, 500);
    },

    startDemoAnimation: function () {
        this.stopDemoAnimation();

        const hand = document.getElementById('demo-hand-inst');
        const item = document.getElementById('demo-item-inst');
        const zone = document.getElementById('demo-zone-inst');
        const bulb = document.getElementById('demo-bulb-inst');

        if (!hand || !item || !zone || !bulb) return;

        const loop = () => {
            if (!document.getElementById(this.overlayId)) return;

            // Phase 1: Reset
            hand.style.transition = 'top 1s, left 1s, transform 0.2s';
            item.style.transition = 'none';

            item.style.transform = 'translateX(-50%)';
            item.style.top = '';
            item.style.bottom = '50px';
            zone.classList.remove('active');
            bulb.classList.remove('on');

            hand.style.top = '300px';
            hand.style.left = '50%';
            hand.style.transform = 'translate(-50%, 0) scale(1)';

            setTimeout(() => {
                // Move Hand to Item
                hand.style.top = '315px'; // Over item

                setTimeout(() => {
                    // Click
                    hand.style.transform = 'translate(-50%, 0) scale(0.8)';

                    setTimeout(() => {
                        // Drag Up
                        hand.style.transition = 'top 1s';
                        hand.style.top = '220px';

                        item.style.transition = 'bottom 1s';
                        item.style.bottom = '145px'; // Move up
                        zone.classList.add('active');

                        setTimeout(() => {
                            // Drops
                            hand.style.transform = 'translate(-50%, 0) scale(1)';
                            zone.classList.remove('active');
                            bulb.classList.add('on');

                            setTimeout(() => {
                                // Hand away
                                hand.style.top = '400px';
                            }, 500);

                        }, 1000);
                    }, 500);
                }, 1000);
            }, 500);
        };

        loop();
        this.animInterval = setInterval(loop, 4000); // 4s loop
    },

    stopDemoAnimation: function () {
        if (this.animInterval) {
            clearInterval(this.animInterval);
            this.animInterval = null;
        }
    }
};
