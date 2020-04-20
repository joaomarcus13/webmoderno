const express = require('express')
const app = express()
const saudacao = require('./saudacao')
const bodyParser = require('body-parser')




app.use(bodyParser.text())
 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//funcao = saudacao('joao')
//app.use(funcao)


app.use('/opa', (req, res, next) => {
    console.log('antes')
    next()
})


app.get('/clientes/relatorio',(req,res)=>{
    res.send(`cliente relatorio: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.get('/clientes/:id',(req,res)=>{
    res.send(`cliente ${req.params.id} selecionado`)
})

app.post('/corpo',(req,res)=>{
    /* let corpo = ''
    req.on('data',function(parte){
        corpo+=parte 
    })

    req.on('end',function(){
        res.send(corpo)
    }) */
    res.send(req.body)
})




app.get('/opa', (req, res, next) => {
    //res.send('<h1>haha</h1>')
    //res.json({nome:'joao',idade:22})
    res.json([{ id: 6, nome: 'ana' }, { id: 3, nome: 'xico' }])
    console.log('durante')
    next()
})

app.use('/opa', (req, res, next) => {
    console.log('depois')
    next()
})



app.listen(3000, () => {
    console.log('executando')
})































































