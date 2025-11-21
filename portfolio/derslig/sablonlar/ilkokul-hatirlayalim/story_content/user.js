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
window.Script6 = function()
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

window.Script7 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(2, progressValue, "#FCC626", "progress-container");

}

window.Script8 = function()
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

window.Script9 = function()
{
  let player = GetPlayer();

const drag_1 = object('5x1aH53hPhv');
const drag_2 = object('6Tlbewforje');
const drag_3 = object('6pTXFY3eLDh');
const drag_4 = object('5o0Oyg8m3RX');
const drag_5 = object('6g6la4a0vkj');
const drag_6 = object('6CjssinthFL');

player.SetVar("drag_x_1",drag_1.x);
player.SetVar("drag_x_2",drag_2.x);
player.SetVar("drag_x_3",drag_3.x);
player.SetVar("drag_x_4",drag_4.x);
player.SetVar("drag_x_5",drag_5.x);
player.SetVar("drag_x_6",drag_6.x);
player.SetVar("drag_y_1",drag_1.y);
player.SetVar("drag_y_2",drag_2.y);
player.SetVar("drag_y_3",drag_3.y);
player.SetVar("drag_y_4",drag_4.y);
player.SetVar("drag_y_5",drag_5.y);
player.SetVar("drag_y_6",drag_6.y);
}

window.Script10 = function()
{
  let player = GetPlayer();

const drag_1 = object('5x1aH53hPhv');
const drag_2 = object('6Tlbewforje');
const drag_3 = object('6pTXFY3eLDh');
const drag_4 = object('5o0Oyg8m3RX');
const drag_5 = object('6g6la4a0vkj');
const drag_6 = object('6CjssinthFL');
const kontrol_et_btn = object('66V3lmZPmwI');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

//kontrol et butonunun state'ini ayarla
if(
	drag_1.x===player.GetVar("drag_x_1") &&
	drag_2.x===player.GetVar("drag_x_2") &&
	drag_3.x===player.GetVar("drag_x_3") &&
	drag_4.x===player.GetVar("drag_x_4") &&
	drag_5.x===player.GetVar("drag_x_5") &&
	drag_6.x===player.GetVar("drag_x_6")
	)
{
	kontrol_et_btn.state = 'Disabled';
}
else{
	kontrol_et_btn.state = 'Normal';
}

//Değişkenlerin true/false durumlarını kontrol et
if(drag_1.x>player.GetVar("dropzone_x_1") && 
   drag_1.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_1",true);
}
else{
	player.SetVar("drag_var_1",false);
}

if(drag_2.x>player.GetVar("dropzone_x_1") && 
   drag_2.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_2",true);
}
else{
	player.SetVar("drag_var_2",false);
}

if(drag_3.x>player.GetVar("dropzone_x_1") && 
   drag_3.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_3",true);
}
else{
	player.SetVar("drag_var_3",false);
}

if(drag_4.x>player.GetVar("dropzone_x_1") && 
   drag_4.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_4",true);
}
else{
	player.SetVar("drag_var_4",false);
}

if(drag_5.x>player.GetVar("dropzone_x_1") && 
   drag_5.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_5",true);
}
else{
	player.SetVar("drag_var_5",false);
}

if(drag_6.x>player.GetVar("dropzone_x_1") && 
   drag_6.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_6",true);
}
else{
	player.SetVar("drag_var_6",false);
}

}

window.Script11 = function()
{
  let player = GetPlayer();

const drag_1 = object('5x1aH53hPhv');
const drag_2 = object('6Tlbewforje');
const drag_3 = object('6pTXFY3eLDh');
const drag_4 = object('5o0Oyg8m3RX');
const drag_5 = object('6g6la4a0vkj');
const drag_6 = object('6CjssinthFL');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_1.x>dropzone_x_1 && drag_1.x<dropzone_x_2 && drag_1.y>dropzone_y_1 && drag_1.y<dropzone_y_2)
{
	drag_1.x=drag_1.x;
	drag_1.y=drag_1.y;
}
else{
	drag_1.x=player.GetVar("drag_x_1");
	drag_1.y=player.GetVar("drag_y_1");
}
}

window.Script12 = function()
{
  let player = GetPlayer();

const drag_1 = object('6Tlbewforje');
const drag_2 = object('6Tlbewforje');
const drag_3 = object('6pTXFY3eLDh');
const drag_4 = object('5o0Oyg8m3RX');
const drag_5 = object('6g6la4a0vkj');
const drag_6 = object('6CjssinthFL');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_2.x>dropzone_x_1 && drag_2.x<dropzone_x_2 && drag_2.y>dropzone_y_1 && drag_2.y<dropzone_y_2)
{
	drag_2.x=drag_2.x;
	drag_2.y=drag_2.y;
}
else{
	drag_2.x=player.GetVar("drag_x_2");
	drag_2.y=player.GetVar("drag_y_2");
}
}

window.Script13 = function()
{
  let player = GetPlayer();

const drag_1 = object('6pTXFY3eLDh');
const drag_2 = object('6pTXFY3eLDh');
const drag_3 = object('6pTXFY3eLDh');
const drag_4 = object('5o0Oyg8m3RX');
const drag_5 = object('6g6la4a0vkj');
const drag_6 = object('6CjssinthFL');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_3.x>dropzone_x_1 && drag_3.x<dropzone_x_2 && drag_3.y>dropzone_y_1 && drag_3.y<dropzone_y_2)
{
	drag_3.x=drag_3.x;
	drag_3.y=drag_3.y;
}
else{
	drag_3.x=player.GetVar("drag_x_3");
	drag_3.y=player.GetVar("drag_y_3");
}
}

