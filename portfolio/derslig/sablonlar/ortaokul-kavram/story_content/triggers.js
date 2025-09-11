function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Fh9xQu0lIv":
        Script1();
        break;
      case "6SvoiC33NpP":
        Script2();
        break;
      case "6LCXA9j3lLd":
        Script3();
        break;
      case "6lQ8mJ9qO5E":
        Script4();
        break;
      case "6Q5t7PDxNeX":
        Script5();
        break;
      case "5sNPJTo8ME8":
        Script6();
        break;
      case "6qmOHAKHxft":
        Script7();
        break;
      case "6i6QxZcl6QO":
        Script8();
        break;
      case "6i7vPN13L8n":
        Script9();
        break;
      case "6eLl3zDxveO":
        Script10();
        break;
      case "66uZrwvxTOS":
        Script11();
        break;
      case "6bbpX4m37z9":
        Script12();
        break;
      case "5kJGffoUVDh":
        Script13();
        break;
      case "6asHde2e1OX":
        Script14();
        break;
      case "5dfflfVSr9t":
        Script15();
        break;
      case "67TFYMWhwC3":
        Script16();
        break;
      case "6pfuGAuqyY1":
        Script17();
        break;
      case "6Av6fgvRKIQ":
        Script18();
        break;
      case "6j2AhDy6mOV":
        Script19();
        break;
      case "5uXntRmAhpI":
        Script20();
        break;
      case "6G0pmRzuRNH":
        Script21();
        break;
      case "5b2yiCb4Cbk":
        Script22();
        break;
      case "6WizOk4h20M":
        Script23();
        break;
      case "5eQeiGOyyjd":
        Script24();
        break;
      case "6dWDTXkVtoQ":
        Script25();
        break;
      case "5e3H5bGIK2Q":
        Script26();
        break;
      case "5cSNlxwJN3u":
        Script27();
        break;
      case "66o6N4bmmx0":
        Script28();
        break;
      case "6oh92f0O7PU":
        Script29();
        break;
      case "5kVsKQIQeZr":
        Script30();
        break;
      case "6O8XYqqZxu5":
        Script31();
        break;
      case "6YxlLi5T95n":
        Script32();
        break;
      case "6a9oXDODtMZ":
        Script33();
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
  const target = object('6alnRUMss3e');
const duration = 3000;
const easing = 'ease-out';
const id = '5Us9bAhozjn';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
