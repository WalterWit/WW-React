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
            .catch((err)=>{
            console.log(err)
            toast.error('Algo Salio mal!')
        } )}
    },[x])
    
    return (
        <>
        <Banner1 title={x}/>
            <h2>{a.titulo}</h2>
            {cargando ? 
            <Loading/>
            : 
            <ItemList productos={productos}/>} 
        <Banner2/>
        </>
        )
}


