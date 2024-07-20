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