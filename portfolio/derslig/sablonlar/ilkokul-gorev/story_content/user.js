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
window.Script25 = function()
{
  let player = GetPlayer();

const drag_1 = object('68YuLz7gc3H');
const drag_2 = object('60mWyqGV83z');
const drag_3 = object('6ZXMcH5WGnb');
const drag_4 = object('5tMNwDlo2Ar');
const drag_5 = object('6l35NqQeq53');
const drag_6 = object('5rgv7iuSpA8');

player.SetVar("drag_x_1",drag_1.x);
player.SetVar("drag_x_2",drag_2.x);
player.SetVar("drag_x_3",drag_3.x);
player.SetVar("drag_x_4",drag_4.x);
player.SetVar("drag_x_5",drag_5.x);
player.SetVar("drag_x_6",drag_6.x);
player.SetVar("drag_y_1",drag_1.y);
player.SetVar("drag_y_2",drag_2.y);
player.SetVar("drag_y_3",drag_3.y);
player.SetVar("drag_y_4",drag_4.y);
player.SetVar("drag_y_5",drag_5.y);
player.SetVar("drag_y_6",drag_6.y);
}

window.Script26 = function()
{
  const kontrol_et_btn = object('5z1pNIYwaGI');
let player = GetPlayer();

const drag_1 = object('68YuLz7gc3H');
const drag_2 = object('60mWyqGV83z');
const drag_3 = object('6ZXMcH5WGnb');
const drag_4 = object('5tMNwDlo2Ar');
const drag_5 = object('6l35NqQeq53');
const drag_6 = object('5rgv7iuSpA8');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

//kontrol et butonunun state'ini ayarla
if(
	drag_1.x===player.GetVar("drag_x_1") &&
	drag_2.x===player.GetVar("drag_x_2") &&
	drag_3.x===player.GetVar("drag_x_3") &&
	drag_4.x===player.GetVar("drag_x_4") &&
	drag_5.x===player.GetVar("drag_x_5") &&
	drag_6.x===player.GetVar("drag_x_6")
	)
{
	kontrol_et_btn.state = 'Disabled';
}
else{
	kontrol_et_btn.state = 'Normal';
}

//Değişkenlerin true/false durumlarını kontrol et
if(drag_1.x>player.GetVar("dropzone_x_1") && 
   drag_1.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_1",true);
}
else{
	player.SetVar("drag_var_1",false);
}

if(drag_2.x>player.GetVar("dropzone_x_1") && 
   drag_2.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_2",true);
}
else{
	player.SetVar("drag_var_2",false);
}

if(drag_3.x>player.GetVar("dropzone_x_1") && 
   drag_3.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_3",true);
}
else{
	player.SetVar("drag_var_3",false);
}

if(drag_4.x>player.GetVar("dropzone_x_1") && 
   drag_4.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_4",true);
}
else{
	player.SetVar("drag_var_4",false);
}

if(drag_5.x>player.GetVar("dropzone_x_1") && 
   drag_5.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_5",true);
}
else{
	player.SetVar("drag_var_5",false);
}

if(drag_6.x>player.GetVar("dropzone_x_1") && 
   drag_6.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_6",true);
}
else{
	player.SetVar("drag_var_6",false);
}

}

window.Script27 = function()
{
  let player = GetPlayer();

const drag_1 = object('68YuLz7gc3H');
const drag_2 = object('60mWyqGV83z');
const drag_3 = object('6ZXMcH5WGnb');
const drag_4 = object('5tMNwDlo2Ar');
const drag_5 = object('6l35NqQeq53');
const drag_6 = object('5rgv7iuSpA8');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_1.x>dropzone_x_1 && drag_1.x<dropzone_x_2 && drag_1.y>dropzone_y_1 && drag_1.y<dropzone_y_2)
{
	drag_1.x=drag_1.x;
	drag_1.y=drag_1.y;
}
else{
	drag_1.x=player.GetVar("drag_x_1");
	drag_1.y=player.GetVar("drag_y_1");
}
}

window.Script28 = function()
{
  let player = GetPlayer();

const drag_1 = object('60mWyqGV83z');
const drag_2 = object('60mWyqGV83z');
const drag_3 = object('6ZXMcH5WGnb');
const drag_4 = object('5tMNwDlo2Ar');
const drag_5 = object('6l35NqQeq53');
const drag_6 = object('5rgv7iuSpA8');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_2.x>dropzone_x_1 && drag_2.x<dropzone_x_2 && drag_2.y>dropzone_y_1 && drag_2.y<dropzone_y_2)
{
	drag_2.x=drag_2.x;
	drag_2.y=drag_2.y;
}
else{
	drag_2.x=player.GetVar("drag_x_2");
	drag_2.y=player.GetVar("drag_y_2");
}
}

window.Script29 = function()
{
  let player = GetPlayer();

const drag_1 = object('6ZXMcH5WGnb');
const drag_2 = object('6ZXMcH5WGnb');
const drag_3 = object('6ZXMcH5WGnb');
const drag_4 = object('5tMNwDlo2Ar');
const drag_5 = object('6l35NqQeq53');
const drag_6 = object('5rgv7iuSpA8');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_3.x>dropzone_x_1 && drag_3.x<dropzone_x_2 && drag_3.y>dropzone_y_1 && drag_3.y<dropzone_y_2)
{
	drag_3.x=drag_3.x;
	drag_3.y=drag_3.y;
}
else{
	drag_3.x=player.GetVar("drag_x_3");
	drag_3.y=player.GetVar("drag_y_3");
}
}

window.Script30 = function()
{
  let player = GetPlayer();

const drag_1 = object('5tMNwDlo2Ar');
const drag_2 = object('5tMNwDlo2Ar');
const drag_3 = object('5tMNwDlo2Ar');
const drag_4 = object('5tMNwDlo2Ar');
const drag_5 = object('6l35NqQeq53');
const drag_6 = object('5rgv7iuSpA8');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_4.x>dropzone_x_1 && drag_4.x<dropzone_x_2 && drag_4.y>dropzone_y_1 && drag_4.y<dropzone_y_2)
{
	drag_4.x=drag_4.x;
	drag_4.y=drag_4.y;
}
else{
	drag_4.x=player.GetVar("drag_x_4");
	drag_4.y=player.GetVar("drag_y_4");
}
}

window.Script31 = function()
{
  let player = GetPlayer();

const drag_1 = object('6l35NqQeq53');
const drag_2 = object('6l35NqQeq53');
const drag_3 = object('6l35NqQeq53');
const drag_4 = object('6l35NqQeq53');
const drag_5 = object('6l35NqQeq53');
const drag_6 = object('5rgv7iuSpA8');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_5.x>dropzone_x_1 && drag_5.x<dropzone_x_2 && drag_5.y>dropzone_y_1 && drag_5.y<dropzone_y_2)
{
	drag_5.x=drag_5.x;
	drag_5.y=drag_5.y;
}
else{
	drag_5.x=player.GetVar("drag_x_5");
	drag_5.y=player.GetVar("drag_y_5");
}
}

window.Script32 = function()
{
  let player = GetPlayer();

const drag_1 = object('5rgv7iuSpA8');
const drag_2 = object('5rgv7iuSpA8');
const drag_3 = object('5rgv7iuSpA8');
const drag_4 = object('5rgv7iuSpA8');
const drag_5 = object('5rgv7iuSpA8');
const drag_6 = object('5rgv7iuSpA8');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_6.x>dropzone_x_1 && drag_6.x<dropzone_x_2 && drag_6.y>dropzone_y_1 && drag_6.y<dropzone_y_2)
{
	drag_6.x=drag_6.x;
	drag_6.y=drag_6.y;
}
else{
	drag_6.x=player.GetVar("drag_x_6");
	drag_6.y=player.GetVar("drag_y_6");
}
}

window.Script33 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script34 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");

const drag_1 = object('68YuLz7gc3H');
const drag_2 = object('60mWyqGV83z');
const drag_3 = object('6ZXMcH5WGnb');
const drag_4 = object('5tMNwDlo2Ar');
const drag_5 = object('6l35NqQeq53');
const drag_6 = object('5rgv7iuSpA8');

if(drag_cevap_1===true)
{
	drag_1.x = 1187;
	drag_1.y = 300;
}

if(drag_cevap_2===true)
{
	drag_2.x = 1420;
	drag_2.y = 300;
}

