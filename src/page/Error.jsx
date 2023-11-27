
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

function Error(props) {
    return (
        <>
            <Header></Header>
            <main className='error'>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <div className='error__back'>
                    <Link to="/">Retournez sur la page d'acceuil</Link>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Error