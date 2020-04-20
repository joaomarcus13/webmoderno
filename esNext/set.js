//nao aceita repeticao e nao tem indice



const times = new Set()
times.add('flamengo')
times.add('sao paulo').add('santos').add('corinthians')

console.log(times)
console.log(times.size)
console.log(times.has('flamengo'))
times.delete('santos')