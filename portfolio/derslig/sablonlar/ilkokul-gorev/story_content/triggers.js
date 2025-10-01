function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6rK04vbqjae":
        Script1();
        break;
      case "5g4yI7VNSp2":
        Script2();
        break;
      case "6ny3ZjrF4Rz":
        Script3();
        break;
      case "65z2lWipIb7":
        Script4();
        break;
      case "6DwmY3FType":
        Script5();
        break;
      case "6hdkX2r3D5Q":
        Script6();
        break;
      case "6LbmOaai4OE":
        Script7();
        break;
      case "5vEayfhLCrN":
        Script8();
        break;
      case "6IrcAtEVVXW":
        Script9();
        break;
      case "6p7dmGJ7eaf":
        Script10();
        break;
      case "6N4mO7qAgU2":
        Script11();
        break;
      case "5knnhxFYUov":
        Script12();
        break;
      case "5olyu5Fieqn":
        Script13();
        break;
      case "6BDzljAGAJk":
        Script14();
        break;
      case "5y34ClBa8DE":
        Script15();
        break;
      case "5zBwVm88Fkt":
        Script16();
        break;
      case "6NS8bJLJQr4":
        Script17();
        break;
      case "5sJW05sj7e6":
        Script18();
        break;
      case "5l4goBb0lwV":
        Script19();
        break;
      case "6YZ7aRNu8w3":
        Script20();
        break;
      case "5W2NR8lI1VL":
        Script21();
        break;
      case "5hcxwBEl1EP":
        Script22();
        break;
      case "5VMOFO31ElL":
        Script23();
        break;
      case "5uiWMhlDvas":
        Script24();
        break;
      case "6KXC07cRaCO":
        Script25();
        break;
      case "6pDjceNz57u":
        Script26();
        break;
      case "6l5P7XnsQRa":
        Script27();
        break;
      case "6eNWy2S2FNB":
        Script28();
        break;
      case "5qGHSR1qG4s":
        Script29();
        break;
      case "5ofr5LADkxr":
        Script30();
        break;
      case "6XOrJyX0Z2g":
        Script31();
        break;
      case "5Xyq26Q3ZUj":
        Script32();
        break;
      case "6BnAPrwqV2c":
        Script33();
        break;
      case "5zQQ9LhKFC7":
        Script34();
        break;
      case "6BpdV6YFUsK":
        Script35();
        break;
      case "6VS5NeSitMp":
        Script36();
        break;
      case "6FJE9NWwHTb":
        Script37();
        break;
      case "6kMDnuZFeU2":
        Script38();
        break;
      case "5WYufQ06MVi":
        Script39();
        break;
      case "6ooMMaEEzS6":
        Script40();
        break;
      case "64G7NNzbvKM":
        Script41();
        break;
      case "5hfWsqM8PAT":
        Script42();
        break;
      case "6BcVZv0Z6pY":
        Script43();
        break;
      case "6CtBMJ205Lh":
        Script44();
        break;
      case "6ICEZ1xenxl":
        Script45();
        break;
      case "5qwhLWFI42t":
        Script46();
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
  const target = object('5W0AHm5MxHo');
const duration = 750;
const easing = 'ease-out';
const id = '5mvL1CWorfw';
const shrinkAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6oDHfhy5xpu');
const duration = 1000;
const easing = 'ease-out';
const id = '5m381nOE6vm';
const pulseAmount = 0.07;
const delay = 1500;
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
const target = object('5d9NlRACmbL');
const duration = 1000;
const easing = 'ease-out';
const id = '5tRtnNLYLRd';
const pulseAmount = 0.07;
const delay = 750;
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
  const target = object('6V4ibpHIC21');
const duration = 750;
const easing = 'ease-out';
const id = '5mvL1CWorfw';
const shrinkAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6oDHfhy5xpu');
const duration = 1000;
const easing = 'ease-out';
const id = '5m381nOE6vm';
const pulseAmount = 0.07;
const delay = 1500;
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

window.Script6 = function()
{
  player.once(() => {
const target = object('5d9NlRACmbL');
const duration = 1000;
const easing = 'ease-out';
const id = '5tRtnNLYLRd';
const pulseAmount = 0.07;
const delay = 750;
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

window.Script7 = function()
{
  const target = object('5hRHLJcM16R');
const duration = 750;
const easing = 'ease-out';
const id = '5mvL1CWorfw';
const shrinkAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  player.once(() => {
const target = object('6oDHfhy5xpu');
const duration = 1000;
const easing = 'ease-out';
const id = '5m381nOE6vm';
const pulseAmount = 0.07;
const delay = 1500;
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

window.Script9 = function()
{
  player.once(() => {
const target = object('5d9NlRACmbL');
const duration = 1000;
const easing = 'ease-out';
const id = '5tRtnNLYLRd';
const pulseAmount = 0.07;
const delay = 750;
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

window.Script10 = function()
{
  const target = object('5y1pCAArTP2');
const duration = 750;
const easing = 'ease-out';
const id = '5mvL1CWorfw';
const shrinkAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  player.once(() => {
const target = object('6oDHfhy5xpu');
const duration = 1000;
const easing = 'ease-out';
const id = '5m381nOE6vm';
const pulseAmount = 0.07;
const delay = 1500;
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

window.Script12 = function()
{
  player.once(() => {
const target = object('5d9NlRACmbL');
const duration = 1000;
const easing = 'ease-out';
const id = '5tRtnNLYLRd';
const pulseAmount = 0.07;
const delay = 750;
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

window.Script13 = function()
{
  const target = object('6pnyQ4sEPgK');
const duration = 750;
const easing = 'ease-out';
const id = '5mvL1CWorfw';
const shrinkAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  player.once(() => {
const target = object('6oDHfhy5xpu');
const duration = 1000;
const easing = 'ease-out';
const id = '5m381nOE6vm';
const pulseAmount = 0.07;
const delay = 1500;
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

window.Script15 = function()
{
  player.once(() => {
const target = object('5d9NlRACmbL');
const duration = 1000;
const easing = 'ease-out';
const id = '5tRtnNLYLRd';
const pulseAmount = 0.07;
const delay = 750;
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
