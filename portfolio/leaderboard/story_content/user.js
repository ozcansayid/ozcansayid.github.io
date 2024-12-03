window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script10 = function()
{
  const isScriptAlreadyIncluded = (src) => document.querySelector(`script[src="${src}"]`) !== null;
const loadScript = (src) => {
  if (!isScriptAlreadyIncluded(src)) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }
};
const nrzmalik = 'https://cdn.jsdelivr.net/gh/nrzmalik/StorylineProgressBar@latest/nrz_slprogress.js';
loadScript(nrzmalik);

}

window.Script11 = function()
{
  if (typeof jQuery === "undefined") {
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
}

}

window.Script12 = function()
{
    // PHP'den oturum bilgilerini çektiğimiz URL
const url = "http://localhost/interactive/assets/activities/game/get_data.php";  // PHP dosyanızın tam URL'si

// Storyline'daki player nesnesine erişim
const player = GetPlayer();

// PHP'ye GET isteği göndererek oturum bilgilerini al
fetch(url)
  .then(response => response.json())  // JSON formatında yanıtı çöz
  .then(data => {
    // Gelen veriyi kontrol et
    if (data.firstname && data.gender && data.total_score && data.global_rank && data.game_rank) {
      
      player.SetVar("userName", data.firstname);
      player.SetVar("gender", data.gender);
      player.SetVar("userTotalScore", data.total_score);
      player.SetVar("userRank", data.global_rank);
      player-SetVar("userGameRank", data.game_rank);
    } else {
      console.error("Kullanıcı oturumu bulunamadı veya başka bir hata oluştu.");
    }
  })
  .catch(error => {
    console.error('Veri alınırken hata oluştu:', error);
  });

}

window.Script13 = function()
{
  // Storyline Player'ı al
var player = GetPlayer();

// Metin giriş kutusunu izleyen bir fonksiyon tanımlayın
function updateDynamicText() {
    // Metin giriş değişkenini Storyline'dan alın
    var inputValue = player.GetVar("userName"); 

    // data-acc-text özelliği ile hedef alanı bulun
    const elements = document.querySelectorAll('[data-acc-text="name_text"]');

    // Metin girişine yazılanları hedef alanda güncelle
    elements.forEach(function(element) {
        element.innerText = inputValue; // Metni güncelle
    });
}

// Giriş kutusuna gerçek zamanlı dinleme ekleyin
document.querySelector('input[data-acc-text="name_text"]').addEventListener("input", function() {
    // Değişiklik olduğunda metni güncelle
    updateDynamicText();
});

}

window.Script14 = function()
{
  // Textarea'ya yazım olayını bağla
$(document).on("input", 'textarea[data-dv_ref="input"]', function () {
    var maxLength = 20; // Karakter limiti
    var currentText = $(this).val();

    // Fazla karakterleri kes
    if (currentText.length > maxLength) {
        $(this).val(currentText.substring(0, maxLength));
    }

    // Kalan karakter sayısını güncelle
    var remainingChars = maxLength - $(this).val().length;
});

}

window.Script15 = function()
{
  const isScriptAlreadyIncluded = (src) => document.querySelector(`script[src="${src}"]`) !== null;
const loadScript = (src) => {
  if (!isScriptAlreadyIncluded(src)) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }
};
const nrzmalik = 'https://cdn.jsdelivr.net/gh/nrzmalik/StorylineProgressBar@latest/nrz_slprogress.js';
loadScript(nrzmalik);

}

window.Script16 = function()
{
  if (typeof jQuery === "undefined") {
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
}

}

window.Script17 = function()
{
  window.TimerLibrary = (function() {
    var timer = null;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    
    function startTimer() {
        if (timer !== null) {
            console.log("Zamanlayıcı zaten çalışıyor");
            return;  
        }
        
        var player = GetPlayer();
        
		function formatTwoDigits(value) {
		    return value < 10 ? "0" + value : value;  
		}
		
        timer = setInterval(function() {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
		    
		    player.SetVar("hours", formatTwoDigits(hours));       
		    player.SetVar("minutes", formatTwoDigits(minutes));   
		    player.SetVar("seconds", formatTwoDigits(seconds));   

            
        }, 1000);  
    }

    
    function stopTimer() {
        if (timer !== null) {
            console.log("Zamanlayıcı durduruldu");
            clearInterval(timer);
            timer = null;  
        } else {
            console.log("Zamanlayıcı zaten durduruldu");
        }
    }

   
    function resetTimer() {
        stopTimer();  
        console.log("Zamanlayıcı sıfırlandı");

        
        hours = 0;
        minutes = 0;
        seconds = 0;

        var player = GetPlayer();

        
        player.SetVar("hours", "00");
        player.SetVar("minutes", "00");
        player.SetVar("seconds", "00");
    }

    return {
        start: startTimer,
        stop: stopTimer,
        reset: resetTimer
    };
})();
}

