
import Banner from '../Components/Banner'
import banner from '../assets/Images/banner.png'

function Home(props) {
    return (
        <Banner className="banner-home" image={banner} alt="Paysage montagne et rivière">
            <h1>Chez vous, partout et ailleurs</h1>
        </Banner>
    )
}

export default Home