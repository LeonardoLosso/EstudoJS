function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length==0 || fano.value >ano)
    {
        window.alert('[ERRO] tente novamente')
    }
    else
    {
        var fsex = document.getElementsByName('radsex')

        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //criar imagens dinamicas
        
        if(fsex[0].checked)
        {
            genero = 'Homem'
            
            if(idade<10)
            {
                //criança
                img.setAttribute('src', 'foto-crianca-h.png')//da 
            }
            else if(idade<21)
            {
                //jovem
                img.setAttribute('src', 'foto-jovem-h.png')
            }
            else if(idade<50)
            {
                //adulto
                img.setAttribute('src', 'foto-adulto-h.png')
            }
            else
            {
                //veio
                img.setAttribute('src', 'foto-idoso-h.png')
            }
        }
        else if(fsex[1].checked)
        {
            genero = 'Mulher'

            if(idade<10)
            {
                //criança
                img.setAttribute('src', 'foto-crianca-m.png')//da 
            }
            else if(idade<21)
            {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }
            else if(idade<50)
            {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }
            else
            {
                //veio
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML =`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}