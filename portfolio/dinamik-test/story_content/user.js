window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script6 = function()
{
  let player = GetPlayer();

// Kullanıcının girdiği passcode'u al
var userPasscode = player.GetVar("passcode"); 

let api = player.GetVar("api"); 
var sheetId = player.GetVar("codeSheetID");
var sheetRange = 'Sayfa1!D2:F100'; // D2:D100 arasında passcode'u ara, ilgili E ve F sütunlarını al

var url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetRange}?key=${api}`;

// Google Sheets'ten veri çekme
fetch(url)
  .then(response => response.json())
  .then(data => {
    if (!data.values || data.values.length === 0) {
      console.error("Google Sheets verisi alınamadı veya boş.");
      player.SetVar("passControl", "2"); // Geçersiz giriş durumu
      return;
    }

    var passcodeList = data.values; 
    var googleSheetID = '';
    var status = '';

    // Kullanıcının passcode'unu kontrol et
    let passcodeFound = false;

    passcodeList.forEach(row => {
      if (row.length >= 3 && row[0] === userPasscode) { 
        googleSheetID = row[1] || ''; // Google Sheet ID'sini al
        status = row[2] || ''; // Status bilgisini al
        passcodeFound = true; // Passcode bulundu
      }
    });

    // Eğer passcode bulunduysa, Storyline değişkenlerine aktar
    if (passcodeFound) {
      player.SetVar("googleSheetID", googleSheetID);
      player.SetVar("status", status);
      player.SetVar("passControl", "1"); // Başarılı giriş
    } else {
      player.SetVar("passControl", "2"); // Geçersiz passcode
    }
  })
  .catch(error => {
    //console.error('API bağlantı hatası:', error);
    player.SetVar("passControl", "2"); // Hata durumunda başarısızlık belirtilsin
  });

}

window.Script7 = function()
{
  let player = GetPlayer();
let dogruCevap = player.GetVar("correctAnswer").trim().toLowerCase();  // Doğru cevabı temizle
let kullaniciCevabi = player.GetVar("userAnswer").trim().toLowerCase();  // Kullanıcı cevabını temizle

// Doğru cevabı kontrol etme
if (kullaniciCevabi === dogruCevap) {
    player.SetVar("isTrue", 1); // Doğru ise
} else {
    player.SetVar("isTrue", 2); // Yanlış ise
}

}

window.Script8 = function()
{
  let player = GetPlayer();
let api = player.GetVar("api");        // API anahtarı
let sheetID = player.GetVar("googleSheetID"); // Google Sheet ID

// J2 hücresindeki veriyi almak için API isteği
fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/Ayarlar!A2:B2?key=${api}`)
    .then(response => response.json())
    .then(data => {
        if (data.values && data.values[0]) {
            player.SetVar("passThreshold", data.values[0][0]); // Değeri değişkene ata
        	player.SetVar("testName", data.values[0][1]);
        } else {
            player.SetVar("passThreshold", "50"); // Eğer veri yoksa boş olarak ayarla
        	player.SetVar("testName", "Eğlencelik Test");
        }
    })
    .catch(error => {
        //console.error("API bağlantı hatası:", error);
        player.SetVar("passThreshold", "50"); // Hata durumunda bir değer ata
        player.SetVar("testName", "Eğlencelik Test");
    });

}

window.Script9 = function()
{
  let player = GetPlayer();
let api = player.GetVar("api");                    // API anahtarı
let sheetID = player.GetVar("googleSheetID");       // Google Sheet ID
let soruSayaci = player.GetVar("questionCounter");  // Şu anki soru numarası

// Toplam soru sayısını almak için API isteği
fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/Sorular!A2:A?key=${api}`)
    .then(response => response.json())
    .then(data => {
        let toplamSoruSayisi = data.values.length;  // Soru sayısını hesapla
        player.SetVar("totalQuestionCount", toplamSoruSayisi); // Değişkene ata
        
        // Soruyu ve şıkları çekme işlemi
        let range = `Sorular!A${soruSayaci}:Z${soruSayaci}`;
        return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${api}`);
    })
    .then(response => {
        if (!response.ok) {
            player.SetVar("connectionStatus", 2); // Bağlantı hatası durumunda
            throw new Error("Bağlantı hatası");
        }
        return response.json();
    })
    .then(data => {
        player.SetVar("connectionStatus", 1); // Bağlantı başarılıysa
        if (data.values && data.values[0]) {
            // Soruyu ve şıkları Storyline değişkenlerine atama
            player.SetVar("questionText", data.values[0][0]);
            player.SetVar("option1", data.values[0][1]);
            player.SetVar("option2", data.values[0][2]);
            player.SetVar("option3", data.values[0][3]);
            player.SetVar("option4", data.values[0][4]);
            player.SetVar("correctAnswer", data.values[0][5]);
			
			// addPointValue'i kontrol et ve gerçekten boşsa hiç set etme veya boş ata
            let addPointValue = data.values[0][8];
            if (addPointValue && addPointValue.trim() !== "") {
                player.SetVar("addPointValue", addPointValue);
            } else {
                player.SetVar("addPointValue", "8");  // Boş olarak ayarla
            }
			
            // correctFeedback'i kontrol et ve gerçekten boşsa hiç set etme veya boş ata
            let correctFeedback = data.values[0][6];
            if (correctFeedback && correctFeedback.trim() !== "") {
                player.SetVar("correctFeedback", correctFeedback);
            } else {
                player.SetVar("correctFeedback", "");  // Boş olarak ayarla
            }

            // wrongFeedback'i kontrol et ve aynı mantıkla temizle
            let wrongFeedback = data.values[0][7];
            if (wrongFeedback && wrongFeedback.trim() !== "") {
                player.SetVar("wrongFeedback", wrongFeedback);
            } else {
                player.SetVar("wrongFeedback", "");  // Boş olarak ayarla
            }
        }

        // Son soruya ulaşıldıysa sonuç sayfasına yönlendirme
        if (soruSayaci > player.GetVar("totalQuestionCount") + 1) {
            player.SetVar("connectionStatus", 3);  // Durum değişkenini sonuçlar sayfasına yönlendirmek için ayarla
        }
    })
    .catch(error => {
        //console.error("API bağlantı hatası:", error);
        player.SetVar("connectionStatus", 2); // Hata durumunda
    });

}

