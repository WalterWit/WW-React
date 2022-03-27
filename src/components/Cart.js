import { React, useContext } from 'react'
import { CartContext } from './CartContext'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
// import DeleteIcon from '@mui/icons-material/Delete';

export const Cart = () => {
    const {carrito, vaciar, quitarItem} = useContext(CartContext)
    return (
        <>
            <h2>Tu carrito</h2>
            <Button color="error" variant="contained" onClick={vaciar}>Vaciar carrito</Button>
            {carrito.map(item =>{
                return(
                    <div key={item.producto.nombre} id='iC__Ct'>
                        <img className='iC__img' src={item.producto.imagen}/>
                        <div className='iC__detailCt'>
                            <h3>{item.producto.nombre}</h3>
                            <p className='iC__cat'>x {item.cant}</p>
                        </div>
                        <Button color="warning" variant="contained" onClick={() => quitarItem(item.producto)}>X</Button>
                    </div>
            )})}
        </>
    )
}


