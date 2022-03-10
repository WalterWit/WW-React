import React from 'react'

export const Item = ({producto}) => {

    return (
        <li className='item'>
            <div className='itemA'>
                <img className='itemI' src={producto.imagen} />
            </div>
            <div className='itemZ'>
                <h3>{producto.nombre}</h3>
                <p className='itemP'>'$'{producto.precio}</p>
            </div>
        </li>
    )
}