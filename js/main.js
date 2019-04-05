let gamburger = document.getElementById('closer');
let menu = document.getElementById('menu');
    gamburger.addEventListener('click', function(){
     gamburger.classList.toggle('navbar__close-active');
     menu.classList.toggle('menu_active');
});
//-----------------canvas skills-----------------------------------
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let pi = Math.PI;
let k = 2 * pi / 100;
let x = 0;
var max = 85
let timeout;

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
          timeout = setTimeout(draw, 20);
     }
     else{
          clearTimeout(timeout);
     }
}
// draw();
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
let catalog = document.getElementById('skills');
let cordinationCatalogTop = catalog.offsetTop;
let active = 'blog-list-card__canvas-active';
let target = document.querySelectorAll('.blog-list-card__canvas');

target.forEach(function(element){
    window.addEventListener('scroll', function scroll(){
        let windowTop = this.pageYOffset;
        if(windowTop > cordinationCatalogTop){
         element.classList.add(active);
            console.log("Докрутили до точки- "+ cordinationCatalogTop); 
        }
        if(element.classList.contains(active)){
         draw();
         this.removeEventListener('scroll',scroll);
         }
     });
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