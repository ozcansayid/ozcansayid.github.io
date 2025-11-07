function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5gwBn8LCFOB":
        Script1();
        break;
      case "5qT7wMGkonW":
        Script2();
        break;
      case "5cKqnrI2Edo":
        Script3();
        break;
      case "6olXbB7okDt":
        Script4();
        break;
      case "5VSEfVKkiHi":
        Script5();
        break;
      case "5yNJyuFo6Zp":
        Script6();
        break;
      case "6b08pGTzlNM":
        Script7();
        break;
      case "6SZST4dDyOP":
        Script8();
        break;
      case "63jt0AgrOGT":
        Script9();
        break;
      case "5g2So8mbTjs":
        Script10();
        break;
      case "6ReLoZrYoDe":
        Script11();
        break;
      case "5X0j7618nTz":
        Script12();
        break;
      case "5eUH4NQvJUf":
        Script13();
        break;
      case "6oKczLCeIFi":
        Script14();
        break;
      case "6X13WVHmyG3":
        Script15();
        break;
      case "6guXwigYYmM":
        Script16();
        break;
      case "5okgNSXAr3D":
        Script17();
        break;
      case "6HZZNIZGO7V":
        Script18();
        break;
      case "6VnSfOLF6cc":
        Script19();
        break;
      case "6TFmAVJ2sUd":
        Script20();
        break;
      case "67S2nv7RgJa":
        Script21();
        break;
      case "67pR2kGOQfy":
        Script22();
        break;
      case "6LeonxNtD9O":
        Script23();
        break;
      case "5gpxQvGIUIm":
        Script24();
        break;
      case "5vsZ3rPJ4rU":
        Script25();
        break;
      case "6biZwrfCEG5":
        Script26();
        break;
      case "6Pdxb3FwqR4":
        Script27();
        break;
      case "6FFjptl8Zpi":
        Script28();
        break;
      case "6FLaaI6o13V":
        Script29();
        break;
      case "6XUfLSw9auO":
        Script30();
        break;
      case "66fHwNLpZIi":
        Script31();
        break;
      case "5zZaWtXtv9q":
        Script32();
        break;
      case "68XaSUfeqrb":
        Script33();
        break;
      case "6EhAAHpI40z":
        Script34();
        break;
      case "6ODep9Dj7WJ":
        Script35();
        break;
      case "5X9VJnO2dJl":
        Script36();
        break;
      case "5mjvn1d47Di":
        Script37();
        break;
      case "6TONse9e1Ki":
        Script38();
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
