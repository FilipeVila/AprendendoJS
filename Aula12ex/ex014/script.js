function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById ('imagem')
    var date = new Date()
    var hora = date.getHours()
    var min = date. getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas.`
    if (hora >= 0 && hora < 12 ){
            // BOM DIA!
            img.src = 'manha.png'
            document.body.style.background = '#febf8b'
    }else if (hora >= 12 && hora <= 18){
            // BOA TARDE!
            img.src = 'tarde.png'
            document.body.style.background = '#915b2c'
    }else {
            // BOA NOITE!
            img.src = 'noite.png'
            document.body.style.background = '#333f4d'
    }
        
        
    
}
