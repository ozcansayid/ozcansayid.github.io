function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6JXXsxRdMFR":
        Script1();
        break;
      case "6o9Xbnj4G1r":
        Script2();
        break;
      case "5qjZn6Aq8tt":
        Script3();
        break;
      case "5tllWVsNeXO":
        Script4();
        break;
      case "5l7Fr5HOcNP":
        Script5();
        break;
      case "5xWZccwCEZ8":
        Script6();
        break;
      case "6gDPNbw1da0":
        Script7();
        break;
      case "6adNp0N0NMt":
        Script8();
        break;
      case "6DZgpYmxWJw":
        Script9();
        break;
      case "6Q0zeq0Eok8":
        Script10();
        break;
      case "6RXCZoBsjt4":
        Script11();
        break;
      case "5tBwg4zkwVQ":
        Script12();
        break;
      case "6Dw9KC2sn9d":
        Script13();
        break;
      case "5cNhAIsVJcR":
        Script14();
        break;
      case "68PZz14Y59P":
        Script15();
        break;
      case "5lMdhNmAanr":
        Script16();
        break;
      case "6KMiRzjEIQj":
        Script17();
        break;
      case "5wyyfktj0Ij":
        Script18();
        break;
      case "5wrZJrEdOWM":
        Script19();
        break;
      case "6AgzWv1uyPL":
        Script20();
        break;
      case "6GJdIbHsjxm":
        Script21();
        break;
      case "5fqWIhGuV4L":
        Script22();
        break;
      case "5nnRpmV29Be":
        Script23();
        break;
      case "5XaegMIrGw0":
        Script24();
        break;
      case "6gO3NOCvJ3Z":
        Script25();
        break;
      case "5eDZZRYHX0I":
        Script26();
        break;
      case "6c6npDmJ7xw":
        Script27();
        break;
      case "6lSNQQKnSR1":
        Script28();
        break;
      case "6qVOQEZC9gs":
        Script29();
        break;
      case "6f9NFqKFPx9":
        Script30();
        break;
      case "6KIE17BawP2":
        Script31();
        break;
      case "5sY6Kc62O7G":
        Script32();
        break;
      case "5pJzhOJV5xY":
        Script33();
        break;
      case "6rlrgdkfi5Y":
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
