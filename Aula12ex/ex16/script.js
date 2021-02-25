function verificar() {
    //window.alert('Funcionou')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        //lembra do Number(fano.value)
        window.alert('[ERRO]Verifique os dados novamente...')
    } else {
        var fsex = document.getElementsByName('radsex') //[0] radsesx masculino [1] radsex feminino
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}` //teste aos poucos
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade < 10 ) {
                img.setAttribute('src', 'bebemenino.png')
                //criança
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemhomen.png')
                //jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'homenadulto.png')
                //adulto
            } else {
                img.setAttribute('src', 'senhorhomen.png')
                //senhor
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10 ) { 
                img.setAttribute('src', 'bebemenina.png')
                //criança
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemmulher.png')
                //jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'adultamulher.png')
                //adulta
            } else {
                img.setAttribute('src', 'senhoramulher.png')
                //senhora
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. ` 
        res.appendChild(img)
    }
}