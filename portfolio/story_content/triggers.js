function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Pp39Gmw76Y":
        Script1();
        break;
      case "6fkiHbOXbBO":
        Script2();
        break;
      case "6DkCN78dVmS":
        Script3();
        break;
      case "6CBWa9OGJ5X":
        Script4();
        break;
      case "6gvsNfjrIaf":
        Script5();
        break;
      case "6c8JaWVwKKv":
        Script6();
        break;
      case "5viH5SxuZ74":
        Script7();
        break;
      case "5gWAsSr2uUa":
        Script8();
        break;
      case "6eYHQHE72TZ":
        Script9();
        break;
      case "67pQs7DF9iZ":
        Script10();
        break;
      case "6KyuqrrNdmW":
        Script11();
        break;
      case "5h619hygopw":
        Script12();
        break;
      case "5cK3MPOYc4k":
        Script13();
        break;
      case "5kVmgXYIUAe":
        Script14();
        break;
      case "5aIxmIoAxiv":
        Script15();
        break;
      case "5wANayuns5S":
        Script16();
        break;
      case "6Ro4mnjQHlF":
        Script17();
        break;
      case "61W3maK0del":
        Script18();
        break;
      case "65AN5kWeZfU":
        Script19();
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
