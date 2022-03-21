import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ItemDetailContainer } from './ItemDetailContainer'
import { ItemListContainer } from './ItemListContainer'
import {Cart} from './Cart'

export const Main = () => {
    return (
        <main className='itemListContainer'>
            <Routes>
                <Route path='/' element={<ItemListContainer titulo='Destacados'/>}/>
                <Route path='/categorias/:x' element={<ItemListContainer/>}/>
                <Route path='/cascos/:id' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </main>
    )
}