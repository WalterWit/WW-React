import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Banner1, Banner2 } from './Banner'
import {ItemList} from './ItemList'
import {ProductosArray} from './Productos'


export const ItemListContainer = (a) =>{

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const {x} = useParams()

    const productosPromise = new Promise((res, rej)=>{
        setTimeout(()=>{
            // res(ProductosArray)
            const productFilter = ProductosArray.filter(items => items.categoria === x)
            res(productFilter)
        }, 2000);
    })
    useEffect(()=>{
        if(x){
            productosPromise
            .then((data)=> {
                setProductos(data.filter(p => p.categoria == x))
            })
            .catch((err)=> console.log(err))
            }{
                productosPromise
                .then((data)=> {
                    setProductos(data)
                })
                .catch((err)=> toast.error('Error al cargar'))
                .finally(() => { setCargando(false)})}
            },[x])
    return (
        <>
        <Banner1/>
            <h2>{a.titulo}</h2>
            {cargando ? <p>{"Cargando productos..."}</p> : <h2>{x}</h2> }
            <ItemList productos={productos}/> 
        <Banner2/>
        </>
        )
}


// const productFilter = productList.filter(items => items.category === x)
//     res(productFilter)
