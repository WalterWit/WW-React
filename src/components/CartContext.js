import {createContext, useEffect, useState, React} from 'react'
import { toast } from 'react-toastify'

export const cartContext = createContext()

export const MiNube = ({children}) => {
    
    const [carrito,  setCarrito] = useState([])
    
    const agregarItem = (producto, cant) => {
        let productoC = {producto, cant}
        let xCarrito = []
        if (verificarItem(producto)) {
            productoC = carrito.find(item => item.producto === producto)
            productoC.cant = productoC.cant + cant
            xCarrito = [...carrito]
        } else {
            xCarrito = [productoC, ...carrito]
        }
        setCarrito(xCarrito)
    }

    const quitarItem = (producto) =>{
        if (verificarItem(producto)) {
            const xCarrito = carrito.filter(item => item.producto !== producto)
            setCarrito(xCarrito)
            toast(`Quitaste ${producto.nombre} de tu carrito`, {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
    }

    const vaciar = () =>{
        setCarrito([])
        toast('Vaciaste tu carrito', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }

    const verificarItem = (producto) =>{
        return carrito && carrito.some(item => item.producto === producto)
    }

    const [montoTotal, setTotal] = useState(0)
    const sumarMontos = () =>{
        let xTotal = 0
        carrito.map(item => {
            xTotal = xTotal + (item.producto.precio * item.cant)
        })
        setTotal(xTotal)
    }

    useEffect(() => {
        sumarMontos()
    },[carrito])


    return(
        <cartContext.Provider value={{
            agregarItem,
            quitarItem,
            vaciar,
            carrito,
            montoTotal
        }}>
            {children}
        </cartContext.Provider> 
    )
}