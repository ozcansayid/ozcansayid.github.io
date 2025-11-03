function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6bqVSQmn5ZH":
        Script1();
        break;
      case "5rg6kP0loPf":
        Script2();
        break;
      case "6H4mpYC4khM":
        Script3();
        break;
      case "6KhOpyRsVNJ":
        Script4();
        break;
      case "6PC6JfQNfvY":
        Script5();
        break;
      case "6H4Oy7gvIUe":
        Script6();
        break;
      case "6odFXRelzvO":
        Script7();
        break;
      case "6FiakAK0vwm":
        Script8();
        break;
      case "5a5ZnaQgTf5":
        Script9();
        break;
      case "64pd9rkZ4QF":
        Script10();
        break;
      case "6qxjXC0y2Gi":
        Script11();
        break;
      case "6qShGRj95YJ":
        Script12();
        break;
      case "6UXIaqxHB65":
        Script13();
        break;
      case "6cqoPxA7OB9":
        Script14();
        break;
      case "6Ksm5YVVQdT":
        Script15();
        break;
      case "60vMUXInjf8":
        Script16();
        break;
      case "69JgeNxSHeP":
        Script17();
        break;
      case "6RFTqsrTgws":
        Script18();
        break;
      case "5xBofm8jZ8q":
        Script19();
        break;
      case "6NSoaOpHj6N":
        Script20();
        break;
      case "6PEUb9wJwYp":
        Script21();
        break;
      case "6nj9Whlglku":
        Script22();
        break;
      case "6nd03ZWze3N":
        Script23();
        break;
      case "6cVEl4DVpkP":
        Script24();
        break;
      case "6ZUuk9gH6tc":
        Script25();
        break;
      case "6dmmvsJ1WUP":
        Script26();
        break;
      case "6VslKShbpMu":
        Script27();
        break;
      case "68mHN50eZL0":
        Script28();
        break;
      case "6k3bCZBlotW":
        Script29();
        break;
      case "6CRX8Up6UgV":
        Script30();
        break;
      case "5t3hk4osIgi":
        Script31();
        break;
      case "6ShNKYd1gNR":
        Script32();
        break;
      case "6JaXoFuF8ci":
        Script33();
        break;
      case "68PDPpdsmyP":
        Script34();
        break;
      case "6PvqLTNizuR":
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
