import { React, useContext} from 'react'
import { cartContext } from './CartContext'
import Button from '@mui/material/Button'
// import DeleteIcon from '@mui/icons-material/Delete';

export const Cart = () => {
    const {carrito, vaciar, quitarItem, montoTotal} = useContext(cartContext)
    
    return (
        <>
            <h2>Tu carrito</h2>
            {
                carrito.length > 0 ?
                <div id='carritoCt'>
                    <Button color="error" variant="contained" onClick={vaciar}>Vaciar carrito</Button>
                    {carrito.map(item =>{
                        return(
                            <div key={item.producto.nombre} id='iC__Ct'>
                                <div className='iC__datos1Ct'>
                                    <img className='iC__img' src={item.producto.imagen}/>
                                    <p className='iC__cant'>x{item.cant}</p>
                                </div>
                                <div className='iC__datos2Ct'>
                                    <h4>{item.producto.nombre}</h4>
                                    <p className='iC__precio'>USD {item.producto.precio}</p>
                                    <p className='iC__subTotal'>SubTotal= USD {item.producto.precio * item.cant}</p>
                                    {console.log(item.precio)}
                                    {console.log(item.cant)}
                                </div>
                                <div className='iC__quitarCt'>
                                    <Button color="warning" variant="contained" onClick={() => quitarItem(item.producto)}>X</Button>
                                </div>
                            </div>
                        )
                    })}
            <h3 id='montoTotal'>
                Total = USD {montoTotal}
            </h3>
                </div>
                :
                <p> No hay productos</p>
            }
        </>
    )
}

// export const rart = () => {

//     const {cart,total,removeItem} = useContext(cartContext)
//     return (
//         <div className='cart'>
//             <h1>Shopping Cart</h1>
//             {
//                 cart.length > 0 ?
//                 <ul>
//                     { cart.map(item => {
//                         return <li className='cart_container'>
//                             <div className='cart_container-top'>
//                             <p className='cart_item-nombre'>{item.item.nombre}</p>
//                             <p>$ {item.item.precio}</p>
//                             </div>
//                             <p>{item.item.descripcion}</p>
//                             <div className='cart_container-bottom'>
//                                 <p>Cantidad: {item.quantity}</p>
//                                 <button onClick={()=> removeItem(item.item.id)} className='cart_btn-remove'>Eliminar</button>
//                             </div>
//                         </li>
//                     })}
//                     <div className='cart_comprar'>
//                         <div className='cart_comprar_total'>
//                             <p>Total</p>
//                             <p>$ {total}</p>
//                         </div>
//                         <p className='cart_btn-comprar'>Generar orden</p>
//                         <Link to="/" className='cart_continuar-comprando' >
//                             <p style={{color: "black"}}>o Continuar Comprando</p> 
//                         </Link>
//                     </div>
//                 </ul>
//                 :
//                 <div className='cart_vacio'>
//                         <p>No hay productos en el carrito</p>
//                         <Link to="/">Volver al home</Link>

//                 </div>
                
//             }
//         </div>
//     )
// }
