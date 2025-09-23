function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5qJEJrXsrzO":
        Script1();
        break;
      case "6ip7Y6KbTfG":
        Script2();
        break;
      case "6NurkvoHtdq":
        Script3();
        break;
      case "6lOAKf4q5WQ":
        Script4();
        break;
      case "5tFz0X7IgGw":
        Script5();
        break;
      case "6boQsEA2KPp":
        Script6();
        break;
      case "69Q3HkWDKMY":
        Script7();
        break;
      case "6AEBhFGO6Uq":
        Script8();
        break;
      case "65gwWvMLJY2":
        Script9();
        break;
      case "683IgfO5WrM":
        Script10();
        break;
      case "6NJ6DNP2PnR":
        Script11();
        break;
      case "6IyW7kGLb6O":
        Script12();
        break;
      case "5VcOZlWMSVT":
        Script13();
        break;
      case "6pTz029Z46K":
        Script14();
        break;
      case "5zzHVeEUhIl":
        Script15();
        break;
      case "5m9vbmQWg42":
        Script16();
        break;
      case "5xKkmKTlkyn":
        Script17();
        break;
      case "6YXhQNaM7YG":
        Script18();
        break;
      case "6dlji3jlSMy":
        Script19();
        break;
      case "6rnfOOhrNo1":
        Script20();
        break;
      case "6TBCqYgmnLY":
        Script21();
        break;
      case "6bWW8zN6ANY":
        Script22();
        break;
      case "69iE6qpKq8s":
        Script23();
        break;
      case "6qsyUspkLEc":
        Script24();
        break;
      case "5v18xvCPr9b":
        Script25();
        break;
      case "6lfJKTQYPry":
        Script26();
        break;
      case "5q7vlsH0ixY":
        Script27();
        break;
      case "5fpIRJBbQ6g":
        Script28();
        break;
      case "6Sr4AkqWI7Y":
        Script29();
        break;
      case "5whEv6nzwJR":
        Script30();
        break;
      case "6GsSuwIP3aG":
        Script31();
        break;
      case "6Bt4nQzHOfW":
        Script32();
        break;
      case "6kTPUDk37Z7":
        Script33();
        break;
      case "5rnWpCgbkPR":
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
