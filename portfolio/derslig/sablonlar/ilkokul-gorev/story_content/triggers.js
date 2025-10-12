function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6NVpjUCiUNF":
        Script1();
        break;
      case "5kZtC3JH0gW":
        Script2();
        break;
      case "6ZpV5tCq4MX":
        Script3();
        break;
      case "5vQditCVXUU":
        Script4();
        break;
      case "6ftW5zErmR9":
        Script5();
        break;
      case "6O2rfT5Ng1P":
        Script6();
        break;
      case "66T8ZZICgDd":
        Script7();
        break;
      case "6lHY6MXciQ5":
        Script8();
        break;
      case "6TUa43bxx7J":
        Script9();
        break;
      case "6Lcjh7T51Wm":
        Script10();
        break;
      case "62wLbrtRaJx":
        Script11();
        break;
      case "6qYwA2uo5BI":
        Script12();
        break;
      case "6Da4THQhWng":
        Script13();
        break;
      case "6GMyB0Hn3nB":
        Script14();
        break;
      case "5mJYjcEgAAQ":
        Script15();
        break;
      case "5ezVWsahYWn":
        Script16();
        break;
      case "5lurd1hy7Nm":
        Script17();
        break;
      case "6EifvrClt8M":
        Script18();
        break;
      case "61iiFqYaYpC":
        Script19();
        break;
      case "6gyT7m0b0g4":
        Script20();
        break;
      case "6eAkSFkPdGI":
        Script21();
        break;
      case "66xhPQ2wYYL":
        Script22();
        break;
      case "5xmeki9CMb0":
        Script23();
        break;
      case "6DhSayQufzO":
        Script24();
        break;
      case "5g19I5b6liL":
        Script25();
        break;
      case "6U05jRnhlyV":
        Script26();
        break;
      case "68fqoDtKCQK":
        Script27();
        break;
      case "69p6TVPbT35":
        Script28();
        break;
      case "5oLQKIZEUHH":
        Script29();
        break;
      case "6ZzBxLIEuUh":
        Script30();
        break;
      case "63DgdfWb3Vu":
        Script31();
        break;
      case "6f1n3LGJSw9":
        Script32();
        break;
      case "6Shwx43myzc":
        Script33();
        break;
      case "6HE3eDPukZk":
        Script34();
        break;
      case "6ZrsCUxEfDM":
        Script35();
        break;
      case "6aWAyTsjRpu":
        Script36();
        break;
      case "6422KmFPCL2":
        Script37();
        break;
      case "5pv63Zm5e5k":
        Script38();
        break;
      case "5qUnFXyvbyo":
        Script39();
        break;
      case "5ZFNOVkHznf":
        Script40();
        break;
      case "5VMumuIaN1q":
        Script41();
        break;
      case "6YiysvDgtnx":
        Script42();
        break;
      case "5pHD9IMxyKr":
        Script43();
        break;
      case "5rANtXP4iQV":
        Script44();
        break;
      case "6WNKl5Gz9we":
        Script45();
        break;
      case "63o6x4VotwK":
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
