function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Ou4oI0RkFC":
        Script1();
        break;
      case "6RoHIKZnk4d":
        Script2();
        break;
      case "5ahj0MU6eLN":
        Script3();
        break;
      case "5sDdverDMhu":
        Script4();
        break;
      case "61tVT6L3VTJ":
        Script5();
        break;
      case "6DsWMIM6ypi":
        Script6();
        break;
      case "5vLygIu7zKO":
        Script7();
        break;
      case "5xKkIJi5hV2":
        Script8();
        break;
      case "6eifQeg5wSw":
        Script9();
        break;
      case "5YZHdYND6eT":
        Script10();
        break;
      case "5WoYEk9QOxn":
        Script11();
        break;
      case "5nya4JH4I69":
        Script12();
        break;
      case "5gvnaQFMWqG":
        Script13();
        break;
      case "5rzmgJwcbm8":
        Script14();
        break;
      case "6alTfprNLVr":
        Script15();
        break;
      case "6JGwfY3vKb9":
        Script16();
        break;
      case "5sHVLXNdTYb":
        Script17();
        break;
      case "5UhIVWAM8a6":
        Script18();
        break;
      case "6r6MD5hlKJA":
        Script19();
        break;
      case "6SBUPJZC347":
        Script20();
        break;
      case "5l79l6ACdrq":
        Script21();
        break;
      case "5vQ8lEJARHW":
        Script22();
        break;
      case "6AP9QuNYG01":
        Script23();
        break;
      case "6IIBbzDRGXO":
        Script24();
        break;
      case "6nr6ysA1uHC":
        Script25();
        break;
      case "5wxvuLXos6B":
        Script26();
        break;
      case "6B87PE8eRp6":
        Script27();
        break;
      case "69KXOYHeMeU":
        Script28();
        break;
      case "6kvbnwUUxQi":
        Script29();
        break;
      case "6O9iGVnBT2i":
        Script30();
        break;
      case "6rKARdvzrnu":
        Script31();
        break;
      case "6OiICa3FrtE":
        Script32();
        break;
      case "6MEpWN5pySR":
        Script33();
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
