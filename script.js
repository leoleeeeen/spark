const burger = document.querySelector('.burger')
const cross = document.querySelector('.cross')
const menu = document.querySelector('.mobile-header')

burger.addEventListener('click', () => {
    menu.style.display = 'block';
})

cross.addEventListener('click', () => {
    menu.style.display = 'none';
})