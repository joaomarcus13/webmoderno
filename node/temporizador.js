const schedule = require('node-schedule')

//executa de 5 em 5 segundos qqer minuto as 22 hrs 
//qqer dia qqr mes segunda feira
const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 1',
function(){
    console.log('executando tarefa 1',new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log(`Cancelando tarefa 1`)
},20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 22
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra,function(){
    console.log("executando tarefa 2",new Date().getSeconds())
})





