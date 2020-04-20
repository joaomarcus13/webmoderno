

/* console.log(a.includes('0')) */

//console.log(obj[a])

/* String.prototype.maiusculo = function(){
    return this.toUpperCase()
}

const s = new String("asjkfsdn")


const sti = 'vamos la- haha-'

console.log(sti.split(/\-/g)) */
const request = require('request')
const div = document.getElementById("cont")




request('https://sigaa.ufpi.br/sigaa', function (err, res, body){
    if(!err && res.statusCode === 200)
        console.log(body)
})

div.innerHTML= 'kvfldmv'