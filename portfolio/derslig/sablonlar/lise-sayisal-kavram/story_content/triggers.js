function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6jECyeWFE6v":
        Script1();
        break;
      case "6BWkFI4d4Bu":
        Script2();
        break;
      case "6iNHFiNM1OB":
        Script3();
        break;
      case "5psP28FSbmz":
        Script4();
        break;
      case "6DVOX9lO7hd":
        Script5();
        break;
      case "5qoQMqwqTx8":
        Script6();
        break;
      case "5nCZXoAyr5Z":
        Script7();
        break;
      case "6HNEYVdMzNL":
        Script8();
        break;
      case "6CWypd8yzdB":
        Script9();
        break;
      case "5ZMoUvEijKO":
        Script10();
        break;
      case "63GF8X8iC4S":
        Script11();
        break;
      case "6eir8hijT4S":
        Script12();
        break;
      case "5ayQlc6RI03":
        Script13();
        break;
      case "6movOw5dnyZ":
        Script14();
        break;
      case "6Z65CjTcQUd":
        Script15();
        break;
      case "6C4CS2QglVL":
        Script16();
        break;
      case "6GulaSW8md7":
        Script17();
        break;
      case "65BZddFt00f":
        Script18();
        break;
      case "69bVD3HFLGA":
        Script19();
        break;
      case "5kUrZKZABVR":
        Script20();
        break;
      case "65x4yv3f6Lf":
        Script21();
        break;
      case "5ZZdVc6yIgs":
        Script22();
        break;
      case "6NYRKRMYlzp":
        Script23();
        break;
      case "626UqDSU8Dl":
        Script24();
        break;
      case "60VTw4D7qVk":
        Script25();
        break;
      case "65ORbYkQaXo":
        Script26();
        break;
      case "6Kwq5ySGuPh":
        Script27();
        break;
      case "5zGEooVHgdw":
        Script28();
        break;
      case "5aWEUnLMaOi":
        Script29();
        break;
      case "66oIuLLvw2k":
        Script30();
        break;
      case "6DvVBghUVBZ":
        Script31();
        break;
      case "5ctoNE4Ljtq":
        Script32();
        break;
      case "5ihr1gxI5Af":
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
