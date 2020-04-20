//pegar os argumentos
const anonimo = process.argv.indexOf('a') !== -1

const arg = process.argv
console.log(arg[2])

if ( anonimo ){
    //saida padrao
    process.stdout.write("fala anonimo\n")
    //matar processo
    process.exit()
}else{
    process.stdout.write("Escreva seu nome")
    process.stdin.on('data',data=>{
        const nome = data.toString().replace('\r\n','')
        process.stdout.write(`Fala ${nome}!\r\n`)
        process.exit()
    })
}

//anonimo ? process.stdout.write("fala anonimo\n") : process.stdout.write("falso\n")