if(drag_cevap_3===true)
{
	drag_3.x = 1654;
	drag_3.y = 300;
}

if(drag_cevap_4===true)
{
	drag_4.x = 1187;
	drag_4.y = 543;
}

if(drag_cevap_5===true)
{
	drag_5.x = 1420;
	drag_5.y = 543;
}

if(drag_cevap_6===true)
{
	drag_6.x = 1654;
	drag_6.y = 543;
}
}

window.Script35 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script36 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'block';
}
}

window.Script37 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");
let drag_var_1 = player.GetVar("drag_var_1");
let drag_var_2 = player.GetVar("drag_var_2");
let drag_var_3 = player.GetVar("drag_var_3");
let drag_var_4 = player.GetVar("drag_var_4");
let drag_var_5 = player.GetVar("drag_var_5");
let drag_var_6 = player.GetVar("drag_var_6");


const drag_1 = object('68YuLz7gc3H');
const drag_2 = object('60mWyqGV83z');
const drag_3 = object('6ZXMcH5WGnb');
const drag_4 = object('5tMNwDlo2Ar');
const drag_5 = object('6l35NqQeq53');
const drag_6 = object('5rgv7iuSpA8');

if(drag_var_1 !== drag_cevap_1)
{
	drag_1.x = player.GetVar("drag_x_1");
	drag_1.y = player.GetVar("drag_y_1");
}

if(drag_var_2 !== drag_cevap_2)
{
	drag_2.x = player.GetVar("drag_x_2");
	drag_2.y = player.GetVar("drag_y_2");
}

if(drag_var_3 !== drag_cevap_3)
{
	drag_3.x = player.GetVar("drag_x_3");
	drag_3.y = player.GetVar("drag_y_3");
}

if(drag_var_4 !== drag_cevap_4)
{
	drag_4.x = player.GetVar("drag_x_4");
	drag_4.y = player.GetVar("drag_y_4");
}

if(drag_var_5 !== drag_cevap_5)
{
	drag_5.x = player.GetVar("drag_x_5");
	drag_5.y = player.GetVar("drag_y_5");
}

if(drag_var_6 !== drag_cevap_6)
{
	drag_6.x = player.GetVar("drag_x_6");
	drag_6.y = player.GetVar("drag_y_6");
}
}

window.Script38 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script39 = function()
{
  let player = GetPlayer();

const drag_1 = object('6RdPt80AMrq');
const drag_2 = object('6XV4WuErLpC');
const drag_3 = object('5WZXgBTNFHv');
const drag_4 = object('6FsrQnaSlXs');
const drag_5 = object('5j9mmtDynOU');
const drag_6 = object('6Wf2IIjrZB1');

player.SetVar("drag_x_1",drag_1.x);
player.SetVar("drag_x_2",drag_2.x);
player.SetVar("drag_x_3",drag_3.x);
player.SetVar("drag_x_4",drag_4.x);
player.SetVar("drag_x_5",drag_5.x);
player.SetVar("drag_x_6",drag_6.x);
player.SetVar("drag_y_1",drag_1.y);
player.SetVar("drag_y_2",drag_2.y);
player.SetVar("drag_y_3",drag_3.y);
player.SetVar("drag_y_4",drag_4.y);
player.SetVar("drag_y_5",drag_5.y);
player.SetVar("drag_y_6",drag_6.y);
}

window.Script40 = function()
{
  const kontrol_et_btn = object('6O2k0dj2jWm');
let player = GetPlayer();

const drag_1 = object('6RdPt80AMrq');
const drag_2 = object('6XV4WuErLpC');
const drag_3 = object('5WZXgBTNFHv');
const drag_4 = object('6FsrQnaSlXs');
const drag_5 = object('5j9mmtDynOU');
const drag_6 = object('6Wf2IIjrZB1');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

//kontrol et butonunun state'ini ayarla
if(
	drag_1.x===player.GetVar("drag_x_1") &&
	drag_2.x===player.GetVar("drag_x_2") &&
	drag_3.x===player.GetVar("drag_x_3") &&
	drag_4.x===player.GetVar("drag_x_4") &&
	drag_5.x===player.GetVar("drag_x_5") &&
	drag_6.x===player.GetVar("drag_x_6")
	)
{
	kontrol_et_btn.state = 'Disabled';
}
else{
	kontrol_et_btn.state = 'Normal';
}

//Değişkenlerin true/false durumlarını kontrol et
if(drag_1.x>player.GetVar("dropzone_x_1") && 
   drag_1.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_1",true);
}
else{
	player.SetVar("drag_var_1",false);
}

if(drag_2.x>player.GetVar("dropzone_x_1") && 
   drag_2.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_2",true);
}
else{
	player.SetVar("drag_var_2",false);
}

if(drag_3.x>player.GetVar("dropzone_x_1") && 
   drag_3.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_3",true);
}
else{
	player.SetVar("drag_var_3",false);
}

if(drag_4.x>player.GetVar("dropzone_x_1") && 
   drag_4.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_4",true);
}
else{
	player.SetVar("drag_var_4",false);
}

if(drag_5.x>player.GetVar("dropzone_x_1") && 
   drag_5.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_5",true);
}
else{
	player.SetVar("drag_var_5",false);
}

if(drag_6.x>player.GetVar("dropzone_x_1") && 
   drag_6.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_6",true);
}
else{
	player.SetVar("drag_var_6",false);
}

}

window.Script41 = function()
{
  let player = GetPlayer();

const drag_1 = object('6RdPt80AMrq');
const drag_2 = object('6XV4WuErLpC');
const drag_3 = object('5WZXgBTNFHv');
const drag_4 = object('6FsrQnaSlXs');
const drag_5 = object('5j9mmtDynOU');
const drag_6 = object('6Wf2IIjrZB1');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_1.x>dropzone_x_1 && drag_1.x<dropzone_x_2 && drag_1.y>dropzone_y_1 && drag_1.y<dropzone_y_2)
{
	drag_1.x=drag_1.x;
	drag_1.y=drag_1.y;
}
else{
	drag_1.x=player.GetVar("drag_x_1");
	drag_1.y=player.GetVar("drag_y_1");
}
}

window.Script42 = function()
{
  let player = GetPlayer();

const drag_1 = object('6XV4WuErLpC');
const drag_2 = object('6XV4WuErLpC');
const drag_3 = object('5WZXgBTNFHv');
const drag_4 = object('6FsrQnaSlXs');
const drag_5 = object('5j9mmtDynOU');
const drag_6 = object('6Wf2IIjrZB1');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_2.x>dropzone_x_1 && drag_2.x<dropzone_x_2 && drag_2.y>dropzone_y_1 && drag_2.y<dropzone_y_2)
{
	drag_2.x=drag_2.x;
	drag_2.y=drag_2.y;
}
else{
	drag_2.x=player.GetVar("drag_x_2");
	drag_2.y=player.GetVar("drag_y_2");
}
}

window.Script43 = function()
{
  let player = GetPlayer();

const drag_1 = object('5WZXgBTNFHv');
const drag_2 = object('5WZXgBTNFHv');
const drag_3 = object('5WZXgBTNFHv');
const drag_4 = object('6FsrQnaSlXs');
const drag_5 = object('5j9mmtDynOU');
const drag_6 = object('6Wf2IIjrZB1');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_3.x>dropzone_x_1 && drag_3.x<dropzone_x_2 && drag_3.y>dropzone_y_1 && drag_3.y<dropzone_y_2)
{
	drag_3.x=drag_3.x;
	drag_3.y=drag_3.y;
}
else{
	drag_3.x=player.GetVar("drag_x_3");
	drag_3.y=player.GetVar("drag_y_3");
}
}

window.Script44 = function()
{
  let player = GetPlayer();

const drag_1 = object('6FsrQnaSlXs');
const drag_2 = object('6FsrQnaSlXs');
const drag_3 = object('6FsrQnaSlXs');
const drag_4 = object('6FsrQnaSlXs');
const drag_5 = object('5j9mmtDynOU');
const drag_6 = object('6Wf2IIjrZB1');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_4.x>dropzone_x_1 && drag_4.x<dropzone_x_2 && drag_4.y>dropzone_y_1 && drag_4.y<dropzone_y_2)
{
	drag_4.x=drag_4.x;
	drag_4.y=drag_4.y;
}
else{
	drag_4.x=player.GetVar("drag_x_4");
	drag_4.y=player.GetVar("drag_y_4");
}
}

