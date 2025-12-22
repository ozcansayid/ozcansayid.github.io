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

window.Script2 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(8, progressValue, "#fcd639", "progress-container");

}

window.Script3 = function()
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

window.Script4 = function()
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

window.Script5 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(8, progressValue, "#fcd639", "progress-container");

}

window.Script6 = function()
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

window.Script7 = function()
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

window.Script8 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(8, progressValue, "#fcd639", "progress-container");

}

window.Script9 = function()
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

window.Script10 = function()
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

window.Script11 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(8, progressValue, "#fcd639", "progress-container");

}

window.Script12 = function()
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

window.Script13 = function()
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

window.Script14 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(8, progressValue, "#fcd639", "progress-container");

}

window.Script15 = function()
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

window.Script16 = function()
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

window.Script17 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(8, progressValue, "#fcd639", "progress-container");

}

window.Script18 = function()
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

window.Script19 = function()
{
  let player = GetPlayer();
let userInput = player.GetVar("user_entry");
let cevap = player.GetVar("cevap");

player.SetVar("user_entry", userInput.toLocaleLowerCase("tr-TR"));
player.SetVar("cevap", cevap.toLocaleLowerCase("tr-TR"));

if(userInput === "boşluk")
{
	player.SetVar("user_entry","boşluğa");
}
}

window.Script20 = function()
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

window.Script21 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(8, progressValue, "#fcd639", "progress-container");

}

window.Script22 = function()
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

window.Script23 = function()
{
  let player = GetPlayer();

const drag_1 = object('5xjYU9lIJZb');
const drag_2 = object('6CETZaIuPhT');
const drag_3 = object('5hPyMZ05nxR');

player.SetVar("drag_x_1",drag_1.x);
player.SetVar("drag_x_2",drag_2.x);
player.SetVar("drag_x_3",drag_3.x);
player.SetVar("drag_y_1",drag_1.y);
player.SetVar("drag_y_2",drag_2.y);
player.SetVar("drag_y_3",drag_3.y);
}

window.Script24 = function()
{
  let player = GetPlayer();

const drag_1 = object('5xjYU9lIJZb');
const drag_2 = object('6CETZaIuPhT');
const drag_3 = object('5hPyMZ05nxR');

drag_1.x = player.GetVar("drag_x_1");
drag_2.x = player.GetVar("drag_x_2");
drag_3.x = player.GetVar("drag_x_3");
drag_1.y = player.GetVar("drag_y_1");
drag_2.y = player.GetVar("drag_y_2");
drag_3.y = player.GetVar("drag_y_3");
}

window.Script25 = function()
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

window.Script26 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(8, progressValue, "#fcd639", "progress-container");

}

window.Script27 = function()
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

window.Script28 = function()
{
  let player = GetPlayer();

const drag_1 = object('6M8hk1sZ6LH');
const drag_2 = object('5oeqCBwCAoB');
const drag_3 = object('6ACBkhnPwJp');
const drag_4 = object('5erXOY4kN6T');

player.SetVar("drag_x_1",drag_1.x);
player.SetVar("drag_x_2",drag_2.x);
player.SetVar("drag_x_3",drag_3.x);
player.SetVar("drag_x_4",drag_4.x);
player.SetVar("drag_y_1",drag_1.y);
player.SetVar("drag_y_2",drag_2.y);
player.SetVar("drag_y_3",drag_3.y);
player.SetVar("drag_y_4",drag_4.y);
}

window.Script29 = function()
{
  let player = GetPlayer();

const drag_1 = object('6M8hk1sZ6LH');
const drag_2 = object('5oeqCBwCAoB');
const drag_3 = object('6ACBkhnPwJp');
const drag_4 = object('5erXOY4kN6T');

drag_1.x = player.GetVar("drag_x_1");
drag_2.x = player.GetVar("drag_x_2");
drag_3.x = player.GetVar("drag_x_3");
drag_4.x = player.GetVar("drag_x_4");
drag_1.y = player.GetVar("drag_y_1");
drag_2.y = player.GetVar("drag_y_2");
drag_3.y = player.GetVar("drag_y_3");
drag_4.y = player.GetVar("drag_y_4");
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

window.createProgressBar(8, progressValue, "#fcd639", "progress-container");

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

window.Script34 = function()
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

};
