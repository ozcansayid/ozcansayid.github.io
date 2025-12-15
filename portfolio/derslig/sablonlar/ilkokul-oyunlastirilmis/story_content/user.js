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
  let player = GetPlayer();

player.SetVar("etkinlik_1",false);
player.SetVar("etkinlik_2",false);
player.SetVar("etkinlik_3",false);
player.SetVar("etkinlik_4",false);
player.SetVar("etkinlik_5",false);
player.SetVar("etkinlik_6",false);


}

window.Script2 = function()
{
  var player = GetPlayer();
var targetURL = player.GetVar("ExitURL"); 

if(!targetURL) {
  targetURL = "https://www.derslig.com";
}

// iframe içindeyse üst frame’den yönlendir
try {
  window.top.location.href = targetURL; 
} catch (e) {
  // güvenlik engeli varsa fallback
  window.location.href = targetURL; 
}

}

window.Script3 = function()
{
  window.createProgressBar = function (maximumProgress, currentProgress, color = '#5EA7FF', targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    // Daha önce oluşturulmuşsa yeniden oluşturma
    const existingBar = targetDiv.querySelector('.custom-progress-container');
    if (existingBar) {
        //console.warn(`[ProgressBar] Zaten mevcut, yeniden oluşturulmadı: ${targetDivIdentifier}`);
        return;
    }

    // Progress bar container oluştur
    const progressBarContainer = document.createElement('div');
    progressBarContainer.classList.add('custom-progress-container'); // Bu sınıf sayesinde tekrar kontrol kolaylaşır
    progressBarContainer.style.position = 'absolute';
	progressBarContainer.style.top = '0';
	progressBarContainer.style.left = '0';
	progressBarContainer.style.width = '100%';
	progressBarContainer.style.height = '100%';
    progressBarContainer.style.backgroundColor = '#A2A1A2';
    progressBarContainer.style.borderRadius = '100px';
    progressBarContainer.style.overflow = 'hidden';
    progressBarContainer.dataset.maximumProgress = maximumProgress;
    progressBarContainer.dataset.targetDiv = targetDivIdentifier;

    const progressBar = document.createElement('div');
    progressBar.classList.add('custom-progress-bar'); // stil ve sorgulama kolaylığı için
    progressBar.style.height = '0%';
    progressBar.style.width = '100%';
    progressBar.style.backgroundColor = color;
    progressBar.style.transition = 'height 0.5s ease';
    progressBar.style.position = 'absolute';
	progressBar.style.bottom = '0';  // hep tabandan yukarı doğru dolacak

    progressBarContainer.appendChild(progressBar);
    targetDiv.appendChild(progressBarContainer);

    window.updateProgressBar(currentProgress, targetDivIdentifier);
};

window.updateProgressBar = function (currentProgress, targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    const progressBarContainer = targetDiv.querySelector('.custom-progress-container');
    if (!progressBarContainer) {
        //console.warn("Progress bar container not found");
        return;
    }

    const maximumProgress = progressBarContainer.dataset.maximumProgress;
    const progressBar = progressBarContainer.querySelector('.custom-progress-bar');
    if (progressBar) {
        const progressPercentage = (currentProgress / maximumProgress) * 100;
        progressBar.style.height = `${progressPercentage}%`;
    }
};


}

window.Script4 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(5, progressValue, "#FCC626", "progress-container");

}

window.Script5 = function()
{
  // Storyline değişkenlerine erişim için player nesnesini al
var player = GetPlayer();

// Storyline'daki progressValue değişkenini al
var currentProgress = player.GetVar("soru_no");


// Storyline'daki değişkeni güncelle
player.SetVar("soru_no", currentProgress);

if (document.querySelector('[data-acc-text="progress-container"] .custom-progress-bar')) {
    window.updateProgressBar(currentProgress, "progress-container");
} else {
    //console.warn("Progress bar henüz oluşturulmamış. updateProgressBar çalıştırılmadı.");
}

}

window.Script6 = function()
{
  let player = GetPlayer();
let soru_no = player.GetVar("soru_no");

const icon = object('5yrV6Afl43I');

// icon durumları için bir dizi (array) oluşturun
// Dizi index'i soru_no ile eşleşir
const iconStates = [
    'Normal',  // Soru 0 için
    'state_2', // Soru 1 için
    'state_3', // Soru 2 için
    'state_4', // Soru 3 için
    'state_5', // Soru 4 için
    'state_6'  // Soru 5 için
];

// soru_no'nun geçerli bir aralıkta olup olmadığını kontrol edin
if (soru_no >= 0 && soru_no < iconStates.length) {
    // Diziden doğru durumu seçin
    icon.state = iconStates[soru_no];
} else {
    // Eğer soru_no 0-5 arasında değilse, varsayılan duruma dön
    icon.state = 'Normal';
}

}

window.Script7 = function()
{
  let player = GetPlayer();

let soru_no = player.GetVar("soru_no");

let etkinlik_1 = player.GetVar("etkinlik_1");
let etkinlik_2 = player.GetVar("etkinlik_2");
let etkinlik_3 = player.GetVar("etkinlik_3");
let etkinlik_4 = player.GetVar("etkinlik_4");
let etkinlik_5 = player.GetVar("etkinlik_5");
let etkinlik_6 = player.GetVar("etkinlik_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 ---
if(etkinlik_1===false && soru_no===0)
{
    star_1.state = 'aktif';
}
else if(etkinlik_1===false && soru_no!==0)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(etkinlik_2===false && soru_no===1)
{
    star_2.state = 'aktif';
}
else if(etkinlik_2===false && soru_no!==1)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(etkinlik_3===false && soru_no===2)
{
    star_3.state = 'aktif';
}
else if(etkinlik_3===false && soru_no!==2)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(etkinlik_4===false && soru_no===3)
{
    star_4.state = 'aktif';
}
else if(etkinlik_4===false && soru_no!==3)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(etkinlik_5===false && soru_no===4)
{
    star_5.state = 'aktif';
}
else if(etkinlik_5===false && soru_no!==4)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(etkinlik_6===false && soru_no===5)
{
    star_6.state = 'aktif';
}
else if(etkinlik_6===false && soru_no!==5)
{
    star_6.state = 'Normal';
}
}

window.Script8 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script9 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script10 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let yanlis_sayac = player.GetVar("yanlis_sayac");

if(gorev_no===1 && yanlis_sayac>=2)
{
	player.SetVar("soru_1",false);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2 && yanlis_sayac>=2)
{
	player.SetVar("soru_2",false);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3 && yanlis_sayac>=2)
{
	player.SetVar("soru_3",false);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4 && yanlis_sayac>=2)
{
	player.SetVar("soru_4",false);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5 && yanlis_sayac>=2)
{
	player.SetVar("soru_5",false);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6 && yanlis_sayac>=2)
{
	player.SetVar("soru_6",false);
	player.SetVar("etkinlik_6",true);
}
}

window.Script11 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");

if(gorev_no===1)
{
	player.SetVar("soru_1",true);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2)
{
	player.SetVar("soru_2",true);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3)
{
	player.SetVar("soru_3",true);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4)
{
	player.SetVar("soru_4",true);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5)
{
	player.SetVar("soru_5",true);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6)
{
	player.SetVar("soru_6",true);
	player.SetVar("etkinlik_6",true);
}
}

window.Script12 = function()
{
  window.createProgressBar = function (maximumProgress, currentProgress, color = '#5EA7FF', targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    // Daha önce oluşturulmuşsa yeniden oluşturma
    const existingBar = targetDiv.querySelector('.custom-progress-container');
    if (existingBar) {
        //console.warn(`[ProgressBar] Zaten mevcut, yeniden oluşturulmadı: ${targetDivIdentifier}`);
        return;
    }

    // Progress bar container oluştur
    const progressBarContainer = document.createElement('div');
    progressBarContainer.classList.add('custom-progress-container'); // Bu sınıf sayesinde tekrar kontrol kolaylaşır
    progressBarContainer.style.position = 'absolute';
	progressBarContainer.style.top = '0';
	progressBarContainer.style.left = '0';
	progressBarContainer.style.width = '100%';
	progressBarContainer.style.height = '100%';
    progressBarContainer.style.backgroundColor = '#A2A1A2';
    progressBarContainer.style.borderRadius = '100px';
    progressBarContainer.style.overflow = 'hidden';
    progressBarContainer.dataset.maximumProgress = maximumProgress;
    progressBarContainer.dataset.targetDiv = targetDivIdentifier;

    const progressBar = document.createElement('div');
    progressBar.classList.add('custom-progress-bar'); // stil ve sorgulama kolaylığı için
    progressBar.style.height = '0%';
    progressBar.style.width = '100%';
    progressBar.style.backgroundColor = color;
    progressBar.style.transition = 'height 0.5s ease';
    progressBar.style.position = 'absolute';
	progressBar.style.bottom = '0';  // hep tabandan yukarı doğru dolacak

    progressBarContainer.appendChild(progressBar);
    targetDiv.appendChild(progressBarContainer);

    window.updateProgressBar(currentProgress, targetDivIdentifier);
};

window.updateProgressBar = function (currentProgress, targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    const progressBarContainer = targetDiv.querySelector('.custom-progress-container');
    if (!progressBarContainer) {
        //console.warn("Progress bar container not found");
        return;
    }

    const maximumProgress = progressBarContainer.dataset.maximumProgress;
    const progressBar = progressBarContainer.querySelector('.custom-progress-bar');
    if (progressBar) {
        const progressPercentage = (currentProgress / maximumProgress) * 100;
        progressBar.style.height = `${progressPercentage}%`;
    }
};


}

window.Script13 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(5, progressValue, "#FCC626", "progress-container");

}

window.Script14 = function()
{
  // Storyline değişkenlerine erişim için player nesnesini al
var player = GetPlayer();

// Storyline'daki progressValue değişkenini al
var currentProgress = player.GetVar("soru_no");


// Storyline'daki değişkeni güncelle
player.SetVar("soru_no", currentProgress);

if (document.querySelector('[data-acc-text="progress-container"] .custom-progress-bar')) {
    window.updateProgressBar(currentProgress, "progress-container");
} else {
    //console.warn("Progress bar henüz oluşturulmamış. updateProgressBar çalıştırılmadı.");
}

}

