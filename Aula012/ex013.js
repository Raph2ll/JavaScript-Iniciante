var agora = new Date()
var hora = agora.getHours()
//hora atual, mas o comando get pode buscar outros elementos tbm
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <= 12) {
    console.log(`Bom Dia`)
} else if (hora <= 18) {
    console.log(`Boa Tarde `)
} else {
    console.log(`Boa Noite`)
}