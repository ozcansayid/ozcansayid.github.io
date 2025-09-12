function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6racMggFqyz":
        Script1();
        break;
      case "6kc4HhiBadK":
        Script2();
        break;
      case "67gCAgnwQZe":
        Script3();
        break;
      case "68kqJFvBZL3":
        Script4();
        break;
      case "604sW9NirZm":
        Script5();
        break;
      case "6RIcSbCd1gu":
        Script6();
        break;
      case "6a57ri6fsJ3":
        Script7();
        break;
      case "6Sj6ro7MN58":
        Script8();
        break;
      case "6RZMVcfCVji":
        Script9();
        break;
      case "5iLLMyK1Ry5":
        Script10();
        break;
      case "6GCddvcynvZ":
        Script11();
        break;
      case "61my3ncMk4v":
        Script12();
        break;
      case "66lvhnpB0lQ":
        Script13();
        break;
      case "6lLZTHCmRE7":
        Script14();
        break;
      case "5cLSLXfiZoQ":
        Script15();
        break;
      case "66BIb7woMUZ":
        Script16();
        break;
      case "6GHBFx2hnp2":
        Script17();
        break;
      case "5u25N1lYHOT":
        Script18();
        break;
      case "6Vn6cNS1P90":
        Script19();
        break;
      case "5ywz1W4YKUT":
        Script20();
        break;
      case "5skZnu2TrkM":
        Script21();
        break;
      case "6DdprNTwjqg":
        Script22();
        break;
      case "6HsxSpkCMqa":
        Script23();
        break;
      case "6PV40o2LWFS":
        Script24();
        break;
      case "5fvQ3xdMCk1":
        Script25();
        break;
      case "5kY25ToaVE7":
        Script26();
        break;
      case "6nRSgBr5eBg":
        Script27();
        break;
      case "5xQNdl9MwVl":
        Script28();
        break;
      case "66gEacqScSV":
        Script29();
        break;
      case "6MBxsfaVRP3":
        Script30();
        break;
      case "6XhirnhEH43":
        Script31();
        break;
      case "65J7c0ky7Ss":
        Script32();
        break;
      case "6aAOSl1MLG8":
        Script33();
        break;
      case "6OMlAPYCAzP":
        Script34();
        break;
      case "67EZkvLntj6":
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