window.Script15 = function()
{
  let player = GetPlayer();
let soru_no = player.GetVar("soru_no");

const icon = object('5yrV6Afl43I');

// icon durumları için bir dizi (array) oluşturun
// Dizi index'i soru_no ile eşleşir
const iconStates = [
    'Normal',  // Soru 0 için
    'state_2', // Soru 1 için
    'state_3', // Soru 2 için
    'state_4', // Soru 3 için
    'state_5', // Soru 4 için
    'state_6'  // Soru 5 için
];

// soru_no'nun geçerli bir aralıkta olup olmadığını kontrol edin
if (soru_no >= 0 && soru_no < iconStates.length) {
    // Diziden doğru durumu seçin
    icon.state = iconStates[soru_no];
} else {
    // Eğer soru_no 0-5 arasında değilse, varsayılan duruma dön
    icon.state = 'Normal';
}

}

window.Script16 = function()
{
  let player = GetPlayer();

let soru_no = player.GetVar("soru_no");

let etkinlik_1 = player.GetVar("etkinlik_1");
let etkinlik_2 = player.GetVar("etkinlik_2");
let etkinlik_3 = player.GetVar("etkinlik_3");
let etkinlik_4 = player.GetVar("etkinlik_4");
let etkinlik_5 = player.GetVar("etkinlik_5");
let etkinlik_6 = player.GetVar("etkinlik_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 ---
if(etkinlik_1===false && soru_no===0)
{
    star_1.state = 'aktif';
}
else if(etkinlik_1===false && soru_no!==0)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(etkinlik_2===false && soru_no===1)
{
    star_2.state = 'aktif';
}
else if(etkinlik_2===false && soru_no!==1)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(etkinlik_3===false && soru_no===2)
{
    star_3.state = 'aktif';
}
else if(etkinlik_3===false && soru_no!==2)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(etkinlik_4===false && soru_no===3)
{
    star_4.state = 'aktif';
}
else if(etkinlik_4===false && soru_no!==3)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(etkinlik_5===false && soru_no===4)
{
    star_5.state = 'aktif';
}
else if(etkinlik_5===false && soru_no!==4)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(etkinlik_6===false && soru_no===5)
{
    star_6.state = 'aktif';
}
else if(etkinlik_6===false && soru_no!==5)
{
    star_6.state = 'Normal';
}
}

window.Script17 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script18 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script19 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let yanlis_sayac = player.GetVar("yanlis_sayac");

if(gorev_no===1 && yanlis_sayac>=2)
{
	player.SetVar("soru_1",false);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2 && yanlis_sayac>=2)
{
	player.SetVar("soru_2",false);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3 && yanlis_sayac>=2)
{
	player.SetVar("soru_3",false);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4 && yanlis_sayac>=2)
{
	player.SetVar("soru_4",false);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5 && yanlis_sayac>=2)
{
	player.SetVar("soru_5",false);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6 && yanlis_sayac>=2)
{
	player.SetVar("soru_6",false);
	player.SetVar("etkinlik_6",true);
}
}

window.Script20 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");

if(gorev_no===1)
{
	player.SetVar("soru_1",true);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2)
{
	player.SetVar("soru_2",true);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3)
{
	player.SetVar("soru_3",true);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4)
{
	player.SetVar("soru_4",true);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5)
{
	player.SetVar("soru_5",true);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6)
{
	player.SetVar("soru_6",true);
	player.SetVar("etkinlik_6",true);
}
}

window.Script21 = function()
{
  window.createProgressBar = function (maximumProgress, currentProgress, color = '#5EA7FF', targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    // Daha önce oluşturulmuşsa yeniden oluşturma
    const existingBar = targetDiv.querySelector('.custom-progress-container');
    if (existingBar) {
        //console.warn(`[ProgressBar] Zaten mevcut, yeniden oluşturulmadı: ${targetDivIdentifier}`);
        return;
    }

    // Progress bar container oluştur
    const progressBarContainer = document.createElement('div');
    progressBarContainer.classList.add('custom-progress-container'); // Bu sınıf sayesinde tekrar kontrol kolaylaşır
    progressBarContainer.style.position = 'absolute';
	progressBarContainer.style.top = '0';
	progressBarContainer.style.left = '0';
	progressBarContainer.style.width = '100%';
	progressBarContainer.style.height = '100%';
    progressBarContainer.style.backgroundColor = '#A2A1A2';
    progressBarContainer.style.borderRadius = '100px';
    progressBarContainer.style.overflow = 'hidden';
    progressBarContainer.dataset.maximumProgress = maximumProgress;
    progressBarContainer.dataset.targetDiv = targetDivIdentifier;

    const progressBar = document.createElement('div');
    progressBar.classList.add('custom-progress-bar'); // stil ve sorgulama kolaylığı için
    progressBar.style.height = '0%';
    progressBar.style.width = '100%';
    progressBar.style.backgroundColor = color;
    progressBar.style.transition = 'height 0.5s ease';
    progressBar.style.position = 'absolute';
	progressBar.style.bottom = '0';  // hep tabandan yukarı doğru dolacak

    progressBarContainer.appendChild(progressBar);
    targetDiv.appendChild(progressBarContainer);

    window.updateProgressBar(currentProgress, targetDivIdentifier);
};

window.updateProgressBar = function (currentProgress, targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    const progressBarContainer = targetDiv.querySelector('.custom-progress-container');
    if (!progressBarContainer) {
        //console.warn("Progress bar container not found");
        return;
    }

    const maximumProgress = progressBarContainer.dataset.maximumProgress;
    const progressBar = progressBarContainer.querySelector('.custom-progress-bar');
    if (progressBar) {
        const progressPercentage = (currentProgress / maximumProgress) * 100;
        progressBar.style.height = `${progressPercentage}%`;
    }
};


}

window.Script22 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(5, progressValue, "#FCC626", "progress-container");

}

window.Script23 = function()
{
  // Storyline değişkenlerine erişim için player nesnesini al
var player = GetPlayer();

// Storyline'daki progressValue değişkenini al
var currentProgress = player.GetVar("soru_no");


// Storyline'daki değişkeni güncelle
player.SetVar("soru_no", currentProgress);

if (document.querySelector('[data-acc-text="progress-container"] .custom-progress-bar')) {
    window.updateProgressBar(currentProgress, "progress-container");
} else {
    //console.warn("Progress bar henüz oluşturulmamış. updateProgressBar çalıştırılmadı.");
}

}

window.Script24 = function()
{
  let player = GetPlayer();
let soru_no = player.GetVar("soru_no");

const icon = object('5yrV6Afl43I');

// icon durumları için bir dizi (array) oluşturun
// Dizi index'i soru_no ile eşleşir
const iconStates = [
    'Normal',  // Soru 0 için
    'state_2', // Soru 1 için
    'state_3', // Soru 2 için
    'state_4', // Soru 3 için
    'state_5', // Soru 4 için
    'state_6'  // Soru 5 için
];

// soru_no'nun geçerli bir aralıkta olup olmadığını kontrol edin
if (soru_no >= 0 && soru_no < iconStates.length) {
    // Diziden doğru durumu seçin
    icon.state = iconStates[soru_no];
} else {
    // Eğer soru_no 0-5 arasında değilse, varsayılan duruma dön
    icon.state = 'Normal';
}

}

window.Script25 = function()
{
  let player = GetPlayer();

let soru_no = player.GetVar("soru_no");

let etkinlik_1 = player.GetVar("etkinlik_1");
let etkinlik_2 = player.GetVar("etkinlik_2");
let etkinlik_3 = player.GetVar("etkinlik_3");
let etkinlik_4 = player.GetVar("etkinlik_4");
let etkinlik_5 = player.GetVar("etkinlik_5");
let etkinlik_6 = player.GetVar("etkinlik_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 ---
if(etkinlik_1===false && soru_no===0)
{
    star_1.state = 'aktif';
}
else if(etkinlik_1===false && soru_no!==0)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(etkinlik_2===false && soru_no===1)
{
    star_2.state = 'aktif';
}
else if(etkinlik_2===false && soru_no!==1)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(etkinlik_3===false && soru_no===2)
{
    star_3.state = 'aktif';
}
else if(etkinlik_3===false && soru_no!==2)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(etkinlik_4===false && soru_no===3)
{
    star_4.state = 'aktif';
}
else if(etkinlik_4===false && soru_no!==3)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(etkinlik_5===false && soru_no===4)
{
    star_5.state = 'aktif';
}
else if(etkinlik_5===false && soru_no!==4)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(etkinlik_6===false && soru_no===5)
{
    star_6.state = 'aktif';
}
else if(etkinlik_6===false && soru_no!==5)
{
    star_6.state = 'Normal';
}
}

window.Script26 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script27 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script28 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let yanlis_sayac = player.GetVar("yanlis_sayac");

if(gorev_no===1 && yanlis_sayac>=2)
{
	player.SetVar("soru_1",false);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2 && yanlis_sayac>=2)
{
	player.SetVar("soru_2",false);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3 && yanlis_sayac>=2)
{
	player.SetVar("soru_3",false);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4 && yanlis_sayac>=2)
{
	player.SetVar("soru_4",false);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5 && yanlis_sayac>=2)
{
	player.SetVar("soru_5",false);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6 && yanlis_sayac>=2)
{
	player.SetVar("soru_6",false);
	player.SetVar("etkinlik_6",true);
}
}

window.Script29 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");

if(gorev_no===1)
{
	player.SetVar("soru_1",true);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2)
{
	player.SetVar("soru_2",true);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3)
{
	player.SetVar("soru_3",true);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4)
{
	player.SetVar("soru_4",true);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5)
{
	player.SetVar("soru_5",true);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6)
{
	player.SetVar("soru_6",true);
	player.SetVar("etkinlik_6",true);
}
}

