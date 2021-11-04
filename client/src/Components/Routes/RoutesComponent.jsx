import React from 'react'
import { Switch , Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Productos from '../Pages/Productos/Productos'
import QuienesSomos from '../Pages/QuienesSomos/QuienesSomos'
import Servicios from '../Pages/Servicios/Servicios'
import Contacto from '../Pages/Contacto/Contacto'

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' render={() => <Home/>} />
            <Route exact path='/productos' render={() => <Productos/>} />
            <Route exact path='/servicios' render={() => <Servicios />} />
            <Route exact path='/quienes-somos' render={() => <QuienesSomos/>} /> 
            <Route exact path='/contacto' render={() => <Contacto/>} />
        </Switch>
    )
}

