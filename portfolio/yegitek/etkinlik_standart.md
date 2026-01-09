# Modern Etkinlik Geliştirme Rehberi

Bu rehber, Articulate Storyline 360 Web Object projelerinde kullanılmak üzere, **tamamen ücretsiz ve açık kaynak kodlu** (MIT, Apache vb.) kütüphaneleri ve entegrasyon standartlarını içerir. Ticari kısıtlaması olan veya ücretli eklenti gerektiren kütüphaneler (örn. GSAP ücretli eklentileri) bu rehbere dahil edilmemiştir.

## 🎨 Tasarım Kütüphaneleri

### Tailwind CSS & DaisyUI
Modern ve hızlı UI geliştirme için CSS framework ve bileşen seti.

### 🎨 Tasarım Sistemi ve Renk Plati

Aşağıdaki renk paleti ve tasarım kuralları **zorunludur**. Tüm etkinlikler bu görsel dilde olmalıdır.

#### Renk Paleti (Hex Kodları)
| Kullanım Alanı | Renk Kodu | Tailwind Karşılığı | Açıklama |
|---|---|---|---|
| **Ana Arkaplan** | `#FFFFFF` | `bg-white` | Uygulama ana zemini. |
| **Kenar Çubuğu (Sidebar)** | `#F1F5F9` | `bg-slate-100` | Sol panel veya kontrol alanı zemini. |
| **Kenarlıklar** | `#E2E8F0` | `border-slate-200` | Panel ve kutu sınırları. |
| **Metin (Koyu)** | `#1E293B` | `text-slate-800` | Ana metin rengi. |
| **Birincil (Buton/Öge)** | `#4F46E5` | `bg-indigo-600` | Sürüklenebilir ögeler, ana aksiyonlar. |
| **Vurgu / Kontrol Butonu** | `#EA580C` | `bg-orange-600` | "Kontrol Et" butonu (Hover: `#C2410C`). |
| **Başarı / Doğru** | `#22C55E` | `text-green-600` | Doğru cevap border/text (Zemin: `#F0FDF4`). |
| **Hata / Yanlış** | `#EF4444` | `text-red-500` | Yanlış cevap border/text (Zemin: `#FEE2E2`). |
| **Cümle/Soru Kartı** | `#F8FAFC` | `bg-slate-50` | Soru cümlelerinin bulunduğu kart zemini. |

#### Yerleşim (Layout) İlkeleri
1.  **Sidebar:** Genellikle solda, sabit genişlikte (`420px` önerilir), araçlar ve durum bilgisini (hak, kontrol butonu) içerir.
2.  **Ana Alan (Main Content):** Sağda, kalan alanı kaplar (`flex: 1`).
3.  **Yuvarlak Köşeler:** `border-radius: 12px` veya `15px` kullanılır.
4.  **Tipografi:** Büyük ve okunaklı boyutlar (1920p ekranda `2.2rem` - `2.8rem` arası).

#### Örnek Şablon (Tailwind Sınıfları ile)
```html
<div class="w-[1920px] h-[1080px] bg-white flex overflow-hidden">
    <!-- Sidebar -->
    <div class="w-[420px] bg-slate-100 border-r-2 border-slate-200 p-5 flex flex-col justify-between">
        <div class="bg-white p-5 rounded-xl border border-slate-300 text-slate-800 font-black text-4xl">
            Durum Paneli
        </div>
        <button class="bg-orange-600 text-white p-6 rounded-xl font-bold text-4xl hover:bg-orange-700 transition">
            Kontrol Et
        </button>
    </div>
    
    <!-- Ana İçerik -->
    <div class="flex-1 p-10 flex flex-col gap-4">
        <div class="bg-slate-50 border-2 border-slate-200 p-8 rounded-2xl text-slate-800 text-5xl font-bold">
            Örnek Soru Cümlesi...
        </div>
    </div>
</div>
```

| Kütüphane Adı | Güncel CDN Linki | Lisans Türü | Temel Kullanım Amacı |
|---|---|---|---|
| **Tailwind CSS** | `https://cdn.tailwindcss.com` | MIT | (Opsiyonel) Eğer custom CSS yazılmayacaksa kullanılır. Yukarıdaki renkler `tailwind.config` gerektirmeden standart sınıflarla sağlanabilir. |

