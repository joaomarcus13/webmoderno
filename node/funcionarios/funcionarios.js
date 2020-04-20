const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios')


//pegar maior salario de mulheres chinesas
axios.get(url).then(response =>{
    func = response.data
    f = func.filter(e=>e.pais=='China')
            .filter(e=>e.genero=='F')
            .reduce((atual,prox)=>atual.salario>prox.salario?atual:prox)
    console.log(f)
})





