window.Script14 = function()
{
  let player = GetPlayer();

const drag_1 = object('5o0Oyg8m3RX');
const drag_2 = object('5o0Oyg8m3RX');
const drag_3 = object('5o0Oyg8m3RX');
const drag_4 = object('5o0Oyg8m3RX');
const drag_5 = object('6g6la4a0vkj');
const drag_6 = object('6CjssinthFL');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_4.x>dropzone_x_1 && drag_4.x<dropzone_x_2 && drag_4.y>dropzone_y_1 && drag_4.y<dropzone_y_2)
{
	drag_4.x=drag_4.x;
	drag_4.y=drag_4.y;
}
else{
	drag_4.x=player.GetVar("drag_x_4");
	drag_4.y=player.GetVar("drag_y_4");
}
}

window.Script15 = function()
{
  let player = GetPlayer();

const drag_1 = object('6g6la4a0vkj');
const drag_2 = object('6g6la4a0vkj');
const drag_3 = object('6g6la4a0vkj');
const drag_4 = object('6g6la4a0vkj');
const drag_5 = object('6g6la4a0vkj');
const drag_6 = object('6CjssinthFL');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_5.x>dropzone_x_1 && drag_5.x<dropzone_x_2 && drag_5.y>dropzone_y_1 && drag_5.y<dropzone_y_2)
{
	drag_5.x=drag_5.x;
	drag_5.y=drag_5.y;
}
else{
	drag_5.x=player.GetVar("drag_x_5");
	drag_5.y=player.GetVar("drag_y_5");
}
}

window.Script16 = function()
{
  let player = GetPlayer();

const drag_1 = object('6CjssinthFL');
const drag_2 = object('6CjssinthFL');
const drag_3 = object('6CjssinthFL');
const drag_4 = object('6CjssinthFL');
const drag_5 = object('6CjssinthFL');
const drag_6 = object('6CjssinthFL');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_6.x>dropzone_x_1 && drag_6.x<dropzone_x_2 && drag_6.y>dropzone_y_1 && drag_6.y<dropzone_y_2)
{
	drag_6.x=drag_6.x;
	drag_6.y=drag_6.y;
}
else{
	drag_6.x=player.GetVar("drag_x_6");
	drag_6.y=player.GetVar("drag_y_6");
}
}

window.Script17 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("soru_no");

if(gorev_no===0)
{
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===1)
{
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===2)
{
	player.SetVar("etkinlik_3",true);
}

}

window.Script18 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");

const drag_1 = object('5x1aH53hPhv');
const drag_2 = object('6Tlbewforje');
const drag_3 = object('6pTXFY3eLDh');
const drag_4 = object('5o0Oyg8m3RX');
const drag_5 = object('6g6la4a0vkj');
const drag_6 = object('6CjssinthFL');

if(drag_cevap_1===true)
{
	drag_1.x = 1156;
	drag_1.y = 242;
}

if(drag_cevap_2===true)
{
	drag_2.x = 1378;
	drag_2.y = 242;
}

if(drag_cevap_3===true)
{
	drag_3.x = 1598;
	drag_3.y = 242;
}

if(drag_cevap_4===true)
{
	drag_4.x = 1156;
	drag_4.y = 459;
}

if(drag_cevap_5===true)
{
	drag_5.x = 1378;
	drag_5.y = 459;
}

if(drag_cevap_6===true)
{
	drag_6.x = 1598;
	drag_6.y = 459;
}
}

window.Script19 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");
let drag_var_1 = player.GetVar("drag_var_1");
let drag_var_2 = player.GetVar("drag_var_2");
let drag_var_3 = player.GetVar("drag_var_3");
let drag_var_4 = player.GetVar("drag_var_4");
let drag_var_5 = player.GetVar("drag_var_5");
let drag_var_6 = player.GetVar("drag_var_6");


const drag_1 = object('5x1aH53hPhv');
const drag_2 = object('6Tlbewforje');
const drag_3 = object('6pTXFY3eLDh');
const drag_4 = object('5o0Oyg8m3RX');
const drag_5 = object('6g6la4a0vkj');
const drag_6 = object('6CjssinthFL');

if(drag_var_1 !== drag_cevap_1)
{
	drag_1.x = player.GetVar("drag_x_1");
	drag_1.y = player.GetVar("drag_y_1");
}

if(drag_var_2 !== drag_cevap_2)
{
	drag_2.x = player.GetVar("drag_x_2");
	drag_2.y = player.GetVar("drag_y_2");
}

if(drag_var_3 !== drag_cevap_3)
{
	drag_3.x = player.GetVar("drag_x_3");
	drag_3.y = player.GetVar("drag_y_3");
}

if(drag_var_4 !== drag_cevap_4)
{
	drag_4.x = player.GetVar("drag_x_4");
	drag_4.y = player.GetVar("drag_y_4");
}

if(drag_var_5 !== drag_cevap_5)
{
	drag_5.x = player.GetVar("drag_x_5");
	drag_5.y = player.GetVar("drag_y_5");
}

if(drag_var_6 !== drag_cevap_6)
{
	drag_6.x = player.GetVar("drag_x_6");
	drag_6.y = player.GetVar("drag_y_6");
}
}

window.Script20 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("soru_no");

