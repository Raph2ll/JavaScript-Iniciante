function carregar (){
    var img = document.getElementById('imagen')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12) {
        //BOM DIA!!
        img.src = 'manhapng.png'
        document.body.style.background = '#F2C6AC'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE!!
        img.src = 'tardepng.png'
        document.body.style.background = '#A6896F'
    }else {
        //BOA NOITE!!
        img.src = 'noitepng.png'
        document.body.style.background = '#042440'
    }
    
       
}
function hours () {
    var hours = document.getElementById ('hours')
 //crie uma div com id="hours" no html
    var date1 = new Date ()
    var gthours = date1.getHours()
    var gtminutes = date1.getMinutes()
    var gtseconds = date1.getSeconds()

        if (gthours < 10) {
            gthours = `0${gthours}`
        }
        if (gtminutes < 10) {
            gtminutes = `0${gtminutes}`
        }

        if (gtseconds < 10) {
            gtseconds =`0${gtseconds}`
        }
                
    hours.textContent = `${gthours}:${gtminutes}:${gtseconds}`
}
    var tictac = setInterval (hours, 1000)
hours()

//confesso que ainda tenho dificuldade pra enter como a function hours funciona...