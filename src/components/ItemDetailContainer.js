import { doc, getDoc } from 'firebase/firestore'
import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../Firebase'
import {ItemDetail} from './ItemDetail'


export const ItemDetailContainer = () =>{
    const [productos, setProductos] = useState([])
    const {x} = useParams()

    useEffect(()=>{
        const xDocumentos = doc(db, 'productos', x)
        getDoc(xDocumentos).then((res)=> {
            setProductos(res.data())
        })
    },[x])
    
    return (
        <>
        <div>
            <ItemDetail productos={productos}/> 
        </div>
        </>
    )
}
