    let num = document.querySelector('input#fnun')
    var lista = document.getElementById('flista')
    var res = document.querySelector('div#res')
    var valores = []
    //o var valores vai criar um array com os valores de num
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false            
    }
}
//as 2 function server pra validar os valores
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){
        // lembrando que esse ! significa "não"
        valores.push(Number(num.value))
        // se a condição estiver correta ele vai adcionar dentro do array "valores" o valor de num 
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }   
   num.value = ''
   num.focus()   
}
function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        var soma = 0
        var media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média de todos os valores é ${media}</p>`
    }

}