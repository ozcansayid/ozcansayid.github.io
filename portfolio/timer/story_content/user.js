window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  window.TimerLibrary = (function() {
    var timer = null;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    
    function startTimer() {
        if (timer !== null) {
            console.log("Zamanlayıcı zaten çalışıyor");
            return;  
        }
        
        var player = GetPlayer();
        
		function formatTwoDigits(value) {
		    return value < 10 ? "0" + value : value;  
		}
		
        timer = setInterval(function() {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
		    
		    player.SetVar("hours", formatTwoDigits(hours));       
		    player.SetVar("minutes", formatTwoDigits(minutes));   
		    player.SetVar("seconds", formatTwoDigits(seconds));   

            
        }, 1000);  
    }

    
    function stopTimer() {
        if (timer !== null) {
            console.log("Zamanlayıcı durduruldu");
            clearInterval(timer);
            timer = null;  
        } else {
            console.log("Zamanlayıcı zaten durduruldu");
        }
    }

   
    function resetTimer() {
        stopTimer();  
        console.log("Zamanlayıcı sıfırlandı");

        
        hours = 0;
        minutes = 0;
        seconds = 0;

        var player = GetPlayer();

        
        player.SetVar("hours", "00");
        player.SetVar("minutes", "00");
        player.SetVar("seconds", "00");
    }

    return {
        start: startTimer,
        stop: stopTimer,
        reset: resetTimer
    };
})();

}

window.Script2 = function()
{
  TimerLibrary.start();
}

window.Script3 = function()
{
  TimerLibrary.stop();

}

window.Script4 = function()
{
  TimerLibrary.reset();

}

};
