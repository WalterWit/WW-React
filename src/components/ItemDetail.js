import React, { Fragment } from 'react'

export const ItemDetail = ({productos}) => {
    const [producto] = productos
    return (
        <Fragment>
            {
                producto ?
                <>
                    <h3>
                        {productos[0].nombre}
                    </h3>
                    <img alt={producto.nombre} className='itemI' src={producto.imagen} />
                    <p className='itemDetail'>
                        {productos[0].det}
                    </p>
                </>
                :
                <p>Cargando...</p>
            }
        </Fragment>
    )
}
