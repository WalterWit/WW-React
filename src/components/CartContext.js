import {createContext, useState} from 'react'

export const nube = createContext()

const MiNube = ({children}) => {
    const [carrito,  setCarrito] = useState([])
    return(
        <nube.Provider value={[]}>
            {children}
        </nube.Provider> 
    )
}

export default MiNube