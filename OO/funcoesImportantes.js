const pessoa = {
    nome: 'joao',
    idade: 21,
    peso: 80,
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
const a = Object.entries(pessoa) //retorna um array
console.log(a[1][0])
a.forEach(([chave, valor]) => {
    console.log(`${chave}:${valor}`)
});

Object.defineProperty(pessoa, 'dataNas', {  //definir uma propriedade
    enumerable: true,//vai ser listado
    writable: false, //nao permite ser alterada
    value: "1/1/2019"
})

console.log(pessoa)



//atribuir propriedades de objetos para um so
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)//jogas as propriedades para destino
console.log(dest)
