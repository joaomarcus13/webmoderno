const fs = require('fs')

const produto ={
    nome:'celular',
    preco:1245.99,
    desconto:0.15
}

                                               //converte objeto para json
fs.writeFile(__dirname + '/arquivoGerado.json',JSON.stringify(produto),err=>{
    console.log(err || 'arquivo salvo')
})








