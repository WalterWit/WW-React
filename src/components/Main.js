import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ItemDetailContainer } from './ItemDetailContainer'
import { ItemListContainer } from './ItemListContainer'
import {Cart} from './Cart'
import { Inicio } from './Inicio'

export const Main = () => {
    return (
        <main id='main'>
            <Routes>
                <Route path='/' element={<Inicio titulo='Destacados'/>}/>
                <Route path='/categorias/:x' element={<ItemListContainer/>}/>
                <Route path='/item/:x' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </main>
    )
}