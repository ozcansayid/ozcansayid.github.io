function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5aNylnUBDBM":
        Script1();
        break;
      case "6oVCi86xzWz":
        Script2();
        break;
      case "6gi3SiwMDYC":
        Script3();
        break;
      case "5jfJQEgCRu7":
        Script4();
        break;
      case "6dBDMJg1Y6E":
        Script5();
        break;
      case "5nFlgD7WhHx":
        Script6();
        break;
      case "5iJpmLbknsj":
        Script7();
        break;
      case "6Usy3nXqDep":
        Script8();
        break;
      case "6JfJwoVaenV":
        Script9();
        break;
      case "5z1vgppDT8Z":
        Script10();
        break;
      case "6D5X6ScWmpx":
        Script11();
        break;
      case "5xw0OpTJ6GX":
        Script12();
        break;
      case "6VXvwk7d5HA":
        Script13();
        break;
      case "5y40Neat73b":
        Script14();
        break;
      case "6DOnsTCG88x":
        Script15();
        break;
      case "62P0veRBBYn":
        Script16();
        break;
      case "6GGSnMqCpXH":
        Script17();
        break;
      case "64LNbIZf0N3":
        Script18();
        break;
      case "5nP2RsanXqy":
        Script19();
        break;
      case "6dHfofScxdB":
        Script20();
        break;
      case "5tbgzHLb4P5":
        Script21();
        break;
      case "6AhuVpWyKkV":
        Script22();
        break;
      case "6fr1tBeYdGx":
        Script23();
        break;
      case "63esWkHlD5X":
        Script24();
        break;
      case "6Xj9P38xDWO":
        Script25();
        break;
      case "5tNkfBNYFkf":
        Script26();
        break;
      case "5o6irsCB4ZF":
        Script27();
        break;
      case "5nw9poEifRr":
        Script28();
        break;
      case "5yKiOZtfdwO":
        Script29();
        break;
      case "6YkEEvbje1p":
        Script30();
        break;
      case "5mEmIvFv3dA":
        Script31();
        break;
      case "6igzHfiDYJT":
        Script32();
        break;
      case "5ZQGXUl0tEO":
        Script33();
        break;
      case "5iLii72KcwK":
        Script34();
        break;
      case "5oo0IAot1CE":
        Script35();
        break;
      case "61Qdq3HwtAw":
        Script36();
        break;
      case "6RTnAtZxIuL":
        Script37();
        break;
      case "62ifHq0CaTW":
        Script38();
        break;
      case "6J5kKdjnNlc":
        Script39();
        break;
      case "5ke0tpGEuF0":
        Script40();
        break;
      case "5ucZLjcwhFY":
        Script41();
        break;
      case "6fJNj0tEuhe":
        Script42();
        break;
      case "64hjNWlvRDf":
        Script43();
        break;
      case "6fcbDc4CXvU":
        Script44();
        break;
      case "5zTliEsdg2j":
        Script45();
        break;
      case "6U8oevlOJGe":
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
