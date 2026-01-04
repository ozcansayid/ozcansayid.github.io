function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6CG6pG2WVCC":
        Script1();
        break;
      case "6nqZR0ObeHV":
        Script2();
        break;
      case "5wqmIwW5DIM":
        Script3();
        break;
      case "6dxXJcpN74Y":
        Script4();
        break;
      case "5jX6ntMGDsi":
        Script5();
        break;
      case "6fm3ldxJSYy":
        Script6();
        break;
      case "6ijiRF1r3Ad":
        Script7();
        break;
      case "5ef3MqstpUl":
        Script8();
        break;
      case "6KceP0TjtoI":
        Script9();
        break;
      case "5ozn9kGDfEy":
        Script10();
        break;
      case "5vrfYhagPqb":
        Script11();
        break;
      case "6bxWBM0joAy":
        Script12();
        break;
      case "6marU3TrnlV":
        Script13();
        break;
      case "5qwgRgdRgoh":
        Script14();
        break;
      case "6hvf0t1Kgtl":
        Script15();
        break;
      case "6jcjCvDhgbH":
        Script16();
        break;
      case "6mBnbWgfEv0":
        Script17();
        break;
      case "5gSlvEe3PCi":
        Script18();
        break;
      case "5aElSf6mdeZ":
        Script19();
        break;
      case "5xAyLfi208r":
        Script20();
        break;
      case "5oGpFpGx4mi":
        Script21();
        break;
      case "5cXxSjIaLJ4":
        Script22();
        break;
      case "66M2naqNez6":
        Script23();
        break;
      case "6SYaOpUrb6a":
        Script24();
        break;
      case "6NzsMeI8vFR":
        Script25();
        break;
      case "66yBJRUdLIc":
        Script26();
        break;
      case "5lPNzXeOGX8":
        Script27();
        break;
      case "5mwcIuY5EA6":
        Script28();
        break;
      case "66vzRJdbbqA":
        Script29();
        break;
      case "6INzEns6K0b":
        Script30();
        break;
      case "5m6VQ4WQCjy":
        Script31();
        break;
      case "5Y2FOveCVg3":
        Script32();
        break;
      case "5b0MoPTUvbB":
        Script33();
        break;
      case "6Fi7K9FFLfK":
        Script34();
        break;
      case "5sGg09DIaST":
        Script35();
        break;
      case "5am5RD0e3A3":
        Script36();
        break;
      case "5fDqye2JGdX":
        Script37();
        break;
      case "62wQJtwXl0O":
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
