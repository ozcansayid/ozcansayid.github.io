function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6eyJyWA5NQM":
        Script1();
        break;
      case "6bN2E0M7pDL":
        Script2();
        break;
      case "6p1YAixVCxH":
        Script3();
        break;
      case "6cjEgBHBdwl":
        Script4();
        break;
      case "6LN1CicSzaC":
        Script5();
        break;
      case "5amtGX929H3":
        Script6();
        break;
      case "6JcsjKp7HLu":
        Script7();
        break;
      case "6VIVUPPRjqo":
        Script8();
        break;
      case "6otV0v9kPMX":
        Script9();
        break;
      case "5y9pobNm8Z1":
        Script10();
        break;
      case "6h3flPFhEei":
        Script11();
        break;
      case "5xGlMzUVMZE":
        Script12();
        break;
      case "6UxP81E96gI":
        Script13();
        break;
      case "5XqKhcFYMNo":
        Script14();
        break;
      case "6UGZV7I09qa":
        Script15();
        break;
      case "5n5hyt36xJ0":
        Script16();
        break;
      case "67bzNHQEM7N":
        Script17();
        break;
      case "66ndeAea5Bm":
        Script18();
        break;
      case "5jD07KarQFZ":
        Script19();
        break;
      case "5V6Xit2wCib":
        Script20();
        break;
      case "6LluBnKEwFH":
        Script21();
        break;
      case "6AqmuGJZN4F":
        Script22();
        break;
      case "6PnKOvcCN0m":
        Script23();
        break;
      case "6kSGOubtEOk":
        Script24();
        break;
      case "5evpgQT95vj":
        Script25();
        break;
      case "5rUhlMtFG1q":
        Script26();
        break;
      case "5nj6wQYaCKV":
        Script27();
        break;
      case "60nBeuDyCyy":
        Script28();
        break;
      case "6lBhBx5TWOv":
        Script29();
        break;
      case "6OSGcdBTFox":
        Script30();
        break;
      case "5p2qbD6eryI":
        Script31();
        break;
      case "5jBcQJO4cGR":
        Script32();
        break;
      case "6NQ09zDOjX5":
        Script33();
        break;
      case "5mUi6qzwqFI":
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
