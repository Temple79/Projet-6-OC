
import logo from "../assets/Logos/logo.png"
import { Link } from "react-router-dom"

function Header() {
    return(
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt="Logo de Kasa"></img>
            </Link>
            <nav>
            <Link to="/" className="nav">
                Accueil
            </Link>
            <Link to="/about" className="nav">
                A Propos
            </Link>
            </nav>
        </header>
    )
}

export default Header