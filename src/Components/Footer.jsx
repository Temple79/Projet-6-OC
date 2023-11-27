
import logo from '../assets/Logos/logo_white.png'
import { Link } from 'react-router-dom'

function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className='footer'>
            <Link to="/">
                <img className='footer--logo' src={logo} alt="Logo de Kasa"/> 
            </Link>
            <div className='footer--text'>
                &#169; {year} Kasa. All rights reserved
        </div>
        </footer>
    )
}

export default Footer