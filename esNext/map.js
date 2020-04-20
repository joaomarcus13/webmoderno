//semelhante a objeto  pode ter qualque coisa como chave

const tec = new Map()

tec.set('react',{framework:false})
tec.set('angular',{framework:true})

console.log(tec.get('react').framework)


//segunda forma de declarar
const chaves = new Map([
    [function(){},'funcao'],
    [{},'objeto'],
    [123,'numero']
])

chaves.forEach((v,c)=>{
    console.log(c,v)
})

//verificar se esta contido
console.log(chaves.has(123))

//deletar
chaves.delete(123)

console.log(chaves.size)

chaves.set(123,'a')
chaves.set(123,'b')

console.log(chaves)