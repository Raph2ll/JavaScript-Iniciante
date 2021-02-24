function carregar (){
    var pao = 123
    var ojo = document.querySelector('div#msg')
    var img = document.querySelector('div#imagen')
    var msg = document.querySelector('div#msg')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    
}