//------------------FUNÇOES DA CONTAGEM----------------
function crescente(i, f, p)
{
    for(i; i<=f; i+=p)
    {
        res.innerText += ` ${i} \u{2192}`;
    }
}
function decrescente(i, f, p)
{
    for(i; i>=f; i-=p)
    {
        res.innerText += ` ${i} \u{2192}`; //inner text formatação JS
    }
}
function testa(i, f, p)
{
    if(i<f)
            {
                crescente(i, f, p)
            }
            else
            {
                decrescente(i, f, p)
            }
}

//----------------------------------------------------------------------------
function botao()
{
 //------------ENTRADAS--------------------------
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')

//--------------SAIDA----------------------------
    var res = document.getElementById('res')    

 //------------CODIGO----------------------------
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
    {
        alert('[ERRO] - Por favor tente novamente!')
    }
    else
    {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value) 

        res.innerHTML = 'Contando... <br>'


        if(p <= 0)
        {
            alert('[ERRO] - Passo 0 consideramos 1')
            p=1;

            testa(i, f, p)
        }
        else
        {
            testa(i, f, p)
        }
    }
    res.innerHTML += ' \u{1F630}'
    
}

