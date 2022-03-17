import { Link } from 'react-router-dom'
import { CartWidgets } from './CartWidgets'

const NavBar = () => {
    return (
        <nav id="NavBar">
            <div id="NavBar__brand">
                <Link id='brand' to='/'>WM</Link>
            </div>
            <div id="NavBar__links">
                <Link to='/categoria/cascos'>Cascos</Link>
                <Link to='/categoria/guantes'>Guantes</Link>
                <Link to='/cart'><CartWidgets/></Link>
            </div>
        </nav>
    )
}

export default NavBar