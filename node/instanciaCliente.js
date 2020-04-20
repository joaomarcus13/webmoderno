const contadorA = require("./instanciaUnica")
const contadorB = require("./instanciaUnica")
//eh a mesma referencia  mesma instancia

const contadorC = require("./instanciaNova")()
const contadorD = require("./instanciaNova")()
//instancias diferentes


contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