window.Script45 = function()
{
  let player = GetPlayer();

const drag_1 = object('5j9mmtDynOU');
const drag_2 = object('5j9mmtDynOU');
const drag_3 = object('5j9mmtDynOU');
const drag_4 = object('5j9mmtDynOU');
const drag_5 = object('5j9mmtDynOU');
const drag_6 = object('6Wf2IIjrZB1');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_5.x>dropzone_x_1 && drag_5.x<dropzone_x_2 && drag_5.y>dropzone_y_1 && drag_5.y<dropzone_y_2)
{
	drag_5.x=drag_5.x;
	drag_5.y=drag_5.y;
}
else{
	drag_5.x=player.GetVar("drag_x_5");
	drag_5.y=player.GetVar("drag_y_5");
}
}

window.Script46 = function()
{
  let player = GetPlayer();

const drag_1 = object('6Wf2IIjrZB1');
const drag_2 = object('6Wf2IIjrZB1');
const drag_3 = object('6Wf2IIjrZB1');
const drag_4 = object('6Wf2IIjrZB1');
const drag_5 = object('6Wf2IIjrZB1');
const drag_6 = object('6Wf2IIjrZB1');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_6.x>dropzone_x_1 && drag_6.x<dropzone_x_2 && drag_6.y>dropzone_y_1 && drag_6.y<dropzone_y_2)
{
	drag_6.x=drag_6.x;
	drag_6.y=drag_6.y;
}
else{
	drag_6.x=player.GetVar("drag_x_6");
	drag_6.y=player.GetVar("drag_y_6");
}
}

window.Script47 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script48 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");

const drag_1 = object('6RdPt80AMrq');
const drag_2 = object('6XV4WuErLpC');
const drag_3 = object('5WZXgBTNFHv');
const drag_4 = object('6FsrQnaSlXs');
const drag_5 = object('5j9mmtDynOU');
const drag_6 = object('6Wf2IIjrZB1');

if(drag_cevap_1===true)
{
	drag_1.x = 1187;
	drag_1.y = 300;
}

if(drag_cevap_2===true)
{
	drag_2.x = 1420;
	drag_2.y = 300;
}

if(drag_cevap_3===true)
{
	drag_3.x = 1654;
	drag_3.y = 300;
}

if(drag_cevap_4===true)
{
	drag_4.x = 1187;
	drag_4.y = 543;
}

if(drag_cevap_5===true)
{
	drag_5.x = 1420;
	drag_5.y = 543;
}

if(drag_cevap_6===true)
{
	drag_6.x = 1654;
	drag_6.y = 543;
}
}

window.Script49 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script50 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'block';
}
}

window.Script51 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");
let drag_var_1 = player.GetVar("drag_var_1");
let drag_var_2 = player.GetVar("drag_var_2");
let drag_var_3 = player.GetVar("drag_var_3");
let drag_var_4 = player.GetVar("drag_var_4");
let drag_var_5 = player.GetVar("drag_var_5");
let drag_var_6 = player.GetVar("drag_var_6");


const drag_1 = object('6RdPt80AMrq');
const drag_2 = object('6XV4WuErLpC');
const drag_3 = object('5WZXgBTNFHv');
const drag_4 = object('6FsrQnaSlXs');
const drag_5 = object('5j9mmtDynOU');
const drag_6 = object('6Wf2IIjrZB1');

if(drag_var_1 !== drag_cevap_1)
{
	drag_1.x = player.GetVar("drag_x_1");
	drag_1.y = player.GetVar("drag_y_1");
}

if(drag_var_2 !== drag_cevap_2)
{
	drag_2.x = player.GetVar("drag_x_2");
	drag_2.y = player.GetVar("drag_y_2");
}

if(drag_var_3 !== drag_cevap_3)
{
	drag_3.x = player.GetVar("drag_x_3");
	drag_3.y = player.GetVar("drag_y_3");
}

if(drag_var_4 !== drag_cevap_4)
{
	drag_4.x = player.GetVar("drag_x_4");
	drag_4.y = player.GetVar("drag_y_4");
}

if(drag_var_5 !== drag_cevap_5)
{
	drag_5.x = player.GetVar("drag_x_5");
	drag_5.y = player.GetVar("drag_y_5");
}

if(drag_var_6 !== drag_cevap_6)
{
	drag_6.x = player.GetVar("drag_x_6");
	drag_6.y = player.GetVar("drag_y_6");
}
}

window.Script52 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script53 = function()
{
  let player = GetPlayer();

const drag_1 = object('6SLz17wJhH0');
const drag_2 = object('6HXEe1AP8uX');
const drag_3 = object('610T9FUb02j');
const drag_4 = object('6r69BiKCxTl');
const drag_5 = object('6cOb46nzmpy');
const drag_6 = object('6g76UrVpe35');

player.SetVar("drag_x_1",drag_1.x);
player.SetVar("drag_x_2",drag_2.x);
player.SetVar("drag_x_3",drag_3.x);
player.SetVar("drag_x_4",drag_4.x);
player.SetVar("drag_x_5",drag_5.x);
player.SetVar("drag_x_6",drag_6.x);
player.SetVar("drag_y_1",drag_1.y);
player.SetVar("drag_y_2",drag_2.y);
player.SetVar("drag_y_3",drag_3.y);
player.SetVar("drag_y_4",drag_4.y);
player.SetVar("drag_y_5",drag_5.y);
player.SetVar("drag_y_6",drag_6.y);
}

window.Script54 = function()
{
  const kontrol_et_btn = object('5glZBLNADQk');
let player = GetPlayer();

const drag_1 = object('6SLz17wJhH0');
const drag_2 = object('6HXEe1AP8uX');
const drag_3 = object('610T9FUb02j');
const drag_4 = object('6r69BiKCxTl');
const drag_5 = object('6cOb46nzmpy');
const drag_6 = object('6g76UrVpe35');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

//kontrol et butonunun state'ini ayarla
if(
	drag_1.x===player.GetVar("drag_x_1") &&
	drag_2.x===player.GetVar("drag_x_2") &&
	drag_3.x===player.GetVar("drag_x_3") &&
	drag_4.x===player.GetVar("drag_x_4") &&
	drag_5.x===player.GetVar("drag_x_5") &&
	drag_6.x===player.GetVar("drag_x_6")
	)
{
	kontrol_et_btn.state = 'Disabled';
}
else{
	kontrol_et_btn.state = 'Normal';
}

//Değişkenlerin true/false durumlarını kontrol et
if(drag_1.x>player.GetVar("dropzone_x_1") && 
   drag_1.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_1",true);
}
else{
	player.SetVar("drag_var_1",false);
}

if(drag_2.x>player.GetVar("dropzone_x_1") && 
   drag_2.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_2",true);
}
else{
	player.SetVar("drag_var_2",false);
}

if(drag_3.x>player.GetVar("dropzone_x_1") && 
   drag_3.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_3",true);
}
else{
	player.SetVar("drag_var_3",false);
}

if(drag_4.x>player.GetVar("dropzone_x_1") && 
   drag_4.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_4",true);
}
else{
	player.SetVar("drag_var_4",false);
}

if(drag_5.x>player.GetVar("dropzone_x_1") && 
   drag_5.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_5",true);
}
else{
	player.SetVar("drag_var_5",false);
}

if(drag_6.x>player.GetVar("dropzone_x_1") && 
   drag_6.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_6",true);
}
else{
	player.SetVar("drag_var_6",false);
}

}

window.Script55 = function()
{
  let player = GetPlayer();

const drag_1 = object('6SLz17wJhH0');
const drag_2 = object('6HXEe1AP8uX');
const drag_3 = object('610T9FUb02j');
const drag_4 = object('6r69BiKCxTl');
const drag_5 = object('6cOb46nzmpy');
const drag_6 = object('6g76UrVpe35');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_1.x>dropzone_x_1 && drag_1.x<dropzone_x_2 && drag_1.y>dropzone_y_1 && drag_1.y<dropzone_y_2)
{
	drag_1.x=drag_1.x;
	drag_1.y=drag_1.y;
}
else{
	drag_1.x=player.GetVar("drag_x_1");
	drag_1.y=player.GetVar("drag_y_1");
}
}

