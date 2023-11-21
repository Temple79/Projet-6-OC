
import Banner from '../Components/Banner'
import banner from '../assets/Images/banner.png'
import Cards from '../Components/Cards'

function Home(props) {
    return (
        <>
            <Banner className="banner-home" image={banner} alt="Paysage montagne et rivière">
                <h1>Chez vous, partout et ailleurs</h1>
            </Banner>
            <div className="gallery">
                {props.data.map((data)=> (
                    <Cards key={data.id} data={data} />
                ))}
            </div>
        </>
    )
}

export default Home