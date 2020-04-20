
function falaDepois(segundos,frase){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(frase)
            reject('erroo')
        },segundos*1000)
    })
}   

falaDepois(3,'que legal')
.then(frase=>frase.concat('?!?!'))
.then(outraFrase=>console.log(outraFrase))
.catch(e=>console.log(e))

















