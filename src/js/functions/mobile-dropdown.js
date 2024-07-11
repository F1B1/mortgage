export function mobileDropdown (){
    const menuLinks = document.querySelectorAll('.header__link-mobile[data-target]');
    const backLinks = document.querySelectorAll('.menu-back-link[data-target]');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetMenu = document.getElementById(this.getAttribute('data-target'));
            document.querySelector('.submenu.active')?.classList.remove('active');
            targetMenu.classList.add('active');
            document.getElementById('main-menu').style.display = 'none';
        });
    });

    backLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetMenu = document.getElementById(this.getAttribute('data-target'));
            document.querySelector('.submenu.active')?.classList.remove('active');
            targetMenu.classList.add('active');
            document.getElementById('main-menu').style.display = 'block';
        });
    });
}