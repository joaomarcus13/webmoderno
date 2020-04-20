console.log(this===exports)


function logThis(){
    console.log("dentro da funcao")
    console.log(this===exports)
    console.log(this===global)
    
    this.variavel //esta no escopo global
}

this.variavel //esta no exports

logThis()
