import './NavBar.css'
const NavBar = () => {
    return (
        <nav id="NavBar">
            <div id="NavBar__brand">
                <h2>
                    React
                </h2>
            </div>
            <div id="NavBar__links">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </nav>
    )
}

export default NavBar