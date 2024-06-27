document.addEventListener('DOMContentLoaded', function() {
    var menuMobileContainer = document.querySelector('.menu-mobile-container');
    var btnAbrirMenu = document.getElementById('btn-menu');
    var btnFecharMenu = document.querySelector('.btn-fechar');
    var menuMobile = document.getElementById('menu-mobile');
    var overlayMenu = document.getElementById('overlay-menu');
    var header = document.querySelector('header');

    function checkScreenSize() {
        if (window.innerWidth <= 900) {
            menuMobileContainer.style.display = 'block';
        } else {
            menuMobileContainer.style.display = 'none';
            menuMobile.classList.remove('abrir-menu'); // Fechar o menu se a tela for maior que 900px
        }
    }

    btnAbrirMenu.addEventListener('click', function() {
        menuMobile.classList.add('abrir-menu');
    });

    btnFecharMenu.addEventListener('click', function() {
        menuMobile.classList.remove('abrir-menu');
    });

    overlayMenu.addEventListener('click', function() {
        menuMobile.classList.remove('abrir-menu');
    });

    // Adiciona evento de clique para todas as âncoras no menu mobile
    var menuMobileLinks = document.querySelectorAll('.menu-mobile nav ul li a');
    menuMobileLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Fecha o menu
            menuMobile.classList.remove('abrir-menu');

            // Obtém o id da seção para onde queremos rolar
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            // Rola suavemente para a seção desejada, considerando a altura do header
            if (targetElement) {
                e.preventDefault(); // Previne o comportamento padrão do link
                var offsetTop = targetElement.offsetTop - header.offsetHeight; // Subtrai a altura do header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
});
