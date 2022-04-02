import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import { resolvePath, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Banner1, Banner2 } from './Banner'
import {ItemList} from './ItemList'
import { Loading } from './Loading'
import {ProductosArray} from './Productos'
import {db} from "../Firebase"
import { collection, getDocs, query, where } from 'firebase/firestore'


export const ItemListContainer = (a) =>{

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const {x} = useParams()
    
    useEffect(() => {
        
        if(x){
            const qy = query(collection(db, 'productos'),where('categoria', '==', x))
            getDocs(qy)
            .then((resp)=>{
                setProductos(resp.docs.map(item => ({productos:item.data(), id:item.id})))
                setCargando(false)
            })
            .catch((err)=> console.log(err))
        }else{
            getDocs(collection(db, 'productos'))
            .then((resp)=>{
                setProductos(resp.docs.map(item => ({productos:item.data(), id:item.id})))
                setCargando(false)
            })
            .catch((err)=> console.log(err))}
        // const productosCollection = collection(db, 'productos')
        // const documentos = getDocs(productosCollection)
        
    },[x])
    
    // documentos
    // .then((resp) =>{
    //         const xProducto = []
    //         resp.forEach((documento)=>{
    //             const producto = {
    //                 id: documento.id,
    //                 ...documento.data()
    //             }
    //             xProducto.push(producto)
    //         })
    //         setProductos(xProducto)
    //         setCargando(false)
    //     })
    //     .catch(()=>{
    //         toast.error('Algo salio mal!')
    //     })
    
    
    // const productosPromise = new Promise((res, rej)=>{
        //     setTimeout(()=>{
            //         // res(ProductosArray)
    //         const productFilter = ProductosArray.filter(items => items.categoria === x)
    //         res(productFilter)
    //     }, 2000);
    // })
    // useEffect(()=>{
    //     if(x){
    //         productosPromise
    //         .then((data)=> {
    //             setProductos(data.filter(p => p.categoria == x))
    //         })
    //         .catch((err)=> console.log(err))
    //         }{
    //             productosPromise
    //             .then((data)=> {
    //                 setProductos(data)
    //             })
    //             .catch((err)=> toast.error('Error al cargar'))
    //             .finally(() => { setCargando(false)})}
    //         },[x])
    // const productFilter = productList.filter(items => items.category === x)
    //     res(productFilter)
    return (
        <>
        <Banner1/>
            <h2>{a.titulo}</h2>
            {cargando ? 
            <Loading/>
            : <h2>{x}</h2> }
            <ItemList productos={productos}/> 
        <Banner2/>
        </>
        )
}


