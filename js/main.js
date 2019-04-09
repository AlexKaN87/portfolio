let gamburger = document.getElementById('closer');
let menu = document.getElementById('menu');
    gamburger.addEventListener('click', function(){
     gamburger.classList.toggle('navbar__close-active');
     menu.classList.toggle('menu_active');
});
//-----------------canvas skills-----------------------------------
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

let canvas3 = document.getElementById('canvas3');
let ctx3 = canvas3.getContext('2d');

let canvas4 = document.getElementById('canvas4');
let ctx4 = canvas4.getContext('2d');

let pi = Math.PI;
let k = 2 * pi / 100;

let x = 0;
let x2 = 0;
let x3 = 0;
let x4 = 0;

var max = 85;
var max2 = 80;
var max3 = 70;
var max4 = 75;


let timeout;
let timeout2;
let timeout3;
let timeout4;

//----------------------1ый канвас------------------------------
function draw(){
     ctx.clearRect(0,0,250,250);

     ctx.beginPath();
     ctx.arc(125,125,100, 0, x*k, false);
     ctx.strokeStyle = '#507fe1';
     ctx.lineWidth = 20;
     ctx.lineCap = 'round'
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.font= 'bold 70px Arial';
     ctx.fillStyle = '#507fe1';
     ctx.textAlign = 'center';
     ctx.fillText(x+'%', 125, 145);
     ctx.closePath();
    
    x++;
    
    if(x<=max){
          timeout = setTimeout(draw, 10);
     }
     else{
          clearTimeout(timeout);
     }
}
    //------------------2ой канвас-------------------------------
function draw2(){
    ctx2.clearRect(0,0,250,250);

     ctx2.beginPath();
     ctx2.arc(125,125,100, 0, x2*k, false);
     ctx2.strokeStyle = '#507fe1';
     ctx2.lineWidth = 20;
     ctx2.lineCap = 'round'
     ctx2.stroke();
     ctx2.closePath();

     ctx2.beginPath();
     ctx2.font= 'bold 70px Arial';
     ctx2.fillStyle = '#507fe1';
     ctx2.textAlign = 'center';
     ctx2.fillText(x2+'%', 125, 145);
     ctx2.closePath();

     x2++;
    
    if(x2 <= max2){
          timeout2 = setTimeout(draw2, 10);
     }
     else{
          clearTimeout(timeout2);
     }
}
//-----------------3ий канвас-----------------------
function draw3(){
    ctx3.clearRect(0,0,250,250);

     ctx3.beginPath();
     ctx3.arc(125,125,100, 0, x3*k, false);
     ctx3.strokeStyle = '#507fe1';
     ctx3.lineWidth = 20;
     ctx3.lineCap = 'round'
     ctx3.stroke();
     ctx3.closePath();

     ctx3.beginPath();
     ctx3.font= 'bold 70px Arial';
     ctx3.fillStyle = '#507fe1';
     ctx3.textAlign = 'center';
     ctx3.fillText(x3+'%', 125, 145);
     ctx3.closePath();

     x3++;
    
    if(x3 <= max3){
          timeout3 = setTimeout(draw3, 10);
     }
     else{
          clearTimeout(timeout3);
     }
}    
//------------------4ый канвас------------------------------
function draw4(){
    ctx4.clearRect(0,0,250,250);

     ctx4.beginPath();
     ctx4.arc(125,125,100, 0, x3*k, false);
     ctx4.strokeStyle = '#507fe1';
     ctx4.lineWidth = 20;
     ctx4.lineCap = 'round'
     ctx4.stroke();
     ctx4.closePath();

     ctx4.beginPath();
     ctx4.font= 'bold 70px Arial';
     ctx4.fillStyle = '#507fe1';
     ctx4.textAlign = 'center';
     ctx4.fillText(x4+'%', 125, 145);
     ctx4.closePath();

     x4++;
    
    if(x4 <= max4){
          timeout4 = setTimeout(draw4, 10);
     }
     else{
          clearTimeout(timeout4);
     }
}    
//--------------------------плавный скрол---------------------
var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = .6;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}

///--------------------------debounce ----------------------------------
let debounce = function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
//----------------------------------------------------------
let catalog = document.getElementById('skills'),
    cordinationCatalogTop = catalog.offsetTop;

    window.addEventListener('scroll', function scroll(){
        let windowTop = this.pageYOffset;
        if(windowTop > cordinationCatalogTop){
            console.log("Докрутили до точки- "+ cordinationCatalogTop); 
            draw();
            draw2();
            draw3();
            draw4();
         this.removeEventListener('scroll',scroll);
        }
});
//----------------------Появление Блоков------------------------------------------ 
const targ = document.querySelectorAll('[data-anime]');
const animationClass ='animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    targ.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    });
}
animeScroll();
if(targ.length){
    window.addEventListener('scroll', debounce(function(){
    animeScroll();
    }, 50));
}
//----------------------------модальное окно----------------------------------
let navbarButton = document.getElementsByClassName('navbar__button')[0],
    modal = document.getElementsByClassName('popup')[0],
    close = document.getElementsByClassName('popup__close')[0];


    navbarButton.addEventListener('click', function(){
        modal.style.display ='block';
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', function(){
        modal.style.display ='none';
        document.body.style.overflow = '';
    });