if(gorev_no===0)
{
	player.SetVar("soru_1","1");
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===1)
{
	player.SetVar("soru_2","1");
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===2)
{
	player.SetVar("soru_3","1");
	player.SetVar("etkinlik_3",true);
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

window.createProgressBar(2, progressValue, "#FCC626", "progress-container");

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

const drag_1 = object('6TRw8KBO80j');
const drag_2 = object('6cT2k7xQRaE');
const drag_3 = object('63UehHzSMJ8');
const drag_4 = object('6TIMaYHEwj9');
const drag_5 = object('6UJWdSz4xbL');
const drag_6 = object('5tqYGEQASBo');

player.SetVar("drag_x_1",drag_1.x);
player.SetVar("drag_x_2",drag_2.x);
player.SetVar("drag_x_3",drag_3.x);
player.SetVar("drag_x_4",drag_4.x);
player.SetVar("drag_x_5",drag_5.x);
player.SetVar("drag_x_6",drag_6.x);
player.SetVar("drag_y_1",drag_1.y);
player.SetVar("drag_y_2",drag_2.y);
player.SetVar("drag_y_3",drag_3.y);
player.SetVar("drag_y_4",drag_4.y);
player.SetVar("drag_y_5",drag_5.y);
player.SetVar("drag_y_6",drag_6.y);
}

window.Script25 = function()
{
  let player = GetPlayer();

const drag_1 = object('6TRw8KBO80j');
const drag_2 = object('6cT2k7xQRaE');
const drag_3 = object('63UehHzSMJ8');
const drag_4 = object('6TIMaYHEwj9');
const drag_5 = object('6UJWdSz4xbL');
const drag_6 = object('5tqYGEQASBo');
const kontrol_et_btn = object('5zTRezuz36N');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

//kontrol et butonunun state'ini ayarla
if(
	drag_1.x===player.GetVar("drag_x_1") &&
	drag_2.x===player.GetVar("drag_x_2") &&
	drag_3.x===player.GetVar("drag_x_3") &&
	drag_4.x===player.GetVar("drag_x_4") &&
	drag_5.x===player.GetVar("drag_x_5") &&
	drag_6.x===player.GetVar("drag_x_6")
	)
{
	kontrol_et_btn.state = 'Disabled';
}
else{
	kontrol_et_btn.state = 'Normal';
}

//Değişkenlerin true/false durumlarını kontrol et
if(drag_1.x>player.GetVar("dropzone_x_1") && 
   drag_1.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_1",true);
}
else{
	player.SetVar("drag_var_1",false);
}

if(drag_2.x>player.GetVar("dropzone_x_1") && 
   drag_2.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_2",true);
}
else{
	player.SetVar("drag_var_2",false);
}

if(drag_3.x>player.GetVar("dropzone_x_1") && 
   drag_3.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_3",true);
}
else{
	player.SetVar("drag_var_3",false);
}

if(drag_4.x>player.GetVar("dropzone_x_1") && 
   drag_4.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_4",true);
}
else{
	player.SetVar("drag_var_4",false);
}

if(drag_5.x>player.GetVar("dropzone_x_1") && 
   drag_5.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_5",true);
}
else{
	player.SetVar("drag_var_5",false);
}

if(drag_6.x>player.GetVar("dropzone_x_1") && 
   drag_6.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_6",true);
}
else{
	player.SetVar("drag_var_6",false);
}

}

window.Script26 = function()
{
  let player = GetPlayer();

const drag_1 = object('6TRw8KBO80j');
const drag_2 = object('6cT2k7xQRaE');
const drag_3 = object('63UehHzSMJ8');
const drag_4 = object('6TIMaYHEwj9');
const drag_5 = object('6UJWdSz4xbL');
const drag_6 = object('5tqYGEQASBo');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_1.x>dropzone_x_1 && drag_1.x<dropzone_x_2 && drag_1.y>dropzone_y_1 && drag_1.y<dropzone_y_2)
{
	drag_1.x=drag_1.x;
	drag_1.y=drag_1.y;
}
else{
	drag_1.x=player.GetVar("drag_x_1");
	drag_1.y=player.GetVar("drag_y_1");
}
}

window.Script27 = function()
{
  let player = GetPlayer();

const drag_1 = object('6cT2k7xQRaE');
const drag_2 = object('6cT2k7xQRaE');
const drag_3 = object('63UehHzSMJ8');
const drag_4 = object('6TIMaYHEwj9');
const drag_5 = object('6UJWdSz4xbL');
const drag_6 = object('5tqYGEQASBo');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_2.x>dropzone_x_1 && drag_2.x<dropzone_x_2 && drag_2.y>dropzone_y_1 && drag_2.y<dropzone_y_2)
{
	drag_2.x=drag_2.x;
	drag_2.y=drag_2.y;
}
else{
	drag_2.x=player.GetVar("drag_x_2");
	drag_2.y=player.GetVar("drag_y_2");
}
}

window.Script28 = function()
{
  let player = GetPlayer();

const drag_1 = object('63UehHzSMJ8');
const drag_2 = object('63UehHzSMJ8');
const drag_3 = object('63UehHzSMJ8');
const drag_4 = object('6TIMaYHEwj9');
const drag_5 = object('6UJWdSz4xbL');
const drag_6 = object('5tqYGEQASBo');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_3.x>dropzone_x_1 && drag_3.x<dropzone_x_2 && drag_3.y>dropzone_y_1 && drag_3.y<dropzone_y_2)
{
	drag_3.x=drag_3.x;
	drag_3.y=drag_3.y;
}
else{
	drag_3.x=player.GetVar("drag_x_3");
	drag_3.y=player.GetVar("drag_y_3");
}
}

window.Script29 = function()
{
  let player = GetPlayer();

const drag_1 = object('6TIMaYHEwj9');
const drag_2 = object('6TIMaYHEwj9');
const drag_3 = object('6TIMaYHEwj9');
const drag_4 = object('6TIMaYHEwj9');
const drag_5 = object('6UJWdSz4xbL');
const drag_6 = object('5tqYGEQASBo');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_4.x>dropzone_x_1 && drag_4.x<dropzone_x_2 && drag_4.y>dropzone_y_1 && drag_4.y<dropzone_y_2)
{
	drag_4.x=drag_4.x;
	drag_4.y=drag_4.y;
}
else{
	drag_4.x=player.GetVar("drag_x_4");
	drag_4.y=player.GetVar("drag_y_4");
}
}

