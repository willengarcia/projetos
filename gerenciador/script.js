const botao = document.querySelector('#executar')
const tbody = document.querySelector('#corpo-tabela')
const id = document.querySelector('#id')
const nome = document.querySelector('#nome')
const gaveta = document.querySelector('#gaveta')
const pasta = document.querySelector('#pasta')
const chave = document.querySelector('#chave')

class eventosTabela{
    criarLinha(id, nome, gaveta, pasta, chave, imagem){
        this.linhaTabela = document.createElement('tr')
        this.valorId = document.createElement('td')
        this.valorNome = document.createElement('td')
        this.valorGaveta = document.createElement('td')
        this.valorPasta = document.createElement('td')
        this.valorChave = document.createElement('td')
        this.valorDoc = document.createElement('td')
        this.inputImagem = document.createElement('input')
    
        // Criação Linha e dados
        tbody.appendChild(this.linhaTabela)
        this.linhaTabela.appendChild(this.valorId)
        this.linhaTabela.appendChild(this.valorNome)
        this.linhaTabela.appendChild(this.valorGaveta)
        this.linhaTabela.appendChild(this.valorPasta)
        this.linhaTabela.appendChild(this.valorChave)
        this.linhaTabela.appendChild(this.valorDoc)
        this.inputImagem.setAttribute('class', 'visu-doc')
        this.inputImagem.setAttribute('type', 'image')
        this.inputImagem.setAttribute('src', imagem)
    
        // atribuicao de valor
        this.valorId.innerHTML = id
        this.valorNome.innerHTML = nome
        this.valorGaveta.innerHTML = gaveta
        this.valorPasta.innerHTML = pasta
        this.valorChave.innerHTML = chave
        this.valorDoc.appendChild(this.inputImagem)
    }
    removeLinha(id){
        for(let i = 0; i<=[...document.querySelectorAll('tbody > tr')].length; i+=1){
            if([...document.querySelectorAll('tbody > tr')][i].children[0].innerHTML == id){
                console.log([...document.querySelectorAll('tbody > tr')][i]);
                [...document.querySelectorAll('tbody > tr')][i].remove()
            }
        }
    }
    alteraDados(id, nome, gaveta, pasta, chave, imagem){
        for(let i = 0; i<=[...document.querySelectorAll('tbody > tr')].length; i+=1){
            if([...document.querySelectorAll('tbody > tr')][i].children[0].innerHTML == id){
                const dados = [...[...document.querySelectorAll('tbody > tr')][i].children]
                dados[1].textContent = nome
                dados[2].textContent = gaveta
                dados[3].textContent = pasta
                dados[4].textContent = chave
                dados[5].firstChild.src = imagem
            }
        }
    }
}
let eventos = new eventosTabela()
botao.addEventListener('click', (evento)=>{
    const radios = [...document.querySelectorAll('.radios > input')]
    if(radios[0].checked) {
        eventos.criarLinha(id.value, nome.value, gaveta.value, pasta.value, chave.value, 'imagens/doc.jpg')
    }else if(radios[1].checked){
        eventos.removeLinha(id.value)
    }else if(radios[2].checked){
        eventos.alteraDados(id.value, nome.value, gaveta.value, pasta.value, chave.value, 'imagens/doc.jpg')
    }
})