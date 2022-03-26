import {createContext, useState} from 'react'

export const CartContext = createContext()

const MiNube = ({children}) => {
    
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
        }
    }

    const vaciar = () =>{
        setCarrito([])
    }

    const verificarItem = (producto) =>{
        return carrito && carrito.some(item => item.producto === producto)
    }

    return(
        <CartContext.Provider value={{
            agregarItem,
            quitarItem,
            vaciar,
            carrito
        }}>
            {children}
        </CartContext.Provider> 
    )
}

export default MiNube