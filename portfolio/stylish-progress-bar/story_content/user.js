window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  window.createProgressBar = function (maximumProgress, currentProgress, color = '#5EA7FF', targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    let targetDiv = document.querySelector(targetDivSelector);

    if (!targetDiv) {
        console.error(`Hata: '${targetDivIdentifier}' için target div bulunamadı! Lütfen HTML içinde data-acc-text değerinin doğru olduğuna emin olun.`);
        return;
    }
    
const svgWave = "data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400'><path d='M0,100 Q300,0 600,100 T1200,100 V200 H0 Z' fill='rgba(255,255,255,0.3)'/><path d='M0,200 V300 Q300,400 600,300 T1200,300 V200 H0 Z' fill='rgba(255,255,255,0.3)'/></svg>";



    targetDiv.innerHTML = '';

    // Ana progress bar container
    const progressBarContainer = document.createElement('div');
    progressBarContainer.style.position = 'relative';
    progressBarContainer.style.width = '100%';
    progressBarContainer.style.height = '100%';
    progressBarContainer.style.backgroundColor = '#DFDFDF';
    progressBarContainer.style.borderRadius = '100px';
    progressBarContainer.style.overflow = 'hidden';
    progressBarContainer.dataset.maximumProgress = maximumProgress;
    progressBarContainer.dataset.targetDiv = targetDivIdentifier;

    // İç dolum kısmı (sıvı)
    const progressBar = document.createElement('div');
    progressBar.style.width = '100%';
    progressBar.style.height = '0%';
    progressBar.style.backgroundColor = color; 
	progressBar.style.transition = 'height 0.5s ease';
    progressBar.style.position = 'absolute';
    progressBar.style.bottom = '0';

    // Üst Dalga (Normal Dalga)
    const waveTop = document.createElement('div');
    waveTop.style.position = 'absolute';
    waveTop.style.bottom = '-10px';  
    waveTop.style.width = '200%';  
    waveTop.style.height = '100%';  
	waveTop.style.background = `url("${svgWave}") repeat-x`;
    waveTop.style.backgroundSize = '50% 100%';  
    waveTop.style.animation = 'waveAnimation 2s linear infinite';
    waveTop.style.opacity = '1';

    progressBar.appendChild(waveTop);
    progressBarContainer.appendChild(progressBar);
    targetDiv.appendChild(progressBarContainer);

    window.updateProgressBar(currentProgress, targetDivIdentifier, color);
};

// Dalgalanmayı güncelleme fonksiyonu
window.updateProgressBar = function (currentProgress, targetDivIdentifier, color) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    let targetDiv = document.querySelector(targetDivSelector);


    if (!targetDiv) {
        console.error(`Hata: '${targetDivIdentifier}' için target div bulunamadı! Güncellenemiyor.`);
        return;
    }

    const progressBarContainer = targetDiv.querySelector('div');
    if (progressBarContainer) {
        const maximumProgress = progressBarContainer.dataset.maximumProgress;
        const progressBar = progressBarContainer.querySelector('div');
        if (progressBar) {
            const progressPercentage = (currentProgress / maximumProgress) * 100;
            progressBar.style.height = `${progressPercentage}%`; 
            progressBar.style.backgroundColor = color; 

            const waveTop = progressBar.querySelector('div:nth-child(1)');
            if (waveTop) {
				waveTop.style.background = `url("${svgWave}") repeat-x`;
            }
        }
    }
};

// Dalgalanma animasyonu için CSS ekleme
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes waveAnimation {
    0% { transform: translateX(0) translateY(5px); }
    50% { transform: translateX(-25%) translateY(-5px); }
    100% { transform: translateX(-50%) translateY(5px); }
}`;
document.head.appendChild(styleSheet);

}

window.Script2 = function()
{
  // Storyline değişkenlerine erişim için player nesnesini al
var player = GetPlayer();

// Storyline'daki progressValue değişkenini al
var currentProgress = player.GetVar("progressValue");


// Storyline'daki değişkeni güncelle
player.SetVar("progressValue", currentProgress);

// Progress bar'ı güncelle
console.log("Progress güncelleniyor:", currentProgress);
window.updateProgressBar(currentProgress, "progress-container");
}

window.Script3 = function()
{
  window.createProgressBar(100, 0, "#5EA7FF", "progress-container");

console.log("Progress bar oluştu.");
// Example usage
// createProgressBar(MaximumValue, Initial, '#color', 'Object_AltText');
}

};
