const key = "AIzaSyCMeBryUOW-CqY3yNQURzN8Om6GzrjHZkY"
const inputLivro = document.getElementById('livro')
const botaoPesquisar = document.getElementById('pesquisar')
const divContent = document.getElementById('content')
function pegarLivros(autor, chave){
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${autor}:keyes&key=${chave}`)
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
    })
}
botaoPesquisar.addEventListener('click', (evt)=>{
    pegarLivros('Código+da+Vinci', key)
})