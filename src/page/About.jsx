import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Banner_About from "../assets/Images/about.png";
import Dropdown from "../Components/Dropdown";
import Footer from "../Components/Footer";

function About() {
  return (
    <>
      <Header></Header>
      <Banner
        className="banner__about"
        image={Banner_About}
        alt="Paysage montagnes et forêts"
      ></Banner>
      <div className="about">
        <Dropdown
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations son régulièrement vérifiées par nos equipes"
        />
        <Dropdown
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbartion du voisinage entraînera une exclusion de notre plateforme."
        />

        <Dropdown
          title="Service"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbartion du voisinage entraînera une exclusion de notre plateforme."
        />

        <Dropdown
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
      <Footer></Footer>
    </>
  );
}

export default About;
