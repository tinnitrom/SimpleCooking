
let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {

    if(scrollPosition() > lastScroll && !containHide()) {
        header.classList.add('hide')
    }
    else if(scrollPosition() < lastScroll && containHide()) {
        header.classList.remove('hide')
    }
    
    lastScroll = scrollPosition();
})  

const cards = document.querySelectorAll('.card');

if (cards.length > 0) {
    cards[0].addEventListener('click', () => {
        window.location.href = 'Recepts/sirnyki.html';
    });

    cards[0].style.cursor = 'pointer';
}