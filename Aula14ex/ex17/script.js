function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')

    if (Number(inicio.value) == '' ){
        window.alert('O valor de "Inicio" deve ser maior ou igual a 1')
        res.innerHTML = `Impossivel de contar!!!`
    }else if (Number(fim.value) == '' || Number(fim.value) < Number(inicio.value)){
            window.alert('O valor de "Fim" deve ser maior que "inicio"')
            res.innerHTML = `Impossivel de contar!!!`
         }else if (Number(passo.value) == '' || Number(passo.value) < 0){
                window.alert('O valor de "Passo" deve ser maior ou igual a 1')
                res.innerHTML = `Impossivel contar!!!`
            } else {
                /*
                na minha primeira tentativa 
                eu não tive essa sacada 
                de criar outra "var"
                */
                res.innerHTML = `Contando: <br>`
                var i = Number(inicio.value)
                var f = Number(fim.value)
                var p = Number(passo.value)
                for (var c = i; c <= f; c += p) {
                    res.innerHTML += `${c} \u{1f449}`

                }
                res.innerHTML += `\u{1f3c1}`
            }

} 