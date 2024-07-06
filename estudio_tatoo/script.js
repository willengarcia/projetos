const pValor = [...document.querySelectorAll('.qtd-tatuagens')]
const titulo = document.getElementById('titulo')
let valor = 0
window.addEventListener('load', ()=>{
    const tempo1 = ()=>{
        pValor[0].innerHTML = `R$ ${valor}`
        if(valor>=800){
            setTimeout(()=>{
                clearInterval(intervalo1)
            }, 1)
        }
        valor++
    }
    const intervalo1 = setInterval(tempo1,30)

    const tempo2 = ()=>{
        pValor[1].innerHTML = `R$ ${valor}`
        if(valor>=300){
            setTimeout(()=>{
                clearInterval(intervalo2)
            }, 1)
        }
        valor++
    }
    const intervalo2 = setInterval(tempo2,30)

    const tempo3 = ()=>{
        pValor[2].innerHTML = `R$ ${valor}`
        if(valor>=12){
            setTimeout(()=>{
                clearInterval(intervalo3)
            }, 1)
        }
        valor++
    }
    const intervalo3 = setInterval(tempo3,30)

    const tempo4 = ()=>{
        pValor[3].innerHTML = `R$ ${valor}`
        if(valor>=550){
            setTimeout(()=>{
                clearInterval(intervalo4)
            }, 1)
        }
        valor++
    }
    const intervalo4 = setInterval(tempo4,30)
})
function maquinaEscrever(elemento){
    const array =elemento.innerHTML.split('')
    elemento.innerHTML = ''
    array.forEach((letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += letra
        }, 75*i)
    })
}
maquinaEscrever(titulo)