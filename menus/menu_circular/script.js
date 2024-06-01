const botao = document.querySelector('.botao')
const lista = [...document.querySelectorAll('.lista')]
const nav = document.querySelector('.nav')

botao.addEventListener('click', ()=>{
    lista[0].classList.toggle('ativo')
    lista[1].classList.toggle('ativo')
    lista[2].classList.toggle('ativo')
    lista[3].classList.toggle('ativo')
    lista[4].classList.toggle('ativo')
    botao.classList.toggle('ativo')
})