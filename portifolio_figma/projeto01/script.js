const will = document.querySelector('.will')
const ola = document.querySelector('.ola')
const sobre = document.querySelector('.sobre')
const projetos = document.querySelector('.projetos')
function redirecionar(site){
    if(site == 'ola'){
        location.href = '../home/index.html'
    }else if(site == 'sobre'){
        location.href = '../sobre/index.html'
    }else if(site == 'projetos'){
        location.href = '../projetos/index.html'
    }

    
}
ola.addEventListener('click', ()=>{redirecionar('ola')})
sobre.addEventListener('click', ()=>{redirecionar('sobre')})
projetos.addEventListener('click', ()=>{redirecionar('projetos')})