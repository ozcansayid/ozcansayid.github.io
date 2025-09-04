function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6BtMO7FZBSd":
        Script1();
        break;
      case "6Uan7EhSAYm":
        Script2();
        break;
      case "6DH43JNIKN6":
        Script3();
        break;
      case "6pboLjLi6Jt":
        Script4();
        break;
      case "6HXPZB8SY56":
        Script5();
        break;
      case "6AlkSHkp9Sr":
        Script6();
        break;
      case "5r8mkVYP4p3":
        Script7();
        break;
      case "5pZZ6agEXdU":
        Script8();
        break;
      case "5V9P45AuJSb":
        Script9();
        break;
      case "6PIW6xdql4m":
        Script10();
        break;
      case "64A4qJdVXxb":
        Script11();
        break;
      case "6QzakLIGqXV":
        Script12();
        break;
      case "5XPyqPRMzuj":
        Script13();
        break;
      case "6CGlhxgMKGZ":
        Script14();
        break;
      case "5icqbjtPsCh":
        Script15();
        break;
      case "5x03S3gTdSK":
        Script16();
        break;
      case "68eQlV3IJFS":
        Script17();
        break;
      case "64sqxLlh1Wt":
        Script18();
        break;
      case "6raqpJbAxJb":
        Script19();
        break;
      case "5kH3I5jVjKQ":
        Script20();
        break;
      case "6BVHgUHMCzq":
        Script21();
        break;
      case "6PETPHQT0Dn":
        Script22();
        break;
      case "6lPEpw8X2l5":
        Script23();
        break;
      case "5ouHrR8Srqz":
        Script24();
        break;
      case "5metDbYXk9g":
        Script25();
        break;
      case "6YogSqRN6x3":
        Script26();
        break;
      case "5pRxsxvWeV4":
        Script27();
        break;
      case "5vgFZ5xouHf":
        Script28();
        break;
      case "5gfLPQ5Z3g8":
        Script29();
        break;
      case "6Yirqb6tQ61":
        Script30();
        break;
      case "5sHTAUveuRd":
        Script31();
        break;
      case "6RIxk0qiq5H":
        Script32();
        break;
      case "5We2aF0933X":
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
