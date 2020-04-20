const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

//padrao urlencoded  tranforma as requisicoes em objeto 
app.use(bodyParser.urlencoded({extended:true}))

/* app.get('/produtos',(req,res,next)=>{
    console.log('middleware 1...')
    next()
})
 */


//app.use atende para qqer tipo de requisicao 
app.get('/produtos',(req,res,next)=>{
    res.send(bancoDeDados.getProdutos()) //converte para json
})

app.get('/produtos/:id',(req,res,next)=>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos',(req,res)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //json
})

//alterar
app.put('/produtos/:id',(req,res)=>{
    const produto = bancoDeDados.salvarProduto({
        id:req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //json
})

//excluir
app.delete('/produtos/:id',(req,res)=>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //json
})



app.listen(porta,()=>{
    console.log(`servidor executando na porta ${porta}`)
})

















