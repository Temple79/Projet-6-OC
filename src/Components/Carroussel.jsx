
import Arrow from "../assets/Icons/arrow_icon.svg"
import { useState } from "react"

function Carroussel ({pictures}) {
    const [isActive, setActive] = useState(0)
    const next = () => {
        setActive(isActive === pictures.length - 1 ? 0 : isActive + 1)
    }
    const prev = () => {
        setActive(isActive === 0 ? pictures.length - 1 : isActive - 1)
    }

    return (
        <>
        <div className="carousel">
            {pictures.map((picture, index) => (
            <div className={isActive === index ? "gallery" : "gallery__hidden"} key={index}>
              {index === isActive && (
                <img src={picture} alt="Photographies du logement" />
              )}
            </div>
            ))}
            {pictures.length > 1 ? (
                <>
                    <button className="btn__next" onClick={next}>
                        <img src={Arrow} alt="bouton__suivant" />
                    </button>
                    <button className="btn__prev" onClick={prev}>
                        <img src={Arrow} alt="bouton__précédent" />
                    </button>
                    <div className="compteur">
                        {isActive + 1}/{pictures.length}
                    </div>
                </>
            ) : null}
        </div>
        </>
    )
    }

export default Carroussel