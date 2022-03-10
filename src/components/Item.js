import React from 'react'

export const Item = ({producto}) => {

    return (
        <li className='item'>
            <div className='itemA'>
                <img alt={producto.nombre} className='itemI' src={producto.imagen} />
            </div>
            <div className='itemZ'>
                <h3>{producto.nombre}</h3>
                <p className='itemP'>USD{producto.precio}</p>
            </div>
        </li>
    )
}