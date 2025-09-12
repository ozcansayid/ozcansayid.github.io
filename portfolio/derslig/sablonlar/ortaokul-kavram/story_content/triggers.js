function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5h0D57e7Phm":
        Script1();
        break;
      case "5kKSk2WZ4eA":
        Script2();
        break;
      case "6rSQ0WwuuoA":
        Script3();
        break;
      case "5ychz5cmKKC":
        Script4();
        break;
      case "6LuFKgMOgRF":
        Script5();
        break;
      case "5wCl5cBKztY":
        Script6();
        break;
      case "6EmizepVs3T":
        Script7();
        break;
      case "6LH4MMMF7MM":
        Script8();
        break;
      case "6linDF8ylnx":
        Script9();
        break;
      case "5z0WnK1mHNw":
        Script10();
        break;
      case "6HOItUOoDfo":
        Script11();
        break;
      case "6UiCDqxjft3":
        Script12();
        break;
      case "6lgOp4ob5LM":
        Script13();
        break;
      case "6SQBsaEcpN9":
        Script14();
        break;
      case "64yWDmY0Q7Y":
        Script15();
        break;
      case "5iRIzID2FFR":
        Script16();
        break;
      case "64TMoalw0r5":
        Script17();
        break;
      case "6f8fSiBy5oe":
        Script18();
        break;
      case "67t8LubYvds":
        Script19();
        break;
      case "68K4FuIsAOO":
        Script20();
        break;
      case "5imH03g1aUd":
        Script21();
        break;
      case "6Ao7XsN9lpH":
        Script22();
        break;
      case "6QgIBsE38fo":
        Script23();
        break;
      case "5s0abBRwlps":
        Script24();
        break;
      case "5WE8MGJlmf8":
        Script25();
        break;
      case "5hY2Ien9TIF":
        Script26();
        break;
      case "5hqvM8dFsO1":
        Script27();
        break;
      case "6J5tyxitD0H":
        Script28();
        break;
      case "6QLT8NURMCx":
        Script29();
        break;
      case "63mhlSI59w8":
        Script30();
        break;
      case "6YYzAJWN2jX":
        Script31();
        break;
      case "6oc9JpkkU7T":
        Script32();
        break;
      case "6PX4I2j3b9D":
        Script33();
        break;
      case "5c8RUkhIc2M":
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