window.Script30 = function()
{
  let player = GetPlayer();

const drag_1 = object('6UJWdSz4xbL');
const drag_2 = object('6UJWdSz4xbL');
const drag_3 = object('6UJWdSz4xbL');
const drag_4 = object('6UJWdSz4xbL');
const drag_5 = object('6UJWdSz4xbL');
const drag_6 = object('5tqYGEQASBo');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_5.x>dropzone_x_1 && drag_5.x<dropzone_x_2 && drag_5.y>dropzone_y_1 && drag_5.y<dropzone_y_2)
{
	drag_5.x=drag_5.x;
	drag_5.y=drag_5.y;
}
else{
	drag_5.x=player.GetVar("drag_x_5");
	drag_5.y=player.GetVar("drag_y_5");
}
}

window.Script31 = function()
{
  let player = GetPlayer();

const drag_1 = object('5tqYGEQASBo');
const drag_2 = object('5tqYGEQASBo');
const drag_3 = object('5tqYGEQASBo');
const drag_4 = object('5tqYGEQASBo');
const drag_5 = object('5tqYGEQASBo');
const drag_6 = object('5tqYGEQASBo');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_6.x>dropzone_x_1 && drag_6.x<dropzone_x_2 && drag_6.y>dropzone_y_1 && drag_6.y<dropzone_y_2)
{
	drag_6.x=drag_6.x;
	drag_6.y=drag_6.y;
}
else{
	drag_6.x=player.GetVar("drag_x_6");
	drag_6.y=player.GetVar("drag_y_6");
}
}

window.Script32 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("soru_no");

if(gorev_no===0)
{
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===1)
{
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===2)
{
	player.SetVar("etkinlik_3",true);
}

}

window.Script33 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");

const drag_1 = object('6TRw8KBO80j');
const drag_2 = object('6cT2k7xQRaE');
const drag_3 = object('63UehHzSMJ8');
const drag_4 = object('6TIMaYHEwj9');
const drag_5 = object('6UJWdSz4xbL');
const drag_6 = object('5tqYGEQASBo');

if(drag_cevap_1===true)
{
	drag_1.x = 1156;
	drag_1.y = 242;
}

if(drag_cevap_2===true)
{
	drag_2.x = 1378;
	drag_2.y = 242;
}

if(drag_cevap_3===true)
{
	drag_3.x = 1598;
	drag_3.y = 242;
}

if(drag_cevap_4===true)
{
	drag_4.x = 1156;
	drag_4.y = 459;
}

if(drag_cevap_5===true)
{
	drag_5.x = 1378;
	drag_5.y = 459;
}

if(drag_cevap_6===true)
{
	drag_6.x = 1598;
	drag_6.y = 459;
}
}

window.Script34 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");
let drag_var_1 = player.GetVar("drag_var_1");
let drag_var_2 = player.GetVar("drag_var_2");
let drag_var_3 = player.GetVar("drag_var_3");
let drag_var_4 = player.GetVar("drag_var_4");
let drag_var_5 = player.GetVar("drag_var_5");
let drag_var_6 = player.GetVar("drag_var_6");


const drag_1 = object('6TRw8KBO80j');
const drag_2 = object('6cT2k7xQRaE');
const drag_3 = object('63UehHzSMJ8');
const drag_4 = object('6TIMaYHEwj9');
const drag_5 = object('6UJWdSz4xbL');
const drag_6 = object('5tqYGEQASBo');

if(drag_var_1 !== drag_cevap_1)
{
	drag_1.x = player.GetVar("drag_x_1");
	drag_1.y = player.GetVar("drag_y_1");
}

if(drag_var_2 !== drag_cevap_2)
{
	drag_2.x = player.GetVar("drag_x_2");
	drag_2.y = player.GetVar("drag_y_2");
}

if(drag_var_3 !== drag_cevap_3)
{
	drag_3.x = player.GetVar("drag_x_3");
	drag_3.y = player.GetVar("drag_y_3");
}

if(drag_var_4 !== drag_cevap_4)
{
	drag_4.x = player.GetVar("drag_x_4");
	drag_4.y = player.GetVar("drag_y_4");
}

if(drag_var_5 !== drag_cevap_5)
{
	drag_5.x = player.GetVar("drag_x_5");
	drag_5.y = player.GetVar("drag_y_5");
}

if(drag_var_6 !== drag_cevap_6)
{
	drag_6.x = player.GetVar("drag_x_6");
	drag_6.y = player.GetVar("drag_y_6");
}
}

window.Script35 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("soru_no");

if(gorev_no===0)
{
	player.SetVar("soru_1","1");
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===1)
{
	player.SetVar("soru_2","1");
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===2)
{
	player.SetVar("soru_3","1");
	player.SetVar("etkinlik_3",true);
}

}

window.Script36 = function()
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

window.Script37 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(2, progressValue, "#FCC626", "progress-container");

}

window.Script38 = function()
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

window.Script39 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("soru_no");

if(gorev_no===0)
{
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===1)
{
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===2)
{
	player.SetVar("etkinlik_3",true);
}

}

window.Script40 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("soru_no");

if(gorev_no===0)
{
	player.SetVar("soru_1","1");
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===1)
{
	player.SetVar("soru_2","1");
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===2)
{
	player.SetVar("soru_3","1");
	player.SetVar("etkinlik_3",true);
}

}

