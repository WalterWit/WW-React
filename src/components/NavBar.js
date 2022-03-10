import { CartWidgets } from './CartWidgets'

const NavBar = () => {
    return (
        <nav id="NavBar">
            <div id="NavBar__brand">
                <span id='brand'>WM</span>
            </div>
            <div id="NavBar__links">
                <a href="#">Ingresar</a>
                <a href="#">Registrarse</a>
                <a href='#'><CartWidgets/></a>
            </div>
        </nav>
    )
}

export default NavBar