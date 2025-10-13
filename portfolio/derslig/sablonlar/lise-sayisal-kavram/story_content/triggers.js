function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5x6U9TRxujD":
        Script1();
        break;
      case "6lVLsd7iOhO":
        Script2();
        break;
      case "6UobrF2m32i":
        Script3();
        break;
      case "6fKoRGQlFRG":
        Script4();
        break;
      case "6H6GPYYDjiy":
        Script5();
        break;
      case "6deUjUzTjvo":
        Script6();
        break;
      case "6mLDI7MiLlF":
        Script7();
        break;
      case "6MYYSUgndui":
        Script8();
        break;
      case "5bMJwnf6gX2":
        Script9();
        break;
      case "6WHPwY1MqM7":
        Script10();
        break;
      case "6I6vnzTcWaG":
        Script11();
        break;
      case "6e9S3UdbQUh":
        Script12();
        break;
      case "6K8PsDbvB3o":
        Script13();
        break;
      case "68jCdztz97J":
        Script14();
        break;
      case "6LeFWmnLhkr":
        Script15();
        break;
      case "6jEJsazeuHj":
        Script16();
        break;
      case "5z19w9oxKMD":
        Script17();
        break;
      case "6OoKzGjI3m9":
        Script18();
        break;
      case "6BjtIczXgMP":
        Script19();
        break;
      case "6QZDReEjaO9":
        Script20();
        break;
      case "6Sl9X7tDxr2":
        Script21();
        break;
      case "6nD4L66J4rD":
        Script22();
        break;
      case "6CNCjKUPDD8":
        Script23();
        break;
      case "5XfLDtB3DoE":
        Script24();
        break;
      case "6eAnNW3ezGQ":
        Script25();
        break;
      case "5Xl135tW3ud":
        Script26();
        break;
      case "5byQGEzN3II":
        Script27();
        break;
      case "6AzYDhBvCH8":
        Script28();
        break;
      case "67XrRImP30V":
        Script29();
        break;
      case "6Gdcmy0WX3Z":
        Script30();
        break;
      case "6beLoCHM4mc":
        Script31();
        break;
      case "5XcO8gna7rj":
        Script32();
        break;
      case "5xBiodH4g89":
        Script33();
        break;
      case "6YwHebuPJfN":
        Script34();
        break;
      case "6HDoK0Vb4C4":
        Script35();
        break;
  }
}

window.InitExecuteScripts = function()
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
  const target = object('6GQd7ItH1ZF');
const duration = 3000;
const easing = 'ease-out';
const id = '5Us9bAhozjn';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
