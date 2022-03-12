import React from 'react'

export const Item = ({producto}) => {

    return (
        <li className='item'>
            <div className='itemA'>
                <a href='#'>
                    <img alt={producto.nombre} className='itemI' src={producto.imagen} />
                </a>
            </div>
            <div className='itemZ'>
                <h3>{producto.nombre}</h3>
                <p className='itemP'>USD{producto.precio}</p>
            </div>
        </li>
    )
}