function ExecuteScript(strId)
{
  switch (strId)
  {
      case "66q1N6sWzIB":
        Script1();
        break;
      case "6mxBj4xgJyp":
        Script2();
        break;
      case "6VBdhmqXMp2":
        Script3();
        break;
      case "6TKZRnAu0OD":
        Script4();
        break;
      case "5pe0ghAILyG":
        Script5();
        break;
      case "5vHnXm6OsdH":
        Script6();
        break;
      case "6bhrb26PgAa":
        Script7();
        break;
      case "5mwBMjnAwnG":
        Script8();
        break;
      case "6aHqSCi99Su":
        Script9();
        break;
      case "6eKPlsoNKE0":
        Script10();
        break;
      case "6ZMzErqhWTl":
        Script11();
        break;
      case "6IRY7VuFKgn":
        Script12();
        break;
      case "6R70gucfwP0":
        Script13();
        break;
      case "6D0hKpQPwCu":
        Script14();
        break;
      case "6bJKD3jnykI":
        Script15();
        break;
      case "6PHpmN0RndE":
        Script16();
        break;
      case "6hjaXbcr0iz":
        Script17();
        break;
      case "6kOETgJBKqn":
        Script18();
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
window.Script1 = function()
{
  const target = object('6SXvBxicWmi');
const duration = 1500;
const easing = 'ease-out';
const id = '6bfkDd7YZwA';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6jrsaUICmii');
const duration = 1500;
const easing = 'ease-out';
const id = '6Jt1q4oYQ01';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6SXvBxicWmi');
const duration = 1500;
const easing = 'ease-out';
const id = '6bfkDd7YZwA';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('61ubrN8VFEC');
const duration = 1500;
const easing = 'ease-out';
const id = '5bUyiJY7xuM';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6pVjYOaXN3U');
const duration = 1500;
const easing = 'ease-out';
const id = '5dlPbPrS1w7';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