window.Script41 = function()
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

window.Script42 = function()
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

window.Script43 = function()
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

window.Script44 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(2, progressValue, "#FCC626", "progress-container");

}

window.Script45 = function()
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

window.Script46 = function()
{
  let player = GetPlayer();

const drag_1 = object('6IFdJDVB8jY');
const drag_2 = object('6XB1Ku4Ihf5');
const drag_3 = object('6jjfzUXZb2f');
const drag_4 = object('6eInOQTJObs');
const drag_5 = object('5eHf8xFshDp');
const drag_6 = object('5VAC4V2Dz3w');

player.SetVar("drag_x_1",drag_1.x);
player.SetVar("drag_x_2",drag_2.x);
player.SetVar("drag_x_3",drag_3.x);
player.SetVar("drag_x_4",drag_4.x);
player.SetVar("drag_x_5",drag_5.x);
player.SetVar("drag_x_6",drag_6.x);
player.SetVar("drag_y_1",drag_1.y);
player.SetVar("drag_y_2",drag_2.y);
player.SetVar("drag_y_3",drag_3.y);
player.SetVar("drag_y_4",drag_4.y);
player.SetVar("drag_y_5",drag_5.y);
player.SetVar("drag_y_6",drag_6.y);
}

window.Script47 = function()
{
  let player = GetPlayer();

const drag_1 = object('6IFdJDVB8jY');
const drag_2 = object('6XB1Ku4Ihf5');
const drag_3 = object('6jjfzUXZb2f');
const drag_4 = object('6eInOQTJObs');
const drag_5 = object('5eHf8xFshDp');
const drag_6 = object('5VAC4V2Dz3w');
const kontrol_et_btn = object('6BC2ndiMKn8');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

//kontrol et butonunun state'ini ayarla
if(
	drag_1.x===player.GetVar("drag_x_1") &&
	drag_2.x===player.GetVar("drag_x_2") &&
	drag_3.x===player.GetVar("drag_x_3") &&
	drag_4.x===player.GetVar("drag_x_4") &&
	drag_5.x===player.GetVar("drag_x_5") &&
	drag_6.x===player.GetVar("drag_x_6")
	)
{
	kontrol_et_btn.state = 'Disabled';
}
else{
	kontrol_et_btn.state = 'Normal';
}

//Değişkenlerin true/false durumlarını kontrol et
if(drag_1.x>player.GetVar("dropzone_x_1") && 
   drag_1.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_1",true);
}
else{
	player.SetVar("drag_var_1",false);
}

if(drag_2.x>player.GetVar("dropzone_x_1") && 
   drag_2.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_2",true);
}
else{
	player.SetVar("drag_var_2",false);
}

if(drag_3.x>player.GetVar("dropzone_x_1") && 
   drag_3.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_3",true);
}
else{
	player.SetVar("drag_var_3",false);
}

if(drag_4.x>player.GetVar("dropzone_x_1") && 
   drag_4.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_4",true);
}
else{
	player.SetVar("drag_var_4",false);
}

if(drag_5.x>player.GetVar("dropzone_x_1") && 
   drag_5.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_5",true);
}
else{
	player.SetVar("drag_var_5",false);
}

if(drag_6.x>player.GetVar("dropzone_x_1") && 
   drag_6.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_6",true);
}
else{
	player.SetVar("drag_var_6",false);
}

}

window.Script48 = function()
{
  let player = GetPlayer();

const drag_1 = object('6IFdJDVB8jY');
const drag_2 = object('6XB1Ku4Ihf5');
const drag_3 = object('6jjfzUXZb2f');
const drag_4 = object('6eInOQTJObs');
const drag_5 = object('5eHf8xFshDp');
const drag_6 = object('5VAC4V2Dz3w');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_1.x>dropzone_x_1 && drag_1.x<dropzone_x_2 && drag_1.y>dropzone_y_1 && drag_1.y<dropzone_y_2)
{
	drag_1.x=drag_1.x;
	drag_1.y=drag_1.y;
}
else{
	drag_1.x=player.GetVar("drag_x_1");
	drag_1.y=player.GetVar("drag_y_1");
}
}

window.Script49 = function()
{
  let player = GetPlayer();

const drag_1 = object('6IFdJDVB8jY');
const drag_2 = object('6XB1Ku4Ihf5');
const drag_3 = object('6jjfzUXZb2f');
const drag_4 = object('6eInOQTJObs');
const drag_5 = object('5eHf8xFshDp');
const drag_6 = object('5VAC4V2Dz3w');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_2.x>dropzone_x_1 && drag_2.x<dropzone_x_2 && drag_2.y>dropzone_y_1 && drag_2.y<dropzone_y_2)
{
	drag_2.x=drag_2.x;
	drag_2.y=drag_2.y;
}
else{
	drag_2.x=player.GetVar("drag_x_2");
	drag_2.y=player.GetVar("drag_y_2");
}
}

window.Script50 = function()
{
  let player = GetPlayer();

const drag_1 = object('6IFdJDVB8jY');
const drag_2 = object('6XB1Ku4Ihf5');
const drag_3 = object('6jjfzUXZb2f');
const drag_4 = object('6eInOQTJObs');
const drag_5 = object('5eHf8xFshDp');
const drag_6 = object('5VAC4V2Dz3w');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_3.x>dropzone_x_1 && drag_3.x<dropzone_x_2 && drag_3.y>dropzone_y_1 && drag_3.y<dropzone_y_2)
{
	drag_3.x=drag_3.x;
	drag_3.y=drag_3.y;
}
else{
	drag_3.x=player.GetVar("drag_x_3");
	drag_3.y=player.GetVar("drag_y_3");
}
}

