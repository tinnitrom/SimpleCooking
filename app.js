console.log('js is active');
let lastScroll = 0;
const header = document.querySelector('.header');
const return_btn = document.querySelector('.return');
const add_btn = document.querySelector('.button-add');
const modal1 = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal-close');
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');
const cardGrid = document.querySelector('.card-grid');
const aboutBtn = document.querySelector('.about-btn');
const saveBtn = document.getElementById('saveRecipe');
const clear_cusotm = document.querySelector('#clear_custom')


const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header && header.classList.contains('hide');

/* ---------- HEADER ---------- */
if (header) {
    window.addEventListener('scroll', () => {
        if (scrollPosition() > lastScroll && !containHide()) {
            header.classList.add('hide');
        } else if (scrollPosition() < lastScroll && containHide()) {
            header.classList.remove('hide');
        }
        lastScroll = scrollPosition();
    });
}

/* ---------- RETURN ---------- */
if (return_btn) {
    return_btn.style.cursor = 'pointer';
    return_btn.addEventListener('click', () => {
        window.location.href = '../main.html';
    });
}


/* ---------- CARD CLICK ---------- */
function attachCardClick(card) {
    const link = card.dataset.link;
    if (!link) return;
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        window.location.href = link;
    });
}

cards.forEach(attachCardClick);

/* ---------- SEARCH ---------- */
if (searchInput) {
    searchInput.addEventListener('input', () => {
        const value = searchInput.value.toLowerCase();
        document.querySelectorAll('.card').forEach(card => {
            card.style.display = card.innerText.toLowerCase().includes(value)
                ? 'block'
                : 'none';
        });
    });
}

/* ---------- MODAL ---------- */
if (add_btn) {
    add_btn.addEventListener('click', () => {
        modal1.classList.add('active');
    });
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        modal1.classList.remove('active');
    });
}

/* ---------- STORAGE ---------- */
function getRecipes() {
    return JSON.parse(localStorage.getItem('recipes')) || [];
}

function saveRecipes(data) {
    localStorage.setItem('recipes', JSON.stringify(data));
}

/* ---------- ADD RECIPE ---------- */
if (saveBtn) {
    saveBtn.addEventListener('click', () => {
        const title = rTitle.value.trim();
        const img = rImg.value.trim();
        const desc = rDesc.value.trim();
        const ingredients = rIngredients.value.split('\n');
        const steps = rSteps.value.split('\n');

        if (!title || !img) return alert('Заповни назву та картинку');

        const recipes = getRecipes();
        const id = Date.now();

        recipes.push({ id, title, img, desc, ingredients, steps });
        saveRecipes(recipes);

        addRecipeCard({ id, title, img });

        modal1.classList.remove('active');
    });
}

/* ---------- CREATE CARD ---------- */
function addRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.link = `recipe.html?id=${recipe.id}`;

    card.innerHTML = `
        <img src="${recipe.img}">
        <p>${recipe.title}</p>
    `;

    attachCardClick(card);
    cardGrid.appendChild(card);
}

/* ---------- LOAD SAVED ---------- */
window.addEventListener('DOMContentLoaded', () => {
    getRecipes().forEach(addRecipeCard);
});
if (clear_cusotm){
    clear_cusotm.addEventListener('click', () => {
        localStorage.clear();
        location.reload();
    });
}

/* ---------- ABOUT BUTTON ---------- */
if (aboutBtn) {
    aboutBtn.style.cursor = 'pointer';
    aboutBtn.addEventListener('click', () => {
        window.location.href = 'about.html';
    });
}
