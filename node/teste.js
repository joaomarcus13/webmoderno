const fs = require('fs')


const string = "yes yes yes"

/* fs.writeFile(__dirname+'/teste.txt',string,err=>{
    console.log(err || 'arquivo salvo')
}) */

//const st = fs.readFileSync(__dirname+'/teste.txt','utf-8')
teste2 = a =>{
    console.log(a)
}

teste = (a) =>{
    a==1 && console.log(a)
}


const ob = {}
ob[1] = {nome:'joao'}
ob[2] = {nome:'marcos'}
console.log(Object.values(ob))