window.Script30 = function()
{
  window.createProgressBar = function (maximumProgress, currentProgress, color = '#5EA7FF', targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    // Daha önce oluşturulmuşsa yeniden oluşturma
    const existingBar = targetDiv.querySelector('.custom-progress-container');
    if (existingBar) {
        //console.warn(`[ProgressBar] Zaten mevcut, yeniden oluşturulmadı: ${targetDivIdentifier}`);
        return;
    }

    // Progress bar container oluştur
    const progressBarContainer = document.createElement('div');
    progressBarContainer.classList.add('custom-progress-container'); // Bu sınıf sayesinde tekrar kontrol kolaylaşır
    progressBarContainer.style.position = 'absolute';
	progressBarContainer.style.top = '0';
	progressBarContainer.style.left = '0';
	progressBarContainer.style.width = '100%';
	progressBarContainer.style.height = '100%';
    progressBarContainer.style.backgroundColor = '#A2A1A2';
    progressBarContainer.style.borderRadius = '100px';
    progressBarContainer.style.overflow = 'hidden';
    progressBarContainer.dataset.maximumProgress = maximumProgress;
    progressBarContainer.dataset.targetDiv = targetDivIdentifier;

    const progressBar = document.createElement('div');
    progressBar.classList.add('custom-progress-bar'); // stil ve sorgulama kolaylığı için
    progressBar.style.height = '0%';
    progressBar.style.width = '100%';
    progressBar.style.backgroundColor = color;
    progressBar.style.transition = 'height 0.5s ease';
    progressBar.style.position = 'absolute';
	progressBar.style.bottom = '0';  // hep tabandan yukarı doğru dolacak

    progressBarContainer.appendChild(progressBar);
    targetDiv.appendChild(progressBarContainer);

    window.updateProgressBar(currentProgress, targetDivIdentifier);
};

window.updateProgressBar = function (currentProgress, targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    const progressBarContainer = targetDiv.querySelector('.custom-progress-container');
    if (!progressBarContainer) {
        //console.warn("Progress bar container not found");
        return;
    }

    const maximumProgress = progressBarContainer.dataset.maximumProgress;
    const progressBar = progressBarContainer.querySelector('.custom-progress-bar');
    if (progressBar) {
        const progressPercentage = (currentProgress / maximumProgress) * 100;
        progressBar.style.height = `${progressPercentage}%`;
    }
};


}

window.Script31 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(5, progressValue, "#FCC626", "progress-container");

}

window.Script32 = function()
{
  // Storyline değişkenlerine erişim için player nesnesini al
var player = GetPlayer();

// Storyline'daki progressValue değişkenini al
var currentProgress = player.GetVar("soru_no");


// Storyline'daki değişkeni güncelle
player.SetVar("soru_no", currentProgress);

if (document.querySelector('[data-acc-text="progress-container"] .custom-progress-bar')) {
    window.updateProgressBar(currentProgress, "progress-container");
} else {
    //console.warn("Progress bar henüz oluşturulmamış. updateProgressBar çalıştırılmadı.");
}

}

window.Script33 = function()
{
  let player = GetPlayer();
let soru_no = player.GetVar("soru_no");

const icon = object('5yrV6Afl43I');

// icon durumları için bir dizi (array) oluşturun
// Dizi index'i soru_no ile eşleşir
const iconStates = [
    'Normal',  // Soru 0 için
    'state_2', // Soru 1 için
    'state_3', // Soru 2 için
    'state_4', // Soru 3 için
    'state_5', // Soru 4 için
    'state_6'  // Soru 5 için
];

// soru_no'nun geçerli bir aralıkta olup olmadığını kontrol edin
if (soru_no >= 0 && soru_no < iconStates.length) {
    // Diziden doğru durumu seçin
    icon.state = iconStates[soru_no];
} else {
    // Eğer soru_no 0-5 arasında değilse, varsayılan duruma dön
    icon.state = 'Normal';
}

}

window.Script34 = function()
{
  let player = GetPlayer();

let soru_no = player.GetVar("soru_no");

let etkinlik_1 = player.GetVar("etkinlik_1");
let etkinlik_2 = player.GetVar("etkinlik_2");
let etkinlik_3 = player.GetVar("etkinlik_3");
let etkinlik_4 = player.GetVar("etkinlik_4");
let etkinlik_5 = player.GetVar("etkinlik_5");
let etkinlik_6 = player.GetVar("etkinlik_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 ---
if(etkinlik_1===false && soru_no===0)
{
    star_1.state = 'aktif';
}
else if(etkinlik_1===false && soru_no!==0)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(etkinlik_2===false && soru_no===1)
{
    star_2.state = 'aktif';
}
else if(etkinlik_2===false && soru_no!==1)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(etkinlik_3===false && soru_no===2)
{
    star_3.state = 'aktif';
}
else if(etkinlik_3===false && soru_no!==2)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(etkinlik_4===false && soru_no===3)
{
    star_4.state = 'aktif';
}
else if(etkinlik_4===false && soru_no!==3)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(etkinlik_5===false && soru_no===4)
{
    star_5.state = 'aktif';
}
else if(etkinlik_5===false && soru_no!==4)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(etkinlik_6===false && soru_no===5)
{
    star_6.state = 'aktif';
}
else if(etkinlik_6===false && soru_no!==5)
{
    star_6.state = 'Normal';
}
}

window.Script35 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script36 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script37 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let yanlis_sayac = player.GetVar("yanlis_sayac");

if(gorev_no===1 && yanlis_sayac>=2)
{
	player.SetVar("soru_1",false);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2 && yanlis_sayac>=2)
{
	player.SetVar("soru_2",false);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3 && yanlis_sayac>=2)
{
	player.SetVar("soru_3",false);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4 && yanlis_sayac>=2)
{
	player.SetVar("soru_4",false);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5 && yanlis_sayac>=2)
{
	player.SetVar("soru_5",false);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6 && yanlis_sayac>=2)
{
	player.SetVar("soru_6",false);
	player.SetVar("etkinlik_6",true);
}
}

window.Script38 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");

if(gorev_no===1)
{
	player.SetVar("soru_1",true);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2)
{
	player.SetVar("soru_2",true);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3)
{
	player.SetVar("soru_3",true);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4)
{
	player.SetVar("soru_4",true);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5)
{
	player.SetVar("soru_5",true);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6)
{
	player.SetVar("soru_6",true);
	player.SetVar("etkinlik_6",true);
}
}

window.Script39 = function()
{
  window.createProgressBar = function (maximumProgress, currentProgress, color = '#5EA7FF', targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    // Daha önce oluşturulmuşsa yeniden oluşturma
    const existingBar = targetDiv.querySelector('.custom-progress-container');
    if (existingBar) {
        //console.warn(`[ProgressBar] Zaten mevcut, yeniden oluşturulmadı: ${targetDivIdentifier}`);
        return;
    }

    // Progress bar container oluştur
    const progressBarContainer = document.createElement('div');
    progressBarContainer.classList.add('custom-progress-container'); // Bu sınıf sayesinde tekrar kontrol kolaylaşır
    progressBarContainer.style.position = 'absolute';
	progressBarContainer.style.top = '0';
	progressBarContainer.style.left = '0';
	progressBarContainer.style.width = '100%';
	progressBarContainer.style.height = '100%';
    progressBarContainer.style.backgroundColor = '#A2A1A2';
    progressBarContainer.style.borderRadius = '100px';
    progressBarContainer.style.overflow = 'hidden';
    progressBarContainer.dataset.maximumProgress = maximumProgress;
    progressBarContainer.dataset.targetDiv = targetDivIdentifier;

    const progressBar = document.createElement('div');
    progressBar.classList.add('custom-progress-bar'); // stil ve sorgulama kolaylığı için
    progressBar.style.height = '0%';
    progressBar.style.width = '100%';
    progressBar.style.backgroundColor = color;
    progressBar.style.transition = 'height 0.5s ease';
    progressBar.style.position = 'absolute';
	progressBar.style.bottom = '0';  // hep tabandan yukarı doğru dolacak

    progressBarContainer.appendChild(progressBar);
    targetDiv.appendChild(progressBarContainer);

    window.updateProgressBar(currentProgress, targetDivIdentifier);
};

window.updateProgressBar = function (currentProgress, targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    const progressBarContainer = targetDiv.querySelector('.custom-progress-container');
    if (!progressBarContainer) {
        //console.warn("Progress bar container not found");
        return;
    }

    const maximumProgress = progressBarContainer.dataset.maximumProgress;
    const progressBar = progressBarContainer.querySelector('.custom-progress-bar');
    if (progressBar) {
        const progressPercentage = (currentProgress / maximumProgress) * 100;
        progressBar.style.height = `${progressPercentage}%`;
    }
};


}

window.Script40 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(5, progressValue, "#FCC626", "progress-container");

}

window.Script41 = function()
{
  // Storyline değişkenlerine erişim için player nesnesini al
var player = GetPlayer();

// Storyline'daki progressValue değişkenini al
var currentProgress = player.GetVar("soru_no");


// Storyline'daki değişkeni güncelle
player.SetVar("soru_no", currentProgress);

if (document.querySelector('[data-acc-text="progress-container"] .custom-progress-bar')) {
    window.updateProgressBar(currentProgress, "progress-container");
} else {
    //console.warn("Progress bar henüz oluşturulmamış. updateProgressBar çalıştırılmadı.");
}

}

window.Script42 = function()
{
  let player = GetPlayer();
let soru_no = player.GetVar("soru_no");

const icon = object('5yrV6Afl43I');

// icon durumları için bir dizi (array) oluşturun
// Dizi index'i soru_no ile eşleşir
const iconStates = [
    'Normal',  // Soru 0 için
    'state_2', // Soru 1 için
    'state_3', // Soru 2 için
    'state_4', // Soru 3 için
    'state_5', // Soru 4 için
    'state_6'  // Soru 5 için
];

// soru_no'nun geçerli bir aralıkta olup olmadığını kontrol edin
if (soru_no >= 0 && soru_no < iconStates.length) {
    // Diziden doğru durumu seçin
    icon.state = iconStates[soru_no];
} else {
    // Eğer soru_no 0-5 arasında değilse, varsayılan duruma dön
    icon.state = 'Normal';
}

}

