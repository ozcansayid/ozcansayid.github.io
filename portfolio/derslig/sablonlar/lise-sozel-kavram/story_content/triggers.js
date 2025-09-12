function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5rtQFP9a0N6":
        Script1();
        break;
      case "6qdgl6kJ7uN":
        Script2();
        break;
      case "6Qhy1sRB2Xk":
        Script3();
        break;
      case "69FJFrFpnqe":
        Script4();
        break;
      case "6bJJw6wqqLS":
        Script5();
        break;
      case "5lIqOGXQ7mb":
        Script6();
        break;
      case "6fSGYcMpcsO":
        Script7();
        break;
      case "6pAniQTTXJF":
        Script8();
        break;
      case "5adMQJW7FI2":
        Script9();
        break;
      case "5YGmv31vhpc":
        Script10();
        break;
      case "63u5yp3QToo":
        Script11();
        break;
      case "6qtIuW6oyME":
        Script12();
        break;
      case "5f5FGOUavND":
        Script13();
        break;
      case "6W4jOmu9QmG":
        Script14();
        break;
      case "5tBesFPwYmr":
        Script15();
        break;
      case "6OXdEcRVqUJ":
        Script16();
        break;
      case "5fN9KhBh5nJ":
        Script17();
        break;
      case "5hVM5syNhzY":
        Script18();
        break;
      case "6fBzcSHJkHa":
        Script19();
        break;
      case "6rirOZVbIJk":
        Script20();
        break;
      case "6pkLhzHEexi":
        Script21();
        break;
      case "6CsGZt4vuFF":
        Script22();
        break;
      case "5ksFR4ukxtb":
        Script23();
        break;
      case "6SF1uQKaaNk":
        Script24();
        break;
      case "6qeWg0FyMql":
        Script25();
        break;
      case "6iLQGqVYxub":
        Script26();
        break;
      case "5eHLQhBj6GC":
        Script27();
        break;
      case "5WS8BhoeoYo":
        Script28();
        break;
      case "6JwWyhVNCvM":
        Script29();
        break;
      case "5y9jGvIBsJg":
        Script30();
        break;
      case "6HKgHlrqGQt":
        Script31();
        break;
      case "5gjFpdfEzWZ":
        Script32();
        break;
      case "6M5ONobR1J3":
        Script33();
        break;
      case "6Cw7hGEMv1G":
        Script34();
        break;
      case "6oH6KIdnGLL":
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
  const target = object('5hCkMzRjWfJ');
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
