function analisar() {
    var num = document.getElementById('txtnun')
    var tab = document.getElementById('selAna')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else if (num.value.length <= 100) {
        var n = Number(num.value)
        tab.innerHTML = []
        var item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        tab.appendChild(item)
        
        
    }
}