window.Script51 = function()
{
  let player = GetPlayer();

const drag_1 = object('6IFdJDVB8jY');
const drag_2 = object('6XB1Ku4Ihf5');
const drag_3 = object('6jjfzUXZb2f');
const drag_4 = object('6eInOQTJObs');
const drag_5 = object('5eHf8xFshDp');
const drag_6 = object('5VAC4V2Dz3w');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_4.x>dropzone_x_1 && drag_4.x<dropzone_x_2 && drag_4.y>dropzone_y_1 && drag_4.y<dropzone_y_2)
{
	drag_4.x=drag_4.x;
	drag_4.y=drag_4.y;
}
else{
	drag_4.x=player.GetVar("drag_x_4");
	drag_4.y=player.GetVar("drag_y_4");
}
}

window.Script52 = function()
{
  let player = GetPlayer();
const drag_1 = object('6IFdJDVB8jY');
const drag_2 = object('6XB1Ku4Ihf5');
const drag_3 = object('6jjfzUXZb2f');
const drag_4 = object('6eInOQTJObs');
const drag_5 = object('5eHf8xFshDp');
const drag_6 = object('5VAC4V2Dz3w');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_5.x>dropzone_x_1 && drag_5.x<dropzone_x_2 && drag_5.y>dropzone_y_1 && drag_5.y<dropzone_y_2)
{
	drag_5.x=drag_5.x;
	drag_5.y=drag_5.y;
}
else{
	drag_5.x=player.GetVar("drag_x_5");
	drag_5.y=player.GetVar("drag_y_5");
}
}

window.Script53 = function()
{
  let player = GetPlayer();

const drag_1 = object('6IFdJDVB8jY');
const drag_2 = object('6XB1Ku4Ihf5');
const drag_3 = object('6jjfzUXZb2f');
const drag_4 = object('6eInOQTJObs');
const drag_5 = object('5eHf8xFshDp');
const drag_6 = object('5VAC4V2Dz3w');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_6.x>dropzone_x_1 && drag_6.x<dropzone_x_2 && drag_6.y>dropzone_y_1 && drag_6.y<dropzone_y_2)
{
	drag_6.x=drag_6.x;
	drag_6.y=drag_6.y;
}
else{
	drag_6.x=player.GetVar("drag_x_6");
	drag_6.y=player.GetVar("drag_y_6");
}
}

window.Script54 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("soru_no");

if(gorev_no===0)
{
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===1)
{
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===2)
{
	player.SetVar("etkinlik_3",true);
}

}

window.Script55 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");

const drag_1 = object('6YBOGk3mz3r');
const drag_2 = object('6VHxAGHkMu2');
const drag_3 = object('6ogvNjKqpAy');
const drag_4 = object('6KjzAWLMdz0');
const drag_5 = object('6GrqfwMEKhz');
const drag_6 = object('5zJbMvSFtP6');

if(drag_cevap_1===true)
{
	drag_1.x = 1156;
	drag_1.y = 242;
}

if(drag_cevap_2===true)
{
	drag_2.x = 1378;
	drag_2.y = 242;
}

if(drag_cevap_3===true)
{
	drag_3.x = 1598;
	drag_3.y = 242;
}

if(drag_cevap_4===true)
{
	drag_4.x = 1156;
	drag_4.y = 459;
}

if(drag_cevap_5===true)
{
	drag_5.x = 1378;
	drag_5.y = 459;
}

if(drag_cevap_6===true)
{
	drag_6.x = 1598;
	drag_6.y = 459;
}
}

window.Script56 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");
let drag_var_1 = player.GetVar("drag_var_1");
let drag_var_2 = player.GetVar("drag_var_2");
let drag_var_3 = player.GetVar("drag_var_3");
let drag_var_4 = player.GetVar("drag_var_4");
let drag_var_5 = player.GetVar("drag_var_5");
let drag_var_6 = player.GetVar("drag_var_6");


const drag_1 = object('6IFdJDVB8jY');
const drag_2 = object('6XB1Ku4Ihf5');
const drag_3 = object('6jjfzUXZb2f');
const drag_4 = object('6eInOQTJObs');
const drag_5 = object('5eHf8xFshDp');
const drag_6 = object('5VAC4V2Dz3w');

if(drag_var_1 !== drag_cevap_1)
{
	drag_1.x = player.GetVar("drag_x_1");
	drag_1.y = player.GetVar("drag_y_1");
}

if(drag_var_2 !== drag_cevap_2)
{
	drag_2.x = player.GetVar("drag_x_2");
	drag_2.y = player.GetVar("drag_y_2");
}

if(drag_var_3 !== drag_cevap_3)
{
	drag_3.x = player.GetVar("drag_x_3");
	drag_3.y = player.GetVar("drag_y_3");
}

if(drag_var_4 !== drag_cevap_4)
{
	drag_4.x = player.GetVar("drag_x_4");
	drag_4.y = player.GetVar("drag_y_4");
}

if(drag_var_5 !== drag_cevap_5)
{
	drag_5.x = player.GetVar("drag_x_5");
	drag_5.y = player.GetVar("drag_y_5");
}

if(drag_var_6 !== drag_cevap_6)
{
	drag_6.x = player.GetVar("drag_x_6");
	drag_6.y = player.GetVar("drag_y_6");
}
}

window.Script57 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("soru_no");

if(gorev_no===0)
{
	player.SetVar("soru_1","1");
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===1)
{
	player.SetVar("soru_2","1");
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===2)
{
	player.SetVar("soru_3","1");
	player.SetVar("etkinlik_3",true);
}

}