window.Script43 = function()
{
  let player = GetPlayer();

let soru_no = player.GetVar("soru_no");

let etkinlik_1 = player.GetVar("etkinlik_1");
let etkinlik_2 = player.GetVar("etkinlik_2");
let etkinlik_3 = player.GetVar("etkinlik_3");
let etkinlik_4 = player.GetVar("etkinlik_4");
let etkinlik_5 = player.GetVar("etkinlik_5");
let etkinlik_6 = player.GetVar("etkinlik_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 ---
if(etkinlik_1===false && soru_no===0)
{
    star_1.state = 'aktif';
}
else if(etkinlik_1===false && soru_no!==0)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(etkinlik_2===false && soru_no===1)
{
    star_2.state = 'aktif';
}
else if(etkinlik_2===false && soru_no!==1)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(etkinlik_3===false && soru_no===2)
{
    star_3.state = 'aktif';
}
else if(etkinlik_3===false && soru_no!==2)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(etkinlik_4===false && soru_no===3)
{
    star_4.state = 'aktif';
}
else if(etkinlik_4===false && soru_no!==3)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(etkinlik_5===false && soru_no===4)
{
    star_5.state = 'aktif';
}
else if(etkinlik_5===false && soru_no!==4)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(etkinlik_6===false && soru_no===5)
{
    star_6.state = 'aktif';
}
else if(etkinlik_6===false && soru_no!==5)
{
    star_6.state = 'Normal';
}
}

window.Script44 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script45 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script46 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let yanlis_sayac = player.GetVar("yanlis_sayac");

if(gorev_no===1 && yanlis_sayac>=2)
{
	player.SetVar("soru_1",false);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2 && yanlis_sayac>=2)
{
	player.SetVar("soru_2",false);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3 && yanlis_sayac>=2)
{
	player.SetVar("soru_3",false);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4 && yanlis_sayac>=2)
{
	player.SetVar("soru_4",false);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5 && yanlis_sayac>=2)
{
	player.SetVar("soru_5",false);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6 && yanlis_sayac>=2)
{
	player.SetVar("soru_6",false);
	player.SetVar("etkinlik_6",true);
}
}

window.Script47 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");

if(gorev_no===1)
{
	player.SetVar("soru_1",true);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2)
{
	player.SetVar("soru_2",true);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3)
{
	player.SetVar("soru_3",true);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4)
{
	player.SetVar("soru_4",true);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5)
{
	player.SetVar("soru_5",true);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6)
{
	player.SetVar("soru_6",true);
	player.SetVar("etkinlik_6",true);
}
}

window.Script48 = function()
{
  window.createProgressBar = function (maximumProgress, currentProgress, color = '#5EA7FF', targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    // Daha önce oluşturulmuşsa yeniden oluşturma
    const existingBar = targetDiv.querySelector('.custom-progress-container');
    if (existingBar) {
        //console.warn(`[ProgressBar] Zaten mevcut, yeniden oluşturulmadı: ${targetDivIdentifier}`);
        return;
    }

    // Progress bar container oluştur
    const progressBarContainer = document.createElement('div');
    progressBarContainer.classList.add('custom-progress-container'); // Bu sınıf sayesinde tekrar kontrol kolaylaşır
    progressBarContainer.style.position = 'absolute';
	progressBarContainer.style.top = '0';
	progressBarContainer.style.left = '0';
	progressBarContainer.style.width = '100%';
	progressBarContainer.style.height = '100%';
    progressBarContainer.style.backgroundColor = '#A2A1A2';
    progressBarContainer.style.borderRadius = '100px';
    progressBarContainer.style.overflow = 'hidden';
    progressBarContainer.dataset.maximumProgress = maximumProgress;
    progressBarContainer.dataset.targetDiv = targetDivIdentifier;

    const progressBar = document.createElement('div');
    progressBar.classList.add('custom-progress-bar'); // stil ve sorgulama kolaylığı için
    progressBar.style.height = '0%';
    progressBar.style.width = '100%';
    progressBar.style.backgroundColor = color;
    progressBar.style.transition = 'height 0.5s ease';
    progressBar.style.position = 'absolute';
	progressBar.style.bottom = '0';  // hep tabandan yukarı doğru dolacak

    progressBarContainer.appendChild(progressBar);
    targetDiv.appendChild(progressBarContainer);

    window.updateProgressBar(currentProgress, targetDivIdentifier);
};

window.updateProgressBar = function (currentProgress, targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    const progressBarContainer = targetDiv.querySelector('.custom-progress-container');
    if (!progressBarContainer) {
        //console.warn("Progress bar container not found");
        return;
    }

    const maximumProgress = progressBarContainer.dataset.maximumProgress;
    const progressBar = progressBarContainer.querySelector('.custom-progress-bar');
    if (progressBar) {
        const progressPercentage = (currentProgress / maximumProgress) * 100;
        progressBar.style.height = `${progressPercentage}%`;
    }
};


}

window.Script49 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(5, progressValue, "#FCC626", "progress-container");

}

window.Script50 = function()
{
  // Storyline değişkenlerine erişim için player nesnesini al
var player = GetPlayer();

// Storyline'daki progressValue değişkenini al
var currentProgress = player.GetVar("soru_no");


// Storyline'daki değişkeni güncelle
player.SetVar("soru_no", currentProgress);

if (document.querySelector('[data-acc-text="progress-container"] .custom-progress-bar')) {
    window.updateProgressBar(currentProgress, "progress-container");
} else {
    //console.warn("Progress bar henüz oluşturulmamış. updateProgressBar çalıştırılmadı.");
}

}

window.Script51 = function()
{
  let player = GetPlayer();
let soru_no = player.GetVar("soru_no");

const icon = object('5yrV6Afl43I');

// icon durumları için bir dizi (array) oluşturun
// Dizi index'i soru_no ile eşleşir
const iconStates = [
    'Normal',  // Soru 0 için
    'state_2', // Soru 1 için
    'state_3', // Soru 2 için
    'state_4', // Soru 3 için
    'state_5', // Soru 4 için
    'state_6'  // Soru 5 için
];

// soru_no'nun geçerli bir aralıkta olup olmadığını kontrol edin
if (soru_no >= 0 && soru_no < iconStates.length) {
    // Diziden doğru durumu seçin
    icon.state = iconStates[soru_no];
} else {
    // Eğer soru_no 0-5 arasında değilse, varsayılan duruma dön
    icon.state = 'Normal';
}

}

window.Script52 = function()
{
  let player = GetPlayer();

let soru_no = player.GetVar("soru_no");

let etkinlik_1 = player.GetVar("etkinlik_1");
let etkinlik_2 = player.GetVar("etkinlik_2");
let etkinlik_3 = player.GetVar("etkinlik_3");
let etkinlik_4 = player.GetVar("etkinlik_4");
let etkinlik_5 = player.GetVar("etkinlik_5");
let etkinlik_6 = player.GetVar("etkinlik_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 ---
if(etkinlik_1===false && soru_no===0)
{
    star_1.state = 'aktif';
}
else if(etkinlik_1===false && soru_no!==0)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(etkinlik_2===false && soru_no===1)
{
    star_2.state = 'aktif';
}
else if(etkinlik_2===false && soru_no!==1)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(etkinlik_3===false && soru_no===2)
{
    star_3.state = 'aktif';
}
else if(etkinlik_3===false && soru_no!==2)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(etkinlik_4===false && soru_no===3)
{
    star_4.state = 'aktif';
}
else if(etkinlik_4===false && soru_no!==3)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(etkinlik_5===false && soru_no===4)
{
    star_5.state = 'aktif';
}
else if(etkinlik_5===false && soru_no!==4)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(etkinlik_6===false && soru_no===5)
{
    star_6.state = 'aktif';
}
else if(etkinlik_6===false && soru_no!==5)
{
    star_6.state = 'Normal';
}
}

window.Script53 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script54 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script55 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let yanlis_sayac = player.GetVar("yanlis_sayac");

if(gorev_no===1 && yanlis_sayac>=2)
{
	player.SetVar("soru_1",false);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2 && yanlis_sayac>=2)
{
	player.SetVar("soru_2",false);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3 && yanlis_sayac>=2)
{
	player.SetVar("soru_3",false);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4 && yanlis_sayac>=2)
{
	player.SetVar("soru_4",false);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5 && yanlis_sayac>=2)
{
	player.SetVar("soru_5",false);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6 && yanlis_sayac>=2)
{
	player.SetVar("soru_6",false);
	player.SetVar("etkinlik_6",true);
}
}

window.Script56 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");

if(gorev_no===1)
{
	player.SetVar("soru_1",true);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2)
{
	player.SetVar("soru_2",true);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3)
{
	player.SetVar("soru_3",true);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4)
{
	player.SetVar("soru_4",true);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5)
{
	player.SetVar("soru_5",true);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6)
{
	player.SetVar("soru_6",true);
	player.SetVar("etkinlik_6",true);
}
}

window.Script57 = function()
{
  window.createProgressBar = function (maximumProgress, currentProgress, color = '#5EA7FF', targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    // Daha önce oluşturulmuşsa yeniden oluşturma
    const existingBar = targetDiv.querySelector('.custom-progress-container');
    if (existingBar) {
        //console.warn(`[ProgressBar] Zaten mevcut, yeniden oluşturulmadı: ${targetDivIdentifier}`);
        return;
    }

    // Progress bar container oluştur
    const progressBarContainer = document.createElement('div');
    progressBarContainer.classList.add('custom-progress-container'); // Bu sınıf sayesinde tekrar kontrol kolaylaşır
    progressBarContainer.style.position = 'absolute';
	progressBarContainer.style.top = '0';
	progressBarContainer.style.left = '0';
	progressBarContainer.style.width = '100%';
	progressBarContainer.style.height = '100%';
    progressBarContainer.style.backgroundColor = '#A2A1A2';
    progressBarContainer.style.borderRadius = '100px';
    progressBarContainer.style.overflow = 'hidden';
    progressBarContainer.dataset.maximumProgress = maximumProgress;
    progressBarContainer.dataset.targetDiv = targetDivIdentifier;

    const progressBar = document.createElement('div');
    progressBar.classList.add('custom-progress-bar'); // stil ve sorgulama kolaylığı için
    progressBar.style.height = '0%';
    progressBar.style.width = '100%';
    progressBar.style.backgroundColor = color;
    progressBar.style.transition = 'height 0.5s ease';
    progressBar.style.position = 'absolute';
	progressBar.style.bottom = '0';  // hep tabandan yukarı doğru dolacak

    progressBarContainer.appendChild(progressBar);
    targetDiv.appendChild(progressBarContainer);

    window.updateProgressBar(currentProgress, targetDivIdentifier);
};

window.updateProgressBar = function (currentProgress, targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    const progressBarContainer = targetDiv.querySelector('.custom-progress-container');
    if (!progressBarContainer) {
        //console.warn("Progress bar container not found");
        return;
    }

    const maximumProgress = progressBarContainer.dataset.maximumProgress;
    const progressBar = progressBarContainer.querySelector('.custom-progress-bar');
    if (progressBar) {
        const progressPercentage = (currentProgress / maximumProgress) * 100;
        progressBar.style.height = `${progressPercentage}%`;
    }
};


}

