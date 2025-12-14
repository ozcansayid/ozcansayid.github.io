window.InitUserScripts = function()
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
window.Script3 = function()
{
  const step_1 = object('62lCoslvOIw');
const step_2 = object('6ZYguqSoYil');
const step_3 = object('5cAFRxZ37Lb');
const step_4 = object('5pb1HoyhQGN');

let player = GetPlayer();
let var_step_1 = player.GetVar("var_step_1");
let var_step_2 = player.GetVar("var_step_2");
let var_step_3 = player.GetVar("var_step_3");
let var_step_4 = player.GetVar("var_step_4");
let pageNumber = player.GetVar("pageNumber");

//Sayfa Numarasına göre navigasyon durumları
if(pageNumber === 1)
{
	if(var_step_2 === 1)
	{
		step_2.state = 'Normal';
	}
	else{
		step_2.state = 'hex_2_completed';
	}
	
	if(var_step_3 === 1)
	{
		step_3.state = 'Normal';
	}
	else{
		step_3.state = 'hex_3_completed';
	}
	
	if(var_step_4 === 1)
	{
		step_4.state = 'Normal';
	}
	else{
		step_4.state = 'hex_4_completed';
	}
	step_1.state = 'hex_1_active';
}
else if(pageNumber === 2)
{	
	if(var_step_1 === 1)
	{
		step_1.state = 'Normal';
	}
	else{
		step_1.state = 'hex_1_completed';
	}
	
	if(var_step_3 === 1)
	{
		step_3.state = 'Normal';
	}
	else{
		step_3.state = 'hex_3_completed';
	}
	
	if(var_step_4 === 1)
	{
		step_4.state = 'Normal';
	}
	else{
		step_4.state = 'hex_4_completed';
	}
	step_2.state = 'hex_2_active';
}
else if(pageNumber === 3)
{
	if(var_step_1 === 1)
	{
		step_1.state = 'Normal';
	}
	else{
		step_1.state = 'hex_1_completed';
	}
	
	if(var_step_2 === 1)
	{
		step_2.state = 'Normal';
	}
	else{
		step_2.state = 'hex_2_completed';
	}
	
	if(var_step_4 === 1)
	{
		step_4.state = 'Normal';
	}
	else{
		step_4.state = 'hex_4_completed';
	}
	step_3.state = 'hex_3_active';
}
else if(pageNumber === 4)
{
	if(var_step_1 === 1)
	{
		step_1.state = 'Normal';
	}
	else{
		step_1.state = 'hex_1_completed';
	}
	
	if(var_step_3 === 1)
	{
		step_3.state = 'Normal';
	}
	else{
		step_3.state = 'hex_3_completed';
	}
	
	if(var_step_2 === 1)
	{
		step_2.state = 'Normal';
	}
	else{
		step_2.state = 'hex_2_completed';
	}
	step_4.state = 'hex_4_active';
}

}

