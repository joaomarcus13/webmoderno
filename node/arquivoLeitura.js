const fs = require('fs') //modulo de file system




const caminho = __dirname + '/arquivo.json'


//soncrono
const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)


//assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)//converter para objeto
    console.log(`${config.db.host}:${config.db.port}`)
})



//outra forma
const config = require('./arquivo.json') //retorna em formato de objeto
console.log(config.db)



//ler pastas    retorna um array com nome dos arquivos
fs.readdir(__dirname,(err,arquivos)=>{
    console.log("conteudo da pasta...")
    console.log(arquivos)
})