
import logo from "../assets/Logos/logo.png"

function Header() {
    return(
        <header className="header">
            <img className="header_logo" src={logo} alt="Logo de Kasa"></img>
        </header>
    )
}

export default Header