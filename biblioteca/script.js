const key = "AIzaSyCMeBryUOW-CqY3yNQURzN8Om6GzrjHZkY"
const inputLivro = document.getElementById('livro')
const botaoPesquisar = document.getElementById('pesquisar')
const imagemLivro = document.getElementById('imagem-livro')
const tituloH1 = document.getElementById('titulo')
const descricaoP = document.getElementById('descricao')
const autorH2 = document.getElementById('autor')
const informacoesAutorP = document.getElementById('informacoes-autor')
function pegarLivros(livro, chave){
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${livro}+intitle&key=${chave}`)
    .then(res=>res.json())
    .then(res=>{
        let informacoesLivro = res.items[0].volumeInfo
        //let imagem = res.items[0].volumeInfo.imageLinks.thumbnail
        tituloH1.innerText = informacoesLivro.title
        descricaoP.innerText = informacoesLivro.description
        //imagemLivro.src = imagem

        for (let index = 0; index < res.items.length; index++) {
            const element = res.items[index];
            console.log(element.volumeInfo)
            if(element.volumeInfo.imageLinks.thumbnail){
                let imagem = element.volumeInfo.imageLinks.thumbnail
                imagemLivro.src = imagem
            }
            if(element.volumeInfo.description){
                descricaoP.innerText = element.volumeInfo.description
            }
            if(element.volumeInfo.title == livro.replace(/ +/g, ' ')){
                tituloH1.innerText = informacoesLivro.title
            }
        }

    })
}
botaoPesquisar.addEventListener('click', (evt)=>{
    pegarLivros(inputLivro.value.replace(/ /g, '+'), key)
})