let gamburger = document.getElementById('closer');
let menu = document.getElementById('menu');
    gamburger.addEventListener('click', function(){
     gamburger.classList.toggle('navbar__close-active');
     menu.classList.toggle('menu_active');
});