import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Error from "./Error";
import Carroussel from "../Components/Carroussel";
import Tags from "../Components/Tags";
import Rate from "../Components/Rate";
import Dropdown from "../Components/Dropdown";
import { useParams } from "react-router-dom";

function Logement(props) {
  let { id } = useParams();
  let data = props.data.find((data) => data.id === id);
  if (!data) {
    return <Error />;
  }

  return (
    <>
      <Header />
      <main>
        <Carroussel pictures={data.pictures} />
        <div className="logement__wrap">
          <div className="logement__wrap__headers">
            <div>
            <h2 className="logement__title">{data.title}</h2>
            <p className="logement__location">{data.location}</p>
            </div>
            <div className="logement__host">
              <p className="logement__host__name">{data.host.name}</p>
              <img
                className="logement__host__picture"
                src={data.host.picture}
                alt="Photographie de l'hôte"
              ></img>
            </div>
          </div>
          <div className="logement__wrap__info">
            <Tags data={data.tags} />
            <div className="logement__rating">
              <Rate props={data.rating} />
            </div>
          </div>
        </div>
        <div className="logement__content">
          <Dropdown title="Description" content={data.description} />
          <Dropdown title="Equipements" content={data.equipments} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Logement;
