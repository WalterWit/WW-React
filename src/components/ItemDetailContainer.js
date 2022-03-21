import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import {ItemDetail} from './ItemDetail'
import {ProductosArray} from './Productos'


export const ItemDetailContainer = () =>{
    const [productos, setProductos] = useState([])
    const {id} = useParams()
    const productosPromise = new Promise((res, rej)=>{
        setTimeout(()=>{
            res(ProductosArray)
        }, 2000);
    })
    const getItem = ()=>{
        return productosPromise
    }
    useEffect(()=>{
        getItem()
        .then((data)=> {
        setProductos(data.filter(x => x.nombre == id))
        console.log(data)
        })
        .catch((err)=> 
        console.log(err))
    },[])

    return (
        <>
        {console.log()}
        <div className='itemDetailContainer'>
            <h2>Descripcion</h2>
            <ItemDetail productos={productos}/> 
        </div>
        </>
    )
}