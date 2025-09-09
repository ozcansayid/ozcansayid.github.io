function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6iIXRPFmyXf":
        Script1();
        break;
      case "5vYOjqyBYJH":
        Script2();
        break;
      case "5vuPy4hLaUQ":
        Script3();
        break;
      case "6QWDUQcujDp":
        Script4();
        break;
      case "61dQZzaUuYG":
        Script5();
        break;
      case "6izz6YtZZjA":
        Script6();
        break;
      case "5dy6Hx4Pfap":
        Script7();
        break;
      case "6ECrzhH56UV":
        Script8();
        break;
      case "5wokZElIMdO":
        Script9();
        break;
      case "6UCxeP4cUsf":
        Script10();
        break;
      case "60bBZuUajpr":
        Script11();
        break;
      case "69dbq5g3t5l":
        Script12();
        break;
      case "6JEt0Durt8V":
        Script13();
        break;
      case "6TQb2k7bbp8":
        Script14();
        break;
      case "6PNTCL6cuey":
        Script15();
        break;
      case "5mYlGxX8sK2":
        Script16();
        break;
      case "5WoGS93Xn5L":
        Script17();
        break;
      case "60IsOhcHag1":
        Script18();
        break;
      case "5XNZeL3ZHqO":
        Script19();
        break;
      case "6gGtkuBkeb3":
        Script20();
        break;
      case "6AAKDmoBZMO":
        Script21();
        break;
      case "6rEIknmfMvY":
        Script22();
        break;
      case "5YhU3MLjyX3":
        Script23();
        break;
      case "5aIq2kTV2pY":
        Script24();
        break;
      case "5c6AYfL9VoI":
        Script25();
        break;
      case "5z6wdtH7Jd8":
        Script26();
        break;
      case "5eDuagzhRmB":
        Script27();
        break;
      case "5jwIhkUuc9Z":
        Script28();
        break;
      case "6gTw1DZkm4W":
        Script29();
        break;
      case "6Zqo94Ib2PK":
        Script30();
        break;
      case "6OeiJ59hZeT":
        Script31();
        break;
      case "6ZfH7gQJf05":
        Script32();
        break;
      case "5xZHdlsTjXy":
        Script33();
        break;
      case "6haHj091IBc":
        Script34();
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
