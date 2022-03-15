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
