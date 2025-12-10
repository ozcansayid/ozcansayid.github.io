function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Wunh9Rmmf3":
        Script1();
        break;
      case "5bx7WxrYeVG":
        Script2();
        break;
      case "6Rz0zaOhvCB":
        Script3();
        break;
      case "6OZUGopfdGA":
        Script4();
        break;
      case "6EG86m9OEjL":
        Script5();
        break;
      case "5hjF69emziA":
        Script6();
        break;
      case "6WMcgzC7LQP":
        Script7();
        break;
      case "6S73UsATl9j":
        Script8();
        break;
      case "5zGto4g7SnD":
        Script9();
        break;
      case "6XAozx44JiL":
        Script10();
        break;
      case "65ldIin6K6v":
        Script11();
        break;
      case "69xL6RsyCPy":
        Script12();
        break;
      case "6ZAdumykdJu":
        Script13();
        break;
      case "6aEYIB4N0R7":
        Script14();
        break;
      case "5a9BXCV2VKW":
        Script15();
        break;
      case "6UuUdhFq8Aq":
        Script16();
        break;
      case "60PXy3fyxe7":
        Script17();
        break;
      case "6BrrLkklF6W":
        Script18();
        break;
      case "6Jo1GhyYZiM":
        Script19();
        break;
      case "6Tqibaayh8j":
        Script20();
        break;
      case "6DIvYntkAmh":
        Script21();
        break;
      case "5lDe6Y6yUX3":
        Script22();
        break;
      case "5utVjRYvd9k":
        Script23();
        break;
      case "6dCdoaRaAhd":
        Script24();
        break;
      case "6fcmCPHBPp8":
        Script25();
        break;
      case "5p1rJJOQLJL":
        Script26();
        break;
      case "6WP9XZ6d2VN":
        Script27();
        break;
      case "5aOn5mFrWZP":
        Script28();
        break;
      case "6NtJbIU2Kyq":
        Script29();
        break;
      case "5gFjy1ayVI6":
        Script30();
        break;
      case "6Ma3yzOoyB0":
        Script31();
        break;
      case "5le4kdnUsb1":
        Script32();
        break;
      case "6il7knXSgcx":
        Script33();
        break;
      case "6V3zDdOL4rT":
        Script34();
        break;
      case "6YkVtrgNYVp":
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
  const target = object('5hCkMzRjWfJ');
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
