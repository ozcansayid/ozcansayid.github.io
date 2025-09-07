function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ACwBk8jwhF":
        Script1();
        break;
      case "5q2ZRURumG0":
        Script2();
        break;
      case "5WVKIfbdfot":
        Script3();
        break;
      case "5awNwnNIjeN":
        Script4();
        break;
      case "5fe4xxFatbs":
        Script5();
        break;
      case "5sEHGguwoFt":
        Script6();
        break;
      case "6iElZjnWi1v":
        Script7();
        break;
      case "67czpjQDAM0":
        Script8();
        break;
      case "6PteaLl9T39":
        Script9();
        break;
      case "6Sdodpcv8IB":
        Script10();
        break;
      case "60i8XyRxSjw":
        Script11();
        break;
      case "6ahKKcKl47o":
        Script12();
        break;
      case "5oGGzJOuBFP":
        Script13();
        break;
      case "5lGiNKxTyti":
        Script14();
        break;
      case "6qtjapIxiYq":
        Script15();
        break;
      case "6gNgAZ3T92F":
        Script16();
        break;
      case "6LEQgu2dIOP":
        Script17();
        break;
      case "6JtNDhwOwMd":
        Script18();
        break;
      case "6iBNEbMeXs7":
        Script19();
        break;
      case "65EdaXof3JP":
        Script20();
        break;
      case "69FUWVtsifW":
        Script21();
        break;
      case "680XtHEj5Mz":
        Script22();
        break;
      case "6Am1FGDuA35":
        Script23();
        break;
      case "6HUHhxZxBTv":
        Script24();
        break;
      case "5oW3A50aCF5":
        Script25();
        break;
      case "6PFAPPbC7Jo":
        Script26();
        break;
      case "6Pgu5Q3cred":
        Script27();
        break;
      case "6bTGwYSWJhP":
        Script28();
        break;
      case "6O7XdYUz3wH":
        Script29();
        break;
      case "6og92lxL6ei":
        Script30();
        break;
      case "6ApmhvQUs4i":
        Script31();
        break;
      case "5pNB06vj3m9":
        Script32();
        break;
      case "6CPiAfMMnQ0":
        Script33();
        break;
      case "6ANe04o4t5o":
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
