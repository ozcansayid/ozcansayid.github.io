function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZA7kdrYW3g":
        Script1();
        break;
      case "5fqn7kXxebj":
        Script2();
        break;
      case "6DjFGy1A6Or":
        Script3();
        break;
      case "6oRYKmtfmkT":
        Script4();
        break;
      case "5ZfaUOqOAC3":
        Script5();
        break;
      case "5VK7TabaKFB":
        Script6();
        break;
      case "5XsxShyemlI":
        Script7();
        break;
      case "6RaTQdGfjWl":
        Script8();
        break;
      case "6d2YP2uplTK":
        Script9();
        break;
      case "5kjWl4wxciJ":
        Script10();
        break;
      case "6my2VgYzeFz":
        Script11();
        break;
      case "6Wmm3IEpN5G":
        Script12();
        break;
      case "5X9M51mNTIV":
        Script13();
        break;
      case "6ASwrdh9hHM":
        Script14();
        break;
      case "6RHUPlwrStD":
        Script15();
        break;
      case "6esVFr83iKo":
        Script16();
        break;
      case "5kincJTY3Hj":
        Script17();
        break;
      case "6pTlkRnr1T3":
        Script18();
        break;
      case "6YUeznEfCrm":
        Script19();
        break;
      case "6MCnCgiZPNT":
        Script20();
        break;
      case "5pN0IzlwXYP":
        Script21();
        break;
      case "5cW1JhbdL8i":
        Script22();
        break;
      case "5xmZPsXY50g":
        Script23();
        break;
      case "6XzUIfpNBOe":
        Script24();
        break;
      case "6qplOBU51HC":
        Script25();
        break;
      case "6qSFrqOCQq2":
        Script26();
        break;
      case "5fmwYxC0xTp":
        Script27();
        break;
      case "6hRfsdITXum":
        Script28();
        break;
      case "6VMrnlcxsC9":
        Script29();
        break;
      case "6RnkfWz81rN":
        Script30();
        break;
      case "67jqkvZHYmG":
        Script31();
        break;
      case "5ff2aoH5ES1":
        Script32();
        break;
      case "6NF847anw85":
        Script33();
        break;
      case "5nFcUkknk98":
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
