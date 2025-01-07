window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();
var startTime = new Date(); // Bu, etkinlik başladığında çağrılmalıdır
var startTimeFormatted = startTime.toISOString().slice(0, 19).replace('T', ' '); // DATETIME formatı
player.SetVar("startTime", startTime); 
player.SetVar("startDateTime", startTimeFormatted);
}

window.Script2 = function()
{
  var player = GetPlayer();

// Storyline'dan tüm değişkenleri al
var activityId = player.GetVar("activityId"); //Aktivite ID'is alınır
var userName = player.GetVar("userName"); // Storyline'daki userName değişkeni
var score = player.GetVar("userScore");
var live = player.GetVar("userLive");

var startTime = player.GetVar("startTime"); // Önceki aşamada aldığımız startTime
var startDateTime = player.GetVar("startDateTime");

var endTime = new Date(); // Bu, etkinlik sona erdiğinde çağrılmalıdır
var endDateTime = endTime.toISOString().slice(0, 19).replace('T', ' '); // DATETIME formatı

var duration = Math.floor((endTime - startTime) / 1000); // Milisaniyeden saniyeye dönüştür

var apiToken = "10840190-8e07-4958-85cc-2ce8e54cbff5"; // API token

// POST isteği ile tüm verileri PHP'ye gönder
fetch("https://www.sayidozcan.com/portfolio/projects/lib/save_data.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "activityId=" + encodeURIComponent(activityId) + "&name=" + encodeURIComponent(userName) + "&startTime=" + encodeURIComponent(startDateTime) + "&endTime=" + encodeURIComponent(endDateTime) + "&duration=" + encodeURIComponent(duration) + "&score=" + encodeURIComponent(score) + "&live=" + encodeURIComponent(live) + "&isScored=0&isCompleted=1&api_token=" + encodeURIComponent(apiToken)
})
.then(response => response.text())
.then(data => {
    console.log("Veriler başarıyla gönderildi:", data);
})
.catch((error) => {
    console.error('Error:', error);
});

}

};
