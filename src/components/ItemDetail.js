import React, { Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemCount } from './ItemCount'

export const ItemDetail = ({productos}) => {
    const [elegidos, setElegidos] = useState(false)
    const onAdd = (cant) =>{
        console.log(`Cantidad de items: ${cant}`)
        setElegidos(cant)
    }
    const [producto] = productos
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
                <p>Cargando...</p>
            }
        </Fragment>
    )
}
