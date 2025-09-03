function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6YukED0DQ7M":
        Script1();
        break;
      case "5Zu6NfhYvnD":
        Script2();
        break;
      case "5Xx9jAb0C2L":
        Script3();
        break;
      case "5mv6Lf3zz0u":
        Script4();
        break;
      case "6IK5wQQyCzU":
        Script5();
        break;
      case "5xGIT7yFmDr":
        Script6();
        break;
      case "6iCxu7haYUz":
        Script7();
        break;
      case "6PIJmoNtoI9":
        Script8();
        break;
      case "6hoaGxSa9Hy":
        Script9();
        break;
      case "6cjhEK2uTYC":
        Script10();
        break;
      case "5VFtHA6Nygo":
        Script11();
        break;
      case "6KBaBqVWarC":
        Script12();
        break;
      case "5g5Kngthkmg":
        Script13();
        break;
      case "6hF6OBLu9cc":
        Script14();
        break;
      case "5jDqhu84veM":
        Script15();
        break;
      case "5vrQBp9iygM":
        Script16();
        break;
      case "5sDJGdvuehE":
        Script17();
        break;
      case "6kwn83P8GCR":
        Script18();
        break;
      case "6MCzVnT6Fn6":
        Script19();
        break;
      case "5mKBalgUuc3":
        Script20();
        break;
      case "6H8IknXSiMJ":
        Script21();
        break;
      case "5rVFqHXa8Op":
        Script22();
        break;
      case "5tr8YvWz0ZH":
        Script23();
        break;
      case "5dzPLKsnCiK":
        Script24();
        break;
      case "5w7AK1oZn2m":
        Script25();
        break;
      case "5hKskRgPZ16":
        Script26();
        break;
      case "6SI3iNgU5d2":
        Script27();
        break;
      case "6rU440z4ghq":
        Script28();
        break;
      case "6lt2Cpd8Uod":
        Script29();
        break;
      case "6I8pn18ubDZ":
        Script30();
        break;
      case "6lakJE87jvG":
        Script31();
        break;
      case "6UVjSlq3vW5":
        Script32();
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
