import { React, useContext } from 'react'
import { CartContext } from './CartContext'

export const Cart = () => {
    const {carrito, vaciar, quitarItem} = useContext(CartContext)
    return (
        <>
            <h2>Carrito</h2>
            <button onClick={vaciar}>Vaciar carrito</button>
                {carrito.map(carrito =>{
                    <>
                        <h2>{carrito.producto.nombre}</h2>
                        <img src={carrito.producto.imagen}/>
                        <button onClick={quitarItem}>Quitar producto</button>
                        {console.log('carrito:', carrito)}
                    </>
                })}
        </>
    )
}