window.Script10 = function()
{
  var player = GetPlayer();
var totalQuestionCount = player.GetVar("totalQuestionCount");

// Progress hesaplama
var progressAddValue = (1 / totalQuestionCount) * 100;
player.SetVar("progressAddValue", progressAddValue);

var progressSubValue = (100 / totalQuestionCount) * 0.5;
player.SetVar("progressSubValue", progressSubValue);

}

window.Script11 = function()
{
  TimerLibrary.stop();
}

window.Script12 = function()
{
  var player = GetPlayer();

// Storyline'daki değişkeni al (Örneğin, "milisaniye" adlı bir değişkenin olduğunu varsayalım)
var milisaniye = player.GetVar("durationMs");

// Milisaniyeyi saniyeye çevir
var toplamSaniye = Math.floor(milisaniye / 1000);

// Dakika ve saniye hesapla
var dakika = Math.floor(toplamSaniye / 60);
var saniye = toplamSaniye % 60;

// Tek haneli sayıları çift haneli yapmak için 'padStart' kullan
var dakikaStr = dakika.toString().padStart(2, '0');
var saniyeStr = saniye.toString().padStart(2, '0');

// Sonuç formatı: 01:45 gibi
var formattedTime = dakikaStr + ":" + saniyeStr;

// Storyline'daki 'duration' değişkenine sonucu yaz
player.SetVar("duration", formattedTime);

}

window.Script13 = function()
{
  const player = GetPlayer(); // Storyline Player nesnesine erişim

// Storyline'daki puan değişkenini al
let targetScore = player.GetVar("userScore"); // Hedef puan (örneğin, 90)
let currentScore = 0; // Animasyon başlangıcı

// Animasyon hızı (milisaniye)
const animationSpeed = 25; // Her adım 50ms

// Adım başına artış miktarı
const step = 1; // Puan artışı

// Animasyonu başlat
let intervalId = setInterval(() => {
  // Puanı artır
  currentScore += step;

  // Güncel puanı Storyline'daki değişkene yaz
  player.SetVar("userScore", currentScore);

  // Hedef puana ulaşıldıysa animasyonu durdur
  if (currentScore >= targetScore) {
    clearInterval(intervalId);
    setTimeout(() => {
        player.SetVar("liveBonusCheck", "checked");
    }, 1000);
  }
}, animationSpeed); // Her 50ms'de bir çalışır



}

window.Script14 = function()
{
  const player = GetPlayer(); // Storyline Player nesnesine erişim

// Storyline'daki puan değişkenini al
let targetScore = player.GetVar("userScore") + player.GetVar("liveBonus"); // Hedef puan (örneğin, 90)
let currentScore = player.GetVar("userScore"); // Animasyon başlangıcı

// Animasyon hızı (milisaniye)
const animationSpeed = 25; // Her adım 50ms

// Adım başına artış miktarı
const step = 1; // Puan artışı

// Animasyonu başlat
let intervalId = setInterval(() => {
  // Puanı artır
  currentScore += step;

  // Güncel puanı Storyline'daki değişkene yaz
  player.SetVar("userScore", currentScore);

  // Hedef puana ulaşıldıysa animasyonu durdur
  if (currentScore >= targetScore) {
    clearInterval(intervalId);
  }
}, animationSpeed); // Her 50ms'de bir çalışır

}

