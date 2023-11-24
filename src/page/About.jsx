
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Banner_About from '../assets/Images/about.png'
import Footer from '../Components/Footer'

function About(props) {
    return (
        <>
            <Header></Header>
            <Banner className="banner-about" image={Banner_About} alt="Paysage montagnes et forêts">
            </Banner>
            
            <Footer></Footer>
        </>
    )
}

export default About