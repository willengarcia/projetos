const cor =  document.querySelector('#btn-cor')
const apagar = document.querySelector('#apagar')
document.onmousemove = function(e){
    let x = e.pageX
    let y = e.pageY

    let span = document.createElement('span')
    span.classList.add('click_effect')
    span.style.top = y+'px'
    span.style.left = x+'px'
    document.body.appendChild(span)

    // setTimeout(()=>{
    //     span.remove()
    // },500)
}
cor.addEventListener('click', ()=>{
    let spans = [...document.querySelectorAll('span')]
    const corInput = document.querySelector('#cor')
    for(let i = 0; i<=spans.length; i+=1){
        spans[i].style.backgroundColor = corInput.value
        spans[i].style.borderColor = corInput.value
    }
})
apagar.addEventListener('click', ()=>{
    let spans = [...document.querySelectorAll('span')]
    const corInput = document.querySelector('#cor')
    for(let i = 0; i<=spans.length; i+=1){
        spans[i].remove()
    }
})