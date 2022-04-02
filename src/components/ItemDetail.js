import React, { Fragment, useContext, useState } from 'react'
import { cartContext } from './CartContext'
import { ItemCount } from './ItemCount'
import {Loading} from './Loading'
import { ProductosArray } from './Productos'

export const ItemDetail = ({productos}) => {
    const {agregarItem} = useContext(cartContext)
    const onAdd = (cant) =>{
        agregarItem(productos, cant)
    }
    return (
        <Fragment>
            {
                productos ?
                <>
                    <h3>
                        {productos.nombre}
                    </h3>
                    <img alt={productos.nombre} className='itemI' src={productos.imagen} />
                    <ItemCount initial={0} stock={productos.stock} onAdd={onAdd}/>
                    <p className='itemDetail'>
                        {productos.det}
                    </p>
                </>
                :
                <Loading />
            }
        </Fragment>
    )
}
