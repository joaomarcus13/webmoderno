//itera em cima de valores


const arr = ['joao','marcos','silva']
for (let letra of arr){
    //console.log(letra)
}


const assuntos = ['map','set','promisse'] 

for(let a of assuntos){
    console.log(a)
}


const assuntosMap = new Map([
    ['map',{abordado:true}],
    ['set',{abordado:true}],
    ['promisse',{abordado:false}],
])

for ( let a of assuntosMap){
    console.log(a)
}
for ( let a of assuntosMap.values()){
    console.log(a)
}
for ( let [c,v] of assuntosMap.entries()){
    console.log(c, v.abordado)
}


const s = new Set(['a','b','c'])
    for(let l of s){
        console.log(l)
}












