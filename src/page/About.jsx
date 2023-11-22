
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import banner from '../assets/Images/banner.png'
import Footer from '../Components/Footer'

function About(props) {
    return (
        <>
            <Header></Header>
            <Banner className="banner-home" image={banner} alt="Paysage montagne et rivière">
                <h1>About</h1>
            </Banner>
            <Footer></Footer>
        </>
    )
}

export default About