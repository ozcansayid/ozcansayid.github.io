function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6XEBv8NZzhz":
        Script1();
        break;
      case "6mTi46oWQNF":
        Script2();
        break;
      case "5cVqNtz55Q0":
        Script3();
        break;
      case "6NZBSjnWTDS":
        Script4();
        break;
      case "5bnjoMDQWRQ":
        Script5();
        break;
      case "5wAw1W80mrH":
        Script6();
        break;
      case "6dipCiZxAVH":
        Script7();
        break;
      case "6gxoDKhGPYg":
        Script8();
        break;
      case "6niHLcFP4Ie":
        Script9();
        break;
      case "6hrcgzjIB9f":
        Script10();
        break;
      case "6HdNvL3D7Vf":
        Script11();
        break;
      case "6KVOyqneUPH":
        Script12();
        break;
      case "5tJYCqh4JND":
        Script13();
        break;
      case "6CfeIYkDiLV":
        Script14();
        break;
      case "5x8MXz5yReE":
        Script15();
        break;
      case "6FR4ZbP0w7X":
        Script16();
        break;
      case "6DeDXAbdDlO":
        Script17();
        break;
      case "5iKmitc0O5j":
        Script18();
        break;
      case "5q5rcUJgatM":
        Script19();
        break;
      case "6YhLKkFEQ82":
        Script20();
        break;
      case "62JJKpIPMx1":
        Script21();
        break;
      case "6C3zUejRMpg":
        Script22();
        break;
      case "6YBcPepzRk7":
        Script23();
        break;
      case "5gr7PXLVXvs":
        Script24();
        break;
      case "5mgb1ZVpk6G":
        Script25();
        break;
      case "5ulFRacpW2h":
        Script26();
        break;
      case "5n1jciTQWkN":
        Script27();
        break;
      case "6284emhlT3L":
        Script28();
        break;
      case "6kx5A4WX4R1":
        Script29();
        break;
      case "5VTSGMZA81r":
        Script30();
        break;
      case "5Vfs1kgzwWZ":
        Script31();
        break;
      case "6dTdxQCEHEM":
        Script32();
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
