import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {ItemList} from './ItemList'

const productosArray = [{
    nombre: "AGV Pista GP",
    precio: 1699,
    imagen: "/imagenes/AGV Pista GP.jpg"
    
},
{
    nombre: 'HJC RPHA 11',
    precio: 1599,
    imagen: '/imagenes/HJC RPHA 11.jpg'
}
]

export const ItemListContainer = (a) =>{

    const [productos, setProductos] = useState([])

    const productosPromise = new Promise((res, rej)=>{
        setTimeout(()=>{
            res(productosArray)
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