window.Script56 = function()
{
  let player = GetPlayer();

const drag_1 = object('6HXEe1AP8uX');
const drag_2 = object('6HXEe1AP8uX');
const drag_3 = object('610T9FUb02j');
const drag_4 = object('6r69BiKCxTl');
const drag_5 = object('6cOb46nzmpy');
const drag_6 = object('6g76UrVpe35');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_2.x>dropzone_x_1 && drag_2.x<dropzone_x_2 && drag_2.y>dropzone_y_1 && drag_2.y<dropzone_y_2)
{
	drag_2.x=drag_2.x;
	drag_2.y=drag_2.y;
}
else{
	drag_2.x=player.GetVar("drag_x_2");
	drag_2.y=player.GetVar("drag_y_2");
}
}

window.Script57 = function()
{
  let player = GetPlayer();

const drag_1 = object('610T9FUb02j');
const drag_2 = object('610T9FUb02j');
const drag_3 = object('610T9FUb02j');
const drag_4 = object('6r69BiKCxTl');
const drag_5 = object('6cOb46nzmpy');
const drag_6 = object('6g76UrVpe35');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_3.x>dropzone_x_1 && drag_3.x<dropzone_x_2 && drag_3.y>dropzone_y_1 && drag_3.y<dropzone_y_2)
{
	drag_3.x=drag_3.x;
	drag_3.y=drag_3.y;
}
else{
	drag_3.x=player.GetVar("drag_x_3");
	drag_3.y=player.GetVar("drag_y_3");
}
}

window.Script58 = function()
{
  let player = GetPlayer();

const drag_1 = object('6r69BiKCxTl');
const drag_2 = object('6r69BiKCxTl');
const drag_3 = object('6r69BiKCxTl');
const drag_4 = object('6r69BiKCxTl');
const drag_5 = object('6cOb46nzmpy');
const drag_6 = object('6g76UrVpe35');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_4.x>dropzone_x_1 && drag_4.x<dropzone_x_2 && drag_4.y>dropzone_y_1 && drag_4.y<dropzone_y_2)
{
	drag_4.x=drag_4.x;
	drag_4.y=drag_4.y;
}
else{
	drag_4.x=player.GetVar("drag_x_4");
	drag_4.y=player.GetVar("drag_y_4");
}
}

window.Script59 = function()
{
  let player = GetPlayer();

const drag_1 = object('6cOb46nzmpy');
const drag_2 = object('6cOb46nzmpy');
const drag_3 = object('6cOb46nzmpy');
const drag_4 = object('6cOb46nzmpy');
const drag_5 = object('6cOb46nzmpy');
const drag_6 = object('6g76UrVpe35');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_5.x>dropzone_x_1 && drag_5.x<dropzone_x_2 && drag_5.y>dropzone_y_1 && drag_5.y<dropzone_y_2)
{
	drag_5.x=drag_5.x;
	drag_5.y=drag_5.y;
}
else{
	drag_5.x=player.GetVar("drag_x_5");
	drag_5.y=player.GetVar("drag_y_5");
}
}

window.Script60 = function()
{
  let player = GetPlayer();

const drag_1 = object('6g76UrVpe35');
const drag_2 = object('6g76UrVpe35');
const drag_3 = object('6g76UrVpe35');
const drag_4 = object('6g76UrVpe35');
const drag_5 = object('6g76UrVpe35');
const drag_6 = object('6g76UrVpe35');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_6.x>dropzone_x_1 && drag_6.x<dropzone_x_2 && drag_6.y>dropzone_y_1 && drag_6.y<dropzone_y_2)
{
	drag_6.x=drag_6.x;
	drag_6.y=drag_6.y;
}
else{
	drag_6.x=player.GetVar("drag_x_6");
	drag_6.y=player.GetVar("drag_y_6");
}
}

window.Script61 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script62 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");

const drag_1 = object('6SLz17wJhH0');
const drag_2 = object('6HXEe1AP8uX');
const drag_3 = object('610T9FUb02j');
const drag_4 = object('6r69BiKCxTl');
const drag_5 = object('6cOb46nzmpy');
const drag_6 = object('6g76UrVpe35');

if(drag_cevap_1===true)
{
	drag_1.x = 1187;
	drag_1.y = 300;
}

if(drag_cevap_2===true)
{
	drag_2.x = 1420;
	drag_2.y = 300;
}

if(drag_cevap_3===true)
{
	drag_3.x = 1654;
	drag_3.y = 300;
}

if(drag_cevap_4===true)
{
	drag_4.x = 1187;
	drag_4.y = 543;
}

if(drag_cevap_5===true)
{
	drag_5.x = 1420;
	drag_5.y = 543;
}

if(drag_cevap_6===true)
{
	drag_6.x = 1654;
	drag_6.y = 543;
}
}

window.Script63 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script64 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'block';
}
}

window.Script65 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");
let drag_var_1 = player.GetVar("drag_var_1");
let drag_var_2 = player.GetVar("drag_var_2");
let drag_var_3 = player.GetVar("drag_var_3");
let drag_var_4 = player.GetVar("drag_var_4");
let drag_var_5 = player.GetVar("drag_var_5");
let drag_var_6 = player.GetVar("drag_var_6");


const drag_1 = object('6SLz17wJhH0');
const drag_2 = object('6HXEe1AP8uX');
const drag_3 = object('610T9FUb02j');
const drag_4 = object('6r69BiKCxTl');
const drag_5 = object('6cOb46nzmpy');
const drag_6 = object('6g76UrVpe35');

if(drag_var_1 !== drag_cevap_1)
{
	drag_1.x = player.GetVar("drag_x_1");
	drag_1.y = player.GetVar("drag_y_1");
}

if(drag_var_2 !== drag_cevap_2)
{
	drag_2.x = player.GetVar("drag_x_2");
	drag_2.y = player.GetVar("drag_y_2");
}

if(drag_var_3 !== drag_cevap_3)
{
	drag_3.x = player.GetVar("drag_x_3");
	drag_3.y = player.GetVar("drag_y_3");
}

if(drag_var_4 !== drag_cevap_4)
{
	drag_4.x = player.GetVar("drag_x_4");
	drag_4.y = player.GetVar("drag_y_4");
}

if(drag_var_5 !== drag_cevap_5)
{
	drag_5.x = player.GetVar("drag_x_5");
	drag_5.y = player.GetVar("drag_y_5");
}

if(drag_var_6 !== drag_cevap_6)
{
	drag_6.x = player.GetVar("drag_x_6");
	drag_6.y = player.GetVar("drag_y_6");
}
}

window.Script66 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script67 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script68 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script69 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'block';
}
}

window.Script70 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script71 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script72 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script73 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'block';
}
}

window.Script74 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script75 = function()
{
  var player = GetPlayer();
var puan = player.GetVar("puan"); // Storyline değişkenini al
var maxpuan = player.GetVar("maxPuan"); // Storyline değişkenini al

// SCORM Cloud LRS bilgileri (kendi bilgilerinizle değiştirin)
// Bu bilgiler SCORM Cloud Activity Provider ayarlarınızda bulunur.
var endpoint = "https://cloud.scorm.com/lrs/1RWFILBDU2/statements"; // Endpoint'in sonuna '/statements' ekleyin
var username = "PAV1LTI-0BHgITOByUs"; // Activity Provider Key
var password = "sHRJ1DinbBxgExdU7tI"; // Activity Provider Secret

// Basic Auth başlığı oluşturma
// 'username:password' stringini Base64 olarak encode edin.
var auth = "Basic " + btoa(username + ":" + password);

// xAPI statement (puan gönderimi)
var statement = {
  "actor": {
    "name": "Kullanici", // Dinamik bir isim veya Storyline değişkeni kullanabilirsiniz
    "mbox": "mailto:anon@example.com" // Dinamik bir e-posta veya Storyline değişkeni kullanabilirsiniz
  },
  "verb": {
    "id": "http://adlnet.gov/expapi/verbs/experienced",
    "display": { "en-US": "experienced" }
  },
  "object": {
    "id": "http://example.com/puan", // Benzersiz bir ID, kursunuz veya puanlama aktivitenizle ilgili olabilir
    "definition": {
      "name": { "en-US": "Kullanici Puani" } // Objenin adı
    }
  },
  "result": {
    "score": {
      "raw": puan // Storyline'dan alınan değişken değeri
    }
  }
};

// Gönderim işlemi
var xhr = new XMLHttpRequest();

xhr.open("POST", endpoint, true); // endpoint'e "/statements" zaten ekledik

xhr.setRequestHeader("Authorization", auth);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Experience-API-Version", "1.0.3"); // xAPI Versiyonu

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200 || xhr.status === 204) {
      console.log("puan:" + puan);
      console.log("maxscore:" + maxpuan );
      // Storyline'da başarılı olduğunu gösterecek bir işlem yapabilirsiniz (örn: bir değişkeni True yapmak)
    } else {
      console.error("❌ Gönderim Hatası:", xhr.status, xhr.responseText);
      // Storyline'da hata olduğunu gösterecek bir işlem yapabilirsiniz
    }
  }
};

