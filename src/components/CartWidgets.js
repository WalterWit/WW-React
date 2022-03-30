import {cartContext} from "./CartContext"
import {Fragment, React, useContext } from "react"

export const CartWidgets = () => { 
    const {cantTotal} = useContext(cartContext)
    return (
        <Fragment>
            {cantTotal>0 ?
            <i className="fa-solid fa-cart-arrow-down fa-1xl">
                {cantTotal}
            </i>
            : ''
            }
        </Fragment>
    )
}