#### Başlangıç Kodu
```html
<!DOCTYPE html>
<html lang="tr" data-theme="light">
<head>
    <meta charset="UTF-8">
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-transparent w-full h-full overflow-hidden flex items-center justify-center font-['Fillip','Nunito']">
    <div id="game-scale-container" class="w-[1920px] h-[1080px] relative origin-top-left">
        <!-- İçerik Buraya -->
        <div class="card w-96 bg-base-100 shadow-xl absolute top-10 left-10">
            <div class="card-body">
                <h2 class="card-title text-primary">Merhaba!</h2>
                <button class="btn btn-primary">Buton</button>
            </div>
        </div>
    </div>
    
    <script>
        // Otomatik Ölçekleme (Auto-Scale)
        function resizeGame() {
            const container = document.getElementById('game-scale-container');
            const targetWidth = 1920;
            const targetHeight = 1080;
            
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            
            const scaleX = windowWidth / targetWidth;
            const scaleY = windowHeight / targetHeight;
            
            // En boy oranını koruyarak (contain) veya doldurarak (cover) ölçekle
            // Storyline içinde genellikle 'fit' istenir.
            const scale = Math.min(scaleX, scaleY);
            
            container.style.transform = `scale(${scale})`;
            
            // Ortalama (Eğer scale container'ı küçültüyorsa ortada dursun)
            container.style.left = `${(windowWidth - (targetWidth * scale)) / 2}px`;
            container.style.top = `${(windowHeight - (targetHeight * scale)) / 2}px`;
        }
        
        window.addEventListener('resize', resizeGame);
        window.addEventListener('load', resizeGame);
    </script>
</body>
</html>
```

> **GÜNCELLEME:** `body` arka planı şeffaf (`bg-transparent`) olmalı ve içerik 1920x1080 boyutundaki bir kapsayıcı (`#game-scale-container`) içinde bulunmalıdır. Eklediğimiz script, bu kapsayıcıyı pencere boyutuna göre otomatik ölçekler.

### 🎨 CSS Stratejisi (Tailwind Kullanımı)

Web Object'ler Storyline içine gömüldüğünde izole çalışır. Bu nedenle CSS dosyalarının yönetimi kritiktir.

### 🎨 CSS ve Kütüphane Stratejisi (Web & EBA)

Proje **çevrimiçi (online)** çalışacağı ve EBA platformuna yükleneceği için **CDN (Content Delivery Network)** kullanımı en pratik ve yönetilebilir çözümdür.

#### Neden CDN?
1.  **Hız ve Önbellek:** Tarayıcılar popüler CDN kütüphanelerini önbelleğe alır, etkinlikler daha hızlı yüklenir.
2.  **Kolay Yönetim:** Web Object içine yüzlerce dosya (`node_modules` vb.) kopyalamak yerine tek satır kod yeterlidir.
3.  **Dosya Boyutu:** Storyline proje boyutunu şişirmez.

#### Standart CDN Bağlantıları
Her yeni etkinlikte `<head>` içine mutlaka şu blok yapıştırılmalıdır:

```html
<!-- TASARIM -->
<link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css" rel="stylesheet" />
<script src="https://cdn.tailwindcss.com"></script>

<!-- ANİMASYON & ETKİLEŞİM -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js"></script>

<!-- SES & İKON -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js"></script>
<script src="https://unpkg.com/lucide@latest"></script>
```

> **Not:** EBA platformunun whitelist (izin verilen siteler) kısıtlaması olma ihtimaline karşı `cdnjs.cloudflare.com`, `cdn.jsdelivr.net` ve `unpkg.com` adreslerinin erişilebilir olduğundan emin olun (Genellikle sorunsuzdur).

---

## 🎬 Animasyon Kütüphaneleri

### Anime.js & Animate.css
Hafif ve güçlü animasyon çözümleri.

| Kütüphane Adı | Güncel CDN Linki | Lisans Türü | Temel Kullanım Amacı |
|---|---|---|---|
| **Anime.js** | `https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js` | MIT | Karmaşık JS tabanlı animasyonlar (GSAP alternatifi). |
| **Animate.css** | `https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css` | MIT | Hazır CSS animasyon sınıfları (fadeIn, bounce vb.). |

