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
window.Script2 = function()
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

window.Script3 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(9, progressValue, "#FCC626", "progress-container");

}

window.Script4 = function()
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

window.Script5 = function()
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

window.Script6 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(9, progressValue, "#FCC626", "progress-container");

}

window.Script7 = function()
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

window.Script8 = function()
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

window.Script9 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(9, progressValue, "#FCC626", "progress-container");

}

window.Script10 = function()
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

window.Script11 = function()
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

window.Script12 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(9, progressValue, "#FCC626", "progress-container");

}

window.Script13 = function()
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

window.Script14 = function()
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

window.Script15 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(9, progressValue, "#FCC626", "progress-container");

}

window.Script16 = function()
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

window.Script17 = function()
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

window.Script18 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(9, progressValue, "#FCC626", "progress-container");

}

window.Script19 = function()
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

window.createProgressBar(9, progressValue, "#FCC626", "progress-container");

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

window.createProgressBar(9, progressValue, "#FCC626", "progress-container");

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

window.Script27 = function()
{
  var player = GetPlayer();
var progressValue = player.GetVar("soru_no");

window.createProgressBar(9, progressValue, "#FCC626", "progress-container");

}

window.Script28 = function()
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

window.createProgressBar(9, progressValue, "#FCC626", "progress-container");

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
let userInput = player.GetVar("user_entry");
let cevap = player.GetVar("cevap");

player.SetVar("user_entry", userInput.toLocaleLowerCase("tr-TR"));
player.SetVar("cevap", cevap.toLocaleLowerCase("tr-TR"));
}

};
