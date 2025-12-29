function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZSqlaH8SvH":
        Script1();
        break;
      case "60LiiWhFevc":
        Script2();
        break;
      case "6QDt0YuFS0Q":
        Script3();
        break;
      case "6KEI2uPYb37":
        Script4();
        break;
      case "6iSkLq9AjvB":
        Script5();
        break;
      case "6cnCD7FapOW":
        Script6();
        break;
      case "5ojL3R9VQGw":
        Script7();
        break;
      case "67csG85Kkex":
        Script8();
        break;
      case "5UqfiDKeX6F":
        Script9();
        break;
      case "6CkYA7nSMmY":
        Script10();
        break;
      case "5jyukXdQxc2":
        Script11();
        break;
      case "5Yecv8k5zCf":
        Script12();
        break;
      case "6KoyQXC6TFj":
        Script13();
        break;
      case "6HI5OIsCPK6":
        Script14();
        break;
      case "65bev2fiQsz":
        Script15();
        break;
      case "5WD6wD7yzwf":
        Script16();
        break;
      case "6dMMaQHtpPy":
        Script17();
        break;
      case "6VZtFmm72zb":
        Script18();
        break;
      case "6WFtgaBbND7":
        Script19();
        break;
      case "61QaaQiJbbE":
        Script20();
        break;
      case "6kYwaCduqKn":
        Script21();
        break;
      case "6IQoiROycvf":
        Script22();
        break;
      case "6rVojtwo5qY":
        Script23();
        break;
      case "5gUOU1MN1z9":
        Script24();
        break;
      case "6px8DUcnHFl":
        Script25();
        break;
      case "6nG3tEVi9AO":
        Script26();
        break;
      case "5qbbAdRF7VX":
        Script27();
        break;
      case "6IDnTeXcC8T":
        Script28();
        break;
      case "5snG3ifHZS4":
        Script29();
        break;
      case "5zme14y6nin":
        Script30();
        break;
      case "5ng1mNEG8QA":
        Script31();
        break;
      case "5yzdQYNGwSr":
        Script32();
        break;
      case "6ffdmfvAYYW":
        Script33();
        break;
      case "647PVANZG2J":
        Script34();
        break;
      case "6TRf2lEnsP7":
        Script35();
        break;
      case "5YI32QBDlvn":
        Script36();
        break;
      case "6mHrYby4G0g":
        Script37();
        break;
      case "6fuEAX21Sgx":
        Script38();
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
