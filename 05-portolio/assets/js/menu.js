document.addEventListener("DOMContentLoaded", (event) => {
    const button = document.querySelector('.layout__menu-toggle');
    const aside = document.querySelector('.layout__aside');

    button.addEventListener('click', (event) => {
        const visible = document.querySelector('.layout__aside--visible');

        if(!visible){
            aside.classList.add('layout__aside--visible');
        }
    })
});