
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Error from './Error'
import { useParams } from 'react-router-dom'


function Logement(props) {
    let {id} = useParams()
    let data = props.data.find((data) => data.id === id)
    if (!data) {
        return <Error />
    }
    return (
        <main className='main_logements'>
        </main>
    )
}


export default Logement