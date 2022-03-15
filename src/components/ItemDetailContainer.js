import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {ItemDetail} from './ItemDetail'
import {ProductosArray} from './Productos'

export const ItemDetailContainer = (a) =>{

    const [productos, setProductos] = useState([])

    const productosPromise = new Promise((res, rej)=>{
        setTimeout(()=>{
            res(ProductosArray)
        }, 4000);
    })
    const getItem = ()=>{
        return productosPromise
    }
    useEffect(()=>{
        getItem()
        .then((data)=> setProductos(data)).catch((err)=> console.log(err))},[])

    return (
        <div className='itemDetailContainer'>
            <h2>{a.greeting}</h2>
            <ItemDetail productos={productos}/> 

        </div>
    )
}