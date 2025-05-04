function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6OOhGeutDkU":
        Script1();
        break;
      case "5vr7YSnHBbn":
        Script2();
        break;
      case "5m8fQVrt3Uy":
        Script3();
        break;
      case "6rmlooz8OQu":
        Script4();
        break;
      case "6ipditrlFMl":
        Script5();
        break;
      case "5peJ199SNHk":
        Script6();
        break;
      case "5VUAAj9gSn4":
        Script7();
        break;
      case "5dBWcvME4mT":
        Script8();
        break;
      case "6j4zY7HRaXo":
        Script9();
        break;
      case "5e6JbtamOzc":
        Script10();
        break;
      case "6KlxLoGhjLV":
        Script11();
        break;
      case "6GuFrJQTxsF":
        Script12();
        break;
      case "60z0ZmdHXHa":
        Script13();
        break;
      case "6OhZ0XAMZo8":
        Script14();
        break;
      case "6C2wegNAUXe":
        Script15();
        break;
      case "6aSFvkjTmI8":
        Script16();
        break;
      case "5kYofMrtmV0":
        Script17();
        break;
      case "6GgsRSEUQC8":
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
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
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
