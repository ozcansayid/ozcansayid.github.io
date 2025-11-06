function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6eeS3ALRPYb":
        Script1();
        break;
      case "6j7D9nCBzMf":
        Script2();
        break;
      case "5kulphwBzAP":
        Script3();
        break;
      case "6dOLbzRpnvQ":
        Script4();
        break;
      case "5ps2BimfrVH":
        Script5();
        break;
      case "5g8BjvqKmnu":
        Script6();
        break;
      case "6ADZsDN5My8":
        Script7();
        break;
      case "6BTDSzjjfSS":
        Script8();
        break;
      case "5yZbHRvy5JR":
        Script9();
        break;
      case "6JQdBugkBR4":
        Script10();
        break;
      case "5t7olbXqmAn":
        Script11();
        break;
      case "5vOfsIyQtO7":
        Script12();
        break;
      case "6B5102Y2w7o":
        Script13();
        break;
      case "6fBWmsZWWOi":
        Script14();
        break;
      case "6CQ6D2YXs4m":
        Script15();
        break;
      case "6BAvJHXMv0Q":
        Script16();
        break;
      case "5Y5fS5GpZke":
        Script17();
        break;
      case "6Lmjv6YxdsG":
        Script18();
        break;
      case "6Z2v85ewOeg":
        Script19();
        break;
      case "5fdLsrX2Z9g":
        Script20();
        break;
      case "6G7jlEzzEnv":
        Script21();
        break;
      case "60x7d7JBFch":
        Script22();
        break;
      case "6KduqNEZYQv":
        Script23();
        break;
      case "6DgSI77nOgt":
        Script24();
        break;
      case "661qQ90N1ol":
        Script25();
        break;
      case "6p5S2MyH5M6":
        Script26();
        break;
      case "68YOS0aM9Ja":
        Script27();
        break;
      case "6Cfx52iT48J":
        Script28();
        break;
      case "6PtoVkhrry9":
        Script29();
        break;
      case "5vYunwexz9Z":
        Script30();
        break;
      case "5n8JRl5jixN":
        Script31();
        break;
      case "6if7aYBfUpN":
        Script32();
        break;
      case "5psKtnjBJgj":
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
