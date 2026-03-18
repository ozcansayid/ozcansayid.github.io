/**
 * Harf Yazalim - Core Engine
 * Manages dual-canvas drawing system for handwriting practice.
 */
class HarfYazalimEngine {
    constructor(data) {
        this.data = data;
        this.mountPoint = document.getElementById('game-mount-point');

        // Drawing State
        this.tool = 'pen';
        this.isDrawing = false;
        this.lastPos = { x: 0, y: 0 };
        this.mctx = null;
        this.dctx = null;
        this.maskCanvas = null;
        this.drawingCanvas = null;

        this.initUI();
    }

    initUI() {
        // Build HTML
        const assetsBase = window.ASSETS_PATH || '../../assets/';
        const bgPath = `${assetsBase}img/${this.data.folderPrefix}/${this.data.background || 'bg.jpg'}`;

        this.mountPoint.innerHTML = `
        <div class="game-container-fixed">
            <!-- Sidebar (Left) -->
            <div class="sidebar-kid">
                <div class="nav-buttons-container" style="position: relative; overflow: visible !important; margin-top: auto;">
                    <!-- Audio Control -->
                    <div class="position-relative mb-2 d-flex justify-content-center">
                        <div id="audio-slider-container" class="audio-slider-popup">
                            <div id="volume-val-display">20</div>
                            <div class="slider-track-wrapper">
                                <input type="range" id="volume-range" class="horizontal-range" min="0" max="100" value="20">
                            </div>
                        </div>
                        <button id="btn-audio-toggle" class="btn btn-kid btn-icon-only" title="Ses Ayarı"
                            style="background-color: #2ecc71 !important; color: white !important; border: none !important;">
                            <i class="bi bi-volume-up-fill"></i>
                        </button>
                    </div>

                    <button class="btn btn-kid btn-primary-kid btn-icon-only mb-2" title="Yeniden Başlat" id="btn-restart">
                        <i class="bi bi-arrow-clockwise"></i>
                    </button>
                    <button class="btn btn-kid btn-info-kid btn-icon-only mb-2" id="btn-instruction" title="Yönerge">
                        <i class="bi bi-question-lg"></i>
                    </button>
                    <button id="btn-fullscreen" class="btn btn-kid btn-icon-only mb-2" style="background-color: #6f42c1; color: white; border: none;" title="Tam Ekran">
                        <i class="bi bi-arrows-fullscreen"></i>
                    </button>
                </div>
            </div>

            <!-- Main Content -->
            <div class="main-content-kid">
                <div class="game-header">
                    <h2 class="game-title">${this.data.title || 'Harfi Yazalım'}</h2>
                    <div class="game-nav">
                        <button class="btn-nav-flat btn-nav-home" id="btn-home" title="Anasayfa">
                            <i class="bi bi-house-fill"></i>
                        </button>
                        <button class="btn-nav-flat" id="btn-prev" title="Önceki">
                            <i class="bi bi-chevron-left"></i>
                        </button>
                        <button class="btn-nav-flat" id="btn-next" title="Sonraki">
                            <i class="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>

                <div class="game-board">
                    <div class="game-wrapper" style="background-image: url('${bgPath}');">
                        <div class="canvas-container-custom" id="canvas-container">
                            <canvas id="mask-canvas"></canvas>
                            <canvas id="drawing-canvas"></canvas>
                        </div>

                        <div class="controls-area">
                            <button id="btn-pen" class="btn-tool active" title="Kalem"><i class="bi bi-pencil-fill"></i></button>
                            <button id="btn-eraser" class="btn-tool" title="Silgi"><i class="bi bi-eraser-fill"></i></button>
                            <div class="vr mx-2"></div>
                            <button id="btn-clear" class="btn btn-outline-secondary btn-action" style="border: 2px solid #e0e0e0; color: #666;">
                                <i class="bi bi-trash"></i> Temizle
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        this.initCanvas();
        this.bindEvents();
        if (window.GameEngine) window.GameEngine.resize();
        this.loadContent();

        // Start Intro explicitly
        if (typeof window.HarfYazalimIntro !== 'undefined') {
            window.HarfYazalimIntro.init(this.data);
        }
    }

    initCanvas() {
        this.maskCanvas = document.getElementById('mask-canvas');
        this.drawingCanvas = document.getElementById('drawing-canvas');
        const container = document.getElementById('canvas-container');

        if (this.maskCanvas && this.drawingCanvas && container) {
            const w = container.clientWidth;
            const h = container.clientHeight;
            this.maskCanvas.width = w;
            this.maskCanvas.height = h;
            this.drawingCanvas.width = w;
            this.drawingCanvas.height = h;

            this.mctx = this.maskCanvas.getContext('2d', { willReadFrequently: true });
            this.dctx = this.drawingCanvas.getContext('2d', { willReadFrequently: true });
        }
    }

    bindEvents() {
        document.getElementById('btn-restart').onclick = () => location.reload();

        document.getElementById('btn-instruction').onclick = () => {
            if (typeof window.HarfYazalimInstruction !== 'undefined') {
                window.HarfYazalimInstruction.init();
            }
        };

        // Nav + Fullscreen (via shared GameNav helper)
        if (window.GameNav) window.GameNav.bindNavButtons();

        // Tools
        document.getElementById('btn-pen').onclick = () => this.setTool('pen');
        document.getElementById('btn-eraser').onclick = () => this.setTool('eraser');
        document.getElementById('btn-clear').onclick = () => this.clearCanvas();

        // Drawing Events
        const start = (e) => {
            this.isDrawing = true;
            this.lastPos = this.getMousePos(e);
        };
        const move = (e) => {
            if (!this.isDrawing) return;
            const pos = this.getMousePos(e);
            this.dctx.beginPath();
            this.dctx.moveTo(this.lastPos.x, this.lastPos.y);
            this.dctx.lineTo(pos.x, pos.y);
            this.dctx.lineCap = 'round';
            this.dctx.lineJoin = 'round';

            if (this.tool === 'pen') {
                this.dctx.strokeStyle = '#3b82f6';
                this.dctx.lineWidth = 25;
            } else {
                this.dctx.globalCompositeOperation = 'destination-out';
                this.dctx.lineWidth = 45;
            }
            this.dctx.stroke();
            this.dctx.globalCompositeOperation = 'source-over';
            this.lastPos = pos;
        };
        const stop = () => { this.isDrawing = false; };

        this.drawingCanvas.addEventListener('mousedown', start);
        this.drawingCanvas.addEventListener('mousemove', move);
        this.drawingCanvas.addEventListener('mouseup', stop);
        this.drawingCanvas.addEventListener('mouseout', stop);
        this.drawingCanvas.addEventListener('touchstart', (e) => { e.preventDefault(); start(e); });
        this.drawingCanvas.addEventListener('touchmove', (e) => { e.preventDefault(); move(e); });
        this.drawingCanvas.addEventListener('touchend', stop);

        // Resize
        window.addEventListener('resize', () => {
            this.initCanvas();
            this.loadContent(); // Re-draw guide
        });

        // Fullscreen is handled by GameNav.bindNavButtons() above

        // Audio Slider Logic (standard copied)
        this.initAudioSlider();
    }

    getMousePos(e) {
        const rect = this.drawingCanvas.getBoundingClientRect();
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        return {
            x: (clientX - rect.left) * (this.drawingCanvas.width / rect.width),
            y: (clientY - rect.top) * (this.drawingCanvas.height / rect.height)
        };
    }

    setTool(t) {
        this.tool = t;
        document.querySelectorAll('.btn-tool').forEach(b => b.classList.remove('active'));
        if (t === 'pen') document.getElementById('btn-pen').classList.add('active');
        else document.getElementById('btn-eraser').classList.add('active');
    }

    clearCanvas() {
        this.dctx.clearRect(0, 0, this.drawingCanvas.width, this.drawingCanvas.height);
    }

    loadContent() {
        const imgBig = new Image();
        const imgSmall = new Image();
        const bigImgSrc = (this.data.images && this.data.images.big) || this.data.charUpper;
        const smallImgSrc = (this.data.images && this.data.images.small) || this.data.charLower;

        if (!bigImgSrc || !smallImgSrc) {
            console.error('Letter images not defined in data file');
            return;
        }

        imgBig.src = window.ASSETS_PATH + 'img/' + this.data.folderPrefix + '/' + bigImgSrc;
        imgSmall.src = window.ASSETS_PATH + 'img/' + this.data.folderPrefix + '/' + smallImgSrc;

        imgBig.onerror = () => console.error('Big letter image not found:', imgBig.src);
        imgSmall.onerror = () => console.error('Small letter image not found:', imgSmall.src);

        Promise.all([
            new Promise(resolve => { imgBig.onload = resolve; }),
            new Promise(resolve => { imgSmall.onload = resolve; })
        ]).then(() => {
            this.drawScene(imgBig, imgSmall);
        });
    }

    drawScene(imgBig, imgSmall) {
        this.mctx.clearRect(0, 0, this.maskCanvas.width, this.maskCanvas.height);

        const cfg = this.data.config || {};
        const padTop = 100;
        const padBot = 100;
        const guideTop = padTop;
        const guideBot = this.maskCanvas.height - padBot;
        const guideMid = (guideTop + guideBot) / 2;

        this.mctx.globalAlpha = 1.0;

        // Draw Guide Lines
        this.mctx.beginPath();
        this.mctx.strokeStyle = '#4444ff';
        this.mctx.lineWidth = 2;
        this.mctx.setLineDash([15, 15]);

        this.mctx.moveTo(0, guideTop); this.mctx.lineTo(this.maskCanvas.width, guideTop);
        this.mctx.moveTo(0, guideMid); this.mctx.lineTo(this.maskCanvas.width, guideMid);
        this.mctx.moveTo(0, guideBot); this.mctx.lineTo(this.maskCanvas.width, guideBot);
        this.mctx.stroke();
        this.mctx.setLineDash([]); // Reset

        // Big Letter (positioning from config)
        const sizeFactorBig = cfg.sizeFactorBig || 1.23;
        const hBig = (guideBot - guideTop) * sizeFactorBig;
        const scaleBig = hBig / imgBig.height;
        const wBig = imgBig.width * scaleBig;
        const xBig = (this.maskCanvas.width * (cfg.bigLeftPercent || 25)) / 100 - (wBig / 2);
        const yBig = guideTop + (cfg.offsetYBig !== undefined ? cfg.offsetYBig : -90);
        this.mctx.drawImage(imgBig, xBig, yBig, wBig, hBig);

        // Small Letter (positioning from config)
        const sizeFactorSmall = cfg.sizeFactorSmall || 1.35;
        const hSmall = (guideBot - guideMid) * sizeFactorSmall;
        const scaleSmall = hSmall / imgSmall.height;
        const wSmall = imgSmall.width * scaleSmall;
        const xSmall = (this.maskCanvas.width * (cfg.smallLeftPercent || 75)) / 100 - (wSmall / 2);
        const ySmall = guideMid + (cfg.offsetYSmall !== undefined ? cfg.offsetYSmall : -67);
        this.mctx.drawImage(imgSmall, xSmall, ySmall, wSmall, hSmall);
    }

    initAudioSlider() {
        const btn = document.getElementById('btn-audio-toggle');
        const popup = document.getElementById('audio-slider-container');
        const range = document.getElementById('volume-range');
        const valDisplay = document.getElementById('volume-val-display');
        let isOpen = false;

        const togglePopup = (show) => {
            if (!popup) return;
            if (show) popup.classList.add('show');
            else popup.classList.remove('show');
        };

        if (btn) {
            btn.onclick = (e) => { e.stopPropagation(); isOpen = !isOpen; togglePopup(isOpen); };
            document.addEventListener('click', (e) => {
                if (isOpen && popup && !popup.contains(e.target) && !btn.contains(e.target)) {
                    isOpen = false; togglePopup(false);
                }
            });
        }

        const updateVolume = (val) => {
            if (!range) return;
            const percent = Number(val);
            range.style.background = `linear-gradient(to right, #f1c40f ${percent}%, #555 ${percent}%)`;
            if (valDisplay) valDisplay.innerText = Math.round(percent);
            if (btn) btn.innerHTML = percent === 0 ? '<i class="bi bi-volume-mute-fill"></i>' : '<i class="bi bi-volume-up-fill"></i>';
            localStorage.setItem('bg_music_volume', percent);
            window.dispatchEvent(new CustomEvent('bgVolumeChanged', { detail: { volume: percent } }));
        };

        if (range) {
            range.oninput = function () { updateVolume(this.value); };
            const savedVol = localStorage.getItem('bg_music_volume');
            range.value = savedVol !== null ? Number(savedVol) : 20;
            updateVolume(range.value);
        }
    }
}

function initApp() {
    if (typeof HarfYazalimData !== 'undefined') {
        window.activeHarfEngine = new HarfYazalimEngine(HarfYazalimData);
    } else {
        console.error("HarfYazalimData is not defined.");
    }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initApp);
else initApp();
