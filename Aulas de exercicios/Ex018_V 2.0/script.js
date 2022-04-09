let num = document.getElementById('entrada')
let box = document.getElementById('box')
let relatorio = document.getElementById('relatorio')

var vetor = []

function isNumero(n)
{
    if(Number(n) >=1 && Number(n) <=100)
    {
        return true
    }
    else
    {
        return false
    }
}

function inLista(n, l)
{
    if(l.indexOf(Number(n)) != -1) //indexOf procura no array
    {
        return true
    }
    else
    {
        return false
    }
}

function adicionar()
{
    if(isNumero(num.value) && !inLista(num.value, vetor)) 
    {
        vetor.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        box.appendChild(item)

        relatorio.innerHTML = ''
    }
    else
    {
        alert('Valor inválido ou já incontrado')
    }

    num.value = ''
    num.focus() //apaga a entrada e define o foco do cursor 

}



function finalizar()
{
    if(vetor.length == 0)
    {
        alert('Precisa inserir um valor para finalizar')
    }
    else
    {
        let maior = vetor [0]
        let menor = vetor [0]
        let soma = 0
        let media = 0

        for(let i in vetor)
        {
            if(vetor[i] > maior)
            {
                maior = vetor[i]
            }

            if(vetor[i] < menor)
            {
                menor = vetor[i]
            }

            soma += vetor[i]
        }
        
        media = soma/vetor.length

        relatorio.innerHTML = ''
        relatorio.innerHTML += `<p>Elementos inseridos ${vetor.length}.</p>`
        relatorio.innerHTML += `<p>O maior elemento é: ${maior}.</p>`
        relatorio.innerHTML += `<p>O menor elemento é: ${menor}.</p>`
        relatorio.innerHTML += `<p>A soma dos elementos é: ${soma}.</p>`
        relatorio.innerHTML += `<p>A media dos elementos é: ${media}.</p>`
    }
}