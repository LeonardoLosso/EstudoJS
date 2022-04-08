function tabuada()
{
    var entrada = document.getElementById('txtn')
    var tab = document.getElementById('box')

    if(entrada.value.length == 0)
    {
        alert('[ERRO]-bota um numero ai campeão')
    }
    else
    {
        let n = Number(entrada.value)
        tab.innerHTML = ''
        
        for(var i=1; i<=10; i++)
        {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `tab ${i}`//desnecessauro pro js
            tab.appendChild(item)
        }
    }

}