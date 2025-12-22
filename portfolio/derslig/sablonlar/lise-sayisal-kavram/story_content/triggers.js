function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6U9Td24EDsx":
        Script1();
        break;
      case "6KZcrdLNgan":
        Script2();
        break;
      case "6r47w8q4Joi":
        Script3();
        break;
      case "5ekEGB6FnyJ":
        Script4();
        break;
      case "5W3rfaIc50b":
        Script5();
        break;
      case "5UkFIZYoZfK":
        Script6();
        break;
      case "5tBlRuev7XS":
        Script7();
        break;
      case "5r0s9c2YBWm":
        Script8();
        break;
      case "5mHAhYiu8P4":
        Script9();
        break;
      case "68bVwrHXgOD":
        Script10();
        break;
      case "6c5IdgQGwi4":
        Script11();
        break;
      case "6JfSLnWF96D":
        Script12();
        break;
      case "5icADKy3AFP":
        Script13();
        break;
      case "6dIEHQ0WP4O":
        Script14();
        break;
      case "5UxHUoIMqz7":
        Script15();
        break;
      case "6QcN8IQya8X":
        Script16();
        break;
      case "64xW3bTz9tB":
        Script17();
        break;
      case "5aoxdM5YjeF":
        Script18();
        break;
      case "6Lxo18gbMgw":
        Script19();
        break;
      case "6Jvvdpa25sG":
        Script20();
        break;
      case "5rvLk1emyhM":
        Script21();
        break;
      case "6NtBSWY07EF":
        Script22();
        break;
      case "6dNs6xgzx4n":
        Script23();
        break;
      case "6KAjicl0WEG":
        Script24();
        break;
      case "5i6UWPWdN5a":
        Script25();
        break;
      case "6oXRzrc346S":
        Script26();
        break;
      case "6oSbW7YvGbT":
        Script27();
        break;
      case "6ljeo9uFpey":
        Script28();
        break;
      case "6QiATUXt7bD":
        Script29();
        break;
      case "6nycaORszrs":
        Script30();
        break;
      case "5o8xBz3FQk2":
        Script31();
        break;
      case "6AZ0eBUqvBL":
        Script32();
        break;
      case "5azjSXkrcDz":
        Script33();
        break;
      case "6DWSliHn8O8":
        Script34();
        break;
      case "6OAEdK3Z7UB":
        Script35();
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
  const target = object('6GQd7ItH1ZF');
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
