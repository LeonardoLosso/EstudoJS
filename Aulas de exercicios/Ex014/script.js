var msg = document.getElementById('msg')
var img = document.getElementById('imagem')

var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`

if(hora>4 && hora<=12)
{
    //BOM DIA
    img.src = 'manha.png' //muda o output de imagem
    document.body.style.background = '#f2d384'
}
else if(hora>12 && hora<19)
{
    //BOA TARDE
    img.src = 'tarde.png'
    document.body.style.background = '#ee9a1f'
}
else
{
    //BOA NOITE
    img.src = 'noite.png'
    document.body.style.background = '#12255d'
}