#### Başlangıç Kodu (Anime.js)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>

<div id="kutu" class="w-20 h-20 bg-red-500"></div>

<script>
anime({
    targets: '#kutu',
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 800
});
</script>
```

> **İpucu:** Animasyonların Storyline timeline'ı ile senkronize çalışması gerekmez, web object bağımsız çalışır ancak bitiş callback'lerinde Storyline değişkenlerini tetikleyebilirsiniz.

---

## 👆 Etkileşim Kütüphaneleri

### SweetAlert2 & Canvas Confetti
Kullanıcı geri bildirimleri ve görsel ödüller.

| Kütüphane Adı | Güncel CDN Linki | Lisans Türü | Temel Kullanım Amacı |
|---|---|---|---|
| **SweetAlert2** | `https://cdn.jsdelivr.net/npm/sweetalert2@11` | MIT | Şık modal pencereler, uyarılar ve onay kutuları. |
| **Canvas Confetti** | `https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js` | ISC (MIT uyumlu) | Kutlama ve konfeti efektleri. |

#### Başlangıç Kodu
```javascript
// SweetAlert2 Örneği
Swal.fire({
  title: 'Tebrikler!',
  text: 'Bölümü başarıyla tamamladınız.',
  icon: 'success',
  confirmButtonText: 'Devam Et'
}).then((result) => {
  if (result.isConfirmed) {
    confetti(); // Konfeti patlat
  }
});
```

> **İpucu:** SweetAlert2 modalları `z-index` değeri yüksek olduğu için Storyline player kontrollerinin üzerine çıkabilir, bu istenen bir durumdur.

---

## 🔊 Dosya & Ses Kütüphaneleri

### Howler.js & Lucide Icons
Ses yönetimi ve ikon seti.

| Kütüphane Adı | Güncel CDN Linki | Lisans Türü | Temel Kullanım Amacı |
|---|---|---|---|
| **Howler.js** | `https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js` | MIT | Tarayıcı uyumlu ses çalma ve yönetme. |
| **Lucide Icons** | `https://unpkg.com/lucide@latest` | ISC | Modern, hafif SVG ikon seti (Feather icons fork). |

#### Başlangıç Kodu
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js"></script>
<script src="https://unpkg.com/lucide@latest"></script>

<i data-lucide="volume-2"></i>

<script>
  // İkonları oluştur
  lucide.createIcons();

  // Ses çal
  var sound = new Howl({
    src: ['ses_dosyasi.mp3']
  });
  sound.play();
</script>
```

> **İpucu:** Web Object içindeki ses dosyalarının yollarına dikkat edin (genellikle index.html ile aynı dizinde olmalıdır).

---

## � Mobil ve Sürükle-Bırak Kütüphaneleri

### Interact.js
Mobil ve masaüstü uyumlu, sürükle-bırak, yeniden boyutlandırma ve çoklu dokunmatik (multi-touch) jestleri yönetimi.

| Kütüphane Adı | Güncel CDN Linki | Lisans Türü | Temel Kullanım Amacı |
|---|---|---|---|
| **Interact.js** | `https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js` | MIT | Dokunmatik uyumlu sürükle-bırak motoru. |

#### Başlangıç Kodu (Sürükle-Bırak)
```html
<script src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js"></script>

<div id="draggable" class="w-24 h-24 bg-blue-500 rounded touch-none"></div>

