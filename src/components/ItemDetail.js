import React, { Fragment, useContext, useState } from 'react'
import { CartContext } from './CartContext'
import { ItemCount } from './ItemCount'
import {Loading} from './Loading'

export const ItemDetail = ({productos}) => {
    // const [elegidos, setElegidos] = useState([0])
    const {agregarItem} = useContext(CartContext)
    const [producto] = productos
    const onAdd = (cant) =>{
        agregarItem(producto, cant)
    }
    return (
        <Fragment>
            {
                producto ?
                <>
                    <h3>
                        {producto.nombre}
                    </h3>
                    <img alt={producto.nombre} className='itemI' src={producto.imagen} />
                    <ItemCount initial={0} stock={producto.stock} onAdd={onAdd}/>
                    <p className='itemDetail'>
                        {producto.det}
                    </p>
                </>
                :
                <Loading />
            }
        </Fragment>
    )
}
