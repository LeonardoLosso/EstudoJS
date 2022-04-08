let num = [5, 6, 2, 1, 8, 9, 7, 4, 3]
num.sort() //n ordena maior que 9???

for(var i in num)
{
    console.log(`${num[i]}`)
}

var pos = num.indexOf(2)

console.log('\n'+pos +' posição do numero 2\n------------------------')

for(var i in num)
{
    console.log(`${num[num.length-i-1]}`)
}