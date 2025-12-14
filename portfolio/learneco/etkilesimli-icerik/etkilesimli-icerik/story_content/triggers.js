function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5g4LfDppzcX":
        Script1();
        break;
      case "6N6ZG9lcxJg":
        Script2();
        break;
      case "6H9EsqHEqb7":
        Script3();
        break;
      case "6SXherNBANt":
        Script4();
        break;
      case "6orOJxpW9rR":
        Script5();
        break;
      case "6aa2xosDQGo":
        Script6();
        break;
      case "6Pn49hGmn2k":
        Script7();
        break;
      case "5Z0zm6d87uO":
        Script8();
        break;
      case "6QIVY8yXVDZ":
        Script9();
        break;
      case "5W6LrabgsJQ":
        Script10();
        break;
      case "6JObsnnZZ1q":
        Script11();
        break;
      case "6oxZmLnLQAA":
        Script12();
        break;
      case "6QGp8KJfGf1":
        Script13();
        break;
      case "5aZB1tDxI1z":
        Script14();
        break;
      case "5b0UaUSJnqJ":
        Script15();
        break;
      case "6MsjF2dvChH":
        Script16();
        break;
      case "6DuxIa3mUD3":
        Script17();
        break;
      case "67T5W2oFr9i":
        Script18();
        break;
      case "5fbZSKc2OA3":
        Script19();
        break;
      case "6cDvbuzBswR":
        Script20();
        break;
      case "5VuS0qpt5At":
        Script21();
        break;
      case "6YHYWdNYq6l":
        Script22();
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
const target = object('6dKKNMMoGNX');
const duration = 2500;
const easing = 'ease-out';
const id = '66QCYKgFem5';
const pulseAmount = 0.1;
const delay = 0;
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
const target = object('6oD1phuCJht');
const duration = 2500;
const easing = 'ease-out';
const id = '6SAcygqBz7d';
const pulseAmount = 0.1;
const delay = 0;
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
