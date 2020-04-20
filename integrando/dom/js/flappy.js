

function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false) {
    this.elem = novoElemento('div', 'barreira')

    /*  console.log(this.elem) */

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elem.appendChild(reversa ? corpo : borda)
    this.elem.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}


/* const b = new Barreira(true)
b.setAltura(200)
document.querySelector('[wm-flappy]').appendChild(b.elem) */

function ParDeBarreiras(altura, abertura, x) {
    this.elem = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elem.appendChild(this.superior.elem)
    this.elem.appendChild(this.inferior.elem)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elem.style.left.split('px')[0])
    this.setX = (x) => this.elem.style.left = `${x}px`
    this.getLarg = () => this.elem.clientWidth

    this.sortearAbertura()
    this.setX(x)
}


/* const b = new ParDeBarreiras(700,200,400)
document.querySelector('[wm-flappy]').appendChild(b.elem) */



function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3

    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            //quando o elemento sair da area
            if (par.getX() < -par.getLarg()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouMeio = par.getX() + deslocamento >= meio && par.getX() < meio
            cruzouMeio && notificarPonto()
        })
    }

}

function Passaro(alturaJogo) {
    let voando = false

    this.elem = novoElemento('img', 'passaro')
    this.elem.src = './imgs/passaro.png'

    this.getY = () => parseInt(this.elem.style.bottom.split('px')[0])

    this.setY = (y) => this.elem.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMax = alturaJogo - this.elem.clientHeight

        if(novoY<=0){
            this.setY(0)
        }else if(novoY >= alturaMax){
            this.setY(alturaMax  - this.elem.clientHeight)
        }else{
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo/2)
}



function estaoSobrepostos(elemA,elemB){
    const a  = elemA.getBoundingClientRect()
    const b  = elemB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left
   /*  console.log(a)*/
   const vertical = a.top + a.height >=b.top 
            && b.top + b.height >=a.top

    return horizontal && vertical
} 

function colidiu(passaro,barreiras){
    let colidiu = false
    barreiras.pares.forEach(ParDeBarreiras=>{
        if(!colidiu){
            const superior = ParDeBarreiras.superior.elem
            const inferior = ParDeBarreiras.inferior.elem
            colidiu = estaoSobrepostos(passaro.elem,superior)
              || estaoSobrepostos(passaro.elem,inferior)
        }
    })
    return colidiu
}


function Progresso(){
    this.elem = novoElemento('span','progresso')
    this.atualizarPontos = pontos =>{
        this.elem.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

/* const barreiras = new Barreiras(700, 1200, 300, 400)
const passaro = new Passaro(700)
const areaJogo = document.querySelector('[wm-flappy]')
areaJogo.appendChild(passaro.elem)
areaJogo.appendChild(new Progresso().elem)
barreiras.pares.forEach(par => areaJogo.appendChild(par.elem))

setInterval(() => {
    barreiras.animar()
    passaro.animar()
}, 20); */


function flappyBird(){
    let pontos = 0
    const areaJogo = document.querySelector('[wm-flappy]')
    const altura = areaJogo.clientHeight
    const largura = areaJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura,largura,200,400,()=>progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)

    areaJogo.appendChild(progresso.elem)
    areaJogo.appendChild(passaro.elem)
    barreiras.pares.forEach(p=>{
        areaJogo.appendChild(p.elem)
    })

    this.start = () =>{
        //loop do jogo
        const temp = setInterval(()=>{
            barreiras.animar()
            passaro.animar()
            if(colidiu(passaro,barreiras)){
                clearInterval(temp)
                window.location.reload()
            }
        },20)
    }
    /* estaoSobrepostos(passaro.elem) */
}


new flappyBird().start()

/* 
 */