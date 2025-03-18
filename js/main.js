
// загрузка
window.addEventListener("load", function() {
    document.querySelector(".preloader").classList.add("hide");
});

//-----------------------------------------------------------------------------------//
// бургер
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector("#burger"); // Находим чекбокс
    const menuList = document.querySelector(".menu__list"); // Находим меню

    // Открытие/закрытие меню при клике на бургер
    burger.addEventListener("change", function () {
        if (burger.checked) {
            menuList.classList.add("active"); // Показываем меню
        } else {
            menuList.classList.remove("active"); // Прячем меню
        }
    });
    document.addEventListener("click", function (e){
        if(!menuList.contains(e.target) && !burger.parentElement.contains(e.target)){
            burger.checked = false;
            menuList.classList.remove("active");
        }
    });
});
//dots
document.addEventListener("DOMContentLoaded", function(){
    const dots = document.querySelector("#dots");
    const location = document.querySelector(".contHead__content");

    dots.addEventListener("change", function(){
        if(dots.checked){
            location.classList.add("active");
        }else{
            location.classList.remove("active");
        }
    });
    document.addEventListener("click", function(e){
        if(!location.contains(e.target) && !dots.parentElement.contains(e.target)){
            dots.checked =false;
            location.classList.remove("active");
        }
    });

});

// перехід нав
// Отримуємо елемент з класом .navbar
const navbar = document.querySelector('.menu');

// Слухаємо подію 'scroll' у вікні
window.addEventListener('scroll', () => {
  // Якщо відстань скролу зверху більша за 50px
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

  