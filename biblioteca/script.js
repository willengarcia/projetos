const key = "AIzaSyCMeBryUOW-CqY3yNQURzN8Om6GzrjHZkY"
const inputLivro = document.getElementById('livro')
const botaoPesquisar = document.getElementById('pesquisar')
const imagemLivro = document.getElementById('imagem-livro')
const tituloH1 = document.getElementById('titulo')
const descricaoP = document.getElementById('descricao')
const classeLivrosUl = document.querySelector('.livros')
const classeFlipper = [...document.querySelectorAll('.flipper-container')]
function limparLi(objeto){
    objeto.forEach(elemento=>{
        elemento.remove()
    })
}
function criarLi(tamanhoObjeto, imagem, titulo, autor, publicacao, editora, avaliacao, linkRedirecionamento){
    let links = []
    let li = []
    let img = []
    let div = []
    let divFlipper = []
    let divFrente = []
    let divVerso = []
    let h2 = []
    let h3Autor =  []
    let h3Publicacao = []
    let h3Editora = []
    let h3Avaliacao = []
    for (let index = 0; index < tamanhoObjeto.length; index++) {
        links.push(`<ul><li><a href='#'>Instagram</a></li><li><a href='https://api.whatsapp.com/send?text=${linkRedirecionamento[index]}' class='whatsapp'>Whatsapp</a></li><li><a href='#'>Telegram</a></li><li><a href='#'>Twitter</a></li></ul>`)
        li.push(document.createElement('li'))
        img.push(document.createElement('img'))
        div.push(document.createElement('div'))
        divFlipper.push(document.createElement('div'))
        divFrente.push(document.createElement('div'))
        divVerso.push(document.createElement('div'))
        h2.push(document.createElement('h2'))
        h3Autor.push(document.createElement('h3'))
        h3Publicacao.push(document.createElement('h3'))
        h3Editora.push(document.createElement('h3'))
        h3Avaliacao.push(document.createElement('h3'))
    }
    img.forEach((elemento, indice)=>{
        elemento.setAttribute('src', `${imagem[indice]}`)
    })
    h2.forEach((elemento, indice)=>{
        elemento.innerText = `Título: ${titulo[indice]}`
    })
    h3Autor.forEach((elemento, indice)=>{
        elemento.innerText = `Autor: ${autor[indice]}`
    })
    h3Publicacao.forEach((elemento, indice)=>{
        elemento.innerText = `Publicação: ${publicacao[indice]}`
    })
    h3Editora.forEach((elemento, indice)=>{
        elemento.innerText = `Editora: ${editora[indice]}`
    })
    h3Avaliacao.forEach((elemento, indice)=>{
        elemento.innerText = `Avaliação: ${avaliacao[indice]}`
    })
    div.forEach((elemento, indice)=>{
        elemento.appendChild(h2[indice])
        elemento.appendChild(h3Autor[indice])
        elemento.appendChild(h3Publicacao[indice])
        elemento.appendChild(h3Editora[indice])
        elemento.appendChild(h3Avaliacao[indice])
    })
    li.forEach((elemento, indice)=>{
        classeLivrosUl.appendChild(elemento)
        elemento.setAttribute('class', 'flipper-container')
        elemento.setAttribute('onclick', "this.classList.toggle('flipped')")
        elemento.appendChild(divFlipper[indice])
        divFlipper[indice].setAttribute('class', 'flipper')
        divFlipper[indice].appendChild(divFrente[indice])
        divFlipper[indice].appendChild(divVerso[indice])
        divVerso[indice].setAttribute('class', 'verso')
        divFrente[indice].setAttribute('class', 'frente')
        divVerso[indice].innerHTML = links[indice]
        divFrente[indice].appendChild(img[indice])
        divFrente[indice].appendChild(div[indice])
    })
}
function pegarLivroAll(livros, chave){
    if(livros ==''){
        alert('Adicione o título de um livro ou o autor de algum livro')
    }else{
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${livros}&key=${chave}`)
        .then(res=>res.json())
        .then(res=>{
            let arrayObjetosLivros = []
            let autores = []
            let titulos = []
            let publicacoes = []
            let editoras = []
            let avaliacao = []
            let imagens = []
            let infoLinks = []
            for (let indice = 0; indice < res.items.length; indice++) {
                arrayObjetosLivros.push(res.items[indice])
            }
            for (const iterator of arrayObjetosLivros) {
                if(iterator.volumeInfo.authors){
                    autores.push(iterator.volumeInfo.authors[0])
                }
                titulos.push(iterator.volumeInfo.title)
                publicacoes.push(iterator.volumeInfo.publishedDate)
                editoras.push(iterator.volumeInfo.publisher)
                avaliacao.push(iterator.volumeInfo.averageRating)
                if(iterator.volumeInfo.imageLinks && iterator.volumeInfo.imageLinks.thumbnail){
                    imagens.push(iterator.volumeInfo.imageLinks.thumbnail)
                }else {
                    imagens.push('./imagens/not-found.png')
                }
                
            }
            for (let index = 0; index < res.items.length; index++) {
                infoLinks.push(res.items[index].volumeInfo.infoLink)
                
            }
            criarLi(arrayObjetosLivros, imagens, titulos, autores, publicacoes, editoras, avaliacao, infoLinks)

            descricaoP.innerText = arrayObjetosLivros[0].volumeInfo.description || 'Sem descrição do livro'
            tituloH1.innerText = arrayObjetosLivros[0].volumeInfo.title || 'Título não encontrado'
            if(arrayObjetosLivros[0].volumeInfo.imageLinks == undefined){
                imagemLivro.src = 'imagens/not-found.png'
            }else {
                imagemLivro.src = arrayObjetosLivros[0].volumeInfo.imageLinks.thumbnail
            }
            console.log(infoLinks)
        })
    }
}
botaoPesquisar.addEventListener('click', (evt)=>{
    // Nome completo do livro e autor
    let tituloAutor = inputLivro.value;
    // Substitui espaços e hífens no nome do autor por +
    let tituloFormatado = tituloAutor.replace(/ /g, "+")
    pegarLivroAll(tituloFormatado, key)
    limparLi([...document.querySelectorAll('.flipper-container')])
})