import React, { Component, useState, useEffect } from 'react'


export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    
    constructor(props) {
        super(props)
        
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." 
                    value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..."
                    value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
} 












/* export default ()=>{
    const [tipo,setTipo] = useState('')
    const [nome,setNome] = useState('')

  //  useEffect(()=>{
        function setType(tipo){
            setTipo(tipo)
        }
        function setName(nome){
            setTipo(nome)
        }
   // },[])

    return(
        <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." 
                    value={tipo} onChange={e=>setTipo(e.target.value)} />
                <input type="text" placeholder="Nome..."
                    value={nome} onChange={e=>setNome(e.target.value)} />
            </div>
    )
}
 */