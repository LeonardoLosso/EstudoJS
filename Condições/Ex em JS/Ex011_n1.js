/*var agora = new Date()
var hora = agora.getHours() //getUTCHours serve para o horario universal
*/
var hora = 19

if(hora>5)
{
    if(hora>12)
    {
        if(hora>18)
        {
            console.log (`\nAgora são: ${hora} hr, Boa Noite!\n`)
        }
        else
        {
            console.log (`\nAgora são: ${hora} hr, Boa Tarde!\n`)
        }
    }
    else
    {
        console.log (`\nAgora são: ${hora} hr, Bom Dia!\n`)
    }
}
else
{
    console.log (`\nAgora são: ${hora} hr, Boa Noite!\n`)
}