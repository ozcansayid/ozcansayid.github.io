function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5nlvJiZlGmm":
        Script1();
        break;
      case "6Z0HoxGdNEG":
        Script2();
        break;
      case "6hrpn4AZj0E":
        Script3();
        break;
      case "6kqWhAZSE8I":
        Script4();
        break;
      case "6Nr9RwHlP8b":
        Script5();
        break;
      case "5XF0JQJW0Kx":
        Script6();
        break;
      case "5yQ1P71LI3a":
        Script7();
        break;
      case "5hrZRVC3FNK":
        Script8();
        break;
      case "6oL4aiHQ1Oi":
        Script9();
        break;
      case "5p9GUoIftT1":
        Script10();
        break;
      case "61HshkX24o0":
        Script11();
        break;
      case "6p4xVwsUack":
        Script12();
        break;
      case "5dn8YuvjOhE":
        Script13();
        break;
      case "5XJr15DC7Jo":
        Script14();
        break;
      case "5asPnodTbGU":
        Script15();
        break;
      case "62LKPh7BeZ6":
        Script16();
        break;
      case "6qG1RJ480VM":
        Script17();
        break;
      case "68pWXf23Iaq":
        Script18();
        break;
      case "5YWEQYN9vzl":
        Script19();
        break;
      case "65m8KNMvzIu":
        Script20();
        break;
      case "5j6H4HZH1j6":
        Script21();
        break;
      case "5x6Y4fLuJHP":
        Script22();
        break;
      case "6Myn4YuIeOC":
        Script23();
        break;
      case "6c8NbTdpGlD":
        Script24();
        break;
      case "6kguxL7ryYi":
        Script25();
        break;
      case "6dtDkL0Ri9i":
        Script26();
        break;
      case "6VcRSc5Akbb":
        Script27();
        break;
      case "68cfS6VO2Pi":
        Script28();
        break;
      case "6WO6KC9aF60":
        Script29();
        break;
      case "6gGrdkS13Wj":
        Script30();
        break;
      case "6lBM7RErvAs":
        Script31();
        break;
      case "5jRZbW7C1aE":
        Script32();
        break;
      case "6LQzwfO3TdT":
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
