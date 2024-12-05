window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
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

window.Script2 = function()
{
  if (typeof jQuery === "undefined") {
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
}

}

window.Script3 = function()
{
  const player = GetPlayer(); //Storyline Player nesnesine erişim sağladık

let hedefpuan = player.GetVar("userScore"); //Hedef puanı çağırdık Örn: 90
let simdikipuan = 0; //Animasyonun başlangıç değeri

const artishizi = 25; //Her adımda 25 milisaniye

const adim = 1; //Puan artış sayısı

let baslat = setInterval(() => { //animasyonu başlat

	simdikipuan += adim; //puanı artır
	
	player.SetVar("userScore", simdikipuan); //Puan değişkenimizi arttıkça güncelliyoruz
	
	if (simdikipuan >= hedefpuan) {
		clearInterval(baslat) //hedef puana ulaşıldıysa animasyonu durdur
	}
}, artishizi) 
}

window.Script4 = function()
{
  const player = GetPlayer(); //Storyline Player nesnesine erişim sağladık

let hedefpuan = player.GetVar("userScore"); //Hedef puanı çağırdık Örn: 90
let simdikipuan = 0; //Animasyonun başlangıç değeri

const artishizi = 25; //Her adımda 25 milisaniye

const adim = 1; //Puan artış sayısı

let baslat = setInterval(() => { //animasyonu başlat

	simdikipuan += adim; //puanı artır
	
	player.SetVar("userScore", simdikipuan); //Puan değişkenimizi arttıkça güncelliyoruz
	
	if (simdikipuan >= hedefpuan) {
		clearInterval(baslat) //hedef puana ulaşıldıysa animasyonu durdur
	}
}, artishizi) 
}

};
