var filtroAlugado = document.querySelector('#filtrar-alugado')
var filtroTitulo = document.querySelector('#filtrar-titulo')

filtroAlugado.addEventListener('input', function(){
    let filmes = document.querySelectorAll('.filme')
    if (this.value.length > 0){
        for(var c = 0; c < filmes.length; c++){
            let filme = filmes[c]
            let tdStatus = filme.querySelector('.info-status')
            var status = tdStatus.textContent          
            var expressao = new RegExp(this.value, 'i')
            if (!expressao.test(status)){
                filme.classList.add('invisivel')
            } else {
                filme.classList.remove('invisivel')
            }
        }
    } else {
        for (c = 0; c < filmes.length; c++){
            let filme = filmes[c]
            filme.classList.remove('invisivel')
        }
    }
})
filtroTitulo.addEventListener('input', function(){
    let filmes = document.querySelectorAll('.filme')
    if (this.value.length > 0){
        for(var c = 0; c < filmes.length; c++){
            let filme = filmes[c]
            let tdStatus = filme.querySelector('.info-titulo')
            var status = tdStatus.textContent          
            var expressao = new RegExp(this.value, 'i')
            if (!expressao.test(status)){
                filme.classList.add('invisivel')
            } else {
                filme.classList.remove('invisivel')
            }
        }
    } else {
        for (c = 0; c < filmes.length; c++){
            let filme = filmes[c]
            filme.classList.remove('invisivel')
        }
    }
})
