let botaoAdicionarFilme = document.querySelector('#buscar-filmes')

botaoAdicionarFilme.addEventListener('click', buscarFilme)

function buscarFilme (){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://63896bdac5356b25a2ffe3bb.mockapi.io/filmes')
    xhr.addEventListener('load', function(){
        let erroAjax = document.querySelector('#erro-ajax')
        if(xhr.status == 200){
            erroAjax.classList.add('invisivel')
            let answer = xhr.responseText
            filmes = JSON.parse(answer)
            filmes.forEach(function(filme){
                adicionaFilmeTabela(filme)
            })
        } else {
            erroAjax.classList.remove('invisivel')
        }

        
    })
    xhr.send()

}