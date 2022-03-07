import { CartWidgets } from './CartWidgets'

const NavBar = () => {
    return (
        <nav id="NavBar">
            <div id="NavBar__brand">
                <h2>
                    React
                </h2>
            </div>
            <div id="NavBar__links">
                <a href="#">Ingresar</a>
                |
                <a href="#">Registrarse</a>
                |
                <CartWidgets/>
            </div>
        </nav>
    )
}

export default NavBar