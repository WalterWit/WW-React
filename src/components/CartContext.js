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
            if (cant + productoC.cant <= producto.stock) {
                productoC.cant = productoC.cant + cant
                toast(`Agregaste ${cant} productos!`, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            } else {
                toast.error(`Este producto solo posee ${producto.stock} unidades en stock y ya posees ${productoC.cant} en tu carrito.`, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            }
            xCarrito = [...carrito]
        } else {
            xCarrito = [productoC, ...carrito]
            toast(`Agregaste ${cant} productos!`, {
                position: toast.POSITION.BOTTOM_RIGHT
            })
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
        return carrito && carrito.some(item => item.producto.id === producto.id)
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

    const [cantTotal, setCantTotal] = useState(0)
    const sumarCant = () =>{
        let xCant = 0
        carrito.map(item => {
            xCant = xCant + item.cant
        })
        setCantTotal(xCant)
    }
    useEffect(() => {
        sumarCant()
    },[carrito])

    return(
        <cartContext.Provider value={{
            agregarItem,
            quitarItem,
            vaciar,
            carrito,
            montoTotal,
            cantTotal
        }}>
            {children}
        </cartContext.Provider> 
    )
}