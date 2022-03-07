import React from 'react'
import {useState} from 'react'
import Button from '@mui/material/Button'



export const ItemCount = (x) =>{
    const [cant, setCant] = useState(x.initial)
    
    const clickUp = () =>{
        if (cant < x.stock){
            setCant(cant + 1)
        }
    }
    const clickDown = () =>{
        if (cant > x.initial){
            setCant( cant - 1)
        }
    }
    const miOnAdd = () =>{
        setCant(0)
    }
    
    return (
        <div className="itemCantContainer">
            <h2>Cantidad: {cant}</h2>
            <Button color="success" variant="contained" onClick={clickUp}>Agregar</Button>
            <Button color="error" variant="contained" onClick={clickDown}>Quitar</Button>
            <Button color="warning" variant="contained" onClick={miOnAdd}>Vaciar</Button>
        </div>
    )
}
