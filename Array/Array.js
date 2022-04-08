let num = [5, 6, 2, 1, 8]

num.sort() 
num.push(3) //joga direto no final

console.log('\n'+num) //printa todo o vetor
console.log(`o vetor tem ${num.length} posições`)
console.log('-------------------------')


//-------------------------------------------------

let vet = []
console.log(`o vetor tem ${vet.length} posições`)

for(var i=0; i<4; i++)
{
    vet[i]=i
    console.log(vet[i])
}
console.log(`o vetor tem ${vet.length} posições\n`)
