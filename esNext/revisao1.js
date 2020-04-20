
function fun(nome,idade){
    console.log(nome, idade)
}

const obj = {nome:'joao',idade:23}
const arr = {...obj}

//console.log(arr)


//destructuring
const [l,e,...tras] = 'coder'
console.log(l)

const [x,,y] = [1,2,3]
console.log(x,y)

const {nome,idade} = obj
console.log(nome)







//
const objet = {a:1,b:2,c:3}
console.log(Object.values(objet))
console.log(Object.entries(objet))
console.log(Object.keys(objet))
Object.values(objet).forEach(element => {
    console.log(element)
});




//melhorias objetos
const name = 'carla'
const pessoa={
    name,
    ola(){
        return 'oi'
    }
}

console.log(pessoa.name, pessoa.ola())



//spread
process.stdout.write('---spread---\n')
const funcio = {nome:'maria',salario:12344}
const clone = {ativo:true,...funcio}
console.log(funcio)
console.log(clone)

//contexto de array
const grupoA = ['joao','pedro','gloria']
const grupoF = ['maria',...grupoA,'rafaela']
console.log(grupoF)


