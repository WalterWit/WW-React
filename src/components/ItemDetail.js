import React from 'react'

export const ItemDetail = ({productos}) => {

    return (
        <p className='itemList'>
            {productos[0].caracteristicas}
        </p>
    )
}