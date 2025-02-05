window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  window.createProgressBar = function (maximumProgress, currentProgress, color = '#11C711', targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    let targetDiv = document.querySelector(targetDivSelector);
    if (!targetDiv) {
        console.error("Target div not found");
        return;
    }
    
    targetDiv.innerHTML = '';
    const progressBarContainer = document.createElement('div');
    progressBarContainer.style.position = 'relative';
    progressBarContainer.style.width = '100%';
    progressBarContainer.style.height = '100%';
    progressBarContainer.style.backgroundColor = '#DFDFDF';
    progressBarContainer.style.borderRadius = '5px';
    progressBarContainer.style.overflow = 'hidden';
    progressBarContainer.dataset.maximumProgress = maximumProgress;
    progressBarContainer.dataset.targetDiv = targetDivIdentifier;

    const progressBar = document.createElement('div');
    progressBar.style.height = '100%';
    progressBar.style.width = '0%';
    progressBar.style.backgroundColor = color;
    progressBar.style.transition = 'width 0.5s ease';

    progressBarContainer.appendChild(progressBar);
    targetDiv.appendChild(progressBarContainer);

    window.updateProgressBar(currentProgress, targetDivIdentifier);
};

window.updateProgressBar = function (currentProgress, targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    let targetDiv = document.querySelector(targetDivSelector);
    if (!targetDiv) {
        console.error("Target div not found");
        return;
    }
    
    const progressBarContainer = targetDiv.querySelector('div');
    if (progressBarContainer) {
        const maximumProgress = progressBarContainer.dataset.maximumProgress;
        const progressBar = progressBarContainer.querySelector('div');
        if (progressBar) {
            const progressPercentage = (currentProgress / maximumProgress) * 100;
            progressBar.style.width = `${progressPercentage}%`;
        }
    }
};

}

window.Script2 = function()
{
  window.createProgressBar = function (maximumProgress, currentProgress, color = '#11C711', targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    let targetDiv = document.querySelector(targetDivSelector);
    if (!targetDiv) {
        console.error("Target div not found");
        return;
    }
    
    targetDiv.innerHTML = '';
    const progressBarContainer = document.createElement('div');
    progressBarContainer.style.position = 'relative';
    progressBarContainer.style.width = '100%';
    progressBarContainer.style.height = '100%';
    progressBarContainer.style.backgroundColor = '#DFDFDF';
    progressBarContainer.style.borderRadius = '5px';
    progressBarContainer.style.overflow = 'hidden';
    progressBarContainer.dataset.maximumProgress = maximumProgress;
    progressBarContainer.dataset.targetDiv = targetDivIdentifier;

    const progressBar = document.createElement('div');
    progressBar.style.height = '100%';
    progressBar.style.width = '0%';
    progressBar.style.backgroundColor = color;
    progressBar.style.transition = 'width 0.5s ease';

    progressBarContainer.appendChild(progressBar);
    targetDiv.appendChild(progressBarContainer);

    window.updateProgressBar(currentProgress, targetDivIdentifier);
};

window.updateProgressBar = function (currentProgress, targetDivIdentifier) {
    const targetDivSelector = `[data-acc-text="${targetDivIdentifier}"]`;
    let targetDiv = document.querySelector(targetDivSelector);
    if (!targetDiv) {
        console.error("Target div not found");
        return;
    }
    
    const progressBarContainer = targetDiv.querySelector('div');
    if (progressBarContainer) {
        const maximumProgress = progressBarContainer.dataset.maximumProgress;
        const progressBar = progressBarContainer.querySelector('div');
        if (progressBar) {
            const progressPercentage = (currentProgress / maximumProgress) * 100;
            progressBar.style.width = `${progressPercentage}%`;
        }
    }
};

}

window.Script3 = function()
{
  window.createProgressBar(100, 0, "#FFC443", "progress-container");

// Example usage
// createProgressBar(MaximumValue, Initial, '#color', 'Object_AltText');
}

window.Script4 = function()
{
  // Storyline değişkenlerine erişim için player nesnesini al
var player = GetPlayer();

// Storyline'daki progressValue değişkenini al
var currentProgress = player.GetVar("progressValue");


// Storyline'daki değişkeni güncelle
player.SetVar("progressValue", currentProgress);

// Progress bar'ı güncelle
window.updateProgressBar(currentProgress, "progress-container");

}

};
