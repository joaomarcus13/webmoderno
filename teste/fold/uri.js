/* const readLine = require('readline')
let inteiro = 0
let leitor = readLine.createInterface({
    input: process.stdin ,
    output:process.stdout
})

leitor.question("",function(answer){
    inteiro = answer

console.log(`${parseInt(inteiro/3600)}:${parseInt(inteiro%3600/60)}:${parseInt(inteiro%3600%60)}`)
    leitor.close
}) */

process.stdin.on('readable', ()=>{ 
    // reads what is being typed. 
    let variable = process.stdin.read(); 
    // trying to read 
    process.stdout.write(variable)
});
  
  // Hope this helps