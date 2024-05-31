const botao = document.querySelector('.botao')
const nav = document.querySelector('.nav')
const header

botao.addEventListener('click',()=>{
    nav.classList.toggle('ativo')
    console.log('ativo')
})