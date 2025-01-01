window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  // Storyline player objesini al
var player = GetPlayer();

// Token ayarla
var token = player.GetVar("token"); // Daha önce oluşturulan token

// Backend URL'si
var deeplApiUrl = "https://www.sayidozcan.com/resources/deepl/backend.php";

var textBox = player.GetVar("inputText");

// Metin kutusunun mevcut içeriğini al
var textToTranslate = textBox;

// Hedef dil kodunu Storyline'dan al ve büyük harfe çevir
var targetLanguage = player.GetVar("language").toUpperCase();

// Backend'e POST isteği gönder
fetch(deeplApiUrl, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
        text: textToTranslate,                // Çevrilecek metin
        target_lang: targetLanguage
    })
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.translations && data.translations[0]) {
            // Çeviri sonucunu al
            var translatedText = data.translations[0].text;

            // Çeviriyi bir Storyline değişkenine kaydetmek isterseniz (opsiyonel)
            player.SetVar("translatedText", translatedText);
        } else {
            
            player.SetVar("errorMessage", "Unexpected response format.");
        }
    })
    .catch(error => {
        console.error("DeepL API Hatası:", error);
    });

}

window.Script2 = function()
{
  // Storyline player objesini al
var player = GetPlayer();

// Çevrilmiş metni Storyline'dan al
var translatedText = player.GetVar("translatedText");

// Eğer metin boşsa seslendirme yapılmasın
if (!translatedText || translatedText.trim() === "") {
    console.error("Seslendirilecek metin bulunamadı.");
    return;
}

// Web Speech API ile seslendirme
var utterance = new SpeechSynthesisUtterance(translatedText);

// Dil ayarını yap (örneğin İngilizce veya Türkçe)
utterance.lang = player.GetVar("language").toLowerCase(); // Storyline'dan alınan dil koduna göre

// Ses hızını, tonunu ve ses seviyesini ayarla
utterance.rate = 1; // Konuşma hızı (1 = normal hız)
utterance.pitch = 1; // Ton (1 = normal ton)
utterance.volume = 1; // Ses seviyesi (1 = tam ses)

// Seslendirmeyi başlat
speechSynthesis.speak(utterance);

// Seslendirme tamamlandığında bir tetikleyici çalıştırmak isterseniz
utterance.onend = function () {
    console.log("Seslendirme tamamlandı.");
    player.SetVar("isSpeechComplete", true); // Örneğin, bir değişken ayarlayabilirsiniz
};

}

};
