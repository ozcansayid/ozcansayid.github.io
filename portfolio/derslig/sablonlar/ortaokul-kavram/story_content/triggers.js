function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YD3oijPH1L":
        Script1();
        break;
      case "6erbJlJpJob":
        Script2();
        break;
      case "6DszxNU9gvS":
        Script3();
        break;
      case "5sjhMH1PpXj":
        Script4();
        break;
      case "6pTL7CSbfgf":
        Script5();
        break;
      case "5eG6qAYwcBW":
        Script6();
        break;
      case "5oPTX1thkS0":
        Script7();
        break;
      case "5vQFDM9Yy4h":
        Script8();
        break;
      case "5fZVV9DROEq":
        Script9();
        break;
      case "6L11mm0ylxW":
        Script10();
        break;
      case "5ojV1e3FHoq":
        Script11();
        break;
      case "5f6jSCYgLlC":
        Script12();
        break;
      case "6fjPPhcaxxO":
        Script13();
        break;
      case "5bMfGLaHUYm":
        Script14();
        break;
      case "5qm6uHmB4NL":
        Script15();
        break;
      case "62RC3zFjWVA":
        Script16();
        break;
      case "5dbuEvJmCjR":
        Script17();
        break;
      case "5x6Sj7YQbXJ":
        Script18();
        break;
      case "6mh5Lua9fy4":
        Script19();
        break;
      case "6EoBSHMDYw4":
        Script20();
        break;
      case "5tSz6EwaqPj":
        Script21();
        break;
      case "6RHBOeadkYq":
        Script22();
        break;
      case "6L6eaQQo8MU":
        Script23();
        break;
      case "6A7JyKlb0fv":
        Script24();
        break;
      case "62IvvYl4uPk":
        Script25();
        break;
      case "5cHOgUfeMVR":
        Script26();
        break;
      case "5wj5ssaIXcf":
        Script27();
        break;
      case "5tAw3BApDgP":
        Script28();
        break;
      case "5Xos4HyJSmA":
        Script29();
        break;
      case "5ll4N3ekRWi":
        Script30();
        break;
      case "6SlgEHO2frU":
        Script31();
        break;
      case "5yWXN9ApxNw":
        Script32();
        break;
      case "5zccgSxpLc9":
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
