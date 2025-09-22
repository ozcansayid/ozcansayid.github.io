function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5s9gfwO8jzo":
        Script1();
        break;
      case "5lUXETRMI7r":
        Script2();
        break;
      case "5q8ZMcweI7O":
        Script3();
        break;
      case "6RNVApZYvCV":
        Script4();
        break;
      case "5jDhxBrXRKJ":
        Script5();
        break;
      case "66IVk96QdSo":
        Script6();
        break;
      case "6aQyTdaSb3g":
        Script7();
        break;
      case "5nHIv28dZs0":
        Script8();
        break;
      case "6Wdpk9TnkgS":
        Script9();
        break;
      case "6aMxxqOWlJd":
        Script10();
        break;
      case "5sSiLyD0gmO":
        Script11();
        break;
      case "5hTX8vwafBB":
        Script12();
        break;
      case "5UsYvVc1R8p":
        Script13();
        break;
      case "5m0gMVBMCyg":
        Script14();
        break;
      case "6H2qF0zotOX":
        Script15();
        break;
      case "5bhZiRIaTCa":
        Script16();
        break;
      case "6mhZAtHRaCr":
        Script17();
        break;
      case "5c5ZFPu49yM":
        Script18();
        break;
      case "5VurKAtPpEO":
        Script19();
        break;
      case "6bxbOAREiue":
        Script20();
        break;
      case "68I0eA4WHdB":
        Script21();
        break;
      case "6fMEdM4aC8K":
        Script22();
        break;
      case "6nws3VfGgA4":
        Script23();
        break;
      case "5cYf1xqstaT":
        Script24();
        break;
      case "6gl7kGAYwCz":
        Script25();
        break;
      case "5n6XQaSsJCv":
        Script26();
        break;
      case "5cW9KmrQJrf":
        Script27();
        break;
      case "5zuGCE2a09o":
        Script28();
        break;
      case "6krZLrCNlOO":
        Script29();
        break;
      case "5fjilXpwngb":
        Script30();
        break;
      case "5qt2WjPxC68":
        Script31();
        break;
      case "5twEAnoLzM1":
        Script32();
        break;
      case "6XPtIQ3b1sI":
        Script33();
        break;
      case "6VRSlfOEHRw":
        Script34();
        break;
      case "5dtw488YarP":
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
