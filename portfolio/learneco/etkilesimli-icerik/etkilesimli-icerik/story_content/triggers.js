function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6lWOahVui6o":
        Script1();
        break;
      case "6qwxqSKoCn2":
        Script2();
        break;
      case "6LoMYMnyU1g":
        Script3();
        break;
      case "5rHQ2iUC7k9":
        Script4();
        break;
      case "6KqgragozGb":
        Script5();
        break;
      case "5xVTIxLl8Xy":
        Script6();
        break;
      case "6n3fVUwmKEk":
        Script7();
        break;
      case "5sAV297zkQ3":
        Script8();
        break;
      case "6GRMAIDyVZu":
        Script9();
        break;
      case "5tUO5Mlavnw":
        Script10();
        break;
      case "6eEcCnfaS1P":
        Script11();
        break;
      case "6NamUik54j7":
        Script12();
        break;
      case "5tccGXA3SSs":
        Script13();
        break;
      case "64Khh517C79":
        Script14();
        break;
      case "6MfIPq7SRCh":
        Script15();
        break;
      case "6G5pgXLh2TB":
        Script16();
        break;
      case "5upL4Puq4Vh":
        Script17();
        break;
      case "5mV5D8BlaGr":
        Script18();
        break;
      case "6KRUfLTxqRO":
        Script19();
        break;
      case "6ZzyJYKHk5K":
        Script20();
        break;
      case "6TbMKttkV9O":
        Script21();
        break;
      case "5Vav1owuo84":
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
