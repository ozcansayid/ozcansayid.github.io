/**
 * DERSLIG GAME CORE SDK v1.0
 * Bu dosya tüm oyunların temelini oluşturur.
 * - Header'ı otomatik basar.
 * - 1920x1080 alanını ekrana sığdırır (Scale).
 * - Storyline ile puan alışverişini yapar.
 */

const Derslig = (function () {
    // --- KONFİGÜRASYON ---
    const CONFIG = {
        maxScore: 20, // Maksimum puan sabit
        width: 1920,
        height: 1080,
        storylineRoot: window, // Storyline player'ın olduğu scope (genelde window veya parent)
    };

    // --- DURUM DEĞİŞKENLERİ ---
    let state = {
        totalQuestions: 0,
        pointsPerQuestion: 0,
        currentScore: 0,
        correctCount: 0,
        wrongCount: 0,
        isCompleted: false,
        gameTitle: "Derslig Etkinlik",
        gameInfo: "Yönerge bulunamadı."
    };

    // --- STORYLINE BAĞLANTISI ---
    function getPlayer() {
        // Storyline 'GetPlayer' fonksiyonunu bulmaya çalış
        if (typeof window.GetPlayer === 'function') return window.GetPlayer();
        if (window.parent && typeof window.parent.GetPlayer === 'function') return window.parent.GetPlayer();

        // Bulamazsa MOCK (Test) Player döndür
        console.warn("Storyline Player bulunamadı. Test modunda çalışılıyor.");
        return {
            SetVar: (name, val) => console.log(`[SL] SetVar: ${name} = ${val}`),
            GetVar: (name) => console.log(`[SL] GetVar: ${name}`)
        };
    }

    const player = getPlayer();

    // --- TEMEL FONKSİYONLAR ---

    /**
     * Oyunu başlatır ve ayarları yapar.
     * @param {Object} options - { title: "...", info: "...", soruSayisi: 10 }
     */
    function init(options) {
        state.gameTitle = options.title || "Etkinlik";
        state.gameInfo = options.info || "Başarılar!";

        // Puan hesaplaması (Maksimum 20 üzerinden)
        if (!options.soruSayisi || options.soruSayisi < 1) {
            console.error("HATA: soruSayisi belirtilmedi!");
            state.pointsPerQuestion = 0;
        } else {
            state.totalQuestions = options.soruSayisi;
            state.pointsPerQuestion = CONFIG.maxScore / state.totalQuestions;
        }

        // Arayüzü oluştur
        _createUI();
        _startScaler();

        // Storyline değişkenlerini sıfırla
        player.SetVar("puan", 0);
        player.SetVar("correct", 0);
        player.SetVar("wrong", 0);
        player.SetVar("quizCompleted", 0);

        console.log(`Derslig Core Başlatıldı. Soru Başına Puan: ${state.pointsPerQuestion}`);
    }

    /**
     * Doğru cevap verildiğinde çağrılacak.
     */
    function dogru() {
        state.correctCount++;
        state.currentScore += state.pointsPerQuestion;

        // Puanı güncelle
        _updateStoryline();
    }

    /**
     * Yanlış cevap verildiğinde çağrılacak.
     */
    function yanlis() {
        state.wrongCount++;
        _updateStoryline();
    }

    /**
     * Oyun bittiğinde çağrılacak.
     */
    function bitir() {
        if (state.isCompleted) return;
        state.isCompleted = true;

        // Puanı son kez gönder (virgül hatası olmasın diye tam sayıya yuvarlayabiliriz ama şimdilik olduğu gibi atıyoruz)
        player.SetVar("quizCompleted", 1);

        console.log("Oyun Bitti! Puan: " + state.currentScore);

        // Next butonunu göster
        _showNextButton();
    }

    // --- YARDIMCI FONSİYONLAR (Private) ---

    function _updateStoryline() {
        player.SetVar("puan", state.currentScore);
        player.SetVar("correct", state.correctCount);
        player.SetVar("wrong", state.wrongCount);
        console.log(`Durum: D=${state.correctCount}, Y=${state.wrongCount}, Puan=${state.currentScore}`);
    }

    function _createUI() {
        // Header HTML
        const headerHTML = `
            <div id="derslig-header">
                <div class="header-left">
                    <div class="game-title">${state.gameTitle}</div>
                </div>
                <div class="header-right">
                    <button class="ctrl-btn" onclick="location.reload()" title="Yeniden Başlat"><i class="fas fa-sync-alt"></i></button>
                    <button class="ctrl-btn" id="info-btn" title="Nasıl Oynanır?"><i class="fas fa-question"></i></button>

                </div>
            </div>
            
            <!-- Bilgi Modalı -->
            <div id="info-modal" class="modal-backdrop">
                <div class="info-content">
                    <h3>Nasıl Oynanır?</h3>
                    <p>${state.gameInfo}</p>
                    <button class="btn btn-primary mt-3" onclick="document.getElementById('info-modal').style.display='none'">Anladım</button>
                </div>
            </div>

            <!-- Bitiş Ekranı (Modal Tarzı) -->
            <div id="next-overlay">
                 <div class="final-modal-content">
                     <div style="font-size: 80px; color: #fcd638; margin-bottom: 20px;">
                        <i class="fas fa-trophy"></i>
                     </div>
                     <h2 class="final-title">Tebrikler!</h2>
                     <p class="final-text">Etkinliği başarıyla tamamladınız.</p>
                     
                     <button class="next-btn" onclick="Derslig.goNext()">
                        İLERLE <i class="fas fa-arrow-right"></i>
                     </button>
                 </div>
            </div>
        `;

        document.getElementById('game-wrapper').insertAdjacentHTML('afterbegin', headerHTML);

        // Info butonu eventi
        document.getElementById('info-btn').addEventListener('click', () => {
            document.getElementById('info-modal').style.display = 'flex';
        });
    }

    function _showNextButton() {
        const overlay = document.getElementById('next-overlay');
        overlay.style.display = 'flex';

        // Konfeti efekti (Varsa)
        if (window.confetti) {
            window.confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        }
    }

    // Storyline'da bir sonraki slayta geçiş (Opsiyonel, genelde Storyline trigger'ı quizCompleted değişkenini izler)
    function goNext() {
        console.log("İlerle butonuna basıldı. Storyline trigger'ı bekleniyor.");
        // Eğer manuel tetikleme gerekiyorsa buraya eklenebilir.
        // Örneğin: player.SetVar("NextSlide", 1);
    }

    // --- SCALER (Ölçekleyici) ---
    function _startScaler() {
        const wrapper = document.getElementById('game-wrapper');

        function resize() {
            const winW = window.innerWidth;
            const winH = window.innerHeight;
            const targetW = CONFIG.width;
            const targetH = CONFIG.height;

            // En boy oranına göre scale miktarını hesapla (Fit to screen)
            const scale = Math.min(winW / targetW, winH / targetH);

            // Wrapper'ı TAM ORTAYA yerleştir ve scale et
            // translate(-50%, -50%) -> Merkeze al
            // scale(scale) -> Küçült/Büyüt
            wrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;

            // Mobil tarayıcı çubuğunun etkisini azaltmak için scroll'u kilitleyebiliriz
            document.body.style.width = '100vw';
            document.body.style.height = '100vh';
            document.body.style.overflow = 'hidden';
        }

        // Resize ve OrientationChange olaylarını dinle
        window.addEventListener('resize', resize);
        window.addEventListener('orientationchange', () => { setTimeout(resize, 200); });

        // İlk yüklemede çalıştır
        resize();
    }

    // Dışarıya açılan API
    return {
        baslat: init,
        dogru: dogru,
        yanlis: yanlis,
        bitir: bitir,
        goNext: goNext
    };
})();
