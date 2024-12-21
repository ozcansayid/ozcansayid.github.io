window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  // Storyline değişkenlerini al
var player = GetPlayer();

// Token almak için istek gönder
fetch("https://www.sayidozcan.com/resources/chatgpt/token.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(result => {
    if (result.status === "success") {
        // Token'ı bir değişkene kaydedin
        player.SetVar("AuthToken", result.token);
        console.log("Token başarıyla alındı:", result.token);

        // Token ile backend'e veri gönder
        var userAnswer = player.GetVar("UserAnswer");
        var authToken = player.GetVar("AuthToken");

        fetch("https://www.sayidozcan.com/resources/chatgpt/backend.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + authToken
            },
            body: JSON.stringify({ answer: userAnswer })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Değerlendirme Sonucu:", data);
            player.SetVar("Accuracy", data.accuracy || 0);
            player.SetVar("Coverage", data.coverage || 0);
            player.SetVar("LanguageUse", data.language_use || 0);
            player.SetVar("GeneralComment", data.general_comment || "Bir hata oluştu.");
        })
        .catch(error => {
            console.error("Değerlendirme hatası:", error);
            player.SetVar("GeneralComment", "Sunucuya bağlanırken bir hata oluştu.");
        });
    } else {
        console.error("Token alınamadı:", result.error);
        player.SetVar("GeneralComment", "Doğrulama başarısız oldu.");
    }
})
.catch(error => {
    console.error("Token hatası:", error);
    player.SetVar("GeneralComment", "Token alınırken bir hata oluştu.");
});

}

window.Script2 = function()
{
  // Storyline değişkenlerini al
var player = GetPlayer();
var userAnswer = player.GetVar("UserAnswer"); // Kullanıcının yazdığı cevap

fetch("https://www.sayidozcan.com/resources/chatgpt/backend.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-SECRET-KEY": "IlNMQ7qPG_e-uqTB_bkq-s4X8uNk_doG4MHjCfUjEcg" // Secret Key
    },
    body: JSON.stringify({
        answer: userAnswer // Kullanıcı cevabı
    })
})
.then(response => response.json())
.then(data => {
    player.SetVar("Accuracy", data.accuracy || 0);
    player.SetVar("Coverage", data.coverage || 0);
    player.SetVar("LanguageUse", data.language_use || 0);
    player.SetVar("GeneralComment", data.general_comment || "Bir hata oluştu.");
})
.catch(error => {
    console.error("Hata:", error);
    player.SetVar("GeneralComment", "Sunucuya bağlanırken bir hata oluştu.");
});
}

window.Script3 = function()
{
  // Storyline değişkenlerini al
var player = GetPlayer();

var data = {
    UserName: player.GetVar("UserName"), // Kullanıcı adı
    UserAnswer: player.GetVar("UserAnswer"), // Kullanıcının cevabı
    GeneralComment: player.GetVar("GeneralComment"), // Genel yorum
    Coverage: player.GetVar("Coverage"), // Kapsam puanı
    LanguageUse: player.GetVar("LanguageUse"), // Dil kullanımı puanı
    Accuracy: player.GetVar("Accuracy"), // Doğruluk puanı
    TotalPoint: player.GetVar("Accuracy") + player.GetVar("Coverage") + player.GetVar("LanguageUse") // Toplam puan
};

// Google Apps Script URL'si
var scriptURL = "https://script.google.com/macros/s/AKfycbyu65SPNsZK62vQX31cTfOg_NATtZRIm_rixbq5ah99AECbl1pSgKmvc4bp-me6dJf9/exec";

// Verileri gönder
fetch(scriptURL, {
    method: "POST",
    mode: "no-cors", // no-cors modu etkin
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
.then(() => {
    console.log("Veriler başarıyla gönderildi!");
    player.SetVar("Feedback", "Veriler gönderildi!"); // Storyline'da bir geri bildirim
})
.catch(error => {
    console.error("Fetch hatası:", error);
    player.SetVar("Feedback", "Veriler gönderilemedi."); // Hata durumunda geri bildirim
});

}

};
