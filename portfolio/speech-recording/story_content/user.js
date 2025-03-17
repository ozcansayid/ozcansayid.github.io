window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  window.location = "javascript:window.startRecording();";

}

window.Script2 = function()
{
  window.location = "javascript:window.stopRecording();";

}

window.Script3 = function()
{
  var storylinePlayer = GetPlayer();

window.analyzeSpeech = function() {
    var audioURL = storylinePlayer.GetVar("audioData");  // Storyline'dan ses kaydı al
    if (!audioURL) {
        alert("Önce bir kayıt yapmalısınız!");
        return;
    }

    fetch(audioURL)
        .then(response => response.blob())
        .then(audioBlob => {
            var formData = new FormData();
            formData.append("audio", audioBlob, "recorded_audio.wav");

            return fetch("https://www.sayidozcan.com/resources/recording/deepgram.php", {  // Sunucudaki PHP dosyanın URL'si
                method: "POST",
                body: formData
            });
        })
        .then(response => response.json())
        .then(data => {
            let transcript = data.results.channels[0].alternatives[0].transcript;  // Deepgram sonucu al
            console.log("Deepgram Sonucu:", transcript);

            var storylinePlayer = GetPlayer();
            storylinePlayer.SetVar("voiceAnalysis", transcript);  // Storyline değişkenine kaydet

            alert("Analiz tamamlandı! Çıktı: " + transcript);
        })
        .catch(error => {
            console.error("Değerlendirme hatası:", error);
            alert("Ses değerlendirmesi sırasında bir hata oluştu.");
        });
};

}

window.Script4 = function()
{
  window.location = "javascript:window.playRecording();";

}

window.Script5 = function()
{
  window.location = "javascript:window.stopPlayback();";

}

window.Script6 = function()
{
  var storylinePlayer = GetPlayer();

let mediaRecorder;
let recordedChunks = [];

// Mikrofon erişimi ve medya kaydediciyi başlat
navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function(stream) {
        mediaRecorder = new MediaRecorder(stream);
        
        mediaRecorder.ondataavailable = function(event) {
            if (event.data.size > 0) {
                recordedChunks.push(event.data);
            }
        };

        mediaRecorder.onstop = function() {
            var audioBlob = new Blob(recordedChunks, { type: 'audio/wav' });
            var audioURL = URL.createObjectURL(audioBlob);

            // Storyline değişkenine kaydedilen sesin URL'sini kaydediyoruz
            storylinePlayer.SetVar("audioData", audioURL);
        };
    })
    .catch(function(error) {
        console.error("Mikrofon erişim hatası: ", error);
    });

// Kaydı Başlat
window.startRecording = function() {
    recordedChunks = [];
    mediaRecorder.start();
    console.log("Kayıt başladı...");
};

// Kaydı Durdur
window.stopRecording = function() {
    mediaRecorder.stop();
    console.log("Kayıt durduruldu...");
};

// Kaydı Dinle
window.playRecording = function() {
    var audioURL = storylinePlayer.GetVar("audioData");
    if (audioURL) {
        var audio = new Audio(audioURL);
        audio.play();
        console.log("Kayıt çalınıyor...");
    } else {
        alert("Önce bir kayıt yapmalısınız!");
    }
};

// **Kullanıcının kaydını indirmesini sağlama**
window.downloadRecording = function() {
    var audioURL = storylinePlayer.GetVar("audioData");
    if (audioURL) {
        var link = document.createElement("a");
        link.href = audioURL;
        link.download = "kayit.wav";  // Dosya adı
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log("Ses dosyası indirildi...");
    } else {
        alert("Önce bir kayıt yapmalısınız!");
    }
};

}

window.Script7 = function()
{
  window.uploadAndSendToGoogleSheets = function() {
    var storylinePlayer = GetPlayer();
    
    var userName = storylinePlayer.GetVar("UserName");  // Kullanıcı adı
    var voiceAnalysis = storylinePlayer.GetVar("voiceAnalysis");  // Konuşma analizi
    var audioBlobURL = storylinePlayer.GetVar("audioData");  // Blob URL

    if (!userName || !voiceAnalysis || !audioBlobURL) {
        alert("Eksik veri var! Lütfen önce konuşmayı kaydedin ve analiz edin.");
        return;
    }

    // Zaman damgası oluştur
    var timestamp = new Date().toLocaleString();

    // Blob URL’yi gerçek bir ses dosyasına dönüştürmek için önce indir
    fetch(audioBlobURL)
        .then(response => response.blob())
        .then(audioBlob => {
            var formData = new FormData();
            formData.append("audio", audioBlob, "recorded_audio.wav");

            return fetch("https://sayidozcan.com/resources/recording/upload_audio.php", {
                method: "POST",
                headers: {
                    "Accept": "application/json"  // **Yanıtın JSON formatında olduğunu belirtiyoruz**
                },
                body: formData
            });
        })
        .then(response => response.json())  // **PHP’den gelen yanıtı oku**
        .then(data => {
            if (!data.success) {
                throw new Error(data.error);
            }

            var realAudioURL = data.url;  // **Sunucudan gelen gerçek dosya linki**
            var realFileName = data.fileName;  // **Gerçek dosya adını al**

            console.log("Yüklenen Dosya Adı:", realFileName);  // **Dosya adını konsolda göster**
            
            var googleData = {
                timestamp: timestamp,
                userName: userName,
                voiceAnalysis: voiceAnalysis,
                downloadLink: realAudioURL  // **Gerçek dosya linkini kaydet**
            };

            return fetch("https://script.google.com/macros/s/AKfycbwzYNlSE2WQI9GVqOZ2An3RlBveEDmJ9csE6B_syg60JupaimB5tS7ZGw62I_3bAPm2/exec", {
		        method: "POST",
                mode: "no-cors",  // **Google Sheets için no-cors kullanıyoruz**
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(googleData)
            });
        })
        .then(() => {
            //console.log("Veri Google Sheets'e başarıyla kaydedildi!");
            alert("The results was sent to the teacher!");
        })
        .catch(error => {
            console.error("Hata:", error);
            alert("Veri gönderme sırasında bir hata oluştu.");
        });
};

}

window.Script8 = function()
{
  window.location = "javascript:window.uploadAndSendToGoogleSheets();";


}

window.Script9 = function()
{
  window.location = "javascript:window.downloadRecording();";

}

window.Script10 = function()
{
  window.analyzeSpeech = function() {
    var storylinePlayer = GetPlayer();
    var audioURL = storylinePlayer.GetVar("audioData");

    if (!audioURL) {
        alert("Önce bir kayıt yapmalısınız!");
        return;
    }

    fetch(audioURL)
        .then(response => response.blob())
        .then(audioBlob => {
            var formData = new FormData();
            formData.append("audio", audioBlob, "recorded_audio.wav");

            return fetch("https://www.sayidozcan.com/resources/recording/analyze_audio.php", {
                method: "POST",
                body: formData
            });
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert("Hata: " + data.error);
                return;
            }

            storylinePlayer.SetVar("voiceAnalysis", data.evaluation);
            alert("Konuşma analizi tamamlandı!");
        })
        .catch(error => {
            console.error("Analiz hatası:", error);
            alert("Analiz sırasında bir hata oluştu.");
        });
};

}

window.Script11 = function()
{
  window.location = "javascript:window.analyzeSpeech();";

}

};