window.Script58 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(5, progressValue, "#FCC626", "progress-container");

}

window.Script59 = function()
{
  // Storyline değişkenlerine erişim için player nesnesini al
var player = GetPlayer();

// Storyline'daki progressValue değişkenini al
var currentProgress = player.GetVar("soru_no");


// Storyline'daki değişkeni güncelle
player.SetVar("soru_no", currentProgress);

if (document.querySelector('[data-acc-text="progress-container"] .custom-progress-bar')) {
    window.updateProgressBar(currentProgress, "progress-container");
} else {
    //console.warn("Progress bar henüz oluşturulmamış. updateProgressBar çalıştırılmadı.");
}

}

window.Script60 = function()
{
  let player = GetPlayer();
let soru_no = player.GetVar("soru_no");

const icon = object('5yrV6Afl43I');

// icon durumları için bir dizi (array) oluşturun
// Dizi index'i soru_no ile eşleşir
const iconStates = [
    'Normal',  // Soru 0 için
    'state_2', // Soru 1 için
    'state_3', // Soru 2 için
    'state_4', // Soru 3 için
    'state_5', // Soru 4 için
    'state_6'  // Soru 5 için
];

// soru_no'nun geçerli bir aralıkta olup olmadığını kontrol edin
if (soru_no >= 0 && soru_no < iconStates.length) {
    // Diziden doğru durumu seçin
    icon.state = iconStates[soru_no];
} else {
    // Eğer soru_no 0-5 arasında değilse, varsayılan duruma dön
    icon.state = 'Normal';
}

}

window.Script61 = function()
{
  let player = GetPlayer();

let soru_no = player.GetVar("soru_no");

let etkinlik_1 = player.GetVar("etkinlik_1");
let etkinlik_2 = player.GetVar("etkinlik_2");
let etkinlik_3 = player.GetVar("etkinlik_3");
let etkinlik_4 = player.GetVar("etkinlik_4");
let etkinlik_5 = player.GetVar("etkinlik_5");
let etkinlik_6 = player.GetVar("etkinlik_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 ---
if(etkinlik_1===false && soru_no===0)
{
    star_1.state = 'aktif';
}
else if(etkinlik_1===false && soru_no!==0)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(etkinlik_2===false && soru_no===1)
{
    star_2.state = 'aktif';
}
else if(etkinlik_2===false && soru_no!==1)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(etkinlik_3===false && soru_no===2)
{
    star_3.state = 'aktif';
}
else if(etkinlik_3===false && soru_no!==2)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(etkinlik_4===false && soru_no===3)
{
    star_4.state = 'aktif';
}
else if(etkinlik_4===false && soru_no!==3)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(etkinlik_5===false && soru_no===4)
{
    star_5.state = 'aktif';
}
else if(etkinlik_5===false && soru_no!==4)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(etkinlik_6===false && soru_no===5)
{
    star_6.state = 'aktif';
}
else if(etkinlik_6===false && soru_no!==5)
{
    star_6.state = 'Normal';
}
}

window.Script62 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script63 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script64 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let yanlis_sayac = player.GetVar("yanlis_sayac");

if(gorev_no===1 && yanlis_sayac>=2)
{
	player.SetVar("soru_1",false);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2 && yanlis_sayac>=2)
{
	player.SetVar("soru_2",false);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3 && yanlis_sayac>=2)
{
	player.SetVar("soru_3",false);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4 && yanlis_sayac>=2)
{
	player.SetVar("soru_4",false);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5 && yanlis_sayac>=2)
{
	player.SetVar("soru_5",false);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6 && yanlis_sayac>=2)
{
	player.SetVar("soru_6",false);
	player.SetVar("etkinlik_6",true);
}
}

window.Script65 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");

if(gorev_no===1)
{
	player.SetVar("soru_1",true);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2)
{
	player.SetVar("soru_2",true);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3)
{
	player.SetVar("soru_3",true);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4)
{
	player.SetVar("soru_4",true);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5)
{
	player.SetVar("soru_5",true);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6)
{
	player.SetVar("soru_6",true);
	player.SetVar("etkinlik_6",true);
}
}

window.Script66 = function()
{
  window.createProgressBar = function (maximumProgress, currentProgress, color = '#5EA7FF', targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    // Daha önce oluşturulmuşsa yeniden oluşturma
    const existingBar = targetDiv.querySelector('.custom-progress-container');
    if (existingBar) {
        //console.warn(`[ProgressBar] Zaten mevcut, yeniden oluşturulmadı: ${targetDivIdentifier}`);
        return;
    }

    // Progress bar container oluştur
    const progressBarContainer = document.createElement('div');
    progressBarContainer.classList.add('custom-progress-container'); // Bu sınıf sayesinde tekrar kontrol kolaylaşır
    progressBarContainer.style.position = 'absolute';
	progressBarContainer.style.top = '0';
	progressBarContainer.style.left = '0';
	progressBarContainer.style.width = '100%';
	progressBarContainer.style.height = '100%';
    progressBarContainer.style.backgroundColor = '#A2A1A2';
    progressBarContainer.style.borderRadius = '100px';
    progressBarContainer.style.overflow = 'hidden';
    progressBarContainer.dataset.maximumProgress = maximumProgress;
    progressBarContainer.dataset.targetDiv = targetDivIdentifier;

    const progressBar = document.createElement('div');
    progressBar.classList.add('custom-progress-bar'); // stil ve sorgulama kolaylığı için
    progressBar.style.height = '0%';
    progressBar.style.width = '100%';
    progressBar.style.backgroundColor = color;
    progressBar.style.transition = 'height 0.5s ease';
    progressBar.style.position = 'absolute';
	progressBar.style.bottom = '0';  // hep tabandan yukarı doğru dolacak

    progressBarContainer.appendChild(progressBar);
    targetDiv.appendChild(progressBarContainer);

    window.updateProgressBar(currentProgress, targetDivIdentifier);
};

window.updateProgressBar = function (currentProgress, targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    const progressBarContainer = targetDiv.querySelector('.custom-progress-container');
    if (!progressBarContainer) {
        //console.warn("Progress bar container not found");
        return;
    }

    const maximumProgress = progressBarContainer.dataset.maximumProgress;
    const progressBar = progressBarContainer.querySelector('.custom-progress-bar');
    if (progressBar) {
        const progressPercentage = (currentProgress / maximumProgress) * 100;
        progressBar.style.height = `${progressPercentage}%`;
    }
};


}

window.Script67 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(5, progressValue, "#FCC626", "progress-container");

}

window.Script68 = function()
{
  // Storyline değişkenlerine erişim için player nesnesini al
var player = GetPlayer();

// Storyline'daki progressValue değişkenini al
var currentProgress = player.GetVar("soru_no");


// Storyline'daki değişkeni güncelle
player.SetVar("soru_no", currentProgress);

if (document.querySelector('[data-acc-text="progress-container"] .custom-progress-bar')) {
    window.updateProgressBar(currentProgress, "progress-container");
} else {
    //console.warn("Progress bar henüz oluşturulmamış. updateProgressBar çalıştırılmadı.");
}

}

window.Script69 = function()
{
  let player = GetPlayer();
let soru_no = player.GetVar("soru_no");

const icon = object('5yrV6Afl43I');

// icon durumları için bir dizi (array) oluşturun
// Dizi index'i soru_no ile eşleşir
const iconStates = [
    'Normal',  // Soru 0 için
    'state_2', // Soru 1 için
    'state_3', // Soru 2 için
    'state_4', // Soru 3 için
    'state_5', // Soru 4 için
    'state_6'  // Soru 5 için
];

// soru_no'nun geçerli bir aralıkta olup olmadığını kontrol edin
if (soru_no >= 0 && soru_no < iconStates.length) {
    // Diziden doğru durumu seçin
    icon.state = iconStates[soru_no];
} else {
    // Eğer soru_no 0-5 arasında değilse, varsayılan duruma dön
    icon.state = 'Normal';
}

}

window.Script70 = function()
{
  let player = GetPlayer();

let soru_no = player.GetVar("soru_no");

let etkinlik_1 = player.GetVar("etkinlik_1");
let etkinlik_2 = player.GetVar("etkinlik_2");
let etkinlik_3 = player.GetVar("etkinlik_3");
let etkinlik_4 = player.GetVar("etkinlik_4");
let etkinlik_5 = player.GetVar("etkinlik_5");
let etkinlik_6 = player.GetVar("etkinlik_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 ---
if(etkinlik_1===false && soru_no===0)
{
    star_1.state = 'aktif';
}
else if(etkinlik_1===false && soru_no!==0)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(etkinlik_2===false && soru_no===1)
{
    star_2.state = 'aktif';
}
else if(etkinlik_2===false && soru_no!==1)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(etkinlik_3===false && soru_no===2)
{
    star_3.state = 'aktif';
}
else if(etkinlik_3===false && soru_no!==2)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(etkinlik_4===false && soru_no===3)
{
    star_4.state = 'aktif';
}
else if(etkinlik_4===false && soru_no!==3)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(etkinlik_5===false && soru_no===4)
{
    star_5.state = 'aktif';
}
else if(etkinlik_5===false && soru_no!==4)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(etkinlik_6===false && soru_no===5)
{
    star_6.state = 'aktif';
}
else if(etkinlik_6===false && soru_no!==5)
{
    star_6.state = 'Normal';
}
}

window.Script71 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script72 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script73 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let yanlis_sayac = player.GetVar("yanlis_sayac");

if(gorev_no===1 && yanlis_sayac>=2)
{
	player.SetVar("soru_1",false);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2 && yanlis_sayac>=2)
{
	player.SetVar("soru_2",false);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3 && yanlis_sayac>=2)
{
	player.SetVar("soru_3",false);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4 && yanlis_sayac>=2)
{
	player.SetVar("soru_4",false);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5 && yanlis_sayac>=2)
{
	player.SetVar("soru_5",false);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6 && yanlis_sayac>=2)
{
	player.SetVar("soru_6",false);
	player.SetVar("etkinlik_6",true);
}
}

