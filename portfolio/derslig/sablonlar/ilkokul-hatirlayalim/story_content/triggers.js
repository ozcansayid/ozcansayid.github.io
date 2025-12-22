function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5zjPF43NuxL":
        Script1();
        break;
      case "6JSic9oxmRw":
        Script2();
        break;
      case "5r84nM8GAUA":
        Script3();
        break;
      case "5pd8pWsQfi0":
        Script4();
        break;
      case "63Osu3Sj5Wt":
        Script5();
        break;
      case "6bPX0FxcZbh":
        Script6();
        break;
      case "5tUr411Wye8":
        Script7();
        break;
      case "6aphpWW33YF":
        Script8();
        break;
      case "6F8dyPSY5lM":
        Script9();
        break;
      case "6EA3FAoMOXB":
        Script10();
        break;
      case "6L7wZiNiFJy":
        Script11();
        break;
      case "6BwvxlgCWHP":
        Script12();
        break;
      case "6cLQRKYH3eF":
        Script13();
        break;
      case "6hj2KyyAvro":
        Script14();
        break;
      case "6ZGu0QibgbO":
        Script15();
        break;
      case "5q0ipS2flXd":
        Script16();
        break;
      case "6PuVRCF5K0P":
        Script17();
        break;
      case "5iKT7rNdTy4":
        Script18();
        break;
      case "5gW82yjGDdh":
        Script19();
        break;
      case "6iKke03BqNH":
        Script20();
        break;
      case "6jXhaZeKIaq":
        Script21();
        break;
      case "6YkD9z2p9SH":
        Script22();
        break;
      case "5wQPnVhF20u":
        Script23();
        break;
      case "5mDuXG8l409":
        Script24();
        break;
      case "5fSNFikhjYo":
        Script25();
        break;
      case "5cMBFM9tOp9":
        Script26();
        break;
      case "5wfI0h4tS8r":
        Script27();
        break;
      case "5z31zOU11gO":
        Script28();
        break;
      case "5tteOSzQH6K":
        Script29();
        break;
      case "5wvl4cABvi2":
        Script30();
        break;
      case "5y4vHZiO9iF":
        Script31();
        break;
      case "6lQtgbZkHPv":
        Script32();
        break;
      case "5tu3FdkmqHD":
        Script33();
        break;
      case "6QnWLXIJjoz":
        Script34();
        break;
      case "5z1maiF4wro":
        Script35();
        break;
      case "5vCudU8rAyf":
        Script36();
        break;
      case "6Upmyd6zgHI":
        Script37();
        break;
      case "6aoBE8Wd89P":
        Script38();
        break;
      case "6hsLflyZLUU":
        Script39();
        break;
      case "6R5zNEG7Zrv":
        Script40();
        break;
      case "6gWs57Vn3Ix":
        Script41();
        break;
      case "6Wg2EmImNcx":
        Script42();
        break;
      case "5ouGQ9Hfcd8":
        Script43();
        break;
      case "5xy5U1A2t0B":
        Script44();
        break;
      case "60urAQ423AE":
        Script45();
        break;
      case "5qtXZfTu7pt":
        Script46();
        break;
      case "6D9SGC5cDUs":
        Script47();
        break;
      case "6VxnXCjIPic":
        Script48();
        break;
      case "5VlQoDsT5x7":
        Script49();
        break;
      case "6V9nVN1NljH":
        Script50();
        break;
      case "6gDh8Co2jY7":
        Script51();
        break;
      case "5zzgV8daHwo":
        Script52();
        break;
      case "6DOrfknAj2Q":
        Script53();
        break;
      case "5Zihpun1dHz":
        Script54();
        break;
      case "5xc7kCfEkei":
        Script55();
        break;
      case "5sHd9AufLWe":
        Script56();
        break;
      case "6r7YtZoExOT":
        Script57();
        break;
      case "5lB2z0BBA4T":
        Script58();
        break;
      case "6h3QYSGhRV5":
        Script59();
        break;
      case "5lyl3DKtzov":
        Script60();
        break;
      case "5V8HSMyJ8nW":
        Script61();
        break;
      case "6pBarxkP3xR":
        Script62();
        break;
      case "5rMTkdh00wT":
        Script63();
        break;
      case "6Cz4tJ26fBz":
        Script64();
        break;
      case "6QSTGgK8Enl":
        Script65();
        break;
      case "5v7OjAvDEuj":
        Script66();
        break;
      case "5oDebhbp8bu":
        Script67();
        break;
      case "6ZYEo5ON2fN":
        Script68();
        break;
      case "5yKAMOXQTj6":
        Script69();
        break;
      case "6heY4nUSCLa":
        Script70();
        break;
      case "6eKWeLxwune":
        Script71();
        break;
      case "5ZXsMsBTwJD":
        Script72();
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
const target = object('64B3B5XJkbB');
const duration = 1000;
const easing = 'ease-out';
const id = '6c7aFbqZ134';
const pulseAmount = 0.07;
const delay = 1000;
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
const target = object('64B3B5XJkbB');
const duration = 1000;
const easing = 'ease-out';
const id = '6c7aFbqZ134';
const pulseAmount = 0.07;
const delay = 1000;
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

window.Script3 = function()
{
  player.once(() => {
const target = object('64B3B5XJkbB');
const duration = 1000;
const easing = 'ease-out';
const id = '6c7aFbqZ134';
const pulseAmount = 0.07;
const delay = 1000;
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

window.Script4 = function()
{
  player.once(() => {
const target = object('64B3B5XJkbB');
const duration = 1000;
const easing = 'ease-out';
const id = '6c7aFbqZ134';
const pulseAmount = 0.07;
const delay = 1000;
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

window.Script5 = function()
{
  player.once(() => {
const target = object('64B3B5XJkbB');
const duration = 1000;
const easing = 'ease-out';
const id = '6c7aFbqZ134';
const pulseAmount = 0.07;
const delay = 1000;
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
