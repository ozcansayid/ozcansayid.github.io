function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6WTb3XuxzIL":
        Script1();
        break;
      case "6eLmfv9UqTi":
        Script2();
        break;
      case "6ouzsmCYUt3":
        Script3();
        break;
      case "5xqhdWBhIpS":
        Script4();
        break;
      case "6cKpK8JXcHq":
        Script5();
        break;
      case "6Elwvc5fj2P":
        Script6();
        break;
      case "6p2EdTnNYW5":
        Script7();
        break;
      case "61wXLqR57vQ":
        Script8();
        break;
      case "6OXSnr0QXdY":
        Script9();
        break;
      case "60LD9JspRbu":
        Script10();
        break;
      case "6ngHaGZZwMV":
        Script11();
        break;
      case "6H9lD8BECjo":
        Script12();
        break;
      case "6lqCDvcBdhX":
        Script13();
        break;
      case "5vAvuynKEb6":
        Script14();
        break;
      case "5gcgIDzVEqI":
        Script15();
        break;
      case "60kg6NPH3po":
        Script16();
        break;
      case "5dsKY6esUZe":
        Script17();
        break;
      case "6d5fDTcuwnQ":
        Script18();
        break;
      case "68yF1I2QEtU":
        Script19();
        break;
      case "5kRhdH6lPYx":
        Script20();
        break;
      case "65gsblivEWu":
        Script21();
        break;
      case "6kFmMTCIv7T":
        Script22();
        break;
      case "6Vu5Jx1DAcb":
        Script23();
        break;
      case "5XbPlq0yNR0":
        Script24();
        break;
      case "5xtRpTADa8H":
        Script25();
        break;
      case "6VhSYMAPAoe":
        Script26();
        break;
      case "6iq6iV0vS63":
        Script27();
        break;
      case "6QRa4lTlHTV":
        Script28();
        break;
      case "6MJtGDdryvU":
        Script29();
        break;
      case "5xlFBVIcXKd":
        Script30();
        break;
      case "5dkn7E0LSgM":
        Script31();
        break;
      case "6RRVAcVpkFZ":
        Script32();
        break;
      case "5gR5s5ARwpv":
        Script33();
        break;
      case "5yWbRtCV548":
        Script34();
        break;
      case "5XRzLNk5hXg":
        Script35();
        break;
      case "5WIuKbagLbh":
        Script36();
        break;
      case "6lzfDw6Eup5":
        Script37();
        break;
      case "5ePhSGQb8Fo":
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
