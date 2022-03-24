import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {
    return (
        <li className='item'>
            <div className='itemA'>
                <Link to={`/categorias/${producto.categoria}/${producto.nombre}`}>
                    <img alt={producto.nombre} className='itemI' src={producto.imagen} />
                </Link>
            </div>
            <div className='itemZ'>
                <h3>{producto.nombre}</h3>
                <p className='itemP'>USD{producto.precio}</p>
            </div>
        </li>
    )
}