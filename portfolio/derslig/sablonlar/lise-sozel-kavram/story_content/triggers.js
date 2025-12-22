function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6EyDByH7LNe":
        Script1();
        break;
      case "65TmmPlhukB":
        Script2();
        break;
      case "6QnNyU69aDQ":
        Script3();
        break;
      case "5b8UlJXtegR":
        Script4();
        break;
      case "6CM0HcaPIuF":
        Script5();
        break;
      case "5y9McFBUeZs":
        Script6();
        break;
      case "5g5Brp0OfGv":
        Script7();
        break;
      case "6HfsjM6nEY5":
        Script8();
        break;
      case "6Y5psOfu1oL":
        Script9();
        break;
      case "5Xco5aYNPyo":
        Script10();
        break;
      case "5WuNyMaZfak":
        Script11();
        break;
      case "5y6GqaO4gm7":
        Script12();
        break;
      case "5knqUYThGut":
        Script13();
        break;
      case "6jvR9zF1GfU":
        Script14();
        break;
      case "62H1DFpaZh2":
        Script15();
        break;
      case "6OOASM0dGi3":
        Script16();
        break;
      case "6Zq4BmIW1ZM":
        Script17();
        break;
      case "5plq0Que0d8":
        Script18();
        break;
      case "6llvg8eh9z9":
        Script19();
        break;
      case "6Cjx1CGovfg":
        Script20();
        break;
      case "66ov7LQ39y1":
        Script21();
        break;
      case "6Bve3qM1a48":
        Script22();
        break;
      case "5k1dBVXvue6":
        Script23();
        break;
      case "5bjZ2HKpbxo":
        Script24();
        break;
      case "6aOiLYNDvaa":
        Script25();
        break;
      case "5eaoI8iP1Yg":
        Script26();
        break;
      case "5d7nodT2VPX":
        Script27();
        break;
      case "6rIp1eXpIXU":
        Script28();
        break;
      case "5slH4vMoLvb":
        Script29();
        break;
      case "5Zh36XtXL5o":
        Script30();
        break;
      case "66KycPH73ZP":
        Script31();
        break;
      case "6TmHOYi0p98":
        Script32();
        break;
      case "5pFsMZbs3yA":
        Script33();
        break;
      case "6kr3gVh965i":
        Script34();
        break;
      case "6h8t0jX3HTQ":
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
