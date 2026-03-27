/**
 * Karda Yazalım - Core Engine
 * Snow-themed handwriting practice with charcoal/glove tools.
 */
class KardaYazalimEngine {
    constructor(data) {
        this.data = data;
        this.mountPoint = document.getElementById('game-mount-point');
        this.isDrawing = false;
        this.lastX = 0;
        this.lastY = 0;
        this.currentTool = 'charcoal';
        this.isGuideActive = false;
        this.isLinesActive = false;
        this.canvas = null;
        this.ctx = null;
        this.guideCanvas = null;
        this.gctx = null;

        this.initUI();
    }

    initUI() {
        const assetsBase = window.ASSETS_PATH || '../../assets/';
        const GAME_ASSETS = `${assetsBase}../core/games/karda_yazalim/assets/`;
        const LETTER_ASSETS = `${assetsBase}img/${this.data.folderPrefix}/`;

        const bigImgSrc = this.data.charUpper || (this.data.images && this.data.images.big);
        const smallImgSrc = this.data.charLower || (this.data.images && this.data.images.small);

        this.mountPoint.innerHTML = `
        <div class="game-container-fixed">
            <div class="sidebar-kid">
                <div class="tools-container">
                    <button id="btnCharcoal" class="tool-btn active-tool">
                        <img src="${GAME_ASSETS}img/kar_komur.svg" alt="Kömür">
                        <span>Yaz</span>
                    </button>
                    <button id="btnEraser" class="tool-btn">
                        <img src="${GAME_ASSETS}img/kar_eldiven.svg" alt="El">
                        <span>Sil</span>
                    </button>
                    <button id="btnGuide" class="tool-btn">
                        <span style="font-size:2.2rem;">${this.data.targetCharUpper || ''}</span>
                        <span>Harfler</span>
                    </button>
                    <button id="btnLines" class="tool-btn">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 7H21" stroke="#333" stroke-width="2" stroke-linecap="round"/>
                            <path d="M3 12H21" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 4"/>
                            <path d="M3 17H21" stroke="#333" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <span>Çizgiler</span>
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
                    <button id="btn-clear" class="btn btn-kid btn-primary-kid btn-icon-only" title="Hepsini Sil">
                        <i class="bi bi-trash3-fill"></i>
                    </button>
                    <button id="btn-restart" class="btn btn-kid btn-primary-kid btn-icon-only" title="Yeniden Başlat">
                        <i class="bi bi-arrow-clockwise"></i>
                    </button>
                    <button class="btn btn-kid btn-info-kid btn-icon-only" id="btn-instruction" title="Yönerge">
                        <i class="bi bi-question-lg"></i>
                    </button>
                    <button id="btn-fullscreen" class="btn btn-kid btn-icon-only" style="background-color:#6f42c1;color:white;border:none;" title="Tam Ekran">
                        <i class="bi bi-arrows-fullscreen"></i>
                    </button>
                </div>
            </div>

            <div class="main-content-kid">
                <div class="game-header">
                    <h2 class="game-title">${this.data.title || 'Karda Yazalım'}</h2>
                    <div class="game-nav">
                        <button class="btn-nav-flat btn-nav-home" id="btn-home" title="Anasayfa"><i class="bi bi-house-fill"></i></button>
                        <button class="btn-nav-flat" id="btn-prev" title="Önceki"><i class="bi bi-chevron-left"></i></button>
                        <button class="btn-nav-flat" id="btn-next" title="Sonraki"><i class="bi bi-chevron-right"></i></button>
                    </div>
                </div>
                <div class="game-board p-0" style="overflow:hidden;position:relative;">
                    <div class="snow-canvas-container" id="canvasContainer">
                        <div id="snowBgLayer" style="position:absolute;width:100%;height:100%;top:0;left:0;z-index:1;pointer-events:none;opacity:0.2;background:url('${GAME_ASSETS}img/bg.jpg') no-repeat center;background-size:cover;"></div>
                        <canvas id="guideCanvas"></canvas>
                        <canvas id="snowCanvas"></canvas>
                        <div id="snowflakesContainer"></div>
                        <div id="toolCursor">🪨</div>
                        <div id="guideOverlay" style="display:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:20;pointer-events:none;">
                            <img id="imgBigLetter" src="${LETTER_ASSETS}${bigImgSrc}" alt="Büyük Harf"
                                style="position:absolute;width:auto;object-fit:contain;filter:drop-shadow(0 0 10px rgba(0,0,0,0.1));opacity:0.6;">
                            <img id="imgSmallLetter" src="${LETTER_ASSETS}${smallImgSrc}" alt="Küçük Harf"
                                style="position:absolute;width:auto;object-fit:contain;filter:drop-shadow(0 0 10px rgba(0,0,0,0.1));opacity:0.6;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        this.canvas = document.getElementById('snowCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.guideCanvas = document.getElementById('guideCanvas');
        this.gctx = this.guideCanvas.getContext('2d');
        this.container = document.getElementById('canvasContainer');
        this.toolCursor = document.getElementById('toolCursor');

        this.resizeCanvas();
        this.createSnowflakes();
        this.bindEvents();
        this.setTool('charcoal');

        if (window.GameEngine) window.GameEngine.resize();

        // Init intro
        if (typeof window.KardaYazalimIntro !== 'undefined') {
            window.KardaYazalimIntro.init(this.data);
        }
    }

    resizeCanvas() {
        if (!this.container || !this.container.clientWidth) return;
        this.canvas.width = this.container.clientWidth;
        this.canvas.height = this.container.clientHeight;
        this.guideCanvas.width = this.container.clientWidth;
        this.guideCanvas.height = this.container.clientHeight;
        this.drawGuideLines();
    }

    createSnowflakes() {
        const c = document.getElementById('snowflakesContainer');
        if (!c) return;
        for (let i = 0; i < 50; i++) {
            const s = document.createElement('div');
            s.classList.add('snowflake');
            s.textContent = '❄';
            s.style.left = Math.random() * 100 + '%';
            s.style.fontSize = (Math.random() * 10 + 10) + 'px';
            s.style.animationDuration = (Math.random() * 5 + 5) + 's';
            s.style.animationDelay = (Math.random() * 5) + 's';
            s.style.opacity = Math.random();
            c.appendChild(s);
        }
    }

    drawGuideLines() {
        if (!this.gctx) return;
        this.gctx.clearRect(0, 0, this.guideCanvas.width, this.guideCanvas.height);

        const totalH = this.guideCanvas.height;
        const margin = totalH * ((this.data.config && this.data.config.margin) || 0.29);
        const guideTop = margin;
        const guideBot = totalH - margin;
        const guideMid = (guideTop + guideBot) / 2;

        if (this.isLinesActive) {
            this.gctx.save();
            this.gctx.beginPath();
            this.gctx.strokeStyle = 'rgba(68,68,255,0.6)';
            this.gctx.lineWidth = 4;
            this.gctx.setLineDash([15, 15]);
            this.gctx.moveTo(0, guideTop); this.gctx.lineTo(this.guideCanvas.width, guideTop);
            this.gctx.moveTo(0, guideMid); this.gctx.lineTo(this.guideCanvas.width, guideMid);
            this.gctx.moveTo(0, guideBot); this.gctx.lineTo(this.guideCanvas.width, guideBot);
            this.gctx.stroke();
            this.gctx.restore();
        }

        // Position guide images
        const imgBig = document.getElementById('imgBigLetter');
        const imgSmall = document.getElementById('imgSmallLetter');
        if (imgBig && imgSmall) {
            const cfg = this.data.config || {};
            const hBig = (guideBot - guideTop) * (cfg.sizeFactorBig || 1.1);
            imgBig.style.height = hBig + 'px';
            imgBig.style.top = (guideTop + (cfg.offsetYBig || 0)) + 'px';
            imgBig.style.left = cfg.bigLeft || '35%';
            imgBig.style.transform = 'translate(-50%, 0)';

            const hSmall = (guideBot - guideMid) * (cfg.sizeFactorSmall || 1.1);
            imgSmall.style.height = hSmall + 'px';
            imgSmall.style.top = (guideMid + (cfg.offsetYSmall || 0)) + 'px';
            imgSmall.style.left = cfg.smallLeft || '65%';
            imgSmall.style.transform = 'translate(-50%, 0)';
        }
    }

    setTool(tool) {
        this.currentTool = tool;
        const assetsBase = window.ASSETS_PATH || '../../assets/';
        const GAME_ASSETS = `${assetsBase}../core/games/karda_yazalim/assets/`;
        
        const btnC = document.getElementById('btnCharcoal');
        const btnE = document.getElementById('btnEraser');

        if (tool === 'charcoal') {
            if (this.toolCursor) this.toolCursor.innerHTML = `<img src="${GAME_ASSETS}img/kar_komur.svg" style="width:48px;height:48px;transform:translate(15px,-15px) rotate(-15deg);filter:drop-shadow(2px 2px 4px rgba(0,0,0,0.3));">`;
            if (btnC) btnC.classList.add('active-tool');
            if (btnE) btnE.classList.remove('active-tool');
        } else {
            if (this.toolCursor) this.toolCursor.innerHTML = `<img src="${GAME_ASSETS}img/kar_eldiven.svg" style="width:64px;height:64px;transform:translate(10px,10px) rotate(-10deg);filter:drop-shadow(2px 2px 4px rgba(0,0,0,0.3));">`;
            if (btnE) btnE.classList.add('active-tool');
            if (btnC) btnC.classList.remove('active-tool');
        }
    }

    toggleGuide() {
        this.isGuideActive = !this.isGuideActive;
        const overlay = document.getElementById('guideOverlay');
        const btn = document.getElementById('btnGuide');
        if (this.isGuideActive) {
            if (btn) btn.classList.add('active-tool');
            if (overlay) overlay.style.display = 'flex';
        } else {
            if (btn) btn.classList.remove('active-tool');
            if (overlay) overlay.style.display = 'none';
        }
    }

    toggleLines() {
        this.isLinesActive = !this.isLinesActive;
        const btn = document.getElementById('btnLines');
        if (this.isLinesActive) { if (btn) btn.classList.add('active-tool'); }
        else { if (btn) btn.classList.remove('active-tool'); }
        this.drawGuideLines();
    }

    getCoordinates(e) {
        const rect = this.canvas.getBoundingClientRect();
        let cX, cY;
        if (e.changedTouches && e.changedTouches.length > 0) {
            cX = e.changedTouches[0].clientX; cY = e.changedTouches[0].clientY;
        } else { cX = e.clientX; cY = e.clientY; }
        const sX = this.canvas.width / rect.width;
        const sY = this.canvas.height / rect.height;
        return [(cX - rect.left) * sX, (cY - rect.top) * sY];
    }

    updateCursor(e) {
        const coords = this.getCoordinates(e);
        if (!coords || !this.toolCursor) return;
        this.toolCursor.style.left = coords[0] + 'px';
        this.toolCursor.style.top = coords[1] + 'px';
    }

    clearCanvas() {
        this.ctx.globalCompositeOperation = 'destination-out';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.globalCompositeOperation = 'source-over';
    }

    bindEvents() {
        const urlParams = new URLSearchParams(window.location.search);
        const letter = urlParams.get('letter') || 'e';

        // Tools
        document.getElementById('btnCharcoal').onclick = () => this.setTool('charcoal');
        document.getElementById('btnEraser').onclick = () => this.setTool('eraser');
        document.getElementById('btnGuide').onclick = () => this.toggleGuide();
        document.getElementById('btnLines').onclick = () => this.toggleLines();
        document.getElementById('btn-clear').onclick = () => this.clearCanvas();
        document.getElementById('btn-restart').onclick = () => location.reload();
        document.getElementById('btn-instruction').onclick = () => {
            if (typeof window.KardaYazalimInstruction !== 'undefined') window.KardaYazalimInstruction.init();
        };

        // Nav + Fullscreen (via shared GameNav helper)
        if (window.GameNav) window.GameNav.bindNavButtons();

        // Drawing
        const startDraw = (e) => {
            this.isDrawing = true;
            const c = this.getCoordinates(e);
            if (c) { [this.lastX, this.lastY] = c; this.updateCursor(e); }
        };
        const draw = (e) => {
            if (this.toolCursor) this.updateCursor(e);
            if (!this.isDrawing) return;
            e.preventDefault();
            const c = this.getCoordinates(e);
            if (!c) return;
            this.ctx.beginPath();
            this.ctx.moveTo(this.lastX, this.lastY);
            this.ctx.lineTo(c[0], c[1]);
            this.ctx.lineCap = 'round'; this.ctx.lineJoin = 'round';
            if (this.currentTool === 'charcoal') {
                this.ctx.globalCompositeOperation = 'source-over';
                this.ctx.strokeStyle = '#333333'; this.ctx.lineWidth = 28;
                this.ctx.shadowBlur = 2; this.ctx.shadowColor = '#333333';
            } else {
                this.ctx.globalCompositeOperation = 'destination-out';
                this.ctx.lineWidth = 54; this.ctx.shadowBlur = 0;
            }
            this.ctx.stroke();
            this.ctx.globalCompositeOperation = 'source-over';
            this.ctx.shadowBlur = 0;
            [this.lastX, this.lastY] = c;
        };
        const stopDraw = () => { this.isDrawing = false; this.ctx.beginPath(); };

        this.container.addEventListener('mousedown', startDraw);
        this.container.addEventListener('mousemove', (e) => { this.updateCursor(e); draw(e); });
        window.addEventListener('mouseup', stopDraw);
        this.container.addEventListener('touchstart', startDraw);
        this.container.addEventListener('touchmove', draw);
        window.addEventListener('touchend', stopDraw);

        window.addEventListener('resize', () => this.resizeCanvas());

        // Audio slider
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
            if(!range) return;
            const p = Number(val);
            range.style.background = `linear-gradient(to right, #f1c40f ${p}%, #555 ${p}%)`;
            if(valDisplay) valDisplay.innerText = Math.round(p);
            if(btn) btn.innerHTML = p===0?'<i class="bi bi-volume-mute-fill"></i>':'<i class="bi bi-volume-up-fill"></i>';
            localStorage.setItem('bg_music_volume', p);
            window.dispatchEvent(new CustomEvent('bgVolumeChanged', {detail:{volume:p}}));
        };
        if (range) {
            range.oninput = function(){update(this.value);};
            const sv = localStorage.getItem('bg_music_volume');
            range.value = sv!==null?Number(sv):20;
            update(range.value);
        }
    }
}

function initApp() {
    if (typeof KardaYazalimData !== 'undefined') {
        window.activeKardaEngine = new KardaYazalimEngine(KardaYazalimData);
    } else {
        console.error("KardaYazalimData is not defined.");
    }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initApp);
else initApp();
