import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {ItemList} from './ItemList'

const productos = [{
    nombre: "AGV Pista GP",
    precio: 1699,
    imagen: "../../public/imagenes/AGV Pista GP.jpg"
},
{
    nombre: 'HJC RPHA 11',
    precio: 1599,
    imagen: '../..public/imagenes/HJC RPHA 11.jpg'
}
]

export const ItemListContainer = (a) =>{

    const [productos, setProductos] = useState([])

    const productosPromise = new Promise((res, rej)=>{
        setTimeout(()=>{
            res(productos)
        }, 2000);
    })
    useEffect(()=>{
        productosPromise
        .then((data)=> setProductos(data))
        .catch((err)=> console.log(err))
    },[])

    return (
        <main className='itemListContainer'>
            <h1>{a.greeting}</h1>
            <ItemList productos={productos}/> 

        </main>
    )
}