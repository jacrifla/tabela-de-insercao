// Pegando o botao
let botaoAdicionar = document.querySelector('#adicionar-filme')

// Criando evento de click no botao
function addFilme(event){
    event.preventDefault() // Para a pagina não atualizar

    let form = document.querySelector('#form-adiciona')
    let filme = obtemFilmeDoFormulario(form)
    let filmeTr = montaTr(filme)

    let tabela = document.querySelector('#tabela-filmes')
    
    tabela.appendChild(filmeTr)

    form.reset()   
}


function obtemFilmeDoFormulario(form){
    let filmes = {
        tituloFilme: form.titulo.value,
        diretor: form.diretor.value,
        ano: form.ano.value,
        genero: form.genero.value,
        status: form.status.value
    }
    return filmes
}

function montaTd(dado, classe) {
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function montaTr(filme) {
    // Criando elemento tr do filme
    let filmeTr = document.createElement('tr')
    filmeTr.classList.add('filme')
    
    // adicionar no tr
    filmeTr.appendChild(montaTd(filme.tituloFilme, 'info-titulo') )
    filmeTr.appendChild(montaTd(filme.diretor, 'info-diretor') )
    filmeTr.appendChild(montaTd(filme.ano, 'info-ano') )
    filmeTr.appendChild(montaTd(filme.genero, 'info-genero') )
    filmeTr.appendChild(montaTd(filme.status, 'info-status') )

    return filmeTr
}


