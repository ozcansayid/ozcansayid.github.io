function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6KGa7NAwF6E":
        Script1();
        break;
      case "5rBpKXW8kWK":
        Script2();
        break;
      case "6BBN1zslmuz":
        Script3();
        break;
      case "6SUMHDUCJI0":
        Script4();
        break;
      case "5g7ivphZoDF":
        Script5();
        break;
      case "69tC6vxei2V":
        Script6();
        break;
      case "6oSfxeNBCar":
        Script7();
        break;
      case "5xSdgr0RIJo":
        Script8();
        break;
      case "6ElnCTm1En7":
        Script9();
        break;
      case "6Uo2NzD8aZn":
        Script10();
        break;
      case "6SQ2EusBNkG":
        Script11();
        break;
      case "6KzIjrMhQxb":
        Script12();
        break;
      case "6KzHi0QzILm":
        Script13();
        break;
      case "6oBGAsVvM1f":
        Script14();
        break;
      case "6PvOx5DmJBW":
        Script15();
        break;
      case "6fJFQRWOZZK":
        Script16();
        break;
      case "61cmBNbuUk3":
        Script17();
        break;
      case "63nmLwvCZ5H":
        Script18();
        break;
      case "5dg2Fc3OeZT":
        Script19();
        break;
      case "5bJMAdhbMDT":
        Script20();
        break;
      case "61GJVXfv9Pq":
        Script21();
        break;
      case "6WSoBgNYIZc":
        Script22();
        break;
      case "5ooE47Mlgnv":
        Script23();
        break;
      case "5jn8ksUvs5E":
        Script24();
        break;
      case "5XDJal5U0rj":
        Script25();
        break;
      case "6X0pGngxa6c":
        Script26();
        break;
      case "6TL2uiQIfMx":
        Script27();
        break;
      case "6rmuFg0jAmW":
        Script28();
        break;
      case "6nFz9r396WU":
        Script29();
        break;
      case "68UpNltxftw":
        Script30();
        break;
      case "6c5kdGwrydW":
        Script31();
        break;
      case "5uIHo583uTR":
        Script32();
        break;
      case "6mYVIPSMTVL":
        Script33();
        break;
      case "5aMQovsVPVO":
        Script34();
        break;
      case "6GIImQgWaD8":
        Script35();
        break;
      case "6hUG8xMeQvO":
        Script36();
        break;
      case "5w6CLbvoCxg":
        Script37();
        break;
      case "5fmtFir1pKw":
        Script38();
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
  player.once(() => {
const target = object('6dKKNMMoGNX');
const duration = 2500;
const easing = 'ease-out';
const id = '66QCYKgFem5';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6oD1phuCJht');
const duration = 2500;
const easing = 'ease-out';
const id = '6SAcygqBz7d';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
