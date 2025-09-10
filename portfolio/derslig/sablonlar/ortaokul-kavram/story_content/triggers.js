function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6STzGCM38U3":
        Script1();
        break;
      case "5UgE61fOhK4":
        Script2();
        break;
      case "6ZR0lMCmDc5":
        Script3();
        break;
      case "5i84e3ZUSny":
        Script4();
        break;
      case "6DScEDwgM50":
        Script5();
        break;
      case "6ElIVt5i7Fl":
        Script6();
        break;
      case "6QGimLQMorA":
        Script7();
        break;
      case "61myZaaSmH7":
        Script8();
        break;
      case "5fhTVNz1DT4":
        Script9();
        break;
      case "5o1ZS1kKFpn":
        Script10();
        break;
      case "6IxqRNJahfs":
        Script11();
        break;
      case "6ji62zcHlpY":
        Script12();
        break;
      case "6bNDAQSh1kH":
        Script13();
        break;
      case "5wA7W2Wm9g6":
        Script14();
        break;
      case "5u9ShmJ1Yur":
        Script15();
        break;
      case "69GnqUfTosl":
        Script16();
        break;
      case "6QTyBBkaxK2":
        Script17();
        break;
      case "6LRyuJKMZKE":
        Script18();
        break;
      case "5fQ8aEyzHvw":
        Script19();
        break;
      case "6FtA0kuzwR4":
        Script20();
        break;
      case "5WgThc4ezBz":
        Script21();
        break;
      case "5meSyM2gtFL":
        Script22();
        break;
      case "5cuMj1zGFsJ":
        Script23();
        break;
      case "5rHa0AV5vAs":
        Script24();
        break;
      case "6qdpdOTa6bj":
        Script25();
        break;
      case "5b4PCWS5YDV":
        Script26();
        break;
      case "5fhVGZ86txU":
        Script27();
        break;
      case "6lVKxvZ0GWL":
        Script28();
        break;
      case "5e2twANZqk5":
        Script29();
        break;
      case "66ZdlkTD66J":
        Script30();
        break;
      case "5k9H0BID9ll":
        Script31();
        break;
      case "6bX4SUoVUfa":
        Script32();
        break;
      case "6jmaNnv6wXA":
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
