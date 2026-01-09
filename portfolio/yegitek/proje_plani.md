# Etkinlik Geliştirme ve Önizleme Portföyü Proje Planı

Bu proje, Articulate Storyline 360 için geliştirilen HTML5 Web Object etkinliklerinin listelendiği, test edildiği ve önizlendiği merkezi bir geliştirme ortamıdır.

## 📁 Proje Yapısı

Proje kök dizini aşağıdaki yapıda olacaktır:

```
/
├── index.html              # Ana Giriş Sayfası (Dashboard)
├── assets/                 # Ortak CSS/JS/Resim dosyaları (Opsiyonel)
├── activities/             # Tüm etkinliklerin barındığı klasör
│   ├── ornek_etkinlik_1/   # Her etkinlik kendi klasöründe
│   │   ├── index.html      # Etkinlik ana dosyası
│   │   └── assets/         # Etkinliğe özel görseller/sesler
│   └── ornek_etkinlik_2/
│       └── ...
└── proje_plani.md          # Bu dosya
```

## 🌐 Ana Sayfa Özellikleri (index.html)

Ana sayfa, geliştirilen oyunların vitrini olarak çalışacak ve modern, mobil uyumlu bir arayüz sunacaktır.

### Arayüz Tasarımı
*   **Kütüphane:** Tailwind CSS & DaisyUI.
*   **Layout:** Responsive Grid yapısı (Mobilde 1 sütun, Tablette 2, Masaüstünde 3/4 sütun).
*   **Kart Tasarımı:** Her bir oyun için bir kart:
    *   Etkinlik Adı
    *   Kısa Açıklama (Opsiyonel)
    *   "Önizle" / "Başlat" Butonu

### Önizleme Mekanizması
*   Etkinliklere tıklandığında yeni sekme yerine **Modal (Lightbox)** açılacak.
*   Modal içerisinde bir `<iframe>` bulunacak.
*   Iframe, Storyline standartlarına uygun (1920x1080 oranını koruyan) bir kaplayıcı içinde gösterilecek.

## 🎮 Etkinlik Standartları

*   Her etkinlik `activities` klasörü altında ayrı bir klasörde barınır.
*   Etkinlikler tek sayfa (`index.html`) olarak tasarlanır (SPA mantığı).
*   **Navbar Yok:** Etkinlik dosyalarında menü, header, footer bulunmaz.
*   **Boyutlandırma:** `etkinlik_standart.md` referans alınarak 1920x1080 fixed/scale mantığı ile kurgulanır.

## 🚀 İş Akışı

1.  Yeni bir etkinlik geliştirileceği zaman `activities` altına yeni klasör açılır.
2.  `etkinlik_standart.md` dosyasındaki boilerplate kod `index.html` içine yapıştırılır.
3.  Ana sayfadaki (`root/index.html`) grid yapısına manuel olarak yeni bir kart eklenir ve link verilir.
4.  Testler modal pencere üzerinden yapılır.
5.  Tamamlanan oyun klasörü (veya içeriği) Articulate Storyline'a Web Object olarak import edilir.