<script>
interact('#draggable').draggable({
  listeners: {
    move (event) {
      var target = event.target;
      // Mevcut pozisyonu al veya 0 olarak başlat
      var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
      var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

      // CSS transform ile hareket ettir
      target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

      // Yeni pozisyonu kaydet
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }
  }
});
</script>
```

> **Kritik İpucu:** Sürüklenebilir öğelere `touch-action: none` CSS özelliğini (veya Tailwind `touch-none` sınıfını) eklemek çok önemlidir. Bu, tarayıcının varsayılan sürükleme veya kaydırma işlemlerini (scrolling) devre dışı bırakır ve dokunmatik cihazlarda düzgün çalışmasını sağlar.

---

## �🔗 Storyline Entegrasyonu ve Standartlar

Bu bölüm, Web Object ile Storyline ana player arasındaki iletişimi sağlar.

### Genel Kurallar
*   **Boyut:** `1920x1080` piksel, otomatik ölçeklenen (`transform: scale(...)`) yapı.
*   **Dil:** Arayüzde yer alan tüm metinler, butonlar ve uyarılar **Türkçe** olmalıdır. (Değişken isimleri İngilizce kalabilir).
*   **Font:** Tasarımda yazı tipi öncelikli olarak **'Fillip'** kullanılacaktır. Eğer yüklenemezse alternatif olarak **'Nunito'** devreye girecektir (`font-family: 'Fillip', 'Nunito', sans-serif;`).
*   **Arkaplan:** Şeffaf (`transparent`), Storyline arkaplanı görünebilsin.
*   **Scroll:** Dikey scroll kesinlikle olmamalı (`overflow: hidden`).
*   **Değişkenler:** Aşağıdaki tabloya göre tetiklenmelidir.

### Storyline Değişkenleri
| Değişken | Tür | Açıklama / Tetiklenme Kuralı |
|---|---|---|
| `correct` | Nümerik | Her doğru cevapta **+1** artırılır. |
| `wrong` | Nümerik | Her yanlış cevapta **+1** artırılır. |
| `score` | Nümerik | Doğru cevapta **+10** artırılır (aksi belirtilmedikçe). |
| `live` | Nümerik | Yanlış cevapta azalır. Varsayılan başlangıç: **3**. |
| `check` | Nümerik | "Kontrol Et" butonuna basıldığında artırılır. |
| `level` | Nümerik | Seviye geçişlerinde artırılır. |
| `completed`| Nümerik | Etkinlik tamamen bittiğinde tetiklenir (örn: 1 yapılır). |

### Entegrasyon Kod Bloğu (Boilerplate)
Aşağıdaki kodu projenizin `<script>` alanına veya JS dosyasına ekleyin. Bu kod, hem Storyline içinde hem de test ederken tarayıcıda hatasız çalışmayı sağlar.

```javascript
/**
 * Articulate Storyline Player Erişimi ve Değişken Yönetimi
 */

// Player objesini al veya mock obje döndür (Test için)
function getPlayer() {
    var player = window.parent.GetPlayer ? window.parent.GetPlayer() : null;
    if (!player) {
        console.warn("Storyline Player bulunamadı. Test modunda çalışılıyor.");
        return {
            GetVar: function(name) { 
                console.log(`[TEST] GetVar: ${name}`); 
                return 0; // Varsayılan test değeri
            },
            SetVar: function(name, val) { 
                console.log(`[TEST] SetVar: ${name} = ${val}`); 
            }
        };
    }
    return player;
}

const player = getPlayer();

// Yardımcı Fonksiyonlar
function triggerCorrect() {
    // Doğru cevap işlemleri
    var currentCorrect = player.GetVar("correct");
    player.SetVar("correct", currentCorrect + 1);
    
    var currentScore = player.GetVar("score");
    player.SetVar("score", currentScore + 10);
    
    console.log("Doğru cevap tetiklendi.");
}

function triggerWrong() {
    // Yanlış cevap işlemleri
    var currentWrong = player.GetVar("wrong");
    player.SetVar("wrong", currentWrong + 1);
    
    var currentLive = player.GetVar("live");
    if(currentLive > 0) {
        player.SetVar("live", currentLive - 1);
    }
    
    console.log("Yanlış cevap tetiklendi.");
}

function triggerComplete() {
    // Tamamlama işlemi
    player.SetVar("completed", 1); // Veya numeric artırım
    console.log("Etkinlik tamamlandı.");
}

function triggerCheck() {
    // Kontrol et butonu
    var currentCheck = player.GetVar("check");
    player.SetVar("check", currentCheck + 1);
    console.log("Kontrol edildi.");
}

// Global scope'a erişim ver (HTML butonlardan çağırmak için)
window.triggerCorrect = triggerCorrect;
window.triggerWrong = triggerWrong;
window.triggerComplete = triggerComplete;
window.triggerCheck = triggerCheck;
```

> **Önemli İpucu:** `window.parent` tarayıcı güvenlik politikaları (CORS) nedeniyle yerel dosya sisteminde çalışırken hata verebilir. Projeyi bir sunucu üzerinden veya Storyline içinde yayınlayarak test edin.
