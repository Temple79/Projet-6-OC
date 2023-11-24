
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Error from './Error'
import Carroussel from '../Components/Carroussel'
import Tags from '../Components/Tags'
import Dropdown from '../Components/Dropdown'
import { useParams } from 'react-router-dom'


function Logement(props) {

    let {id} = useParams()
    let data = props.data.find((data) => data.id === id)
    if (!data) {
        return <Error />
    }

    return (
    <>
        <Header />
        <Carroussel pictures={data.pictures} />
        <h2 className="rental__header__title">{data.title}</h2>
            <h3 className="rental__header__location">
                {data.location}
            </h3>
        <Tags data={data.tags} />
        <div className="rental__host">
            <p className="rental__host__name">
                {data.host.name}
            </p>
            <img className="rental__host__picture" src={data.host.picture} alt="Photographie de l'hôte"></img>
        </div>
        <div className="rental__header__rating">
            {data.rating}
        </div>
        <div className="rental__content">
            <Dropdown title="Description" content={data.description} />
            <Dropdown title="Equipements" content={data.equipments} />
        </div>
        <Footer />
    </>

    
    )
}


export default Logement