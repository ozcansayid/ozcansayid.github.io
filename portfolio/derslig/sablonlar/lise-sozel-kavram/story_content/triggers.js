function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6UH97dSz3iT":
        Script1();
        break;
      case "5kdOOvqtM4P":
        Script2();
        break;
      case "6hwIRGHBVGL":
        Script3();
        break;
      case "5e3HesUClqd":
        Script4();
        break;
      case "6l3RQzvlBBS":
        Script5();
        break;
      case "6ZnOI1BxCWq":
        Script6();
        break;
      case "6i2wl17E2bl":
        Script7();
        break;
      case "6GmewTwdEj3":
        Script8();
        break;
      case "6KsT7p0zlVG":
        Script9();
        break;
      case "6OH8UuYYvkX":
        Script10();
        break;
      case "5VF63lmPyD6":
        Script11();
        break;
      case "5ZGlAf7BJER":
        Script12();
        break;
      case "6cebJyvPrxa":
        Script13();
        break;
      case "5pKlRq1uCrv":
        Script14();
        break;
      case "6c3q95EH0Kd":
        Script15();
        break;
      case "6cUbWTPlXVe":
        Script16();
        break;
      case "6PgPc1ygerS":
        Script17();
        break;
      case "6MWuYcGgRrr":
        Script18();
        break;
      case "6qbhlwrnBdm":
        Script19();
        break;
      case "5YGkdrizUgH":
        Script20();
        break;
      case "6Hjks7Ugu68":
        Script21();
        break;
      case "5na5aBd3E71":
        Script22();
        break;
      case "6UdkOKF1RC5":
        Script23();
        break;
      case "5jj5kfDvqXS":
        Script24();
        break;
      case "6hgr5mtTjnU":
        Script25();
        break;
      case "6LNWSzDiiLM":
        Script26();
        break;
      case "6OGIUAmDlBu":
        Script27();
        break;
      case "68V2OEnnJt2":
        Script28();
        break;
      case "6Ynxm8nYg5y":
        Script29();
        break;
      case "5VYUeFJKoJ2":
        Script30();
        break;
      case "5aACoAJmcc0":
        Script31();
        break;
      case "6Wz8hfnAnP8":
        Script32();
        break;
      case "5hSR88so0oP":
        Script33();
        break;
      case "65Iym9Wpiwq":
        Script34();
        break;
      case "6CRyMEx7JrX":
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