window.Script74 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");

if(gorev_no===1)
{
	player.SetVar("soru_1",true);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2)
{
	player.SetVar("soru_2",true);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3)
{
	player.SetVar("soru_3",true);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4)
{
	player.SetVar("soru_4",true);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5)
{
	player.SetVar("soru_5",true);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6)
{
	player.SetVar("soru_6",true);
	player.SetVar("etkinlik_6",true);
}
}

window.Script75 = function()
{
  window.createProgressBar = function (maximumProgress, currentProgress, color = '#5EA7FF', targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    // Daha önce oluşturulmuşsa yeniden oluşturma
    const existingBar = targetDiv.querySelector('.custom-progress-container');
    if (existingBar) {
        //console.warn(`[ProgressBar] Zaten mevcut, yeniden oluşturulmadı: ${targetDivIdentifier}`);
        return;
    }

    // Progress bar container oluştur
    const progressBarContainer = document.createElement('div');
    progressBarContainer.classList.add('custom-progress-container'); // Bu sınıf sayesinde tekrar kontrol kolaylaşır
    progressBarContainer.style.position = 'absolute';
	progressBarContainer.style.top = '0';
	progressBarContainer.style.left = '0';
	progressBarContainer.style.width = '100%';
	progressBarContainer.style.height = '100%';
    progressBarContainer.style.backgroundColor = '#A2A1A2';
    progressBarContainer.style.borderRadius = '100px';
    progressBarContainer.style.overflow = 'hidden';
    progressBarContainer.dataset.maximumProgress = maximumProgress;
    progressBarContainer.dataset.targetDiv = targetDivIdentifier;

    const progressBar = document.createElement('div');
    progressBar.classList.add('custom-progress-bar'); // stil ve sorgulama kolaylığı için
    progressBar.style.height = '0%';
    progressBar.style.width = '100%';
    progressBar.style.backgroundColor = color;
    progressBar.style.transition = 'height 0.5s ease';
    progressBar.style.position = 'absolute';
	progressBar.style.bottom = '0';  // hep tabandan yukarı doğru dolacak

    progressBarContainer.appendChild(progressBar);
    targetDiv.appendChild(progressBarContainer);

    window.updateProgressBar(currentProgress, targetDivIdentifier);
};

window.updateProgressBar = function (currentProgress, targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    const progressBarContainer = targetDiv.querySelector('.custom-progress-container');
    if (!progressBarContainer) {
        //console.warn("Progress bar container not found");
        return;
    }

    const maximumProgress = progressBarContainer.dataset.maximumProgress;
    const progressBar = progressBarContainer.querySelector('.custom-progress-bar');
    if (progressBar) {
        const progressPercentage = (currentProgress / maximumProgress) * 100;
        progressBar.style.height = `${progressPercentage}%`;
    }
};


}

window.Script76 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(5, progressValue, "#FCC626", "progress-container");

}

window.Script77 = function()
{
  // Storyline değişkenlerine erişim için player nesnesini al
var player = GetPlayer();

// Storyline'daki progressValue değişkenini al
var currentProgress = player.GetVar("soru_no");


// Storyline'daki değişkeni güncelle
player.SetVar("soru_no", currentProgress);

if (document.querySelector('[data-acc-text="progress-container"] .custom-progress-bar')) {
    window.updateProgressBar(currentProgress, "progress-container");
} else {
    //console.warn("Progress bar henüz oluşturulmamış. updateProgressBar çalıştırılmadı.");
}

}

window.Script78 = function()
{
  let player = GetPlayer();
let soru_no = player.GetVar("soru_no");

const icon = object('5yrV6Afl43I');

// icon durumları için bir dizi (array) oluşturun
// Dizi index'i soru_no ile eşleşir
const iconStates = [
    'Normal',  // Soru 0 için
    'state_2', // Soru 1 için
    'state_3', // Soru 2 için
    'state_4', // Soru 3 için
    'state_5', // Soru 4 için
    'state_6'  // Soru 5 için
];

// soru_no'nun geçerli bir aralıkta olup olmadığını kontrol edin
if (soru_no >= 0 && soru_no < iconStates.length) {
    // Diziden doğru durumu seçin
    icon.state = iconStates[soru_no];
} else {
    // Eğer soru_no 0-5 arasında değilse, varsayılan duruma dön
    icon.state = 'Normal';
}

}

window.Script79 = function()
{
  let player = GetPlayer();

let soru_no = player.GetVar("soru_no");

let etkinlik_1 = player.GetVar("etkinlik_1");
let etkinlik_2 = player.GetVar("etkinlik_2");
let etkinlik_3 = player.GetVar("etkinlik_3");
let etkinlik_4 = player.GetVar("etkinlik_4");
let etkinlik_5 = player.GetVar("etkinlik_5");
let etkinlik_6 = player.GetVar("etkinlik_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 ---
if(etkinlik_1===false && soru_no===0)
{
    star_1.state = 'aktif';
}
else if(etkinlik_1===false && soru_no!==0)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(etkinlik_2===false && soru_no===1)
{
    star_2.state = 'aktif';
}
else if(etkinlik_2===false && soru_no!==1)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(etkinlik_3===false && soru_no===2)
{
    star_3.state = 'aktif';
}
else if(etkinlik_3===false && soru_no!==2)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(etkinlik_4===false && soru_no===3)
{
    star_4.state = 'aktif';
}
else if(etkinlik_4===false && soru_no!==3)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(etkinlik_5===false && soru_no===4)
{
    star_5.state = 'aktif';
}
else if(etkinlik_5===false && soru_no!==4)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(etkinlik_6===false && soru_no===5)
{
    star_6.state = 'aktif';
}
else if(etkinlik_6===false && soru_no!==5)
{
    star_6.state = 'Normal';
}
}

window.Script80 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script81 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script82 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let yanlis_sayac = player.GetVar("yanlis_sayac");

if(gorev_no===1 && yanlis_sayac>=2)
{
	player.SetVar("soru_1",false);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2 && yanlis_sayac>=2)
{
	player.SetVar("soru_2",false);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3 && yanlis_sayac>=2)
{
	player.SetVar("soru_3",false);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4 && yanlis_sayac>=2)
{
	player.SetVar("soru_4",false);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5 && yanlis_sayac>=2)
{
	player.SetVar("soru_5",false);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6 && yanlis_sayac>=2)
{
	player.SetVar("soru_6",false);
	player.SetVar("etkinlik_6",true);
}
}

window.Script83 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");

if(gorev_no===1)
{
	player.SetVar("soru_1",true);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2)
{
	player.SetVar("soru_2",true);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3)
{
	player.SetVar("soru_3",true);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4)
{
	player.SetVar("soru_4",true);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5)
{
	player.SetVar("soru_5",true);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6)
{
	player.SetVar("soru_6",true);
	player.SetVar("etkinlik_6",true);
}
}

window.Script84 = function()
{
  window.createProgressBar = function (maximumProgress, currentProgress, color = '#5EA7FF', targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    // Daha önce oluşturulmuşsa yeniden oluşturma
    const existingBar = targetDiv.querySelector('.custom-progress-container');
    if (existingBar) {
        //console.warn(`[ProgressBar] Zaten mevcut, yeniden oluşturulmadı: ${targetDivIdentifier}`);
        return;
    }

    // Progress bar container oluştur
    const progressBarContainer = document.createElement('div');
    progressBarContainer.classList.add('custom-progress-container'); // Bu sınıf sayesinde tekrar kontrol kolaylaşır
    progressBarContainer.style.position = 'absolute';
	progressBarContainer.style.top = '0';
	progressBarContainer.style.left = '0';
	progressBarContainer.style.width = '100%';
	progressBarContainer.style.height = '100%';
    progressBarContainer.style.backgroundColor = '#A2A1A2';
    progressBarContainer.style.borderRadius = '100px';
    progressBarContainer.style.overflow = 'hidden';
    progressBarContainer.dataset.maximumProgress = maximumProgress;
    progressBarContainer.dataset.targetDiv = targetDivIdentifier;

    const progressBar = document.createElement('div');
    progressBar.classList.add('custom-progress-bar'); // stil ve sorgulama kolaylığı için
    progressBar.style.height = '0%';
    progressBar.style.width = '100%';
    progressBar.style.backgroundColor = color;
    progressBar.style.transition = 'height 0.5s ease';
    progressBar.style.position = 'absolute';
	progressBar.style.bottom = '0';  // hep tabandan yukarı doğru dolacak

    progressBarContainer.appendChild(progressBar);
    targetDiv.appendChild(progressBarContainer);

    window.updateProgressBar(currentProgress, targetDivIdentifier);
};

window.updateProgressBar = function (currentProgress, targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    const progressBarContainer = targetDiv.querySelector('.custom-progress-container');
    if (!progressBarContainer) {
        //console.warn("Progress bar container not found");
        return;
    }

    const maximumProgress = progressBarContainer.dataset.maximumProgress;
    const progressBar = progressBarContainer.querySelector('.custom-progress-bar');
    if (progressBar) {
        const progressPercentage = (currentProgress / maximumProgress) * 100;
        progressBar.style.height = `${progressPercentage}%`;
    }
};


}

window.Script85 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(5, progressValue, "#FCC626", "progress-container");

}

window.Script86 = function()
{
  // Storyline değişkenlerine erişim için player nesnesini al
var player = GetPlayer();

// Storyline'daki progressValue değişkenini al
var currentProgress = player.GetVar("soru_no");


// Storyline'daki değişkeni güncelle
player.SetVar("soru_no", currentProgress);

if (document.querySelector('[data-acc-text="progress-container"] .custom-progress-bar')) {
    window.updateProgressBar(currentProgress, "progress-container");
} else {
    //console.warn("Progress bar henüz oluşturulmamış. updateProgressBar çalıştırılmadı.");
}

}

