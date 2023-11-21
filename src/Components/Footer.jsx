
import logo from '../assets/Logos/logo_white.png'

function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className='footer'>
            <img className='footer_logo' src={logo} alt="Logo de Kasa"/> 
            <div className='footer_text'>
                &#169; {year} Kasa. All rights reserved
        </div>
        </footer>
    )
}

export default Footer