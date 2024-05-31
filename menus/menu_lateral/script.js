const botao = document.querySelector('.botao')
const nav = document.querySelector('.nav')
const header = document.querySelector('.cabeca')
const corpo = document.querySelector('.corpo')

botao.addEventListener('click',()=>{
    nav.classList.toggle('ativo')
    header.classList.toggle('ativo')
    corpo.classList.toggle('ativo')
    console.log('ativo')
})