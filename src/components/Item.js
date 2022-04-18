import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {
    const {productos, id} = producto
    return (
        <li className='item'>
            <div data-aos="fade-right" className='itemA'>
                <Link to={`/item/${id}`}>
                    <img alt={productos.nombre} className='itemI' src={productos.imagen} />
                </Link>
            </div>
            <div data-aos="fade-left" className='itemZ'>
                <h3>{productos.nombre}</h3>
                <p className='itemP'>USD {productos.precio}</p>
            </div>
        </li>
    )
}
