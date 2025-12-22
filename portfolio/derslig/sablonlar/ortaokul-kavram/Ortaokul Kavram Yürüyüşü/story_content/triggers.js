function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6PKnzfqCeWV":
        Script1();
        break;
      case "5iJPkaAxFnZ":
        Script2();
        break;
      case "5rMNywAclwU":
        Script3();
        break;
      case "5xOgD1LsODp":
        Script4();
        break;
      case "6Hvut4SOdLD":
        Script5();
        break;
      case "6rleAMtBYn4":
        Script6();
        break;
      case "6rceKC0YQ9y":
        Script7();
        break;
      case "69Uy3lt4A1g":
        Script8();
        break;
      case "62iHwkItiRp":
        Script9();
        break;
      case "64qFlNRew1K":
        Script10();
        break;
      case "5XYe6j8AG1u":
        Script11();
        break;
      case "6IZ0MNbWFSc":
        Script12();
        break;
      case "6fxRMAlt2c5":
        Script13();
        break;
      case "6cdcqVajhc1":
        Script14();
        break;
      case "6YMfYmKpAzD":
        Script15();
        break;
      case "621gWtTXw6c":
        Script16();
        break;
      case "6JFTgz8UPq1":
        Script17();
        break;
      case "6A2ReidLlsS":
        Script18();
        break;
      case "6X5leEuvLln":
        Script19();
        break;
      case "68TE9zqLyr3":
        Script20();
        break;
      case "5fTwT3WlmUR":
        Script21();
        break;
      case "6icmiKZFOec":
        Script22();
        break;
      case "5W1r2ACHqOF":
        Script23();
        break;
      case "5tchb8vzDPl":
        Script24();
        break;
      case "64T4gzC3NHt":
        Script25();
        break;
      case "6XeqVjLV3II":
        Script26();
        break;
      case "6UK9uAGx6eV":
        Script27();
        break;
      case "633poSeeZVf":
        Script28();
        break;
      case "6D2qKUfrjX8":
        Script29();
        break;
      case "5sCArrP5dQS":
        Script30();
        break;
      case "6X4f0y0Kk8E":
        Script31();
        break;
      case "5ojLhdBYcd9":
        Script32();
        break;
      case "6eXUdJ3A8QI":
        Script33();
        break;
      case "6aoiqThQUIp":
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
  const target = object('6alnRUMss3e');
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
