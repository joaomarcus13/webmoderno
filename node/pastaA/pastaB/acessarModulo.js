const modA = require("../../moduloA")

console.log(modA)



function fun(funcao){
    deff = function(){
        console.log("wef")
    }
    return funcao(1,2)
}


let a = fun((a,b)=> a+b ).deff()
console.log(a)

