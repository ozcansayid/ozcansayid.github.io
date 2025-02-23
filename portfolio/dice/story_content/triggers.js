function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ic8SGhgz1d":
        Script1();
        break;
      case "6gybYAzc8PG":
        Script2();
        break;
      case "6YkPDbP7Jxy":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('60hNLSd96HW');
const duration = 1000;
const easing = 'ease-out';
const id = '6L5JvjG9amE';
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
  const target = object('6WsP8ptqIaT');
const duration = 2000;
const easing = 'ease-out';
const id = '5VgfbfUQPDH';
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
  const target = object('6WsP8ptqIaT');
const duration = 2000;
const easing = 'ease-out';
const id = '5VgfbfUQPDH';
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
