window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  // Storyline player referansı al
var player = GetPlayer();

// Yeni JSON verisi (istersen burada dinamik oluşturabilirsin)
var myData = [
    {"id":1,"text":"İstanbul"},
    {"id":2,"text":"Mardin"},
    {"id":3,"text":"Antalya"},
    {"id":4,"text":"Trabzon"}
];

// Tek satırlık stringe çevir
var jsonString = JSON.stringify(myData);

// Storyline değişkenine ata
player.SetVar("json_data", jsonString);

}

window.Script2 = function()
{
  // Storyline değişkenini al
var player = GetPlayer();
var videoID = player.GetVar("videoID"); // Örn: dQw4w9WgXcQ

// Web Object iframe'ini seç
var iframe = document.querySelector('iframe'); // Eğer sadece 1 tane varsa
// Alternatif: iframe'lere özel bir ID verirsen daha güvenli olur

// Yeni URL oluştur
var newURL = "https://www.youtube.com/embed/" + videoID;

// URL'i iframe'e ata
iframe.src = newURL;

}

};