xhr.send(JSON.stringify(statement));
}

window.Script76 = function()
{
  var player = GetPlayer();
var targetURL = player.GetVar("ExitURL"); 

if(!targetURL) {
  targetURL = "https://www.derslig.com";
}

// iframe içindeyse üst frame’den yönlendir
try {
  window.top.location.href = targetURL; 
} catch (e) {
  // güvenlik engeli varsa fallback
  window.location.href = targetURL; 
}

}

window.Script77 = function()
{
  let player = GetPlayer();

const drag_1 = object('5mwUzr8JNvt');
const drag_2 = object('6ckGSC6oqI3');
const drag_3 = object('5qDxF3IruGf');
const drag_4 = object('6jQvV6w1dpW');
const drag_5 = object('6ELw5gPkR6v');
const drag_6 = object('6nayKzrTEh1');

player.SetVar("drag_x_1",drag_1.x);
player.SetVar("drag_x_2",drag_2.x);
player.SetVar("drag_x_3",drag_3.x);
player.SetVar("drag_x_4",drag_4.x);
player.SetVar("drag_x_5",drag_5.x);
player.SetVar("drag_x_6",drag_6.x);
player.SetVar("drag_y_1",drag_1.y);
player.SetVar("drag_y_2",drag_2.y);
player.SetVar("drag_y_3",drag_3.y);
player.SetVar("drag_y_4",drag_4.y);
player.SetVar("drag_y_5",drag_5.y);
player.SetVar("drag_y_6",drag_6.y);
}

window.Script78 = function()
{
  let player = GetPlayer();

const drag_1 = object('60xvvIBS5lz');
const drag_2 = object('5svjjjMsvXo');
const drag_3 = object('5WhTHmApPsQ');
const drag_4 = object('5ml0lacZdmI');
const drag_5 = object('5oj7piFdesK');
const drag_6 = object('6TrmbgMS10m');
const kontrol_et_btn = object('6aZgrzN0h6g');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

//kontrol et butonunun state'ini ayarla
if(
	drag_1.x===player.GetVar("drag_x_1") &&
	drag_2.x===player.GetVar("drag_x_2") &&
	drag_3.x===player.GetVar("drag_x_3") &&
	drag_4.x===player.GetVar("drag_x_4") &&
	drag_5.x===player.GetVar("drag_x_5") &&
	drag_6.x===player.GetVar("drag_x_6")
	)
{
	kontrol_et_btn.state = 'Disabled';
}
else{
	kontrol_et_btn.state = 'Normal';
}

//Değişkenlerin true/false durumlarını kontrol et
if(drag_1.x>player.GetVar("dropzone_x_1") && 
   drag_1.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_1",true);
}
else{
	player.SetVar("drag_var_1",false);
}

if(drag_2.x>player.GetVar("dropzone_x_1") && 
   drag_2.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_2",true);
}
else{
	player.SetVar("drag_var_2",false);
}

if(drag_3.x>player.GetVar("dropzone_x_1") && 
   drag_3.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_3",true);
}
else{
	player.SetVar("drag_var_3",false);
}

if(drag_4.x>player.GetVar("dropzone_x_1") && 
   drag_4.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_4",true);
}
else{
	player.SetVar("drag_var_4",false);
}

if(drag_5.x>player.GetVar("dropzone_x_1") && 
   drag_5.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_5",true);
}
else{
	player.SetVar("drag_var_5",false);
}

if(drag_6.x>player.GetVar("dropzone_x_1") && 
   drag_6.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_6",true);
}
else{
	player.SetVar("drag_var_6",false);
}

}

window.Script79 = function()
{
  let player = GetPlayer();
const drag_1 = object('60xvvIBS5lz');
const drag_2 = object('5svjjjMsvXo');
const drag_3 = object('5WhTHmApPsQ');
const drag_4 = object('5ml0lacZdmI');
const drag_5 = object('5oj7piFdesK');
const drag_6 = object('6TrmbgMS10m');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_1.x>dropzone_x_1 && drag_1.x<dropzone_x_2 && drag_1.y>dropzone_y_1 && drag_1.y<dropzone_y_2)
{
	drag_1.x=drag_1.x;
	drag_1.y=drag_1.y;
}
else{
	drag_1.x=player.GetVar("drag_x_1");
	drag_1.y=player.GetVar("drag_y_1");
}
}

window.Script80 = function()
{
  let player = GetPlayer();

const drag_1 = object('60xvvIBS5lz');
const drag_2 = object('5svjjjMsvXo');
const drag_3 = object('5WhTHmApPsQ');
const drag_4 = object('5ml0lacZdmI');
const drag_5 = object('5oj7piFdesK');
const drag_6 = object('6TrmbgMS10m');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_2.x>dropzone_x_1 && drag_2.x<dropzone_x_2 && drag_2.y>dropzone_y_1 && drag_2.y<dropzone_y_2)
{
	drag_2.x=drag_2.x;
	drag_2.y=drag_2.y;
}
else{
	drag_2.x=player.GetVar("drag_x_2");
	drag_2.y=player.GetVar("drag_y_2");
}
}

window.Script81 = function()
{
  let player = GetPlayer();

const drag_1 = object('60xvvIBS5lz');
const drag_2 = object('5svjjjMsvXo');
const drag_3 = object('5WhTHmApPsQ');
const drag_4 = object('5ml0lacZdmI');
const drag_5 = object('5oj7piFdesK');
const drag_6 = object('6TrmbgMS10m');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_3.x>dropzone_x_1 && drag_3.x<dropzone_x_2 && drag_3.y>dropzone_y_1 && drag_3.y<dropzone_y_2)
{
	drag_3.x=drag_3.x;
	drag_3.y=drag_3.y;
}
else{
	drag_3.x=player.GetVar("drag_x_3");
	drag_3.y=player.GetVar("drag_y_3");
}
}

window.Script82 = function()
{
  let player = GetPlayer();

const drag_1 = object('60xvvIBS5lz');
const drag_2 = object('5svjjjMsvXo');
const drag_3 = object('5WhTHmApPsQ');
const drag_4 = object('5ml0lacZdmI');
const drag_5 = object('5oj7piFdesK');
const drag_6 = object('6TrmbgMS10m');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_4.x>dropzone_x_1 && drag_4.x<dropzone_x_2 && drag_4.y>dropzone_y_1 && drag_4.y<dropzone_y_2)
{
	drag_4.x=drag_4.x;
	drag_4.y=drag_4.y;
}
else{
	drag_4.x=player.GetVar("drag_x_4");
	drag_4.y=player.GetVar("drag_y_4");
}
}

window.Script83 = function()
{
  let player = GetPlayer();

const drag_1 = object('60xvvIBS5lz');
const drag_2 = object('5svjjjMsvXo');
const drag_3 = object('5WhTHmApPsQ');
const drag_4 = object('5ml0lacZdmI');
const drag_5 = object('5oj7piFdesK');
const drag_6 = object('6TrmbgMS10m');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_5.x>dropzone_x_1 && drag_5.x<dropzone_x_2 && drag_5.y>dropzone_y_1 && drag_5.y<dropzone_y_2)
{
	drag_5.x=drag_5.x;
	drag_5.y=drag_5.y;
}
else{
	drag_5.x=player.GetVar("drag_x_5");
	drag_5.y=player.GetVar("drag_y_5");
}
}

window.Script84 = function()
{
  let player = GetPlayer();

const drag_1 = object('60xvvIBS5lz');
const drag_2 = object('5svjjjMsvXo');
const drag_3 = object('5WhTHmApPsQ');
const drag_4 = object('5ml0lacZdmI');
const drag_5 = object('5oj7piFdesK');
const drag_6 = object('6TrmbgMS10m');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_6.x>dropzone_x_1 && drag_6.x<dropzone_x_2 && drag_6.y>dropzone_y_1 && drag_6.y<dropzone_y_2)
{
	drag_6.x=drag_6.x;
	drag_6.y=drag_6.y;
}
else{
	drag_6.x=player.GetVar("drag_x_6");
	drag_6.y=player.GetVar("drag_y_6");
}
}

