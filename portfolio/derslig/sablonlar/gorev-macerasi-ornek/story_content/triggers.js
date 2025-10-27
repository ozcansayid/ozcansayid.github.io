function ExecuteScript(strId)
{
  switch (strId)
  {
      case "69k8LHl4lyk":
        Script1();
        break;
      case "6cyEAy9k3PX":
        Script2();
        break;
      case "5xlNakHWZkE":
        Script3();
        break;
      case "5ctD9CLo3kc":
        Script4();
        break;
      case "6Opzm6csJXa":
        Script5();
        break;
      case "6cTUK2DBg8J":
        Script6();
        break;
      case "6OyOUHpF2VY":
        Script7();
        break;
      case "6d50KGZ7cAd":
        Script8();
        break;
      case "6UaA4IQLqjG":
        Script9();
        break;
      case "6MPvKWI2HhK":
        Script10();
        break;
      case "6I97gGE1332":
        Script11();
        break;
      case "5rSiOUUW5NG":
        Script12();
        break;
      case "6mxOrn3lxE7":
        Script13();
        break;
      case "6b90gW7cRzR":
        Script14();
        break;
      case "6nBd6UEpwzU":
        Script15();
        break;
      case "6MRi54SYRzl":
        Script16();
        break;
      case "5qIAyj7LzpJ":
        Script17();
        break;
      case "6avqulNmupQ":
        Script18();
        break;
      case "69YQyOy6dlB":
        Script19();
        break;
      case "6DeyP3DaFi7":
        Script20();
        break;
      case "6O7JhZNOxlr":
        Script21();
        break;
      case "6Y2k7TKKC77":
        Script22();
        break;
      case "6dANxsrwu2a":
        Script23();
        break;
      case "5boh2zq1qxE":
        Script24();
        break;
      case "5viacfKBwQ3":
        Script25();
        break;
      case "68byTSh4exY":
        Script26();
        break;
      case "6bpxXnax9YF":
        Script27();
        break;
      case "6rmzBvsCpwV":
        Script28();
        break;
      case "6Hcd7Bd1xdJ":
        Script29();
        break;
      case "6Y2caUH8wQF":
        Script30();
        break;
      case "6Od5U6x54Nf":
        Script31();
        break;
      case "6o7ebi2X2T4":
        Script32();
        break;
      case "5nyfIKhSiJX":
        Script33();
        break;
      case "6VttRApXEP5":
        Script34();
        break;
      case "6THkCNOO0XY":
        Script35();
        break;
      case "5yeC8Hg4NJB":
        Script36();
        break;
      case "6LYEuqxnilb":
        Script37();
        break;
      case "5tfzUYMLEcn":
        Script38();
        break;
      case "6IRpWpkHM9e":
        Script39();
        break;
      case "6ChMPrndksL":
        Script40();
        break;
      case "5ocMWEf8HMu":
        Script41();
        break;
      case "6VQbOfwpVD4":
        Script42();
        break;
      case "5sEUWWDgoc0":
        Script43();
        break;
      case "6X4XWM7Xhu8":
        Script44();
        break;
      case "6bkLNSjPP0I":
        Script45();
        break;
      case "5VKGcWVw3ZN":
        Script46();
        break;
      case "68B27TDETCQ":
        Script47();
        break;
      case "6aEp64wJ5iW":
        Script48();
        break;
      case "5nDyphOaOB5":
        Script49();
        break;
      case "5wgAUR82q0T":
        Script50();
        break;
      case "6a4byGF52O7":
        Script51();
        break;
      case "6D8aCdVDUcL":
        Script52();
        break;
      case "6GYiHGHpzhm":
        Script53();
        break;
      case "5bJPoy13IJ9":
        Script54();
        break;
      case "6KMuyHa4zVg":
        Script55();
        break;
      case "665oQbdoriM":
        Script56();
        break;
      case "5zGYceNOrXI":
        Script57();
        break;
      case "5dTVUICJmIs":
        Script58();
        break;
      case "6JYBubX1btZ":
        Script59();
        break;
      case "6Ih3Aa72VKL":
        Script60();
        break;
      case "6Ux0Bmh6gh9":
        Script61();
        break;
      case "6i3Bxk2vCzY":
        Script62();
        break;
      case "5yzmSvc80Wa":
        Script63();
        break;
      case "6cuNoEKkGit":
        Script64();
        break;
      case "5sdjrb5AJKs":
        Script65();
        break;
      case "6lSvIiDv79L":
        Script66();
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
const delay = 1250;
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
  const target = object('62uYoX5TH87');
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
const delay = 1250;
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
const delay = 1250;
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
const delay = 1250;
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
const delay = 1250;
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

window.Script16 = function()
{
  const target = object('6OwpmKZ3ZEB');
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

window.Script17 = function()
{
  player.once(() => {
const target = object('6oDHfhy5xpu');
const duration = 1000;
const easing = 'ease-out';
const id = '5m381nOE6vm';
const pulseAmount = 0.07;
const delay = 1250;
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

window.Script18 = function()
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

window.Script19 = function()
{
  const target = object('5Uwuy7kdic7');
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

window.Script20 = function()
{
  player.once(() => {
const target = object('6oDHfhy5xpu');
const duration = 1000;
const easing = 'ease-out';
const id = '5m381nOE6vm';
const pulseAmount = 0.07;
const delay = 1250;
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

window.Script21 = function()
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
