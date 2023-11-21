
import logo from "../assets/Logos/logo.png"
import { Link } from "react-router-dom"

function Header() {
    return(
        <header className="header">
            <Link to="/">
                <img className="header_logo" src={logo} alt="Logo de Kasa"></img>
            </Link>
            <Link to="/" className="nav">
                Accueil
            </Link>
            <Link to="/" className="nav">
                A Propos
            </Link>
        </header>
    )
}

export default Header