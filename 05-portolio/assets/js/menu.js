document.addEventListener("DOMContentLoaded", () => {
    const aside = document.querySelector('.layout__aside');
    const button = document.querySelector('.layout__menu-toggle');
    const icon_bars = document.querySelector('.layout__menu-toggle .fa-bars');
    const icon_xmark = document.querySelector('.layout__menu-toggle .fa-xmark');

    function closeMenu() {
        aside.classList.remove('layout__aside--visible');
        icon_bars.style.opacity = 1;
        icon_xmark.style.opacity = 0;
    }

    button.addEventListener('click', () => {
        const visible = document.querySelector('.layout__aside--visible');

        if(!visible){
            aside.classList.add('layout__aside--visible');
            icon_bars.style.opacity = 0;
            icon_xmark.style.opacity = 1;
        }else{
            closeMenu();
        }
    });

    window.addEventListener('resize', ()=>{
        const size = parseInt(document.body.clientWidth);

        if(size <= 1060) {
            closeMenu();
        }
    });
});