const adicionar = document.getElementById('add')
const pValor = [...document.querySelectorAll('p')]
adicionar.addEventListener('click', (evt)=>{
    window.location.href = 'https://willengarcia.github.io/projetos/financeiro/adicionar/index.html'
})
let valor = 0
window.addEventListener('load', ()=>{
    const tempo1 = ()=>{
        pValor[0].innerHTML = `R$ ${valor}`
        if(valor>=500){
            setTimeout(()=>{
                clearInterval(intervalo1)
            }, 1)
        }
        valor++
    }
    const intervalo1 = setInterval(tempo1,30)

    const tempo2 = ()=>{
        pValor[1].innerHTML = `R$ ${valor}`
        if(valor>=1200){
            setTimeout(()=>{
                clearInterval(intervalo2)
            }, 1)
        }
        valor++
    }
    const intervalo2 = setInterval(tempo2,30)

    const tempo3 = ()=>{
        pValor[2].innerHTML = `R$ ${valor}`
        if(valor>=549){
            setTimeout(()=>{
                clearInterval(intervalo3)
            }, 1)
        }
        valor++
    }
    const intervalo3 = setInterval(tempo3,30)
})