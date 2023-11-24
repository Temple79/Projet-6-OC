
import { useState } from "react";
import Arrow from "../assets/Icons/arrow_icon.svg"

function Dropdown (props) {
    const [isClose, setClose] = useState (true)
    
    return (
        <div className="dropdown">
            <div className="dropdown__title">
                {props.title}
                <div>
                    {isClose ? (
                    <button onClick={() => setClose(false)}>
                        <img className="arrow__up" src={Arrow} alt="Bouton ouvrir" />
                    </button>
                ) : (
                    <button onClick={() => setClose(true)}>
                        <img className="arrow__down" src={Arrow} alt="Bouton fermer"/>
                    </button>
                )}
                </div>
            </div>
        
            {Array.isArray(props.content) ? (
                <ul className={!isClose ? "content" : "content__hidden"}>
                    {props.content.map((equipment, index) =>(
                    <li key={`${equipment}-${index}`}>{equipment}</li>
            ))}
                </ul>
             ) : (
                 <div className={!isClose ? "content" : "content__hidden"}>
                    <span>
                        {props.content}
                    </span>
                </div>
        )}
        </div>
    )
}

export default Dropdown