window.Script87 = function()
{
  let player = GetPlayer();
let soru_no = player.GetVar("soru_no");

const icon = object('5yrV6Afl43I');

// icon durumları için bir dizi (array) oluşturun
// Dizi index'i soru_no ile eşleşir
const iconStates = [
    'Normal',  // Soru 0 için
    'state_2', // Soru 1 için
    'state_3', // Soru 2 için
    'state_4', // Soru 3 için
    'state_5', // Soru 4 için
    'state_6'  // Soru 5 için
];

// soru_no'nun geçerli bir aralıkta olup olmadığını kontrol edin
if (soru_no >= 0 && soru_no < iconStates.length) {
    // Diziden doğru durumu seçin
    icon.state = iconStates[soru_no];
} else {
    // Eğer soru_no 0-5 arasında değilse, varsayılan duruma dön
    icon.state = 'Normal';
}

}

window.Script88 = function()
{
  let player = GetPlayer();

let soru_no = player.GetVar("soru_no");

let etkinlik_1 = player.GetVar("etkinlik_1");
let etkinlik_2 = player.GetVar("etkinlik_2");
let etkinlik_3 = player.GetVar("etkinlik_3");
let etkinlik_4 = player.GetVar("etkinlik_4");
let etkinlik_5 = player.GetVar("etkinlik_5");
let etkinlik_6 = player.GetVar("etkinlik_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 ---
if(etkinlik_1===false && soru_no===0)
{
    star_1.state = 'aktif';
}
else if(etkinlik_1===false && soru_no!==0)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(etkinlik_2===false && soru_no===1)
{
    star_2.state = 'aktif';
}
else if(etkinlik_2===false && soru_no!==1)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(etkinlik_3===false && soru_no===2)
{
    star_3.state = 'aktif';
}
else if(etkinlik_3===false && soru_no!==2)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(etkinlik_4===false && soru_no===3)
{
    star_4.state = 'aktif';
}
else if(etkinlik_4===false && soru_no!==3)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(etkinlik_5===false && soru_no===4)
{
    star_5.state = 'aktif';
}
else if(etkinlik_5===false && soru_no!==4)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(etkinlik_6===false && soru_no===5)
{
    star_6.state = 'aktif';
}
else if(etkinlik_6===false && soru_no!==5)
{
    star_6.state = 'Normal';
}
}

window.Script89 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script90 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script91 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let yanlis_sayac = player.GetVar("yanlis_sayac");

if(gorev_no===1 && yanlis_sayac>=2)
{
	player.SetVar("soru_1",false);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2 && yanlis_sayac>=2)
{
	player.SetVar("soru_2",false);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3 && yanlis_sayac>=2)
{
	player.SetVar("soru_3",false);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4 && yanlis_sayac>=2)
{
	player.SetVar("soru_4",false);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5 && yanlis_sayac>=2)
{
	player.SetVar("soru_5",false);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6 && yanlis_sayac>=2)
{
	player.SetVar("soru_6",false);
	player.SetVar("etkinlik_6",true);
}
}

window.Script92 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");

if(gorev_no===1)
{
	player.SetVar("soru_1",true);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2)
{
	player.SetVar("soru_2",true);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3)
{
	player.SetVar("soru_3",true);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4)
{
	player.SetVar("soru_4",true);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5)
{
	player.SetVar("soru_5",true);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6)
{
	player.SetVar("soru_6",true);
	player.SetVar("etkinlik_6",true);
}
}

window.Script93 = function()
{
  window.createProgressBar = function (maximumProgress, currentProgress, color = '#5EA7FF', targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    // Daha önce oluşturulmuşsa yeniden oluşturma
    const existingBar = targetDiv.querySelector('.custom-progress-container');
    if (existingBar) {
        //console.warn(`[ProgressBar] Zaten mevcut, yeniden oluşturulmadı: ${targetDivIdentifier}`);
        return;
    }

    // Progress bar container oluştur
    const progressBarContainer = document.createElement('div');
    progressBarContainer.classList.add('custom-progress-container'); // Bu sınıf sayesinde tekrar kontrol kolaylaşır
    progressBarContainer.style.position = 'absolute';
	progressBarContainer.style.top = '0';
	progressBarContainer.style.left = '0';
	progressBarContainer.style.width = '100%';
	progressBarContainer.style.height = '100%';
    progressBarContainer.style.backgroundColor = '#A2A1A2';
    progressBarContainer.style.borderRadius = '100px';
    progressBarContainer.style.overflow = 'hidden';
    progressBarContainer.dataset.maximumProgress = maximumProgress;
    progressBarContainer.dataset.targetDiv = targetDivIdentifier;

    const progressBar = document.createElement('div');
    progressBar.classList.add('custom-progress-bar'); // stil ve sorgulama kolaylığı için
    progressBar.style.height = '0%';
    progressBar.style.width = '100%';
    progressBar.style.backgroundColor = color;
    progressBar.style.transition = 'height 0.5s ease';
    progressBar.style.position = 'absolute';
	progressBar.style.bottom = '0';  // hep tabandan yukarı doğru dolacak

    progressBarContainer.appendChild(progressBar);
    targetDiv.appendChild(progressBarContainer);

    window.updateProgressBar(currentProgress, targetDivIdentifier);
};

window.updateProgressBar = function (currentProgress, targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    const progressBarContainer = targetDiv.querySelector('.custom-progress-container');
    if (!progressBarContainer) {
        //console.warn("Progress bar container not found");
        return;
    }

    const maximumProgress = progressBarContainer.dataset.maximumProgress;
    const progressBar = progressBarContainer.querySelector('.custom-progress-bar');
    if (progressBar) {
        const progressPercentage = (currentProgress / maximumProgress) * 100;
        progressBar.style.height = `${progressPercentage}%`;
    }
};


}

window.Script94 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(5, progressValue, "#FCC626", "progress-container");

}

window.Script95 = function()
{
  // Storyline değişkenlerine erişim için player nesnesini al
var player = GetPlayer();

// Storyline'daki progressValue değişkenini al
var currentProgress = player.GetVar("soru_no");


// Storyline'daki değişkeni güncelle
player.SetVar("soru_no", currentProgress);

if (document.querySelector('[data-acc-text="progress-container"] .custom-progress-bar')) {
    window.updateProgressBar(currentProgress, "progress-container");
} else {
    //console.warn("Progress bar henüz oluşturulmamış. updateProgressBar çalıştırılmadı.");
}

}

window.Script96 = function()
{
  let player = GetPlayer();
let soru_no = player.GetVar("soru_no");

const icon = object('5yrV6Afl43I');

// icon durumları için bir dizi (array) oluşturun
// Dizi index'i soru_no ile eşleşir
const iconStates = [
    'Normal',  // Soru 0 için
    'state_2', // Soru 1 için
    'state_3', // Soru 2 için
    'state_4', // Soru 3 için
    'state_5', // Soru 4 için
    'state_6'  // Soru 5 için
];

// soru_no'nun geçerli bir aralıkta olup olmadığını kontrol edin
if (soru_no >= 0 && soru_no < iconStates.length) {
    // Diziden doğru durumu seçin
    icon.state = iconStates[soru_no];
} else {
    // Eğer soru_no 0-5 arasında değilse, varsayılan duruma dön
    icon.state = 'Normal';
}

}

window.Script97 = function()
{
  let player = GetPlayer();

let soru_no = player.GetVar("soru_no");

let etkinlik_1 = player.GetVar("etkinlik_1");
let etkinlik_2 = player.GetVar("etkinlik_2");
let etkinlik_3 = player.GetVar("etkinlik_3");
let etkinlik_4 = player.GetVar("etkinlik_4");
let etkinlik_5 = player.GetVar("etkinlik_5");
let etkinlik_6 = player.GetVar("etkinlik_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 ---
if(etkinlik_1===false && soru_no===0)
{
    star_1.state = 'aktif';
}
else if(etkinlik_1===false && soru_no!==0)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(etkinlik_2===false && soru_no===1)
{
    star_2.state = 'aktif';
}
else if(etkinlik_2===false && soru_no!==1)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(etkinlik_3===false && soru_no===2)
{
    star_3.state = 'aktif';
}
else if(etkinlik_3===false && soru_no!==2)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(etkinlik_4===false && soru_no===3)
{
    star_4.state = 'aktif';
}
else if(etkinlik_4===false && soru_no!==3)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(etkinlik_5===false && soru_no===4)
{
    star_5.state = 'aktif';
}
else if(etkinlik_5===false && soru_no!==4)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(etkinlik_6===false && soru_no===5)
{
    star_6.state = 'aktif';
}
else if(etkinlik_6===false && soru_no!==5)
{
    star_6.state = 'Normal';
}
}

window.Script98 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script99 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script100 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let yanlis_sayac = player.GetVar("yanlis_sayac");

if(gorev_no===1 && yanlis_sayac>=2)
{
	player.SetVar("soru_1",false);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2 && yanlis_sayac>=2)
{
	player.SetVar("soru_2",false);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3 && yanlis_sayac>=2)
{
	player.SetVar("soru_3",false);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4 && yanlis_sayac>=2)
{
	player.SetVar("soru_4",false);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5 && yanlis_sayac>=2)
{
	player.SetVar("soru_5",false);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6 && yanlis_sayac>=2)
{
	player.SetVar("soru_6",false);
	player.SetVar("etkinlik_6",true);
}
}

window.Script101 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");

if(gorev_no===1)
{
	player.SetVar("soru_1",true);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2)
{
	player.SetVar("soru_2",true);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3)
{
	player.SetVar("soru_3",true);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4)
{
	player.SetVar("soru_4",true);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5)
{
	player.SetVar("soru_5",true);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6)
{
	player.SetVar("soru_6",true);
	player.SetVar("etkinlik_6",true);
}
}

