const express = require('express')
const bodyParse = require('body-parser')
const multer = require('multer')

const app = express()




//servir arquivos estaticos dessa pagina
app.use(express.static('.'))


//converter requisicoes de formulario
app.use(bodyParse.urlencoded({extended:true}))

//converter json em objeto
app.use(bodyParse.json())

app.get('/teste',(req,res)=>res.send(new Date()))


const storage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./upload')
    },
    filename: function(req,file,callback){
        callback(null,`${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload',(req,res)=>{
    upload(req,res,err=>{
        if(err){
            return res.end('ocorreu um erro')
        }

        res.end("concluido com sucesso")
    })
})

app.post('/formulario',(req,res)=>{
    res.send({
        ...req.body,
        id:3
    })
})

app.get('/parOuImpar',(req,res)=>{
    //req.body
    //req.query
    //req.params ex :id
    const par = parseInt(req.query.numero)%2===0
    res.send({
        resultado:par?'par':'impar'
    })
})

app.listen(9090,()=>console.log('executando'))











































