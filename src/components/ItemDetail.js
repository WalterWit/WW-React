import React, { Fragment, useContext, useState } from 'react'
import { cartContext } from './CartContext'
import { ItemCount } from './ItemCount'
import {Loading} from './Loading'

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
                    <h2>
                    {productos.nombre}
                    </h2>
                    <div className='itemDetailContainer'>
                        <div className='itemDetailIC'>
                            <img alt={productos.nombre} className='itemDetailI' src={productos.imagen} />
                        </div>
                        <ItemCount initial={0} stock={productos.stock} onAdd={onAdd}/>
                    </div>
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