window.Script4 = function()
{
  const heart_1 = object('6KkZV4npcv8');
const heart_2 = object('5miOLS1fQ1w');
let player = GetPlayer();
let live_1 = player.GetVar("live_1");
let live_2 = player.GetVar("live_2");
let live_3 = player.GetVar("live_3");
let live_4 = player.GetVar("live_4");
let pageNumber = player.GetVar("pageNumber");

if(pageNumber === 1)
{
	if(live_1 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_1 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 2)
{
	if(live_2 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_2 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 3)
{
	if(live_3 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_3 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 4)
{
	if(live_4 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_4 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
}

window.Script5 = function()
{
  
// Storyline değişkenini al
var player = GetPlayer();
var videoID = player.GetVar("video_ID"); 

// iframe'i ID'sine göre seç (Buradaki 'youtube-iframe' ismini HTML'de de vermelisiniz)
var iframe = document.getElementById("672yzfPJjRK_iframe");

if (iframe && videoID) {
    // Yeni URL oluştur (autoplay ekledik ki sorunsuz başlasın)
var newURL = "https://www.youtube.com/embed/" + videoID + "?autoplay=1&enablejsapi=1";

    // URL'i iframe'e ata
    iframe.src = newURL;
} else {
    console.log("Hata: Iframe bulunamadı veya Video ID boş.");
}
}

window.Script6 = function()
{
  const step_1 = object('62lCoslvOIw');
const step_2 = object('6ZYguqSoYil');
const step_3 = object('5cAFRxZ37Lb');
const step_4 = object('5pb1HoyhQGN');

let player = GetPlayer();
let var_step_1 = player.GetVar("var_step_1");
let var_step_2 = player.GetVar("var_step_2");
let var_step_3 = player.GetVar("var_step_3");
let var_step_4 = player.GetVar("var_step_4");
let pageNumber = player.GetVar("pageNumber");

//Sayfa Numarasına göre navigasyon durumları
if(pageNumber === 1)
{
	if(var_step_2 === 1)
	{
		step_2.state = 'Normal';
	}
	else{
		step_2.state = 'hex_2_completed';
	}
	
	if(var_step_3 === 1)
	{
		step_3.state = 'Normal';
	}
	else{
		step_3.state = 'hex_3_completed';
	}
	
	if(var_step_4 === 1)
	{
		step_4.state = 'Normal';
	}
	else{
		step_4.state = 'hex_4_completed';
	}
	step_1.state = 'hex_1_active';
}
else if(pageNumber === 2)
{	
	if(var_step_1 === 1)
	{
		step_1.state = 'Normal';
	}
	else{
		step_1.state = 'hex_1_completed';
	}
	
	if(var_step_3 === 1)
	{
		step_3.state = 'Normal';
	}
	else{
		step_3.state = 'hex_3_completed';
	}
	
	if(var_step_4 === 1)
	{
		step_4.state = 'Normal';
	}
	else{
		step_4.state = 'hex_4_completed';
	}
	step_2.state = 'hex_2_active';
}
else if(pageNumber === 3)
{
	if(var_step_1 === 1)
	{
		step_1.state = 'Normal';
	}
	else{
		step_1.state = 'hex_1_completed';
	}
	
	if(var_step_2 === 1)
	{
		step_2.state = 'Normal';
	}
	else{
		step_2.state = 'hex_2_completed';
	}
	
	if(var_step_4 === 1)
	{
		step_4.state = 'Normal';
	}
	else{
		step_4.state = 'hex_4_completed';
	}
	step_3.state = 'hex_3_active';
}
else if(pageNumber === 4)
{
	if(var_step_1 === 1)
	{
		step_1.state = 'Normal';
	}
	else{
		step_1.state = 'hex_1_completed';
	}
	
	if(var_step_3 === 1)
	{
		step_3.state = 'Normal';
	}
	else{
		step_3.state = 'hex_3_completed';
	}
	
	if(var_step_2 === 1)
	{
		step_2.state = 'Normal';
	}
	else{
		step_2.state = 'hex_2_completed';
	}
	step_4.state = 'hex_4_active';
}

}

window.Script7 = function()
{
  const heart_1 = object('6KkZV4npcv8');
const heart_2 = object('5miOLS1fQ1w');
let player = GetPlayer();
let live_1 = player.GetVar("live_1");
let live_2 = player.GetVar("live_2");
let live_3 = player.GetVar("live_3");
let live_4 = player.GetVar("live_4");
let pageNumber = player.GetVar("pageNumber");

if(pageNumber === 1)
{
	if(live_1 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_1 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 2)
{
	if(live_2 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_2 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 3)
{
	if(live_3 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_3 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 4)
{
	if(live_4 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_4 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
}

window.Script8 = function()
{
  const heart_1 = object('6KkZV4npcv8');
const heart_2 = object('5miOLS1fQ1w');
let player = GetPlayer();
let live_1 = player.GetVar("live_1");
let live_2 = player.GetVar("live_2");
let live_3 = player.GetVar("live_3");
let live_4 = player.GetVar("live_4");
let pageNumber = player.GetVar("pageNumber");

if(pageNumber === 1)
{
	if(live_1 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_1 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 2)
{
	if(live_2 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_2 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 3)
{
	if(live_3 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_3 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 4)
{
	if(live_4 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_4 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
}

window.Script9 = function()
{
  const heart_1 = object('6KkZV4npcv8');
const heart_2 = object('5miOLS1fQ1w');
let player = GetPlayer();
let live_1 = player.GetVar("live_1");
let live_2 = player.GetVar("live_2");
let live_3 = player.GetVar("live_3");
let live_4 = player.GetVar("live_4");
let pageNumber = player.GetVar("pageNumber");

if(pageNumber === 1)
{
	if(live_1 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_1 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 2)
{
	if(live_2 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_2 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 3)
{
	if(live_3 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_3 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 4)
{
	if(live_4 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_4 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
}

window.Script10 = function()
{
  const step_1 = object('62lCoslvOIw');
const step_2 = object('6ZYguqSoYil');
const step_3 = object('5cAFRxZ37Lb');
const step_4 = object('5pb1HoyhQGN');

let player = GetPlayer();
let var_step_1 = player.GetVar("var_step_1");
let var_step_2 = player.GetVar("var_step_2");
let var_step_3 = player.GetVar("var_step_3");
let var_step_4 = player.GetVar("var_step_4");
let pageNumber = player.GetVar("pageNumber");

//Sayfa Numarasına göre navigasyon durumları
if(pageNumber === 1)
{
	if(var_step_2 === 1)
	{
		step_2.state = 'Normal';
	}
	else{
		step_2.state = 'hex_2_completed';
	}
	
	if(var_step_3 === 1)
	{
		step_3.state = 'Normal';
	}
	else{
		step_3.state = 'hex_3_completed';
	}
	
	if(var_step_4 === 1)
	{
		step_4.state = 'Normal';
	}
	else{
		step_4.state = 'hex_4_completed';
	}
	step_1.state = 'hex_1_active';
}
else if(pageNumber === 2)
{	
	if(var_step_1 === 1)
	{
		step_1.state = 'Normal';
	}
	else{
		step_1.state = 'hex_1_completed';
	}
	
	if(var_step_3 === 1)
	{
		step_3.state = 'Normal';
	}
	else{
		step_3.state = 'hex_3_completed';
	}
	
	if(var_step_4 === 1)
	{
		step_4.state = 'Normal';
	}
	else{
		step_4.state = 'hex_4_completed';
	}
	step_2.state = 'hex_2_active';
}
else if(pageNumber === 3)
{
	if(var_step_1 === 1)
	{
		step_1.state = 'Normal';
	}
	else{
		step_1.state = 'hex_1_completed';
	}
	
	if(var_step_2 === 1)
	{
		step_2.state = 'Normal';
	}
	else{
		step_2.state = 'hex_2_completed';
	}
	
	if(var_step_4 === 1)
	{
		step_4.state = 'Normal';
	}
	else{
		step_4.state = 'hex_4_completed';
	}
	step_3.state = 'hex_3_active';
}
else if(pageNumber === 4)
{
	if(var_step_1 === 1)
	{
		step_1.state = 'Normal';
	}
	else{
		step_1.state = 'hex_1_completed';
	}
	
	if(var_step_3 === 1)
	{
		step_3.state = 'Normal';
	}
	else{
		step_3.state = 'hex_3_completed';
	}
	
	if(var_step_2 === 1)
	{
		step_2.state = 'Normal';
	}
	else{
		step_2.state = 'hex_2_completed';
	}
	step_4.state = 'hex_4_active';
}

}

window.Script11 = function()
{
  const heart_1 = object('6KkZV4npcv8');
const heart_2 = object('5miOLS1fQ1w');
let player = GetPlayer();
let live_1 = player.GetVar("live_1");
let live_2 = player.GetVar("live_2");
let live_3 = player.GetVar("live_3");
let live_4 = player.GetVar("live_4");
let pageNumber = player.GetVar("pageNumber");

if(pageNumber === 1)
{
	if(live_1 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_1 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 2)
{
	if(live_2 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_2 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 3)
{
	if(live_3 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_3 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 4)
{
	if(live_4 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_4 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
}

window.Script12 = function()
{
  const drag_1 = object('69juczDc1xM');
const drag_2 = object('5pefBl8jB9M');
const drag_3 = object('6hEV8WTufot');
const drag_4 = object('6Lx7FbdnPiB');
const drag_5 = object('5ixzJl7fiWz');

let player = GetPlayer();

player.SetVar("drag_x_1",drag_1.x);
player.SetVar("drag_y_1",drag_1.y);
player.SetVar("drag_x_2",drag_2.x);
player.SetVar("drag_y_2",drag_2.y);
player.SetVar("drag_x_3",drag_3.x);
player.SetVar("drag_y_3",drag_3.y);
player.SetVar("drag_x_4",drag_4.x);
player.SetVar("drag_y_4",drag_4.y);
player.SetVar("drag_x_5",drag_5.x);
player.SetVar("drag_y_5",drag_5.y);
}

window.Script13 = function()
{
  const heart_1 = object('6KkZV4npcv8');
const heart_2 = object('5miOLS1fQ1w');
let player = GetPlayer();
let live_1 = player.GetVar("live_1");
let live_2 = player.GetVar("live_2");
let live_3 = player.GetVar("live_3");
let live_4 = player.GetVar("live_4");
let pageNumber = player.GetVar("pageNumber");

if(pageNumber === 1)
{
	if(live_1 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_1 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 2)
{
	if(live_2 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_2 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 3)
{
	if(live_3 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_3 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 4)
{
	if(live_4 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_4 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
}

window.Script14 = function()
{
  const drag_1 = object('69juczDc1xM');
const drag_2 = object('5pefBl8jB9M');
const drag_3 = object('6hEV8WTufot');
const drag_4 = object('6Lx7FbdnPiB');
const drag_5 = object('5ixzJl7fiWz');

let player = GetPlayer();
let drag_x_1 = player.GetVar("drag_x_1");
let drag_y_1 = player.GetVar("drag_y_1");
let drag_x_2 = player.GetVar("drag_x_2");
let drag_y_2 = player.GetVar("drag_y_2");
let drag_x_3 = player.GetVar("drag_x_3");
let drag_y_3 = player.GetVar("drag_y_3");
let drag_x_4 = player.GetVar("drag_x_4");
let drag_y_4 = player.GetVar("drag_y_4");
let drag_x_5 = player.GetVar("drag_x_5");
let drag_y_6 = player.GetVar("drag_y_5");

console.log("1-"+drag_1.state);
console.log("2-"+drag_2.state);
console.log("3-"+drag_3.state);


if(drag_1.x!==drag_x_1 || drag_1.y!==drag_y_1)
{
	if(drag_1.state==='_default_Drop Correct')
	{
		drag_1.state='Correct';
	}
	else{
		drag_1.state='Incorrect';
	}
}

if(drag_2.x!==drag_x_2 || drag_2.y!==drag_y_2)
{
	if(drag_2.state==='_default_Drop Correct')
	{
		drag_2.state='Correct';
	}
	else{
		drag_2.state='Incorrect';
	}
}

if(drag_3.x!==drag_x_3 || drag_3.y!==drag_y_3)
{
	if(drag_3.state==='_default_Drop Correct')
	{
		drag_3.state='Correct';
	}
	else{
		drag_3.state='Incorrect';
	}
}

if(drag_4.x!==drag_x_4 || drag_4.y!==drag_y_4)
{
	if(drag_4.state==='_default_Drop Correct')
	{
		drag_4.state='Correct';
	}
	else{
		drag_4.state='Incorrect';
	}
}

if(drag_5.x!==drag_x_5 || drag_5.y!==drag_y_5)
{
	if(drag_5.state==='_default_Drop Correct')
	{
		drag_5.state='Correct';
	}
	else{
		drag_5.state='Incorrect';
	}
}
}

window.Script15 = function()
{
  const heart_1 = object('6KkZV4npcv8');
const heart_2 = object('5miOLS1fQ1w');
let player = GetPlayer();
let live_1 = player.GetVar("live_1");
let live_2 = player.GetVar("live_2");
let live_3 = player.GetVar("live_3");
let live_4 = player.GetVar("live_4");
let pageNumber = player.GetVar("pageNumber");

if(pageNumber === 1)
{
	if(live_1 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_1 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 2)
{
	if(live_2 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_2 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 3)
{
	if(live_3 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_3 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 4)
{
	if(live_4 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_4 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
}

window.Script16 = function()
{
  const drag_1 = object('69juczDc1xM');
const drag_2 = object('5pefBl8jB9M');
const drag_3 = object('6hEV8WTufot');
const drag_4 = object('6Lx7FbdnPiB');
const drag_5 = object('5ixzJl7fiWz');

let player = GetPlayer();
let drag_x_1 = player.GetVar("drag_x_1");
let drag_y_1 = player.GetVar("drag_y_1");
let drag_x_2 = player.GetVar("drag_x_2");
let drag_y_2 = player.GetVar("drag_y_2");
let drag_x_3 = player.GetVar("drag_x_3");
let drag_y_3 = player.GetVar("drag_y_3");
let drag_x_4 = player.GetVar("drag_x_4");
let drag_y_4 = player.GetVar("drag_y_4");
let drag_x_5 = player.GetVar("drag_x_5");
let drag_y_6 = player.GetVar("drag_y_5");

console.log("1-"+drag_1.state);
console.log("2-"+drag_2.state);
console.log("3-"+drag_3.state);


if(drag_1.x!==drag_x_1 || drag_1.y!==drag_y_1)
{
	if(drag_1.state==='_default_Drop Incorrect' || drag_1.state==='Incorrect_Disabled_Drop Incorrect')
	{
		drag_1.state='Incorrect';
	}
	else{
		drag_1.state='Correct';
	}
}

if(drag_2.x!==drag_x_2 || drag_2.y!==drag_y_2)
{
	if(drag_2.state==='_default_Drop Incorrect' || drag_2.state==='Incorrect_Disabled_Drop Incorrect')
	{
		drag_2.state='Incorrect';
	}
	else{
		drag_2.state='Correct';
	}
}

if(drag_3.x!==drag_x_3 || drag_3.y!==drag_y_3)
{
	if(drag_3.state==='_default_Drop Incorrect' || drag_3.state==='Incorrect_Disabled_Drop Incorrect')
	{
		drag_3.state='Incorrect';
	}
	else{
		drag_3.state='Correct';
	}
}

if(drag_4.x!==drag_x_4 || drag_4.y!==drag_y_4)
{
	if(drag_4.state==='_default_Drop Incorrect' || drag_4.state==='Incorrect_Disabled_Drop Incorrect')
	{
		drag_4.state='Correct';
	}
	else{
		drag_4.state='Incorrect';
	}
}

if(drag_5.x!==drag_x_5 || drag_5.y!==drag_y_5)
{
	if(drag_5.state==='_default_Drop Incorrect' || drag_5.state==='Incorrect_Disabled_Drop Incorrect')
	{
		drag_5.state='Correct';
	}
	else{
		drag_5.state='Incorrect';
	}
}
}

window.Script17 = function()
{
  const step_1 = object('62lCoslvOIw');
const step_2 = object('6ZYguqSoYil');
const step_3 = object('5cAFRxZ37Lb');
const step_4 = object('5pb1HoyhQGN');

let player = GetPlayer();
let var_step_1 = player.GetVar("var_step_1");
let var_step_2 = player.GetVar("var_step_2");
let var_step_3 = player.GetVar("var_step_3");
let var_step_4 = player.GetVar("var_step_4");
let pageNumber = player.GetVar("pageNumber");

//Sayfa Numarasına göre navigasyon durumları
if(pageNumber === 1)
{
	if(var_step_2 === 1)
	{
		step_2.state = 'Normal';
	}
	else{
		step_2.state = 'hex_2_completed';
	}
	
	if(var_step_3 === 1)
	{
		step_3.state = 'Normal';
	}
	else{
		step_3.state = 'hex_3_completed';
	}
	
	if(var_step_4 === 1)
	{
		step_4.state = 'Normal';
	}
	else{
		step_4.state = 'hex_4_completed';
	}
	step_1.state = 'hex_1_active';
}
else if(pageNumber === 2)
{	
	if(var_step_1 === 1)
	{
		step_1.state = 'Normal';
	}
	else{
		step_1.state = 'hex_1_completed';
	}
	
	if(var_step_3 === 1)
	{
		step_3.state = 'Normal';
	}
	else{
		step_3.state = 'hex_3_completed';
	}
	
	if(var_step_4 === 1)
	{
		step_4.state = 'Normal';
	}
	else{
		step_4.state = 'hex_4_completed';
	}
	step_2.state = 'hex_2_active';
}
else if(pageNumber === 3)
{
	if(var_step_1 === 1)
	{
		step_1.state = 'Normal';
	}
	else{
		step_1.state = 'hex_1_completed';
	}
	
	if(var_step_2 === 1)
	{
		step_2.state = 'Normal';
	}
	else{
		step_2.state = 'hex_2_completed';
	}
	
	if(var_step_4 === 1)
	{
		step_4.state = 'Normal';
	}
	else{
		step_4.state = 'hex_4_completed';
	}
	step_3.state = 'hex_3_active';
}
else if(pageNumber === 4)
{
	if(var_step_1 === 1)
	{
		step_1.state = 'Normal';
	}
	else{
		step_1.state = 'hex_1_completed';
	}
	
	if(var_step_3 === 1)
	{
		step_3.state = 'Normal';
	}
	else{
		step_3.state = 'hex_3_completed';
	}
	
	if(var_step_2 === 1)
	{
		step_2.state = 'Normal';
	}
	else{
		step_2.state = 'hex_2_completed';
	}
	step_4.state = 'hex_4_active';
}

}

window.Script18 = function()
{
  const heart_1 = object('6KkZV4npcv8');
const heart_2 = object('5miOLS1fQ1w');
let player = GetPlayer();
let live_1 = player.GetVar("live_1");
let live_2 = player.GetVar("live_2");
let live_3 = player.GetVar("live_3");
let live_4 = player.GetVar("live_4");
let pageNumber = player.GetVar("pageNumber");

if(pageNumber === 1)
{
	if(live_1 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_1 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 2)
{
	if(live_2 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_2 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 3)
{
	if(live_3 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_3 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 4)
{
	if(live_4 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_4 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
}

window.Script19 = function()
{
  const heart_1 = object('6KkZV4npcv8');
const heart_2 = object('5miOLS1fQ1w');
let player = GetPlayer();
let live_1 = player.GetVar("live_1");
let live_2 = player.GetVar("live_2");
let live_3 = player.GetVar("live_3");
let live_4 = player.GetVar("live_4");
let pageNumber = player.GetVar("pageNumber");

if(pageNumber === 1)
{
	if(live_1 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_1 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 2)
{
	if(live_2 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_2 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 3)
{
	if(live_3 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_3 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 4)
{
	if(live_4 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_4 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
}

window.Script20 = function()
{
  const heart_1 = object('6KkZV4npcv8');
const heart_2 = object('5miOLS1fQ1w');
let player = GetPlayer();
let live_1 = player.GetVar("live_1");
let live_2 = player.GetVar("live_2");
let live_3 = player.GetVar("live_3");
let live_4 = player.GetVar("live_4");
let pageNumber = player.GetVar("pageNumber");

if(pageNumber === 1)
{
	if(live_1 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_1 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 2)
{
	if(live_2 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_2 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 3)
{
	if(live_3 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_3 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
else if(pageNumber === 4)
{
	if(live_4 === 2)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'heart_full';
	}
	else if(live_4 === 1)
	{
		heart_1.state = 'heart_full';
		heart_2.state = 'Normal';
	}
	else{
		heart_1.state = 'Normal';
		heart_2.state = 'Normal';
	}
}
}

window.Script21 = function()
{
  const step_1 = object('6BIJnLTqkdv');
const step_2 = object('62gvQyFCliG');
const step_3 = object('6IfZaW06c7A');
const step_4 = object('5jheY8FWN6H');

let player = GetPlayer();
let var_step_1 = player.GetVar("var_step_1");
let var_step_2 = player.GetVar("var_step_2");
let var_step_3 = player.GetVar("var_step_3");
let var_step_4 = player.GetVar("var_step_4");

if(var_step_1===2)
{
	step_1.state = 'Correct';
}
else{
	step_1.state = 'Wrong';
}

if(var_step_2===2)
{
	step_2.state = 'Correct';
}
else{
	step_2.state = 'Wrong';
}

if(var_step_3===2)
{
	step_3.state = 'Correct';
}
else{
	step_3.state = 'Wrong';
}

if(var_step_4===2)
{
	step_4.state = 'Correct';
}
else{
	step_4.state = 'Wrong';
}
}

window.Script22 = function()
{
  const feedback = object('64ThqYGiDqK');
let player = GetPlayer();
let step2 = player.GetVar("var_step_2");
let step3 = player.GetVar("var_step_3");
let step4 = player.GetVar("var_step_4");

if(step2+step3+step4>=6)
{
	feedback.state = '3 Doğru';
}
else if(step2+step3+step4>=5)
{
	feedback.state = '2 Doğru';
}
else if(step2+step3+step4>=3)
{
	feedback.state = '1 Doğru';
}
else{
	feedback.state = 'Normal';
}

}

};