window.Script85 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script86 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");

const drag_1 = object('60xvvIBS5lz');
const drag_2 = object('5svjjjMsvXo');
const drag_3 = object('5WhTHmApPsQ');
const drag_4 = object('5ml0lacZdmI');
const drag_5 = object('5oj7piFdesK');
const drag_6 = object('6TrmbgMS10m');

if(drag_cevap_1===true)
{
	drag_1.x = 1187;
	drag_1.y = 300;
}

if(drag_cevap_2===true)
{
	drag_2.x = 1420;
	drag_2.y = 300;
}

if(drag_cevap_3===true)
{
	drag_3.x = 1654;
	drag_3.y = 300;
}

if(drag_cevap_4===true)
{
	drag_4.x = 1187;
	drag_4.y = 543;
}

if(drag_cevap_5===true)
{
	drag_5.x = 1420;
	drag_5.y = 543;
}

if(drag_cevap_6===true)
{
	drag_6.x = 1654;
	drag_6.y = 543;
}
}

window.Script87 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script88 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'block';
}
}

window.Script89 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");
let drag_var_1 = player.GetVar("drag_var_1");
let drag_var_2 = player.GetVar("drag_var_2");
let drag_var_3 = player.GetVar("drag_var_3");
let drag_var_4 = player.GetVar("drag_var_4");
let drag_var_5 = player.GetVar("drag_var_5");
let drag_var_6 = player.GetVar("drag_var_6");

const drag_1 = object('60xvvIBS5lz');
const drag_2 = object('5svjjjMsvXo');
const drag_3 = object('5WhTHmApPsQ');
const drag_4 = object('5ml0lacZdmI');
const drag_5 = object('5oj7piFdesK');
const drag_6 = object('6TrmbgMS10m');

if(drag_var_1 !== drag_cevap_1)
{
	drag_1.x = player.GetVar("drag_x_1");
	drag_1.y = player.GetVar("drag_y_1");
}

if(drag_var_2 !== drag_cevap_2)
{
	drag_2.x = player.GetVar("drag_x_2");
	drag_2.y = player.GetVar("drag_y_2");
}

if(drag_var_3 !== drag_cevap_3)
{
	drag_3.x = player.GetVar("drag_x_3");
	drag_3.y = player.GetVar("drag_y_3");
}

if(drag_var_4 !== drag_cevap_4)
{
	drag_4.x = player.GetVar("drag_x_4");
	drag_4.y = player.GetVar("drag_y_4");
}

if(drag_var_5 !== drag_cevap_5)
{
	drag_5.x = player.GetVar("drag_x_5");
	drag_5.y = player.GetVar("drag_y_5");
}

if(drag_var_6 !== drag_cevap_6)
{
	drag_6.x = player.GetVar("drag_x_6");
	drag_6.y = player.GetVar("drag_y_6");
}
}

window.Script90 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script91 = function()
{
  let player = GetPlayer();

const drag_1 = object('5mwUzr8JNvt');
const drag_2 = object('6ckGSC6oqI3');
const drag_3 = object('5qDxF3IruGf');
const drag_4 = object('6jQvV6w1dpW');
const drag_5 = object('6ELw5gPkR6v');
const drag_6 = object('6nayKzrTEh1');

player.SetVar("drag_x_1",drag_1.x);
player.SetVar("drag_x_2",drag_2.x);
player.SetVar("drag_x_3",drag_3.x);
player.SetVar("drag_x_4",drag_4.x);
player.SetVar("drag_x_5",drag_5.x);
player.SetVar("drag_x_6",drag_6.x);
player.SetVar("drag_y_1",drag_1.y);
player.SetVar("drag_y_2",drag_2.y);
player.SetVar("drag_y_3",drag_3.y);
player.SetVar("drag_y_4",drag_4.y);
player.SetVar("drag_y_5",drag_5.y);
player.SetVar("drag_y_6",drag_6.y);
}

window.Script92 = function()
{
  let player = GetPlayer();

const drag_1 = object('6nNnoHB2sJU');
const drag_2 = object('5cTgZr0nZm8');
const drag_3 = object('6cKzI6gaMKA');
const drag_4 = object('60wG7d0ED5N');
const drag_5 = object('5qRMXkGEUfI');
const drag_6 = object('6JylGiHB3kK');
const kontrol_et_btn = object('5VYSGC6EHyh');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

//kontrol et butonunun state'ini ayarla
if(
	drag_1.x===player.GetVar("drag_x_1") &&
	drag_2.x===player.GetVar("drag_x_2") &&
	drag_3.x===player.GetVar("drag_x_3") &&
	drag_4.x===player.GetVar("drag_x_4") &&
	drag_5.x===player.GetVar("drag_x_5") &&
	drag_6.x===player.GetVar("drag_x_6")
	)
{
	kontrol_et_btn.state = 'Disabled';
}
else{
	kontrol_et_btn.state = 'Normal';
}

//Değişkenlerin true/false durumlarını kontrol et
if(drag_1.x>player.GetVar("dropzone_x_1") && 
   drag_1.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_1",true);
}
else{
	player.SetVar("drag_var_1",false);
}

if(drag_2.x>player.GetVar("dropzone_x_1") && 
   drag_2.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_2",true);
}
else{
	player.SetVar("drag_var_2",false);
}

if(drag_3.x>player.GetVar("dropzone_x_1") && 
   drag_3.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_3",true);
}
else{
	player.SetVar("drag_var_3",false);
}

if(drag_4.x>player.GetVar("dropzone_x_1") && 
   drag_4.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_4",true);
}
else{
	player.SetVar("drag_var_4",false);
}

if(drag_5.x>player.GetVar("dropzone_x_1") && 
   drag_5.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_5",true);
}
else{
	player.SetVar("drag_var_5",false);
}

if(drag_6.x>player.GetVar("dropzone_x_1") && 
   drag_6.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_6",true);
}
else{
	player.SetVar("drag_var_6",false);
}

}

window.Script93 = function()
{
  let player = GetPlayer();
const drag_1 = object('6nNnoHB2sJU');
const drag_2 = object('5cTgZr0nZm8');
const drag_3 = object('6cKzI6gaMKA');
const drag_4 = object('60wG7d0ED5N');
const drag_5 = object('5qRMXkGEUfI');
const drag_6 = object('6JylGiHB3kK');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_1.x>dropzone_x_1 && drag_1.x<dropzone_x_2 && drag_1.y>dropzone_y_1 && drag_1.y<dropzone_y_2)
{
	drag_1.x=drag_1.x;
	drag_1.y=drag_1.y;
}
else{
	drag_1.x=player.GetVar("drag_x_1");
	drag_1.y=player.GetVar("drag_y_1");
}
}

window.Script94 = function()
{
  let player = GetPlayer();

const drag_1 = object('6nNnoHB2sJU');
const drag_2 = object('5cTgZr0nZm8');
const drag_3 = object('6cKzI6gaMKA');
const drag_4 = object('60wG7d0ED5N');
const drag_5 = object('5qRMXkGEUfI');
const drag_6 = object('6JylGiHB3kK');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_2.x>dropzone_x_1 && drag_2.x<dropzone_x_2 && drag_2.y>dropzone_y_1 && drag_2.y<dropzone_y_2)
{
	drag_2.x=drag_2.x;
	drag_2.y=drag_2.y;
}
else{
	drag_2.x=player.GetVar("drag_x_2");
	drag_2.y=player.GetVar("drag_y_2");
}
}

window.Script95 = function()
{
  let player = GetPlayer();

const drag_1 = object('6nNnoHB2sJU');
const drag_2 = object('5cTgZr0nZm8');
const drag_3 = object('6cKzI6gaMKA');
const drag_4 = object('60wG7d0ED5N');
const drag_5 = object('5qRMXkGEUfI');
const drag_6 = object('6JylGiHB3kK');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_3.x>dropzone_x_1 && drag_3.x<dropzone_x_2 && drag_3.y>dropzone_y_1 && drag_3.y<dropzone_y_2)
{
	drag_3.x=drag_3.x;
	drag_3.y=drag_3.y;
}
else{
	drag_3.x=player.GetVar("drag_x_3");
	drag_3.y=player.GetVar("drag_y_3");
}
}

