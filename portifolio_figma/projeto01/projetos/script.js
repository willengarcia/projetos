const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const botao = document.querySelector('.botao')
const nav = document.querySelector('.navegacao')
const header = document.querySelector('.cabeca')
const footer = document.querySelector('footer')
const ulLista = document.querySelector('.listas')

botao.addEventListener('click',()=>{
    nav.classList.toggle('activo')
    header.classList.toggle('activo')
    footer.classList.toggle('activo')
    ulLista.classList.toggle('activo')
    console.log('ativo')
})
let currentIndex = 0;

function showItem(index) {
    const itemWidth = carouselItems[0].clientWidth;
    const offset = -index * itemWidth;
    carouselContainer.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
    showItem(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    showItem(currentIndex);
});

// Inicia mostrando o primeiro item
showItem(currentIndex);