window.Script102 = function()
{
  window.createProgressBar = function (maximumProgress, currentProgress, color = '#5EA7FF', targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    // Daha önce oluşturulmuşsa yeniden oluşturma
    const existingBar = targetDiv.querySelector('.custom-progress-container');
    if (existingBar) {
        //console.warn(`[ProgressBar] Zaten mevcut, yeniden oluşturulmadı: ${targetDivIdentifier}`);
        return;
    }

    // Progress bar container oluştur
    const progressBarContainer = document.createElement('div');
    progressBarContainer.classList.add('custom-progress-container'); // Bu sınıf sayesinde tekrar kontrol kolaylaşır
    progressBarContainer.style.position = 'absolute';
	progressBarContainer.style.top = '0';
	progressBarContainer.style.left = '0';
	progressBarContainer.style.width = '100%';
	progressBarContainer.style.height = '100%';
    progressBarContainer.style.backgroundColor = '#A2A1A2';
    progressBarContainer.style.borderRadius = '100px';
    progressBarContainer.style.overflow = 'hidden';
    progressBarContainer.dataset.maximumProgress = maximumProgress;
    progressBarContainer.dataset.targetDiv = targetDivIdentifier;

    const progressBar = document.createElement('div');
    progressBar.classList.add('custom-progress-bar'); // stil ve sorgulama kolaylığı için
    progressBar.style.height = '0%';
    progressBar.style.width = '100%';
    progressBar.style.backgroundColor = color;
    progressBar.style.transition = 'height 0.5s ease';
    progressBar.style.position = 'absolute';
	progressBar.style.bottom = '0';  // hep tabandan yukarı doğru dolacak

    progressBarContainer.appendChild(progressBar);
    targetDiv.appendChild(progressBarContainer);

    window.updateProgressBar(currentProgress, targetDivIdentifier);
};

window.updateProgressBar = function (currentProgress, targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    const targetDiv = document.querySelector(targetDivSelector);
    if (!targetDiv) {
        //console.error("Target div not found");
        return;
    }

    const progressBarContainer = targetDiv.querySelector('.custom-progress-container');
    if (!progressBarContainer) {
        //console.warn("Progress bar container not found");
        return;
    }

    const maximumProgress = progressBarContainer.dataset.maximumProgress;
    const progressBar = progressBarContainer.querySelector('.custom-progress-bar');
    if (progressBar) {
        const progressPercentage = (currentProgress / maximumProgress) * 100;
        progressBar.style.height = `${progressPercentage}%`;
    }
};


}

window.Script103 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(5, progressValue, "#FCC626", "progress-container");

}

window.Script104 = function()
{
  // Storyline değişkenlerine erişim için player nesnesini al
var player = GetPlayer();

// Storyline'daki progressValue değişkenini al
var currentProgress = player.GetVar("soru_no");


// Storyline'daki değişkeni güncelle
player.SetVar("soru_no", currentProgress);

if (document.querySelector('[data-acc-text="progress-container"] .custom-progress-bar')) {
    window.updateProgressBar(currentProgress, "progress-container");
} else {
    //console.warn("Progress bar henüz oluşturulmamış. updateProgressBar çalıştırılmadı.");
}

}

window.Script105 = function()
{
  let player = GetPlayer();
let soru_no = player.GetVar("soru_no");

const icon = object('5yrV6Afl43I');

// icon durumları için bir dizi (array) oluşturun
// Dizi index'i soru_no ile eşleşir
const iconStates = [
    'Normal',  // Soru 0 için
    'state_2', // Soru 1 için
    'state_3', // Soru 2 için
    'state_4', // Soru 3 için
    'state_5', // Soru 4 için
    'state_6'  // Soru 5 için
];

// soru_no'nun geçerli bir aralıkta olup olmadığını kontrol edin
if (soru_no >= 0 && soru_no < iconStates.length) {
    // Diziden doğru durumu seçin
    icon.state = iconStates[soru_no];
} else {
    // Eğer soru_no 0-5 arasında değilse, varsayılan duruma dön
    icon.state = 'Normal';
}

}

window.Script106 = function()
{
  let player = GetPlayer();

let soru_no = player.GetVar("soru_no");

let etkinlik_1 = player.GetVar("etkinlik_1");
let etkinlik_2 = player.GetVar("etkinlik_2");
let etkinlik_3 = player.GetVar("etkinlik_3");
let etkinlik_4 = player.GetVar("etkinlik_4");
let etkinlik_5 = player.GetVar("etkinlik_5");
let etkinlik_6 = player.GetVar("etkinlik_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 ---
if(etkinlik_1===false && soru_no===0)
{
    star_1.state = 'aktif';
}
else if(etkinlik_1===false && soru_no!==0)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(etkinlik_2===false && soru_no===1)
{
    star_2.state = 'aktif';
}
else if(etkinlik_2===false && soru_no!==1)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(etkinlik_3===false && soru_no===2)
{
    star_3.state = 'aktif';
}
else if(etkinlik_3===false && soru_no!==2)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(etkinlik_4===false && soru_no===3)
{
    star_4.state = 'aktif';
}
else if(etkinlik_4===false && soru_no!==3)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(etkinlik_5===false && soru_no===4)
{
    star_5.state = 'aktif';
}
else if(etkinlik_5===false && soru_no!==4)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(etkinlik_6===false && soru_no===5)
{
    star_6.state = 'aktif';
}
else if(etkinlik_6===false && soru_no!==5)
{
    star_6.state = 'Normal';
}
}

window.Script107 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script108 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let soru_1 = player.GetVar("soru_1");
let soru_2 = player.GetVar("soru_2");
let soru_3 = player.GetVar("soru_3");
let soru_4 = player.GetVar("soru_4");
let soru_5 = player.GetVar("soru_5");
let soru_6 = player.GetVar("soru_6");

const star_1 = object('6c2DJGqlFE7');
const star_2 = object('6MsChMh4x7E');
const star_3 = object('6g3lIFb7MWx');
const star_4 = object('6iqzd73G8L3');
const star_5 = object('6JgtdJjHwiG');
const star_6 = object('6TfZb3uocyJ');

// --- Star 1 (Sizin kodunuz) ---
if(gorev_no > 1 && soru_1 === true)
{
    star_1.state = 'parlama';
}
else if(gorev_no > 1 && soru_1 === false)
{
    star_1.state = 'Normal';
}

// --- Star 2 ---
if(gorev_no > 2 && soru_2 === true)
{
    star_2.state = 'parlama';
}
else if(gorev_no > 2 && soru_2 === false)
{
    star_2.state = 'Normal';
}

// --- Star 3 ---
if(gorev_no > 3 && soru_3 === true)
{
    star_3.state = 'parlama';
}
else if(gorev_no > 3 && soru_3 === false)
{
    star_3.state = 'Normal';
}

// --- Star 4 ---
if(gorev_no > 4 && soru_4 === true)
{
    star_4.state = 'parlama';
}
else if(gorev_no > 4 && soru_4 === false)
{
    star_4.state = 'Normal';
}

// --- Star 5 ---
if(gorev_no > 5 && soru_5 === true)
{
    star_5.state = 'parlama';
}
else if(gorev_no > 5 && soru_5 === false)
{
    star_5.state = 'Normal';
}

// --- Star 6 ---
if(gorev_no > 6 && soru_6 === true)
{
    star_6.state = 'parlama';
}
else if(gorev_no > 6 && soru_6 === false)
{
    star_6.state = 'Normal';
}
}

window.Script109 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");
let yanlis_sayac = player.GetVar("yanlis_sayac");

if(gorev_no===1 && yanlis_sayac>=2)
{
	player.SetVar("soru_1",false);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2 && yanlis_sayac>=2)
{
	player.SetVar("soru_2",false);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3 && yanlis_sayac>=2)
{
	player.SetVar("soru_3",false);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4 && yanlis_sayac>=2)
{
	player.SetVar("soru_4",false);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5 && yanlis_sayac>=2)
{
	player.SetVar("soru_5",false);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6 && yanlis_sayac>=2)
{
	player.SetVar("soru_6",false);
	player.SetVar("etkinlik_6",true);
}
}

window.Script110 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("gorev_no");

if(gorev_no===1)
{
	player.SetVar("soru_1",true);
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===2)
{
	player.SetVar("soru_2",true);
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===3)
{
	player.SetVar("soru_3",true);
	player.SetVar("etkinlik_3",true);
}
else if(gorev_no===4)
{
	player.SetVar("soru_4",true);
	player.SetVar("etkinlik_4",true);
}
else if(gorev_no===5)
{
	player.SetVar("soru_5",true);
	player.SetVar("etkinlik_5",true);
}
else if(gorev_no===6)
{
	player.SetVar("soru_6",true);
	player.SetVar("etkinlik_6",true);
}
}

window.Script111 = function()
{
  var player = GetPlayer();
var puan = player.GetVar("puan"); // Storyline değişkenini al
var maxpuan = player.GetVar("maxPuan"); // Storyline değişkenini al

// SCORM Cloud LRS bilgileri (kendi bilgilerinizle değiştirin)
// Bu bilgiler SCORM Cloud Activity Provider ayarlarınızda bulunur.
var endpoint = "https://cloud.scorm.com/lrs/1RWFILBDU2/statements"; // Endpoint'in sonuna '/statements' ekleyin
var username = "PAV1LTI-0BHgITOByUs"; // Activity Provider Key
var password = "sHRJ1DinbBxgExdU7tI"; // Activity Provider Secret

// Basic Auth başlığı oluşturma
// 'username:password' stringini Base64 olarak encode edin.
var auth = "Basic " + btoa(username + ":" + password);

// xAPI statement (puan gönderimi)
var statement = {
  "actor": {
    "name": "Kullanici", // Dinamik bir isim veya Storyline değişkeni kullanabilirsiniz
    "mbox": "mailto:anon@example.com" // Dinamik bir e-posta veya Storyline değişkeni kullanabilirsiniz
  },
  "verb": {
    "id": "http://adlnet.gov/expapi/verbs/experienced",
    "display": { "en-US": "experienced" }
  },
  "object": {
    "id": "http://example.com/puan", // Benzersiz bir ID, kursunuz veya puanlama aktivitenizle ilgili olabilir
    "definition": {
      "name": { "en-US": "Kullanici Puani" } // Objenin adı
    }
  },
  "result": {
    "score": {
      "raw": puan // Storyline'dan alınan değişken değeri
    }
  }
};

// Gönderim işlemi
var xhr = new XMLHttpRequest();

xhr.open("POST", endpoint, true); // endpoint'e "/statements" zaten ekledik

xhr.setRequestHeader("Authorization", auth);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Experience-API-Version", "1.0.3"); // xAPI Versiyonu

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200 || xhr.status === 204) {
      console.log("puan:" + puan);
      console.log("maxscore:" + maxpuan );
      // Storyline'da başarılı olduğunu gösterecek bir işlem yapabilirsiniz (örn: bir değişkeni True yapmak)
    } else {
      console.error("❌ Gönderim Hatası:", xhr.status, xhr.responseText);
      // Storyline'da hata olduğunu gösterecek bir işlem yapabilirsiniz
    }
  }
};

xhr.send(JSON.stringify(statement));
}

};
