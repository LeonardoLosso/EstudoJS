let relatorio = document.getElementById('res')
let entrada_num = document.getElementById('txtnum')
let box = document.getElementById('box')

let vet = []

function add()
{
    relatorio.innerHTML = ''

    if(entrada_num.value.length == 0)
    {
        alert('[ERRO] - um valor precisa ser inserido')
    }
    else
    {
        let num = Number(entrada_num.value)
        
        if(num>100 || num<1)
        {
            alert('[ERRO] - O numero precisa estar entre 1 e 100')
        }
        else
        {
            let checa = false

            for(let i in vet)
            {
                if(vet[i] == num)
                {
                    checa = true
                }
            }
            if(checa)
            {
                alert(`Número ${num} já inserido anteriormente!`)
            }
            else
            {
                vet.push(num) 

                if(vet.length==1)
                {
                    box.innerHTML = ''
                }

                let item = document.createElement('option')
                item.text = `Número ${vet[vet.length-1]} adicionado`
                box.appendChild(item)  
            }
        }
    }
}

function fim()
{
    if(vet.length == 0)
    {
        alert('[ERRO] - Nenhum valor inserido')
    }
    else
    {
        let soma=0
        let media = function(s) {return s/(vet.length)}
        let maior = vet[0]
        let menor = vet[0]
        
        relatorio.innerHTML = ''

        for(let i in vet)
        {
            soma += vet[i]

            if(maior<vet[i])
            {
                maior = vet[i]
            }

            if(menor>vet[i])
            {
                menor=vet[i]
            }
        }

        relatorio.innerText = `Foram digitados ${vet.length} números\nA soma dos números é: ${soma}\nA média dos números é: ${media(soma)}\nO maior número é: ${maior}\nO menor número é: ${menor}`

        vet=[]
        
    }
} 