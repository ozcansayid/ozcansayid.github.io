window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const elements = document.querySelectorAll('[data-acc-text="myAltText"]');

if (elements.length > 0) {
    var element = elements[0];  // İlk öğeyi alıyoruz.

    // Tuvalin (canvas) gerçek boyutlarını ve görüntülenen boyutlarını alıyoruz.
    var originalWidth = 1920;  // Gerçek genişlik
    var originalHeight = 1080; // Gerçek yükseklik

    // Görüntülenen (ölçeklenmiş) genişliği ve yüksekliği alıyoruz.
    var displayedWidth = window.innerWidth;
    var displayedHeight = window.innerHeight;

    // Ölçek faktörünü hesaplıyoruz.
    var scaleX = displayedWidth / originalWidth;
    var scaleY = displayedHeight / originalHeight;

    console.log("Ölçek faktörü:", scaleX, scaleY);

    // Nesnenin ölçekle uyumlu şekilde X ve Y pozisyonlarını hesaplıyoruz.
    var newX = 0 * scaleX;  // X eksenindeki yeni pozisyon (ölçekli)
    var newY = 0 * scaleY;  // Y eksenindeki yeni pozisyon (ölçekli)

    // Nesnenin konumunu `transform` kullanarak ölçekle uyumlu olarak güncelliyoruz.
    element.style.position = "absolute";  // Mutlak konumlama
    element.style.transform = `translate(${newX}px, ${newY}px)`;  // `transform: translate(x, y)`

    console.log(`Nesne, ölçekle uyumlu olarak sol üst köşeye (${newX}, ${newY}) taşındı.`);
} else {
    console.log("Alternatif metni 'myAltText' olan öğe bulunamadı.");
}

}

window.Script2 = function()
{
  // Storyline player ile bağlantı kuruyoruz.
var player = GetPlayer();

// Storyline'daki posX değişkenini alıyoruz.
var posX = player.GetVar("posX");

// Alternatif metni 'myAltText' olan öğeyi buluyoruz.
const elements = document.querySelectorAll('[data-acc-text="myAltText"]');

if (elements.length > 0) {
    var element = elements[0];  // İlk öğeyi alıyoruz.

    // Tarayıcı genişliğini alıyoruz.
    var browserWidth = window.innerWidth;

    // X pozisyonunu posX ile ayarlıyoruz (ölçekleme yapmıyoruz, doğrudan uyguluyoruz).
    var newX = posX;

    // Nesnenin ekran dışına çıkmasını engellemek için X pozisyonunu sınırlandırıyoruz.
    if (newX + element.offsetWidth > browserWidth) {
        newX = browserWidth - element.offsetWidth;  // Sağ sınırı aşmaması için
    } else if (newX < 0) {
        newX = 0;  // Sol sınırı aşmaması için
    }

    // Nesnenin X eksenindeki pozisyonunu ayarlıyoruz.
    element.style.position = "absolute";  // Mutlak konumlama
    element.style.left = newX + "px";  // X eksenindeki yeni pozisyon

    console.log(`Nesnenin X konumu posX'e göre ayarlandı: ${newX}px`);
} else {
    console.log("Alternatif metni 'myAltText' olan öğe bulunamadı.");
}

}

window.Script3 = function()
{
  // Storyline player ile bağlantı kuruyoruz.
var player = GetPlayer();

// Storyline'daki posX değişkenini alıyoruz.
var posY = player.GetVar("posY");

// Alternatif metni 'myAltText' olan öğeyi buluyoruz.
const elements = document.querySelectorAll('[data-acc-text="myAltText"]');

if (elements.length > 0) {
    var element = elements[0];  // İlk öğeyi alıyoruz.

    // Storyline ekranının genişliğini ve tarayıcı ekranının genişliğini alıyoruz.
    var storylineCanvasWidth = 1080;  // Storyline tuval genişliği
    var browserWidth = document.documentElement.clientWidth;  // Tarayıcı genişliği

    // Tarayıcıdaki mevcut tuval boyutunu hesaplamak için ölçek faktörünü buluyoruz.
    var scaleFactor = browserWidth / storylineCanvasWidth;

    // posX değerini ölçek faktörü ile çarparak yeni X pozisyonunu ayarlıyoruz.
    var scaledY = posY * scaleFactor;

    // Nesnenin ekranın dışına çıkmasını önlemek için X pozisyonunu sınırlandırıyoruz.
    var elementWidth = element.offsetWidth;
    if (scaledY + elementWidth > browserWidth) {
        scaledY = browserWidth - elementWidth;  // Ekranın sonuna kadar sınırla
    } else if (scaledY < 0) {
        scaledY = 0;  // Ekranın sol sınırını geçmemesini sağla
    }

    // Nesnenin X eksenindeki pozisyonunu ayarlıyoruz.
    element.style.position = "absolute";  // Mutlak konumlama
    element.style.top = scaledY + "px";  // X eksenindeki ölçeklenmiş pozisyon

    console.log(`Nesnenin X konumu, posX değeriyle ve ölçek faktörüyle güncellendi: ${scaledX}px`);
} else {
    console.log("Alternatif metni 'myAltText' olan öğe bulunamadı.");
}

}

window.Script4 = function()
{
  // Storyline player ile bağlantı kuruyoruz.
var player = GetPlayer();

// Storyline'daki Dial değişkeninin değerini alıyoruz (örneğin, 'rotationAngle').
var rotationAngle = player.GetVar("rotationAngle");

// Alternatif metni 'myAltText' olan öğeyi buluyoruz.
const elements = document.querySelectorAll('[data-acc-text="myAltText"]');

if (elements.length > 0) {
    var element = elements[0]; // İlk öğeyi alıyoruz.

    // Döndürme işlemi için CSS transform özelliğini ayarlıyoruz.
    element.style.transform = `rotate(${rotationAngle}deg)`; // Dial değerine göre döndürme
    element.style.transformOrigin = "center"; // Döndürme merkezi

    console.log(`Nesne ${rotationAngle} derece döndürüldü.`);
} else {
    console.log("Alternatif metni 'myAltText' olan öğe bulunamadı.");
}

}

};
