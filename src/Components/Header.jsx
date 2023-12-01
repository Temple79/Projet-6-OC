
import logo from "../assets/Logos/logo.png"
import { Link, NavLink } from "react-router-dom"

function Header() {
    return(
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt="Logo de Kasa"></img>
            </Link>
            <nav>
            <NavLink to="/" className={({isActive})=> isActive?"nav nav__active":"nav"}>
                Accueil
            </NavLink>
            <NavLink to="/about" className={({isActive})=> isActive?"nav nav__active":"nav"}>
                A&nbsp;Propos
            </NavLink>
            </nav>
        </header>
    )
}

export default Header