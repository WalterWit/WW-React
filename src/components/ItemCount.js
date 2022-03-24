import {useState, useContext} from 'react'
import Button from '@mui/material/Button'
import {toast} from 'react-toastify';
import { nube } from './CartContext';



export const ItemCount = ({initial, stock, onAdd}) =>{
    const [cant, setCant] = useState(initial)

    const clickUp = () =>{
        if (cant < stock){
            setCant(cant + 1)
        }
        if (cant == stock){
            toast.error("Sin mas Stock!")
        }
    }
    const clickDown = () =>{
        if (cant > initial){
            setCant( cant - 1)
        }
    }
    const reset = () =>{
        setCant(0)
    }
    const submmit = () =>{
        if (cant == initial){
            toast.error("Debes agregar al menos 1 item!")
        }
        else {
            onAdd(cant)
            toast(`Agregaste ${cant} productos!`)
        }
    }
    return (
        <>
            <div className="itemCantContainer">
                <h3>Cantidad: {cant}</h3>
                <Button color="success" variant="contained" onClick={clickUp}>Agregar</Button>
                <Button color="warning" variant="contained" onClick={clickDown}>Quitar</Button>
                <Button color="error" variant="contained" onClick={reset}>Vaciar</Button>
            </div>
            <div className="itemSubmmitContainer">
                <Button color='success' variant='contained' onClick={submmit}>Sumar al carrito!</Button>
            </div>
        </>
    )
}
