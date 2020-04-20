import React from 'react'
import Header from './header'
import './main.css'



export default props=>
    <> 
    <Header {...props}>
    </Header>

    <main className="content conteiner-fluid" >
        <div className="p-3 mt-3">
                {props.children}
        </div>
    </main>
    </>