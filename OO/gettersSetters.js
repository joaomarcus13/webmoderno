const sequencia={
    _valor:1, //convencao variavel "privada"
    get valor(){
        return this._valor++
    },
    set valor(valor){
        this._valor=valor
    }

}

console.log(sequencia.valor)//chama metodo get

sequencia.valor=1000 //chama metodo set
sequencia.valor
console.log(sequencia.valor)