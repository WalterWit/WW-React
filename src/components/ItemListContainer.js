import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {ItemList} from './ItemList'
import {ProductosArray} from './Productos'

export const ItemListContainer = (a) =>{

    const [productos, setProductos] = useState([])

    const productosPromise = new Promise((res, rej)=>{
        setTimeout(()=>{
            res(ProductosArray)
        }, 2000);
    })
    useEffect(()=>{
        productosPromise.then((data)=> setProductos(data)).catch((err)=> console.log(err))},[])

    return (
        <main className='itemListContainer'>
            <h2>{a.greeting}</h2>
            <ItemList productos={productos}/> 

        </main>
    )
}