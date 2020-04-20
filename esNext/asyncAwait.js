const http = require('http')

const getTurma = (letra)=>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolv,reject)=>{
        http.get(url,res=>{
            let resultado = ''
            res.on('data',dados=>{
                resultado+=dados
            })
    
            res.on('end',()=>{
                try{
                    resolv(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}

//recurso do es8
//simplifica uso da promise
let obterAluno = async ()=>{
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta,tb,tc)
} //retorna objeto AsyncFunction


obterAluno()
.then(alunos=>alunos.map(a=>a.nome))
.then(nomes=>console.log(nomes))