window.Script15 = function()
{
  const player = GetPlayer(); // Storyline Player nesnesine erişim

// Storyline'daki puan değişkenini al
let targetScore = player.GetVar("userScore") + player.GetVar("liveBonus"); // Hedef puan (örneğin, 90)
let currentScore = player.GetVar("userScore"); // Animasyon başlangıcı

// Animasyon hızı (milisaniye)
const animationSpeed = 25; // Her adım 50ms

// Adım başına artış miktarı
const step = 1; // Puan artışı

// Animasyonu başlat
let intervalId = setInterval(() => {
  // Puanı artır
  currentScore += step;

  // Güncel puanı Storyline'daki değişkene yaz
  player.SetVar("userScore", currentScore);

  // Hedef puana ulaşıldıysa animasyonu durdur
  if (currentScore >= targetScore) {
    clearInterval(intervalId);
  }
}, animationSpeed); // Her 50ms'de bir çalışır

}

window.Script16 = function()
{
  function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.onload = callback;
    script.src = url;
    document.head.appendChild(script);
}

// Kütüphaneleri yükle ve PDF oluştur
loadScript("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js", function () {
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js", function () {
        
        // jsPDF'yi UMD formatına uygun çağır
        const { jsPDF } = window.jspdf;

        function createPDF() {
            var element = document.querySelector("#slide"); // Storyline içeriğini seçiyoruz

            if (!element) {
                alert("Hata: Sayfa içeriği bulunamadı!");
                return;
            }

            // Kenarlardaki ekstra boşlukları temizle
            element.style.margin = "0";
            element.style.padding = "0";
            element.style.boxSizing = "border-box";

            // Gerçek boyutları almak için getBoundingClientRect kullanıyoruz
            var rect = element.getBoundingClientRect();
            var originalWidth = Math.ceil(rect.width);
            var originalHeight = Math.ceil(rect.height);

            html2canvas(element, {
                scale: 2, // Daha kaliteli görüntü için ölçek artırıldı
                useCORS: true, // Harici resimleri destekle
                allowTaint: true, // Güvenli olmayan içerikleri çizmek için
                backgroundColor: "#6A5AE0", // **ARKA PLANI RENGİ #6A5AE0 OLARAK AYARLANDI**
                width: originalWidth,
                height: originalHeight
            }).then(function (canvas) {
                var imgData = canvas.toDataURL("image/png");

                // 1920x1080 çözünürlüğüne uygun, tam boyutlu PDF oluşturuyoruz
                var pdf = new jsPDF({
                    orientation: "l", // Yatay mod
                    unit: "px", // Piksel cinsinden ölçü
                    format: [originalWidth, originalHeight] // Tam slayt boyutunda PDF
                });

                // PDF'nin arka planını #6A5AE0 olarak belirleme
                pdf.setFillColor("#6A5AE0");
                pdf.rect(0, 0, originalWidth, originalHeight, "F"); // Sayfanın tamamını boyama

                var imgX = 0; // Görüntüyü tam hizalamak için
                var imgY = 0;

                pdf.addImage(imgData, "PNG", imgX, imgY, originalWidth, originalHeight);
                pdf.save("Sonuc_Belgesi.pdf"); // PDF'yi indir
            }).catch(function (error) {
                //console.error("PDF oluşturma hatası:", error);
            });
        }

        // PDF oluşturma fonksiyonunu çağır
        createPDF();
    });
});

}

window.Script17 = function()
{
  const player = GetPlayer(); // Storyline Player nesnesine erişim

// Storyline'daki puan değişkenini al
let targetScore = player.GetVar("userScore") + player.GetVar("liveBonus"); // Hedef puan (örneğin, 90)
let currentScore = player.GetVar("userScore"); // Animasyon başlangıcı

// Animasyon hızı (milisaniye)
const animationSpeed = 25; // Her adım 50ms

// Adım başına artış miktarı
const step = 1; // Puan artışı

// Animasyonu başlat
let intervalId = setInterval(() => {
  // Puanı artır
  currentScore += step;

  // Güncel puanı Storyline'daki değişkene yaz
  player.SetVar("userScore", currentScore);

  // Hedef puana ulaşıldıysa animasyonu durdur
  if (currentScore >= targetScore) {
    clearInterval(intervalId);
  }
}, animationSpeed); // Her 50ms'de bir çalışır

}

window.Script18 = function()
{
  const player = GetPlayer(); // Storyline Player nesnesine erişim

// Storyline'daki puan değişkenini al
let targetScore = player.GetVar("userScore") + player.GetVar("liveBonus"); // Hedef puan (örneğin, 90)
let currentScore = player.GetVar("userScore"); // Animasyon başlangıcı

// Animasyon hızı (milisaniye)
const animationSpeed = 25; // Her adım 50ms

// Adım başına artış miktarı
const step = 1; // Puan artışı

// Animasyonu başlat
let intervalId = setInterval(() => {
  // Puanı artır
  currentScore += step;

  // Güncel puanı Storyline'daki değişkene yaz
  player.SetVar("userScore", currentScore);

  // Hedef puana ulaşıldıysa animasyonu durdur
  if (currentScore >= targetScore) {
    clearInterval(intervalId);
  }
}, animationSpeed); // Her 50ms'de bir çalışır

}

};
