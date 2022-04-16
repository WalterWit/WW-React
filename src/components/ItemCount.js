import {useState} from 'react'
import Button from '@mui/material/Button'
import {toast} from 'react-toastify';



export const ItemCount = ({initial, stock, onAdd}) =>{
    const [cant, setCant] = useState(initial)

    const clickUp = () =>{
        if (cant < stock){
            setCant(cant + 1)
        }
        if (cant === stock){
            toast.error(`Este producto solo posee ${stock} unidades`, {
                position: toast.POSITION.BOTTOM_RIGHT
            })
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
        if (cant === initial){
            toast.error("Debes agregar al menos 1 item!", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
        else {
            onAdd(cant)
            toast(`Agregaste ${cant} productos!`, {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
    }
    return (
        <div className='itemCant'>
            <div className="itemCantContainer">
                <Button color="error" variant="contained" onClick={reset}>Vaciar</Button>
            </div>
            <div className="itemCantContainer">
                <Button color="warning" variant="contained" onClick={clickDown}>-</Button>
                <h3>Cantidad: {cant}</h3>
                <Button color="success" variant="contained" onClick={clickUp}>+</Button>
            </div>
            <div className="itemCantContainer">
                <Button color='success' variant='contained' onClick={submmit}>Sumar al carrito!</Button>
            </div>
        </div>
    )
}
