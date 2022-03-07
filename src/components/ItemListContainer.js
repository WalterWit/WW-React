import React from 'react'
import {ItemCount} from './ItemCount'

export const ItemListContainer = (a) =>{
    return (
        <main className='itemListContainer'>
            <h1>{a.greeting}</h1>
            <ItemCount initial={0} stock={3} onAdd={ItemCount.miOnAdd}/> 
        </main>
    )
}