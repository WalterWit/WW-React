import {cartContext} from "./CartContext"
import {Fragment, React, useContext } from "react"

export const CartWidgets = () => { 
    const {carrito} = useContext(cartContext)
    return (
        <Fragment>
            <i className="fa-solid fa-cart-arrow-down fa-1xl">
                <p>
                    {carrito.lenght}
                </p>
            </i>
        </Fragment>
    )
}
