
const nomeAt = 'nota'
const valorAt = 7.8

const obj={}
obj[nomeAt] = valorAt
console.log(obj)

const obj2 = {[nomeAt]:valorAt}
console.log(obj2)


const obj3 = {
    func : function() {
        
    }
,
    fun(){

    }
}