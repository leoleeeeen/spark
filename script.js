const burger = document.getElementById('burger')
const cross = document.getElementById('cross')
const menu = document.getElementById('mobile-header')
const header_banner = document.getElementById('hero-section');
const main = document.querySelector('body');

burger.addEventListener('click', () => {
    menu.style.display = 'block';
    header_banner.style.display = 'none';
    main.classList = 'disable-scroll';
})

cross.addEventListener('click', () => {
    menu.style.display = 'none';
    header_banner.style.display = 'flex';
    main.classList = '';
})