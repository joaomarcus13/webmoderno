import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './app.css'
import Logo from '../components/template/logo'
import Nav from '../components/template/nav'
import Footer from '../components/template/footer'

import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

export default props =>
    <BrowserRouter>
    <div className="app">
        <Logo></Logo>
        <Nav />
        <Routes></Routes>
        <Footer></Footer>
    </div>
    </BrowserRouter>