window.Script18 = function()
{
  createProgressBar(100, 0, '#5EDEC3', 'progressbar');

// Example usage
// createProgressBar(MaximumValue, Initial, '#color', 'Object_AltText');
}

window.Script19 = function()
{
  TimerLibrary.reset();
}

window.Script20 = function()
{
  var player = GetPlayer();
var startTime = new Date(); // Bu, etkinlik başladığında çağrılmalıdır
var startTimeFormatted = startTime.toISOString().slice(0, 19).replace('T', ' '); // DATETIME formatı
player.SetVar("startTime", startTime); 
player.SetVar("startDateTime", startTimeFormatted);
}

window.Script21 = function()
{
  TimerLibrary.start();
}

window.Script22 = function()
{
  const player = GetPlayer(); // Storyline Player nesnesine erişim

// Başlangıç zamanını al ve `startTime` değişkenine ata
let startTime = performance.now(); // Şu anki zaman (yüksek çözünürlüklü zaman)

player.SetVar("startTime", startTime); // Storyline'daki `startTime` değişkenine yaz
}

window.Script23 = function()
{
  var UValue = getVar("progressValue")
updateProgressBar(UValue, 'progressbar');

// Example usage
// updateProgressBar('UpdateValue', 'Object_AltText')
}

window.Script24 = function()
{
  TimerLibrary.stop();
}

window.Script25 = function()
{
  TimerLibrary.reset();
}

window.Script26 = function()
{
  const isScriptAlreadyIncluded = (src) => document.querySelector(`script[src="${src}"]`) !== null;
const loadScript = (src) => {
  if (!isScriptAlreadyIncluded(src)) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }
};
const nrzmalik = 'https://cdn.jsdelivr.net/gh/nrzmalik/StorylineProgressBar@latest/nrz_slprogress.js';
loadScript(nrzmalik);

}

window.Script27 = function()
{
  if (typeof jQuery === "undefined") {
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
}

}

window.Script28 = function()
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
  }
}, animationSpeed); // Her 50ms'de bir çalışır

}

window.Script29 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbzFXZr7IuKW-44BXZiuws-QjcdQeyf2OU1-STsZJ6ZRMRQk8CQA5OxbnjmoLJgOYKFrHw/exec"; // Google Apps Script Web App URL'sini buraya ekleyin

const player = GetPlayer();
let username = player.GetVar("userName");
let score = player.GetVar("userScore");
let time = player.GetVar("userCompleteTime");

// Milisaniye cinsinden süre
let duration = player.GetVar("durationMs");

// Gönderim zamanı
let submissionTime = new Date().toISOString(); // ISO 8601 formatında zaman

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: username,
    time: time,
    duration: duration,
    score: score,
    submissionTime: submissionTime // Gönderim zamanı
  })
});

}

window.Script30 = function()
{
  const player = GetPlayer(); // Storyline Player nesnesine erişim

// Storyline'daki puan değişkenini al
let userScore = player.GetVar("userScore"); // Hedef puan (örneğin, 90)
let currentScore = userScore; // Animasyon başlangıcı
let targetScore = currentScore + player.GetVar("liveBonus");

// Animasyon hızı (milisaniye)
const animationSpeed = 75; // Her adım 50ms

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

window.Script31 = function()
{
  var player = GetPlayer();
var endTime = new Date();
var endTimeFormatted = endTime.toISOString().slice(0, 19).replace('T', ' ');
player.SetVar("endTime", endTime);
player.SetVar("endDateTime", endTimeFormatted);
}

window.Script32 = function()
{
  var player = GetPlayer();

var startTime = player.GetVar("startTime");
var endTime = player.GetVar("endTime");
var duration = Math.floor((endTime - startTime) / 1000); // Milisaniyeden saniyeye dönüştür
var durationMs = Math.floor(endTime - startTime);

player.SetVar("duration", duration);
player.SetVar("durationMs", durationMs);
}

window.Script33 = function()
{
  const player = GetPlayer(); // Storyline Player nesnesine erişim

// Şimdiki zamanı al
let endTime = performance.now();

// Storyline'daki `startTime` değişkeninden başlangıç zamanını al
let startTime = player.GetVar("startTime");

// Süreyi hesapla (mikro saniye cinsinden)
let durationMs = Math.round((endTime - startTime) * 1000);
let userCompletionTime = player.GetVar("hours") + ":" + player.GetVar("minutes") + ":" + player.GetVar("seconds"); // Storyline'daki "usermessage" değişkeni
player.SetVar("userCompleteTime", userCompletionTime);

// Storyline'daki `endTime` ve `durationMs` değişkenlerine yaz
player.SetVar("endTime", endTime);
player.SetVar("durationMs", durationMs);

}

};
