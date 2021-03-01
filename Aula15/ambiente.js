var num = [ 5, 2,8  ]
num.push(1)
num.sort()
console.log(num)
console.log(`A variável num tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(8)
if (pos == -1){
    console.log('Valor não encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

// se o valor for -1 ele não é encotrado