window.Script58 = function()
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

window.Script59 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(2, progressValue, "#FCC626", "progress-container");

}

window.Script60 = function()
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

window.Script61 = function()
{
  let player = GetPlayer();

const drag_1 = object('6Helahe0nOs');
const drag_2 = object('6qvH7Ui82Zx');
const drag_3 = object('640AyUifljZ');
const drag_4 = object('64eqUKU0PO5');
const drag_5 = object('6FCOPJN0TCq');
const drag_6 = object('60hF0EHZ8XS');

player.SetVar("drag_x_1",drag_1.x);
player.SetVar("drag_x_2",drag_2.x);
player.SetVar("drag_x_3",drag_3.x);
player.SetVar("drag_x_4",drag_4.x);
player.SetVar("drag_x_5",drag_5.x);
player.SetVar("drag_x_6",drag_6.x);
player.SetVar("drag_y_1",drag_1.y);
player.SetVar("drag_y_2",drag_2.y);
player.SetVar("drag_y_3",drag_3.y);
player.SetVar("drag_y_4",drag_4.y);
player.SetVar("drag_y_5",drag_5.y);
player.SetVar("drag_y_6",drag_6.y);
}

window.Script62 = function()
{
  let player = GetPlayer();

const drag_1 = object('6Helahe0nOs');
const drag_2 = object('6qvH7Ui82Zx');
const drag_3 = object('640AyUifljZ');
const drag_4 = object('64eqUKU0PO5');
const drag_5 = object('6FCOPJN0TCq');
const drag_6 = object('60hF0EHZ8XS');
const kontrol_et_btn = object('6WEFZgTg2IA');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

//kontrol et butonunun state'ini ayarla
if(
	drag_1.x===player.GetVar("drag_x_1") &&
	drag_2.x===player.GetVar("drag_x_2") &&
	drag_3.x===player.GetVar("drag_x_3") &&
	drag_4.x===player.GetVar("drag_x_4") &&
	drag_5.x===player.GetVar("drag_x_5") &&
	drag_6.x===player.GetVar("drag_x_6")
	)
{
	kontrol_et_btn.state = 'Disabled';
}
else{
	kontrol_et_btn.state = 'Normal';
}

//Değişkenlerin true/false durumlarını kontrol et
if(drag_1.x>player.GetVar("dropzone_x_1") && 
   drag_1.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_1",true);
}
else{
	player.SetVar("drag_var_1",false);
}

if(drag_2.x>player.GetVar("dropzone_x_1") && 
   drag_2.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_2",true);
}
else{
	player.SetVar("drag_var_2",false);
}

if(drag_3.x>player.GetVar("dropzone_x_1") && 
   drag_3.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_3",true);
}
else{
	player.SetVar("drag_var_3",false);
}

if(drag_4.x>player.GetVar("dropzone_x_1") && 
   drag_4.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_4",true);
}
else{
	player.SetVar("drag_var_4",false);
}

if(drag_5.x>player.GetVar("dropzone_x_1") && 
   drag_5.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_5",true);
}
else{
	player.SetVar("drag_var_5",false);
}

if(drag_6.x>player.GetVar("dropzone_x_1") && 
   drag_6.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_6",true);
}
else{
	player.SetVar("drag_var_6",false);
}

}

window.Script63 = function()
{
  let player = GetPlayer();

const drag_1 = object('6Helahe0nOs');
const drag_2 = object('6qvH7Ui82Zx');
const drag_3 = object('640AyUifljZ');
const drag_4 = object('64eqUKU0PO5');
const drag_5 = object('6FCOPJN0TCq');
const drag_6 = object('60hF0EHZ8XS');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_1.x>dropzone_x_1 && drag_1.x<dropzone_x_2 && drag_1.y>dropzone_y_1 && drag_1.y<dropzone_y_2)
{
	drag_1.x=drag_1.x;
	drag_1.y=drag_1.y;
}
else{
	drag_1.x=player.GetVar("drag_x_1");
	drag_1.y=player.GetVar("drag_y_1");
}
}

window.Script64 = function()
{
  let player = GetPlayer();

const drag_1 = object('6Helahe0nOs');
const drag_2 = object('6qvH7Ui82Zx');
const drag_3 = object('640AyUifljZ');
const drag_4 = object('64eqUKU0PO5');
const drag_5 = object('6FCOPJN0TCq');
const drag_6 = object('60hF0EHZ8XS');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_2.x>dropzone_x_1 && drag_2.x<dropzone_x_2 && drag_2.y>dropzone_y_1 && drag_2.y<dropzone_y_2)
{
	drag_2.x=drag_2.x;
	drag_2.y=drag_2.y;
}
else{
	drag_2.x=player.GetVar("drag_x_2");
	drag_2.y=player.GetVar("drag_y_2");
}
}

window.Script65 = function()
{
  let player = GetPlayer();

const drag_1 = object('6Helahe0nOs');
const drag_2 = object('6qvH7Ui82Zx');
const drag_3 = object('640AyUifljZ');
const drag_4 = object('64eqUKU0PO5');
const drag_5 = object('6FCOPJN0TCq');
const drag_6 = object('60hF0EHZ8XS');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_3.x>dropzone_x_1 && drag_3.x<dropzone_x_2 && drag_3.y>dropzone_y_1 && drag_3.y<dropzone_y_2)
{
	drag_3.x=drag_3.x;
	drag_3.y=drag_3.y;
}
else{
	drag_3.x=player.GetVar("drag_x_3");
	drag_3.y=player.GetVar("drag_y_3");
}
}

