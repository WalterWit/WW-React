import { Link } from 'react-router-dom'
import { CartWidgets } from './CartWidgets'

const NavBar = () => {
    return (
        <nav id="NavBar">
            <div id='brand__Ct'>
                <Link id='brand__link' to='/'>
                    <span id="brand__span"> WM </span>
                </Link>
            </div>
            <div id="NavBar__links">
                <Link className='aS' to='/categorias/cascos'>Cascos</Link>
                <Link to='/categorias/guantes'>Guantes</Link>
                <Link to='/cart'><CartWidgets/></Link>
            </div>
        </nav>
    )
}

export default NavBar