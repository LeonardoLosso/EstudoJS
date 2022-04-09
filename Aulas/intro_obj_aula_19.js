let amigo = 
{
    nome: 'Creyto',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0) //se n passa parametro é considerado 0
    {
        console.log('Engordou ' + p + ' Kg')
        this.peso += p
    }
}
console.log(`\n${amigo.nome} pesa ${amigo.peso}\n`)  

amigo.engordar(2) //precisa dizer de onde veio a func 

console.log(`\nagora ${amigo.nome} pesa ${amigo.peso}\n`) 