window.Script96 = function()
{
  let player = GetPlayer();

const drag_1 = object('6nNnoHB2sJU');
const drag_2 = object('5cTgZr0nZm8');
const drag_3 = object('6cKzI6gaMKA');
const drag_4 = object('60wG7d0ED5N');
const drag_5 = object('5qRMXkGEUfI');
const drag_6 = object('6JylGiHB3kK');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_4.x>dropzone_x_1 && drag_4.x<dropzone_x_2 && drag_4.y>dropzone_y_1 && drag_4.y<dropzone_y_2)
{
	drag_4.x=drag_4.x;
	drag_4.y=drag_4.y;
}
else{
	drag_4.x=player.GetVar("drag_x_4");
	drag_4.y=player.GetVar("drag_y_4");
}
}

window.Script97 = function()
{
  let player = GetPlayer();

const drag_1 = object('6nNnoHB2sJU');
const drag_2 = object('5cTgZr0nZm8');
const drag_3 = object('6cKzI6gaMKA');
const drag_4 = object('60wG7d0ED5N');
const drag_5 = object('5qRMXkGEUfI');
const drag_6 = object('6JylGiHB3kK');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_5.x>dropzone_x_1 && drag_5.x<dropzone_x_2 && drag_5.y>dropzone_y_1 && drag_5.y<dropzone_y_2)
{
	drag_5.x=drag_5.x;
	drag_5.y=drag_5.y;
}
else{
	drag_5.x=player.GetVar("drag_x_5");
	drag_5.y=player.GetVar("drag_y_5");
}
}

window.Script98 = function()
{
  let player = GetPlayer();

const drag_1 = object('6nNnoHB2sJU');
const drag_2 = object('5cTgZr0nZm8');
const drag_3 = object('6cKzI6gaMKA');
const drag_4 = object('60wG7d0ED5N');
const drag_5 = object('5qRMXkGEUfI');
const drag_6 = object('6JylGiHB3kK');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_6.x>dropzone_x_1 && drag_6.x<dropzone_x_2 && drag_6.y>dropzone_y_1 && drag_6.y<dropzone_y_2)
{
	drag_6.x=drag_6.x;
	drag_6.y=drag_6.y;
}
else{
	drag_6.x=player.GetVar("drag_x_6");
	drag_6.y=player.GetVar("drag_y_6");
}
}

window.Script99 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script100 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");

const drag_1 = object('6nNnoHB2sJU');
const drag_2 = object('5cTgZr0nZm8');
const drag_3 = object('6cKzI6gaMKA');
const drag_4 = object('60wG7d0ED5N');
const drag_5 = object('5qRMXkGEUfI');
const drag_6 = object('6JylGiHB3kK');

if(drag_cevap_1===true)
{
	drag_1.x = 1187;
	drag_1.y = 300;
}

if(drag_cevap_2===true)
{
	drag_2.x = 1420;
	drag_2.y = 300;
}

if(drag_cevap_3===true)
{
	drag_3.x = 1654;
	drag_3.y = 300;
}

if(drag_cevap_4===true)
{
	drag_4.x = 1187;
	drag_4.y = 543;
}

if(drag_cevap_5===true)
{
	drag_5.x = 1420;
	drag_5.y = 543;
}

if(drag_cevap_6===true)
{
	drag_6.x = 1654;
	drag_6.y = 543;
}
}

window.Script101 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script102 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'block';
}
}

window.Script103 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");
let drag_var_1 = player.GetVar("drag_var_1");
let drag_var_2 = player.GetVar("drag_var_2");
let drag_var_3 = player.GetVar("drag_var_3");
let drag_var_4 = player.GetVar("drag_var_4");
let drag_var_5 = player.GetVar("drag_var_5");
let drag_var_6 = player.GetVar("drag_var_6");

const drag_1 = object('6nNnoHB2sJU');
const drag_2 = object('5cTgZr0nZm8');
const drag_3 = object('6cKzI6gaMKA');
const drag_4 = object('60wG7d0ED5N');
const drag_5 = object('5qRMXkGEUfI');
const drag_6 = object('6JylGiHB3kK');

if(drag_var_1 !== drag_cevap_1)
{
	drag_1.x = player.GetVar("drag_x_1");
	drag_1.y = player.GetVar("drag_y_1");
}

if(drag_var_2 !== drag_cevap_2)
{
	drag_2.x = player.GetVar("drag_x_2");
	drag_2.y = player.GetVar("drag_y_2");
}

if(drag_var_3 !== drag_cevap_3)
{
	drag_3.x = player.GetVar("drag_x_3");
	drag_3.y = player.GetVar("drag_y_3");
}

if(drag_var_4 !== drag_cevap_4)
{
	drag_4.x = player.GetVar("drag_x_4");
	drag_4.y = player.GetVar("drag_y_4");
}

if(drag_var_5 !== drag_cevap_5)
{
	drag_5.x = player.GetVar("drag_x_5");
	drag_5.y = player.GetVar("drag_y_5");
}

if(drag_var_6 !== drag_cevap_6)
{
	drag_6.x = player.GetVar("drag_x_6");
	drag_6.y = player.GetVar("drag_y_6");
}
}

window.Script104 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script105 = function()
{
  let player = GetPlayer();

const drag_1 = object('5mwUzr8JNvt');
const drag_2 = object('6ckGSC6oqI3');
const drag_3 = object('5qDxF3IruGf');
const drag_4 = object('6jQvV6w1dpW');
const drag_5 = object('6ELw5gPkR6v');
const drag_6 = object('6nayKzrTEh1');

player.SetVar("drag_x_1",drag_1.x);
player.SetVar("drag_x_2",drag_2.x);
player.SetVar("drag_x_3",drag_3.x);
player.SetVar("drag_x_4",drag_4.x);
player.SetVar("drag_x_5",drag_5.x);
player.SetVar("drag_x_6",drag_6.x);
player.SetVar("drag_y_1",drag_1.y);
player.SetVar("drag_y_2",drag_2.y);
player.SetVar("drag_y_3",drag_3.y);
player.SetVar("drag_y_4",drag_4.y);
player.SetVar("drag_y_5",drag_5.y);
player.SetVar("drag_y_6",drag_6.y);
}

window.Script106 = function()
{
  let player = GetPlayer();

const drag_1 = object('6gSuu1ZowS9');
const drag_2 = object('6VjoKJ2deXp');
const drag_3 = object('6i6ckFSNDXM');
const drag_4 = object('5yNgoT5tL7k');
const drag_5 = object('6lPW7cymbJC');
const drag_6 = object('6bXAIJGaSmX');
const kontrol_et_btn = object('6UzyN0RDPXV');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

//kontrol et butonunun state'ini ayarla
if(
	drag_1.x===player.GetVar("drag_x_1") &&
	drag_2.x===player.GetVar("drag_x_2") &&
	drag_3.x===player.GetVar("drag_x_3") &&
	drag_4.x===player.GetVar("drag_x_4") &&
	drag_5.x===player.GetVar("drag_x_5") &&
	drag_6.x===player.GetVar("drag_x_6")
	)
{
	kontrol_et_btn.state = 'Disabled';
}
else{
	kontrol_et_btn.state = 'Normal';
}

//Değişkenlerin true/false durumlarını kontrol et
if(drag_1.x>player.GetVar("dropzone_x_1") && 
   drag_1.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_1",true);
}
else{
	player.SetVar("drag_var_1",false);
}

if(drag_2.x>player.GetVar("dropzone_x_1") && 
   drag_2.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_2",true);
}
else{
	player.SetVar("drag_var_2",false);
}

if(drag_3.x>player.GetVar("dropzone_x_1") && 
   drag_3.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_3",true);
}
else{
	player.SetVar("drag_var_3",false);
}

if(drag_4.x>player.GetVar("dropzone_x_1") && 
   drag_4.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_4",true);
}
else{
	player.SetVar("drag_var_4",false);
}

if(drag_5.x>player.GetVar("dropzone_x_1") && 
   drag_5.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_5",true);
}
else{
	player.SetVar("drag_var_5",false);
}

if(drag_6.x>player.GetVar("dropzone_x_1") && 
   drag_6.x<player.GetVar("dropzone_x_2")
   )
{
	player.SetVar("drag_var_6",true);
}
else{
	player.SetVar("drag_var_6",false);
}

}

