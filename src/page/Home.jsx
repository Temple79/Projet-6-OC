
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import banner from '../assets/Images/banner.png'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'

function Home(props) {
    return (
        <>
            <Header></Header>
            <Banner className="banner__home" image={banner} alt="Paysage montagne et rivière">
                <h1>Chez vous, partout et ailleurs</h1>
            </Banner>
            <Cards datas={props.data}></Cards>
            <Footer></Footer>
        </>
    )
}

export default Home