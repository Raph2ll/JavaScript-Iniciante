var img = document.querySelector('div#imagen')
function carregar (){

    var msg = document.querySelector('div#msg')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}horas.`
    
}