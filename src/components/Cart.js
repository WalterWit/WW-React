import { React, useContext, useState} from 'react'
import { cartContext } from './CartContext'
import Button from '@mui/material/Button'
import { addDoc, collection } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'
import { db } from '../Firebase'
import { toast } from 'react-toastify'

export const Cart = () => {
    const {carrito, vaciar, quitarItem, montoTotal} = useContext(cartContext)
    const reDirect = useNavigate()
    const [Form, setForm] = useState({
        nombre: "",
        correo: ""
    })
    const nuevaOrden = (x)=>{
        x.preventDefault()
        const orden = {
            comprador: Form,
            productos: carrito,
            fecha: Date.now(),
            montoTotal
        }
        addDoc(collection(db, "ordenes"), orden)
        .then((data)=> {
            toast.success("Su compra fue registrada, pronto nos comunicaremos con usted. Muchas gracias!")
            toast.success('Su numero de compra es:' + data.id)
            vaciar()
            reDirect("/")
        })
        .catch((err)=> toast.error("Algo salio mal!"))
        
        
    } 
    const inputC = (x)=>{
        setForm({
            ...Form,
            [x.target.name]: x.target.value
        })
    }
    
    const {nombre,correo} = Form
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
                    <div className='carritoContacto'>
                        <h3>Datos de contacto</h3>
                        <form className='carritoForm' onSubmitCapture={nuevaOrden}>
                            <input autoComplete='off' placeholder='Nombre' name="nombre" value={nombre} type="text"  required autoFocus onChange={inputC} />
                            <input autoComplete='off' placeholder='e-Mail' name="correo" value={correo} type="email"  required onChange={inputC}/>
                            <button type='submit' className='carritoContacto__gO'>Finalizar compra</button>
                        </form>
                    </div>
                </div>
                :
                <div className='carritoVacio'>
                    <p> No hay productos</p>
                    <Link to="/">
                        <p>
                            Volver al home
                        </p>
                    </Link>
                </div>
            }
        </>
    )
}

