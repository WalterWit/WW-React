import React, { Fragment } from 'react'

export const ItemDetail = ({productos}) => {
    let [producto] = productos
    return (
        <Fragment>
            {
            producto ?
            <h2>
                {producto[0].nombre}
            </h2>
            :
            <p className='itemDetail'>
                {producto[0].det}
            </p>
            }
        </Fragment>
    )
}