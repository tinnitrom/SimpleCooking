
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
    // Сирники
    if (cards[0]) {
        cards[0].style.cursor = 'pointer';
        cards[0].addEventListener('click', () => {
            window.location.href = 'Recepts/sirnyki.html';
        });
    }

    // Борщ
    if (cards[1]) {
        cards[1].style.cursor = 'pointer';
        cards[1].addEventListener('click', () => {
            window.location.href = 'Recepts/borsch.html';
        });
    }

    // Котлети по-київськи
    if (cards[2]) {
        cards[2].style.cursor = 'pointer';
        cards[2].addEventListener('click', () => {
            window.location.href = 'Recepts/kotleta.html';
        })
    }

    // Булочки з маком
    if (cards[3]) {
        cards[3].style.cursor = 'pointer';
        cards[3].addEventListener('click', () => {
            window.location.href = 'Recepts/bulochka.html';
        });
    }

    // Олів’є
    if (cards[4]) {
        cards[4].style.cursor = 'pointer';
        cards[4].addEventListener('click', () => {
            window.location.href = 'Recepts/olivye.html';
        });
    }

    // Тірамісу
    if (cards[5]) {
        cards[5].style.cursor = 'pointer';
        cards[5].addEventListener('click', () => {
            window.location.href = 'Recepts/tiramicy.html';
        });
    }

    // Шарлотка з яблуками
    if (cards[6]) {
        cards[6].style.cursor = 'pointer';
        cards[6].addEventListener('click', () => {
            window.location.href = 'Recepts/sharlotka.html';
        });
    }

    // Паста з грибами у вершковому соусі
    if (cards[7]) {
        cards[7].style.cursor = 'pointer';
        cards[7].addEventListener('click', () => {
            window.location.href = 'Recepts/pasta.html';
        });
    }

    // Запечена риба з лимоном і травами
    if (cards[8]) {
        cards[8].style.cursor = 'pointer';
        cards[8].addEventListener('click', () => {
            window.location.href = 'Recepts/ryba.html';
        });
    }

    // Піца на сковороді
    if (cards[9]) {
        cards[9].style.cursor = 'pointer';
        cards[9].addEventListener('click', () => {
            window.location.href = 'Recepts/pizza.html';
        });
    }
}

// Поиск по карточкам
const searchInput = document.getElementById('searchInput');
const cards1 = document.querySelectorAll('.card');

if (searchInput) {
    searchInput.addEventListener('input', () => {
        const value = searchInput.value.toLowerCase();

        cards1.forEach(card => {
            const text = card.innerText.toLowerCase();
            card.style.display = text.includes(value) ? 'block' : 'none';
        });
    });
}
