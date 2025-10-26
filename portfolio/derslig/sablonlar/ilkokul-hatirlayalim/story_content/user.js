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

window.Script11 = function()
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

window.createProgressBar(2, progressValue, "#FCC626", "progress-container");

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

const drag_1 = object('6E2hz8Oyxs0');
const drag_2 = object('5izvvlcbXcx');
const drag_3 = object('6HdmNtoMZbC');
const drag_4 = object('5uQUDrpnHi9');
const drag_5 = object('65pIEFyW4Ot');
const drag_6 = object('6hMNzU2h2R7');

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

window.Script16 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");

const drag_1 = object('6E2hz8Oyxs0');
const drag_2 = object('5izvvlcbXcx');
const drag_3 = object('6HdmNtoMZbC');
const drag_4 = object('5uQUDrpnHi9');
const drag_5 = object('65pIEFyW4Ot');
const drag_6 = object('6hMNzU2h2R7');

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

window.Script17 = function()
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


const drag_1 = object('6E2hz8Oyxs0');
const drag_2 = object('5izvvlcbXcx');
const drag_3 = object('6HdmNtoMZbC');
const drag_4 = object('5uQUDrpnHi9');
const drag_5 = object('65pIEFyW4Ot');
const drag_6 = object('6hMNzU2h2R7');

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

window.Script18 = function()
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

window.Script19 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(2, progressValue, "#FCC626", "progress-container");

}

window.Script20 = function()
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

window.Script21 = function()
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

window.Script22 = function()
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

window.Script23 = function()
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

window.Script24 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(2, progressValue, "#FCC626", "progress-container");

}

window.Script25 = function()
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

window.Script26 = function()
{
  let player = GetPlayer();

const drag_1 = object('6h0bweTwmby');
const drag_2 = object('6QAedRK1GWs');
const drag_3 = object('6U7k5Q33yME');
const drag_4 = object('6HuNqbvdssn');
const drag_5 = object('63AgSFrimHM');
const drag_6 = object('6jwB8th1Gkx');

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

window.Script27 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");

const drag_1 = object('6h0bweTwmby');
const drag_2 = object('6QAedRK1GWs');
const drag_3 = object('6U7k5Q33yME');
const drag_4 = object('6HuNqbvdssn');
const drag_5 = object('63AgSFrimHM');
const drag_6 = object('6jwB8th1Gkx');

if(drag_cevap_1===true)
{
	drag_1.x = 1106;
	drag_1.y = 242;
}

if(drag_cevap_2===true)
{
	drag_2.x = 1378;
	drag_2.y = 242;
}

if(drag_cevap_3===true)
{
	drag_3.x = 1648;
	drag_3.y = 242;
}

if(drag_cevap_4===true)
{
	drag_4.x = 1106;
	drag_4.y = 459;
}

if(drag_cevap_5===true)
{
	drag_5.x = 1378;
	drag_5.y = 459;
}

if(drag_cevap_6===true)
{
	drag_6.x = 1648;
	drag_6.y = 459;
}
}

window.Script28 = function()
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


const drag_1 = object('6h0bweTwmby');
const drag_2 = object('6QAedRK1GWs');
const drag_3 = object('6U7k5Q33yME');
const drag_4 = object('6HuNqbvdssn');
const drag_5 = object('63AgSFrimHM');
const drag_6 = object('6jwB8th1Gkx');

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

window.Script29 = function()
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

window.Script30 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(2, progressValue, "#FCC626", "progress-container");

}

window.Script31 = function()
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

window.Script32 = function()
{
  let player = GetPlayer();

const drag_1 = object('6PelsOwLhqv');
const drag_2 = object('5kEojpswJRd');
const drag_3 = object('5xdVpiawHk2');
const drag_4 = object('6lcojDk4Jrz');
const drag_5 = object('6cuaUqfg44N');
const drag_6 = object('6pXCuf8CRlE');

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

window.Script33 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");

const drag_1 = object('6PelsOwLhqv');
const drag_2 = object('5kEojpswJRd');
const drag_3 = object('5xdVpiawHk2');
const drag_4 = object('6lcojDk4Jrz');
const drag_5 = object('6cuaUqfg44N');
const drag_6 = object('6pXCuf8CRlE');

if(drag_cevap_1===true)
{
	drag_1.x = 1106;
	drag_1.y = 242;
}

if(drag_cevap_2===true)
{
	drag_2.x = 1378;
	drag_2.y = 242;
}

if(drag_cevap_3===true)
{
	drag_3.x = 1648;
	drag_3.y = 242;
}

if(drag_cevap_4===true)
{
	drag_4.x = 1106;
	drag_4.y = 459;
}

if(drag_cevap_5===true)
{
	drag_5.x = 1378;
	drag_5.y = 459;
}

if(drag_cevap_6===true)
{
	drag_6.x = 1648;
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


const drag_1 = object('6PelsOwLhqv');
const drag_2 = object('5kEojpswJRd');
const drag_3 = object('5xdVpiawHk2');
const drag_4 = object('6lcojDk4Jrz');
const drag_5 = object('6cuaUqfg44N');
const drag_6 = object('6pXCuf8CRlE');

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

};
