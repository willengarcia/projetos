let text = document.getElementById('text')
let leaf = document.getElementById('leaf')
let hill1 = document.getElementById('hill1')
let hill4 = document.getElementById('hill4')
let hill5 = document.getElementById('hill5')

window.addEventListener('scroll', ()=>{
    let valor = window.scrollY
    text.style.marginTop = valor * 2.5+'px'
    leaf.style.top = valor * -1.5+'px'
    leaf.style.left = valor * 1.5+'px'
    hill5.style.left = valor * 1.5+'px'
    hill4.style.left = valor * -1.5+'px'
    hill1.style.top = valor * 1+'px'
})