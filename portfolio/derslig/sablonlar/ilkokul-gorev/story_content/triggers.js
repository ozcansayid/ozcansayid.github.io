function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5uyvduKNAfu":
        Script1();
        break;
      case "5pm4jxnP34e":
        Script2();
        break;
      case "5zaMVekmUR1":
        Script3();
        break;
      case "6fpivHlri50":
        Script4();
        break;
      case "6pe4mFtqhWF":
        Script5();
        break;
      case "6rbMbNIldIJ":
        Script6();
        break;
      case "6pNMzPvq87H":
        Script7();
        break;
      case "5vTcVw1pQ7U":
        Script8();
        break;
      case "630siT3C8gD":
        Script9();
        break;
      case "5o55k9MvRvX":
        Script10();
        break;
      case "6L8alIr6DZQ":
        Script11();
        break;
      case "5nJlh0mgPvN":
        Script12();
        break;
      case "5dWwga4QziD":
        Script13();
        break;
      case "6fyCqf30dan":
        Script14();
        break;
      case "61Q5fG2sqIn":
        Script15();
        break;
      case "6q5EkoArVDm":
        Script16();
        break;
      case "6eB6jhDyE5d":
        Script17();
        break;
      case "6dT43rFpQaB":
        Script18();
        break;
      case "6N3Hv2ymxIq":
        Script19();
        break;
      case "6nmfr62fd9P":
        Script20();
        break;
      case "5a1eEnKgjiY":
        Script21();
        break;
      case "6qjgNVlubEM":
        Script22();
        break;
      case "6H6A3KlarOm":
        Script23();
        break;
      case "6LXlyt3gEKb":
        Script24();
        break;
      case "66SOGQrlmhG":
        Script25();
        break;
      case "6Rgu7VRwN16":
        Script26();
        break;
      case "6Y3FGTkVmol":
        Script27();
        break;
      case "6H6f2lpWI3c":
        Script28();
        break;
      case "5qrIGceTUY3":
        Script29();
        break;
      case "5yXmOdznjCV":
        Script30();
        break;
      case "6lwZzc5MEzH":
        Script31();
        break;
      case "5qzgK6wSx3Q":
        Script32();
        break;
      case "5w9AJcExts8":
        Script33();
        break;
      case "5w91aZ8lgeZ":
        Script34();
        break;
      case "6CvafTmHURz":
        Script35();
        break;
      case "6QvGgFSOfdI":
        Script36();
        break;
      case "5aABlJzNqC2":
        Script37();
        break;
      case "6KRBlg62jmh":
        Script38();
        break;
      case "60exKuRXe1H":
        Script39();
        break;
      case "6mxwNe7j6Du":
        Script40();
        break;
      case "5bzR1LsUYDY":
        Script41();
        break;
      case "62kUZm9t5uX":
        Script42();
        break;
      case "6QeFBTCCyaS":
        Script43();
        break;
      case "6CycSWE1JDt":
        Script44();
        break;
      case "6eHGRsM8sgo":
        Script45();
        break;
      case "6aaRUiDXa7S":
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

};
