function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'manha.jpeg'
        document.body.style.background = '#8AB6E0'
    } else if (hora >= 12 && hora < 18){
       //BOA TARDE!
       img.src = 'tarde.jpeg'
       document.body.style.background = '#9AC677'
    } else {
        //  BOA NOITE!
        img.src = 'noite.jpeg'
        document.body.style.background = '#B38E57'
    }
}
