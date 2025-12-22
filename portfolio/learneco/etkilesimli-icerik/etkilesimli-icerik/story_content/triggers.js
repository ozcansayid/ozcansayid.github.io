function ExecuteScript(strId)
{
  switch (strId)
  {
      case "66WbP4JvQ8L":
        Script1();
        break;
      case "6dWyHCL8gBW":
        Script2();
        break;
      case "6S5MauERGyi":
        Script3();
        break;
      case "6NdVSjKhGwG":
        Script4();
        break;
      case "5pfvUCfYx7B":
        Script5();
        break;
      case "66fAVN49EO8":
        Script6();
        break;
      case "66pGWPlYJTd":
        Script7();
        break;
      case "6D3pfcrAZeR":
        Script8();
        break;
      case "69ulxFyrizm":
        Script9();
        break;
      case "5i6QufvOBlN":
        Script10();
        break;
      case "6ISV4cjpng8":
        Script11();
        break;
      case "5fk4avbGNuX":
        Script12();
        break;
      case "5rJHjzZslxm":
        Script13();
        break;
      case "5Vka8lfpF86":
        Script14();
        break;
      case "6IREENhXxOk":
        Script15();
        break;
      case "5Y5063w0Duy":
        Script16();
        break;
      case "6gJG9taMw4B":
        Script17();
        break;
      case "5xdLmZIpSrH":
        Script18();
        break;
      case "6LTkDcGqaCC":
        Script19();
        break;
      case "6TkV0FLNRAk":
        Script20();
        break;
      case "6KCNE5GRcbB":
        Script21();
        break;
      case "6RWNNfEqzXv":
        Script22();
        break;
      case "5k9PUGp3zmB":
        Script23();
        break;
      case "63dcfqgPhQ4":
        Script24();
        break;
      case "6QYMDktshko":
        Script25();
        break;
      case "5eeqkvViYP1":
        Script26();
        break;
      case "6iGWLN0j5u1":
        Script27();
        break;
      case "5xMMSItJHtW":
        Script28();
        break;
      case "5uhBwFjsMUX":
        Script29();
        break;
      case "68Y5VigUfLH":
        Script30();
        break;
      case "64ObFUGKlm7":
        Script31();
        break;
      case "5ut5UwXFHfi":
        Script32();
        break;
      case "5nUpu9CdMji":
        Script33();
        break;
      case "5zC8qfH2KQZ":
        Script34();
        break;
      case "5b3U6UwlDaE":
        Script35();
        break;
      case "5mYVE8l2TKt":
        Script36();
        break;
      case "6lUlKINJfks":
        Script37();
        break;
      case "5XS9SDMGwuG":
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
