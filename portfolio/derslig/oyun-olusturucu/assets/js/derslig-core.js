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
            console.warn("UYARI: soruSayisi belirtilmedi veya geçersiz! Varsayılan olarak her soru 2 puan kabul edilecek.");
            // Kullanıcı isteği: Varsayılan olarak 2 olsun.
            // Bu durumda maxScore (20) ile ilişki kopabilir ama user request bu yönde.
            state.pointsPerQuestion = 2;
            // Geriye dönük totalQuestions hesaplayalım (opsiyonel ama tutarlı olması için)
            state.totalQuestions = CONFIG.maxScore / state.pointsPerQuestion; // 10 soru varsayılır
        } else {
            state.totalQuestions = options.soruSayisi;
            state.pointsPerQuestion = CONFIG.maxScore / state.totalQuestions;
        }

        // Arayüzü oluştur
        _createUI();
        // Arayüzü oluştur
        // Arayüzü oluştur
        _createUI();
        _createModal("BAŞLA"); // İlk açılışta BAŞLA butonu ile
        _startScaler();

        /* TEST İÇİN: 's' tuşuna basınca özet ekranını göster
        document.addEventListener('keydown', (e) => {
            if (e.key === 's' || e.key === 'S') {
                _showSummary();
            }
        });*/

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
        // player.SetVar("quizCompleted", 1); // <-- Removed as per user request (moved to Next button click)

        console.log("Oyun Bitti! Puan: " + state.currentScore);

        // Özet ekranını göster
        _showSummary();
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
                    <button class="ctrl-btn" onclick="Derslig.restart()" title="Yeniden Başlat"><i class="fas fa-sync-alt"></i></button>
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

            <!-- Bitiş Ekranı -->
            <div id="next-overlay">
                 <h1 style="font-size: 60px; color: #4CAF50; margin-bottom: 20px;">Tebrikler!</h1>
                 <p style="font-size: 30px; margin-bottom: 40px;">Etkinliği tamamladınız.</p>
                 <button class="next-btn" onclick="Derslig.goNext()">İLERLE <i class="fas fa-arrow-right"></i></button>
            </div>
        `;

        document.getElementById('game-wrapper').insertAdjacentHTML('afterbegin', headerHTML);

        // Info butonu eventi - Aynı modalı "ANLADIM" butonuyla aç
        document.getElementById('info-btn').addEventListener('click', () => {
            // Varsa önce temizle veya içeriği güncelle, ama basitçe yeniden oluşturabiliriz (kontrol _createModal içinde)
            _createModal("ANLADIM");
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

    function _createModal(btnText) {
        // Ensure parent has relative positioning
        const wrapper = document.getElementById('game-wrapper');

        // Önce varsa eskini kaldır (temizlik)
        const existing = document.getElementById('intro-overlay');
        if (existing) existing.remove();

        const overlayHTML = `
            <div id="intro-overlay" style="
                position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0, 0, 0, 0.85); z-index: 20000; display: flex;
                flex-direction: column; justify-content: center; align-items: center;
                backdrop-filter: blur(5px);
            ">
                <div style="
                    background: white; padding: 0; border-radius: 30px;
                    text-align: center; max-width: 700px; width: 90%;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
                    overflow: hidden; animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                ">
                    <!-- Modal Header -->
                    <div style="background: #0bafb7; padding: 20px; color: white;">
                        <h2 style="margin: 0; font-size: 32px; font-weight: 800; letter-spacing: 1px;">YÖNERGE</h2>
                    </div>

                    <!-- Modal Body -->
                    <div style="padding: 40px;">
                        <h1 style="color: #333; margin-bottom: 20px; font-size: 36px; font-weight: 800;">${state.gameTitle}</h1>
                        <div style="font-size: 24px; color: #555; margin-bottom: 40px; line-height: 1.6;">
                            ${state.gameInfo}
                        </div>
                        
                        <button id="start-game-btn" class="btn-primary" style="
                            background: #e50069; color: white; border: none;
                            padding: 15px 50px; font-size: 28px; font-weight: 800;
                            border-radius: 15px; cursor: pointer;
                            box-shadow: 0 6px 0 #b30052;
                            transition: all 0.1s;
                            min-width: 200px;
                        ">${btnText}</button>
                    </div>
                </div>
            </div>
            <style>
                @keyframes popIn {
                    from { transform: scale(0.8); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            </style>
        `;
        wrapper.insertAdjacentHTML('beforeend', overlayHTML);

        const btn = document.getElementById('start-game-btn');
        btn.addEventListener('click', () => {
            const overlay = document.getElementById('intro-overlay');
            overlay.style.transition = 'opacity 0.3s';
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.remove();
            }, 300);
        });

        // Add active press effect via JS or CSS injection
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'translateY(4px)';
            btn.style.boxShadow = '0 2px 0 #b30052';
        });
        btn.addEventListener('mouseup', () => {
            btn.style.transform = 'translateY(0)';
            btn.style.boxShadow = '0 6px 0 #b30052';
        });
    }

    function _showSummary() {
        const wrapper = document.getElementById('game-wrapper');

        // Önce varsa eskini kaldır
        const existing = document.getElementById('summary-overlay');
        if (existing) existing.remove();

        // Yıldız hesabı
        // MaxScore: 20
        // %0-40 (0-8): 1 Yıldız
        // %40-75 (8-15): 2 Yıldız
        // %75+ (15-20): 3 Yıldız
        // Puan state.currentScore
        let starCount = 1;
        let feedbackText = "Daha çok çalışmalısın.";
        const score = state.currentScore;
        const max = CONFIG.maxScore;
        const ratio = score / max;

        if (ratio >= 0.75) {
            starCount = 3;
            feedbackText = "Tebrikler! Harikasın.";
        } else if (ratio >= 0.40) {
            starCount = 2;
            feedbackText = "Güzel, ama daha iyi olabilir.";
        }

        // Yıldız HTML oluştur
        let starsHTML = '';
        for (let i = 0; i < 3; i++) {
            if (i < starCount) {
                starsHTML += '<i class="fas fa-star" style="color: #ffd700; font-size: 60px; margin: 0 10px; text-shadow: 0 2px 5px rgba(0,0,0,0.2);"></i>';
            } else {
                starsHTML += '<i class="far fa-star" style="color: #ccc; font-size: 60px; margin: 0 10px;"></i>';
            }
        }

        const overlayHTML = `
            <div id="summary-overlay" style="
                position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0, 0, 0, 0.85); z-index: 20000; display: flex;
                flex-direction: column; justify-content: center; align-items: center;
                backdrop-filter: blur(5px);
            ">
                <div style="
                    background: white; padding: 0; border-radius: 30px;
                    text-align: center; max-width: 700px; width: 90%;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
                    overflow: hidden; animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                ">
                    <!-- Modal Header -->
                    <div style="background: #0bafb7; padding: 20px; color: white;">
                        <h2 style="margin: 0; font-size: 32px; font-weight: 800; letter-spacing: 1px;">ETKİNLİK ÖZETİ</h2>
                    </div>

                    <!-- Modal Body -->
                    <div style="padding: 40px; display: flex; flex-direction: column; align-items: center;">
                        
                        <!-- Yıldızlar -->
                        <div style="margin-bottom: 30px;">
                            ${starsHTML}
                        </div>

                        <!-- Geri Bildirim -->
                        <div style="font-size: 28px; color: #555; margin-bottom: 40px; font-weight: bold;">
                            ${feedbackText}
                        </div>

                        <!-- Puan (Opsiyonel, kullanıcı istemedi ama görmek isteyebilir) -->
                        <div style="font-size: 20px; color: #777; margin-bottom: 40px;">
                            Toplam Puan: <span style="color: #e50069; font-weight: bold;">${Math.round(score)}</span> / ${max}
                        </div>
                        
                        <button id="summary-next-btn" class="btn-primary" style="
                            background: #e50069; color: white; border: none;
                            padding: 15px 50px; font-size: 28px; font-weight: 800;
                            border-radius: 15px; cursor: pointer;
                            box-shadow: 0 6px 0 #b30052;
                            transition: all 0.1s;
                            min-width: 200px;
                            display: flex; align-items: center; gap: 15px;
                        ">
                            İLERLE <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        wrapper.insertAdjacentHTML('beforeend', overlayHTML);

        const btn = document.getElementById('summary-next-btn');
        btn.addEventListener('click', () => {
            // Storyline değişkenini güncelle
            player.SetVar("quizCompleted", 1);
            console.log("Activity Completed. quizCompleted set to 1.");

            // Kullanıcı isteği: Buton değişmesin, sadece fonksiyon çalışsın.
            // Opsiyonel: Birden fazla tıklamayı önlemek için disable edilebilir
            // btn.disabled = true; 

            // Opsiyonel: Overlay'i kapat veya yönlendir.
            // setTimeout(() => document.getElementById('summary-overlay').remove(), 1000);
        });

        // Add active press effect via JS
        btn.addEventListener('mousedown', () => {
            if (btn.disabled) return;
            btn.style.transform = 'translateY(4px)';
            btn.style.boxShadow = '0 2px 0 #b30052';
        });
        btn.addEventListener('mouseup', () => {
            if (btn.disabled) return;
            btn.style.transform = 'translateY(0)';
            btn.style.boxShadow = '0 6px 0 #b30052';
        });
    }

    // Storyline'da bir sonraki slayta geçiş (Opsiyonel, genelde Storyline trigger'ı quizCompleted değişkenini izler)
    function goNext() {
        console.log("İlerle butonuna basıldı. Storyline trigger'ı bekleniyor.");
        // Eğer manuel tetikleme gerekiyorsa buraya eklenebilir.
        // Örneğin: player.SetVar("NextSlide", 1);
    }

    /**
     * Oyunu ve tüm değişkenleri sıfırlar, sayfayı yeniler.
     */
    function restart() {
        console.log("Oyun yeniden başlatılıyor...");

        // Internal State Reset
        state.currentScore = 0;
        state.correctCount = 0;
        state.wrongCount = 0;
        state.isCompleted = false;

        // Storyline Variables Reset
        player.SetVar("puan", 0);
        player.SetVar("correct", 0);
        player.SetVar("wrong", 0);
        player.SetVar("quizCompleted", 0);

        // Reload page
        location.reload();
    }

    // --- ÖZET EKRANI ---
    function _showSummary() {
        const wrapper = document.getElementById('game-wrapper');

        // Önce varsa eskini kaldır
        const existing = document.getElementById('summary-overlay');
        if (existing) existing.remove();

        // Yıldız hesabı
        // MaxScore: CONFIG.soruSayisi * 10 (varsayım) veya state.totalQuestions * 10
        // Basitçe CONFIG.soruSayisi * 10 diyelim, standart puanlama her soru 10 puan gibi.
        let starCount = 1;
        let feedbackText = "Daha çok çalışmalısın.";

        // Puan hesabı: Eğer her soru 10 puansa, max puan soruSayisi * 10
        // Ancak oyun içi implementasyona göre değişebilir.
        // Genelde state.currentScore kullanıyoruz.
        // Oran hesabı için max puanı bilmemiz lazım.
        // Varsayılan max puanı soruSayisi * 10 kabul edelim.
        const max = CONFIG.soruSayisi * 10;
        const score = state.currentScore;
        const ratio = score / max;

        if (ratio >= 0.75) {
            starCount = 3;
            feedbackText = "Tebrikler! Harikasın.";
        } else if (ratio >= 0.40) {
            starCount = 2;
            feedbackText = "Güzel, ama daha iyi olabilir.";
        }

        // Yıldız HTML oluştur
        let starsHTML = '';
        for (let i = 0; i < 3; i++) {
            if (i < starCount) {
                starsHTML += '<i class="fas fa-star" style="color: #ffd700; font-size: 60px; margin: 0 10px; text-shadow: 0 2px 5px rgba(0,0,0,0.2);"></i>';
            } else {
                starsHTML += '<i class="far fa-star" style="color: #ccc; font-size: 60px; margin: 0 10px;"></i>';
            }
        }

        const overlayHTML = `
            <div id="summary-overlay" style="
                position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0, 0, 0, 0.85); z-index: 20000; display: flex;
                flex-direction: column; justify-content: center; align-items: center;
                backdrop-filter: blur(5px);
            ">
                <div style="
                    background: white; padding: 0; border-radius: 30px;
                    text-align: center; max-width: 700px; width: 90%;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
                    overflow: hidden; animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                ">
                    <!-- Modal Header -->
                    <div style="background: #0bafb7; padding: 20px; color: white;">
                        <h2 style="margin: 0; font-size: 32px; font-weight: 800; letter-spacing: 1px;">ETKİNLİK ÖZETİ</h2>
                    </div>

                    <!-- Modal Body -->
                    <div style="padding: 40px; display: flex; flex-direction: column; align-items: center;">
                        
                        <!-- Yıldızlar -->
                        <div style="margin-bottom: 30px;">
                            ${starsHTML}
                        </div>

                        <!-- Geri Bildirim -->
                        <div style="font-size: 28px; color: #555; margin-bottom: 40px; font-weight: bold;">
                            ${feedbackText}
                        </div>

                        <!-- Puan (Opsiyonel, kullanıcı istemedi ama görmek isteyebilir) -->
                        <div style="font-size: 20px; color: #777; margin-bottom: 40px;">
                            Toplam Puan: <span style="color: #e50069; font-weight: bold;">${Math.round(score)}</span> / ${max}
                        </div>
                        
                        <button id="summary-next-btn" class="btn-primary" style="
                            background: #e50069; color: white; border: none;
                            padding: 15px 50px; font-size: 28px; font-weight: 800;
                            border-radius: 15px; cursor: pointer;
                            box-shadow: 0 6px 0 #b30052;
                            transition: all 0.1s;
                            min-width: 200px;
                            display: flex; align-items: center; gap: 15px;
                        ">
                            İLERLE <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        wrapper.insertAdjacentHTML('beforeend', overlayHTML);

        const btn = document.getElementById('summary-next-btn');
        btn.addEventListener('click', () => {
            // Storyline değişkenini güncelle (Kullanıcı İsteği: Sadece burada 1 olacak)
            player.SetVar("quizCompleted", 1);
            console.log("Activity Completed via Summary Button. quizCompleted set to 1.");

            // Butonu tekrar tıklanmayı engellemek için disable edelim
            btn.disabled = true;
            btn.innerHTML = 'TAMAMLANDI <i class="fas fa-check"></i>';
            btn.style.background = '#2ecc71';
            btn.style.boxShadow = '0 6px 0 #27ae60';
        });

        // Add active press effect via JS
        btn.addEventListener('mousedown', () => {
            if (btn.disabled) return;
            btn.style.transform = 'translateY(4px)';
            btn.style.boxShadow = '0 2px 0 #b30052';
        });
        btn.addEventListener('mouseup', () => {
            if (btn.disabled) return;
            btn.style.transform = 'translateY(0)';
            btn.style.boxShadow = '0 6px 0 #b30052';
        });
    }

    // --- SCALER (Ölçekleyici) ---
    function _startScaler() {
        const wrapper = document.getElementById('game-wrapper');

        // Mobil uyumluluk için Viewport Meta ekle / güncelle
        let meta = document.querySelector('meta[name="viewport"]');
        if (!meta) {
            meta = document.createElement('meta');
            meta.name = 'viewport';
            document.head.appendChild(meta);
        }
        // 1920x1080 fixed sığdırma için user-scalable=no ve init scale ayarlarına gerek yok,
        // çünkü biz transform scale yapıyoruz. Ancak mobil tarayıcının kendi zoom'unu kapatmak iyi olabilir.
        meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';

        // Orientation Warn Overlay (Sadece portrait'te göster)
        if (!document.getElementById('orientation-overlay')) {
            const warningHTML = `
                <div id="orientation-overlay" style="
                    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                    background: #2c3e50; z-index: 99999; display: none;
                    flex-direction: column; justify-content: center; align-items: center; text-align: center;
                    color: white; padding: 20px;
                ">
                    <i class="fas fa-mobile-alt" style="font-size: 80px; margin-bottom: 20px; animation: rotatePhone 2s infinite ease-in-out;"></i>
                    <h2 style="font-size: 32px; margin-bottom: 10px;">Lütfen Cihazınızı Çevirin</h2>
                    <p style="font-size: 18px;">Bu etkinlik en iyi yatay modda görüntülenir.</p>
                </div>
                <style>
                    @keyframes rotatePhone {
                        0% { transform: rotate(0deg); }
                        25% { transform: rotate(90deg); }
                        50% { transform: rotate(90deg); }
                        75% { transform: rotate(0deg); }
                        100% { transform: rotate(0deg); }
                    }
                </style>
            `;
            document.body.insertAdjacentHTML('beforeend', warningHTML);
        }

        function resize() {
            const winW = window.innerWidth;
            const winH = window.innerHeight;
            const targetW = CONFIG.width;
            const targetH = CONFIG.height;

            // --- Orientation Check ---
            const overlay = document.getElementById('orientation-overlay');
            // Basit kontrol: Eğer mobilse ve yükseklik genişlikten büyükse (Portrait)
            // (Masaüstünde pencereyi daraltınca da çıkabilir ama istenen genelde budur)
            if (winH > winW) {
                if (overlay) overlay.style.display = 'flex';
            } else {
                if (overlay) overlay.style.display = 'none';
            }

            // --- Strict Dimension Enforcement with Fixed Positioning ---
            // CSS'deki flex yapısını bypass etmek için fixed kullanıyoruz.
            wrapper.style.position = 'fixed';
            wrapper.style.left = '50%';
            wrapper.style.top = '50%';
            wrapper.style.width = targetW + 'px';
            wrapper.style.height = targetH + 'px';

            // En boy oranına göre scale miktarını hesapla
            const scale = Math.min(winW / targetW, winH / targetH);

            // Translate ve Scale işlemini aynı anda yap
            wrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;
            wrapper.style.transformOrigin = 'center center';

            // Mobilde dikey/yatay değişimlerinde ve klavye açılmalarında bazen scroll oluşabilir
            document.body.style.width = '100vw';
            document.body.style.height = '100vh';
            document.body.style.overflow = 'hidden';
            document.body.style.margin = '0'; // Garanti olsun
        }

        window.addEventListener('resize', resize);
        window.addEventListener('orientationchange', () => {
            // Orientation change eventinden hemen sonra boyutlar güncellenmeyebilir, biraz bekleyelim
            setTimeout(resize, 100);
            setTimeout(resize, 500);
        });
        resize(); // İlk açılışta çalıştır
    }

    // Dışarıya açılan API
    return {
        baslat: init,
        dogru: dogru,
        yanlis: yanlis,
        bitir: bitir,
        goNext: goNext,
        restart: restart
    };
})();
