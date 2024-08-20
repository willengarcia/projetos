const h2Codigo = document.querySelector('.codigo')
const h3Desc = document.getElementById('desc')
const h3Ac = document.getElementById('ac')
const h3Tentativa = document.getElementById('tentativa')
const input = document.getElementById('id')
const botao = document.getElementById('pesquisar')
function pegaCod(cod, endpoint){
    let codigo = cod.value
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        res.forEach((objeto)=>{
            if(objeto.cod == codigo){
                h2Codigo.innerHTML = `Código: ${objeto.cod}`
                h3Desc.innerHTML = `Descrição: ${objeto.descricao}`
                h3Ac.innerHTML = `Ação: ${objeto.acao}`
                h3Tentativa.innerHTML = `Retentativa: ${objeto.retentativa}`
                cod.value = ''
            }
        })
    })
    .catch(erro=>{
        alert('Ocorreu um erro ao tentar acessar a base de dados. Erro: '+erro)
    })
}
botao.addEventListener('click', (evt)=>{
    pegaCod(input, './sitef.json')
})
document.addEventListener('keypress',(event)=>{
    if (event.key === 'Enter') {
        pegaCod(input, './sitef.json')    
    }
});