window.Script66 = function()
{
  let player = GetPlayer();

const drag_1 = object('6Helahe0nOs');
const drag_2 = object('6qvH7Ui82Zx');
const drag_3 = object('640AyUifljZ');
const drag_4 = object('64eqUKU0PO5');
const drag_5 = object('6FCOPJN0TCq');
const drag_6 = object('60hF0EHZ8XS');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_4.x>dropzone_x_1 && drag_4.x<dropzone_x_2 && drag_4.y>dropzone_y_1 && drag_4.y<dropzone_y_2)
{
	drag_4.x=drag_4.x;
	drag_4.y=drag_4.y;
}
else{
	drag_4.x=player.GetVar("drag_x_4");
	drag_4.y=player.GetVar("drag_y_4");
}
}

window.Script67 = function()
{
  let player = GetPlayer();
const drag_1 = object('6Helahe0nOs');
const drag_2 = object('6qvH7Ui82Zx');
const drag_3 = object('640AyUifljZ');
const drag_4 = object('64eqUKU0PO5');
const drag_5 = object('6FCOPJN0TCq');
const drag_6 = object('60hF0EHZ8XS');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_5.x>dropzone_x_1 && drag_5.x<dropzone_x_2 && drag_5.y>dropzone_y_1 && drag_5.y<dropzone_y_2)
{
	drag_5.x=drag_5.x;
	drag_5.y=drag_5.y;
}
else{
	drag_5.x=player.GetVar("drag_x_5");
	drag_5.y=player.GetVar("drag_y_5");
}
}

window.Script68 = function()
{
  let player = GetPlayer();

const drag_1 = object('6Helahe0nOs');
const drag_2 = object('6qvH7Ui82Zx');
const drag_3 = object('640AyUifljZ');
const drag_4 = object('64eqUKU0PO5');
const drag_5 = object('6FCOPJN0TCq');
const drag_6 = object('60hF0EHZ8XS');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_6.x>dropzone_x_1 && drag_6.x<dropzone_x_2 && drag_6.y>dropzone_y_1 && drag_6.y<dropzone_y_2)
{
	drag_6.x=drag_6.x;
	drag_6.y=drag_6.y;
}
else{
	drag_6.x=player.GetVar("drag_x_6");
	drag_6.y=player.GetVar("drag_y_6");
}
}

window.Script69 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("soru_no");

if(gorev_no===0)
{
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===1)
{
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===2)
{
	player.SetVar("etkinlik_3",true);
}

}

window.Script70 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");

const drag_1 = object('6YBOGk3mz3r');
const drag_2 = object('6VHxAGHkMu2');
const drag_3 = object('6ogvNjKqpAy');
const drag_4 = object('6KjzAWLMdz0');
const drag_5 = object('6GrqfwMEKhz');
const drag_6 = object('5zJbMvSFtP6');

if(drag_cevap_1===true)
{
	drag_1.x = 1156;
	drag_1.y = 242;
}

if(drag_cevap_2===true)
{
	drag_2.x = 1378;
	drag_2.y = 242;
}

if(drag_cevap_3===true)
{
	drag_3.x = 1598;
	drag_3.y = 242;
}

if(drag_cevap_4===true)
{
	drag_4.x = 1156;
	drag_4.y = 459;
}

if(drag_cevap_5===true)
{
	drag_5.x = 1378;
	drag_5.y = 459;
}

if(drag_cevap_6===true)
{
	drag_6.x = 1598;
	drag_6.y = 459;
}
}

window.Script71 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");
let drag_var_1 = player.GetVar("drag_var_1");
let drag_var_2 = player.GetVar("drag_var_2");
let drag_var_3 = player.GetVar("drag_var_3");
let drag_var_4 = player.GetVar("drag_var_4");
let drag_var_5 = player.GetVar("drag_var_5");
let drag_var_6 = player.GetVar("drag_var_6");


const drag_1 = object('6Helahe0nOs');
const drag_2 = object('6qvH7Ui82Zx');
const drag_3 = object('640AyUifljZ');
const drag_4 = object('64eqUKU0PO5');
const drag_5 = object('6FCOPJN0TCq');
const drag_6 = object('60hF0EHZ8XS');

if(drag_var_1 !== drag_cevap_1)
{
	drag_1.x = player.GetVar("drag_x_1");
	drag_1.y = player.GetVar("drag_y_1");
}

if(drag_var_2 !== drag_cevap_2)
{
	drag_2.x = player.GetVar("drag_x_2");
	drag_2.y = player.GetVar("drag_y_2");
}

if(drag_var_3 !== drag_cevap_3)
{
	drag_3.x = player.GetVar("drag_x_3");
	drag_3.y = player.GetVar("drag_y_3");
}

if(drag_var_4 !== drag_cevap_4)
{
	drag_4.x = player.GetVar("drag_x_4");
	drag_4.y = player.GetVar("drag_y_4");
}

if(drag_var_5 !== drag_cevap_5)
{
	drag_5.x = player.GetVar("drag_x_5");
	drag_5.y = player.GetVar("drag_y_5");
}

if(drag_var_6 !== drag_cevap_6)
{
	drag_6.x = player.GetVar("drag_x_6");
	drag_6.y = player.GetVar("drag_y_6");
}
}

window.Script72 = function()
{
  let player = GetPlayer();
let gorev_no = player.GetVar("soru_no");

if(gorev_no===0)
{
	player.SetVar("soru_1","1");
	player.SetVar("etkinlik_1",true);
}
else if(gorev_no===1)
{
	player.SetVar("soru_2","1");
	player.SetVar("etkinlik_2",true);
}
else if(gorev_no===2)
{
	player.SetVar("soru_3","1");
	player.SetVar("etkinlik_3",true);
}

}

};
