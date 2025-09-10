function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6KPLO3VSlSr":
        Script1();
        break;
      case "6cZrHS7lkvO":
        Script2();
        break;
      case "5ccK0S7c0qK":
        Script3();
        break;
      case "67fmW8zPylt":
        Script4();
        break;
      case "6ceRdLHLIo6":
        Script5();
        break;
      case "5rs9pNDZIqJ":
        Script6();
        break;
      case "6fdf6lRYFrv":
        Script7();
        break;
      case "6FI32PNkCgq":
        Script8();
        break;
      case "6KDN7KZzrb8":
        Script9();
        break;
      case "6rFspBDzEqk":
        Script10();
        break;
      case "5kgphsojl4q":
        Script11();
        break;
      case "6Fbza8pKSer":
        Script12();
        break;
      case "6MGe6vFIJqc":
        Script13();
        break;
      case "5tyLMQu312c":
        Script14();
        break;
      case "66Pbn9WCXY9":
        Script15();
        break;
      case "6QvCkIEEfY0":
        Script16();
        break;
      case "6Uj9LBVEI6q":
        Script17();
        break;
      case "5gPfKIOuOZX":
        Script18();
        break;
      case "6KyX25pwpH9":
        Script19();
        break;
      case "6MYp6XQYAgU":
        Script20();
        break;
      case "5nOuaqr73ec":
        Script21();
        break;
      case "5ZYtjRfCVIm":
        Script22();
        break;
      case "6rKp9w8Yley":
        Script23();
        break;
      case "5ZyoT8D4coa":
        Script24();
        break;
      case "6W1MFxglqxD":
        Script25();
        break;
      case "5bTVbPLomDL":
        Script26();
        break;
      case "6m8MQijsHX3":
        Script27();
        break;
      case "5uBcsuFE9II":
        Script28();
        break;
      case "6bPhnV4QGT9":
        Script29();
        break;
      case "6mN0zQe5CQD":
        Script30();
        break;
      case "6CG8xxxsiWX":
        Script31();
        break;
      case "6ApovvJOXm7":
        Script32();
        break;
      case "5noYFHqlt4K":
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
