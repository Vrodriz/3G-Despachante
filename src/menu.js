document.addEventListener('DOMContentLoaded', function() {
    var btnAbrirMenu = document.getElementById('btn-menu');
    var btnFecharMenu = document.querySelector('.btn-fechar');
    var menuMobile = document.getElementById('menu-mobile');
    var overlayMenu = document.getElementById('overlay-menu');

    btnAbrirMenu.addEventListener('click', function() {
        menuMobile.classList.add('abrir-menu');
    });

    btnFecharMenu.addEventListener('click', function() {
        menuMobile.classList.remove('abrir-menu');
    });

    overlayMenu.addEventListener('click', function() {
        menuMobile.classList.remove('abrir-menu');
    });
});
