
module.exports=app=>{

function existesOrError(value,msg){
    if(!value) throw msg
    if(Array.isArray(value) && value.length === 0) throw msg
    if(typeof(value)==='string' && !value.trim()) throw msg 
}

function notExistsOrError(value,msg){
    try {
        existesOrError(value,msg)
    }catch(msg){
        return
    }
    throw msg
}

function equalsOrError(valueA,valueB,msg){
    if(valueA !== valueB) throw msg
}

return {existesOrError, notExistsOrError, equalsOrError}

}