window.Script107 = function()
{
  let player = GetPlayer();
const drag_1 = object('6gSuu1ZowS9');
const drag_2 = object('6VjoKJ2deXp');
const drag_3 = object('6i6ckFSNDXM');
const drag_4 = object('5yNgoT5tL7k');
const drag_5 = object('6lPW7cymbJC');
const drag_6 = object('6bXAIJGaSmX');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_1.x>dropzone_x_1 && drag_1.x<dropzone_x_2 && drag_1.y>dropzone_y_1 && drag_1.y<dropzone_y_2)
{
	drag_1.x=drag_1.x;
	drag_1.y=drag_1.y;
}
else{
	drag_1.x=player.GetVar("drag_x_1");
	drag_1.y=player.GetVar("drag_y_1");
}
}

window.Script108 = function()
{
  let player = GetPlayer();

const drag_1 = object('6gSuu1ZowS9');
const drag_2 = object('6VjoKJ2deXp');
const drag_3 = object('6i6ckFSNDXM');
const drag_4 = object('5yNgoT5tL7k');
const drag_5 = object('6lPW7cymbJC');
const drag_6 = object('6bXAIJGaSmX');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_2.x>dropzone_x_1 && drag_2.x<dropzone_x_2 && drag_2.y>dropzone_y_1 && drag_2.y<dropzone_y_2)
{
	drag_2.x=drag_2.x;
	drag_2.y=drag_2.y;
}
else{
	drag_2.x=player.GetVar("drag_x_2");
	drag_2.y=player.GetVar("drag_y_2");
}
}

window.Script109 = function()
{
  let player = GetPlayer();

const drag_1 = object('6gSuu1ZowS9');
const drag_2 = object('6VjoKJ2deXp');
const drag_3 = object('6i6ckFSNDXM');
const drag_4 = object('5yNgoT5tL7k');
const drag_5 = object('6lPW7cymbJC');
const drag_6 = object('6bXAIJGaSmX');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_3.x>dropzone_x_1 && drag_3.x<dropzone_x_2 && drag_3.y>dropzone_y_1 && drag_3.y<dropzone_y_2)
{
	drag_3.x=drag_3.x;
	drag_3.y=drag_3.y;
}
else{
	drag_3.x=player.GetVar("drag_x_3");
	drag_3.y=player.GetVar("drag_y_3");
}
}

window.Script110 = function()
{
  let player = GetPlayer();

const drag_1 = object('6gSuu1ZowS9');
const drag_2 = object('6VjoKJ2deXp');
const drag_3 = object('6i6ckFSNDXM');
const drag_4 = object('5yNgoT5tL7k');
const drag_5 = object('6lPW7cymbJC');
const drag_6 = object('6bXAIJGaSmX');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_4.x>dropzone_x_1 && drag_4.x<dropzone_x_2 && drag_4.y>dropzone_y_1 && drag_4.y<dropzone_y_2)
{
	drag_4.x=drag_4.x;
	drag_4.y=drag_4.y;
}
else{
	drag_4.x=player.GetVar("drag_x_4");
	drag_4.y=player.GetVar("drag_y_4");
}
}

window.Script111 = function()
{
  let player = GetPlayer();

const drag_1 = object('6gSuu1ZowS9');
const drag_2 = object('6VjoKJ2deXp');
const drag_3 = object('6i6ckFSNDXM');
const drag_4 = object('5yNgoT5tL7k');
const drag_5 = object('6lPW7cymbJC');
const drag_6 = object('6bXAIJGaSmX');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_5.x>dropzone_x_1 && drag_5.x<dropzone_x_2 && drag_5.y>dropzone_y_1 && drag_5.y<dropzone_y_2)
{
	drag_5.x=drag_5.x;
	drag_5.y=drag_5.y;
}
else{
	drag_5.x=player.GetVar("drag_x_5");
	drag_5.y=player.GetVar("drag_y_5");
}
}

window.Script112 = function()
{
  let player = GetPlayer();

const drag_1 = object('6gSuu1ZowS9');
const drag_2 = object('6VjoKJ2deXp');
const drag_3 = object('6i6ckFSNDXM');
const drag_4 = object('5yNgoT5tL7k');
const drag_5 = object('6lPW7cymbJC');
const drag_6 = object('6bXAIJGaSmX');

let dropzone_x_1 = player.GetVar("dropzone_x_1");
let dropzone_x_2 = player.GetVar("dropzone_x_2");
let dropzone_y_1 = player.GetVar("dropzone_y_1");
let dropzone_y_2 = player.GetVar("dropzone_y_2");

if(drag_6.x>dropzone_x_1 && drag_6.x<dropzone_x_2 && drag_6.y>dropzone_y_1 && drag_6.y<dropzone_y_2)
{
	drag_6.x=drag_6.x;
	drag_6.y=drag_6.y;
}
else{
	drag_6.x=player.GetVar("drag_x_6");
	drag_6.y=player.GetVar("drag_y_6");
}
}

window.Script113 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script114 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");

const drag_1 = object('6gSuu1ZowS9');
const drag_2 = object('6VjoKJ2deXp');
const drag_3 = object('6i6ckFSNDXM');
const drag_4 = object('5yNgoT5tL7k');
const drag_5 = object('6lPW7cymbJC');
const drag_6 = object('6bXAIJGaSmX');

if(drag_cevap_1===true)
{
	drag_1.x = 1187;
	drag_1.y = 300;
}

if(drag_cevap_2===true)
{
	drag_2.x = 1420;
	drag_2.y = 300;
}

if(drag_cevap_3===true)
{
	drag_3.x = 1654;
	drag_3.y = 300;
}

if(drag_cevap_4===true)
{
	drag_4.x = 1187;
	drag_4.y = 543;
}

if(drag_cevap_5===true)
{
	drag_5.x = 1420;
	drag_5.y = 543;
}

if(drag_cevap_6===true)
{
	drag_6.x = 1654;
	drag_6.y = 543;
}
}

window.Script115 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

window.Script116 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'block';
}
}

window.Script117 = function()
{
  let player = GetPlayer();
let drag_cevap_1 = player.GetVar("drag_cevap_1");
let drag_cevap_2 = player.GetVar("drag_cevap_2");
let drag_cevap_3 = player.GetVar("drag_cevap_3");
let drag_cevap_4 = player.GetVar("drag_cevap_4");
let drag_cevap_5 = player.GetVar("drag_cevap_5");
let drag_cevap_6 = player.GetVar("drag_cevap_6");
let drag_var_1 = player.GetVar("drag_var_1");
let drag_var_2 = player.GetVar("drag_var_2");
let drag_var_3 = player.GetVar("drag_var_3");
let drag_var_4 = player.GetVar("drag_var_4");
let drag_var_5 = player.GetVar("drag_var_5");
let drag_var_6 = player.GetVar("drag_var_6");

const drag_1 = object('6gSuu1ZowS9');
const drag_2 = object('6VjoKJ2deXp');
const drag_3 = object('6i6ckFSNDXM');
const drag_4 = object('5yNgoT5tL7k');
const drag_5 = object('6lPW7cymbJC');
const drag_6 = object('6bXAIJGaSmX');

if(drag_var_1 !== drag_cevap_1)
{
	drag_1.x = player.GetVar("drag_x_1");
	drag_1.y = player.GetVar("drag_y_1");
}

if(drag_var_2 !== drag_cevap_2)
{
	drag_2.x = player.GetVar("drag_x_2");
	drag_2.y = player.GetVar("drag_y_2");
}

if(drag_var_3 !== drag_cevap_3)
{
	drag_3.x = player.GetVar("drag_x_3");
	drag_3.y = player.GetVar("drag_y_3");
}

if(drag_var_4 !== drag_cevap_4)
{
	drag_4.x = player.GetVar("drag_x_4");
	drag_4.y = player.GetVar("drag_y_4");
}

if(drag_var_5 !== drag_cevap_5)
{
	drag_5.x = player.GetVar("drag_x_5");
	drag_5.y = player.GetVar("drag_y_5");
}

if(drag_var_6 !== drag_cevap_6)
{
	drag_6.x = player.GetVar("drag_x_6");
	drag_6.y = player.GetVar("drag_y_6");
}
}

window.Script118 = function()
{
  // GÜVENİLİR YÖNTEM
// '6YOyhJW2aoe' yerine kendi nesnenizin model ID'sini yazın.
var webObject = document.querySelector('[data-model-id="5xx0Pt0AXRa"]');

// Nesne bulunduysa stilini değiştirerek gizle.
if (webObject) {
  webObject.style.display = 'none';
}
}

};
