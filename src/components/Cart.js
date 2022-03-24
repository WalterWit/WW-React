import {React, useContext} from 'react'
import { nube } from './CartContext'

export const Cart = () => {
    const ItemsCarrito = useContext(nube)
    console.log(ItemsCarrito)
    return (
        <div>
            <h2>Carrito</h2>
            <p>{ItemsCarrito[1]}</p>
        </div>
    )
}
