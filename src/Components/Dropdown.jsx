
import { useState } from "react";
import Arrow from "../assets/Icons/arrow_icon.svg"

function Dropdown (props) {
    const [isClose, setClose] = useState (true)

    return (
        <div className="dropdown">
            <div className="dropdown__title">
            {props.title}
            {isClose ? (
                <button onClick={() => setClose(true)}>
                    <img className="arrow__up" src={Arrow} alt="Bouton ouvrir" />
                </button>
            ) : (
                <button onClick={() => setClose(false)}>
                    <img className="arrow__down" src={Arrow} alt="Bouton fermer"/>
                </button>
            )
            }
            </div>
        
        {Array.isArray(props.content) ? (
            <ul className={!isClose ? content : content__hidden}>
            {props.content.map((equipment, index) =>(
                <li key={`${equipment}-${index}`}>{equipment}</li>
            ))}
            </ul>
        ) : (
            <div className={!isClose ? content : content__hidden}>
                {props.content}
                {props.children}
            </div>
        )}
        </div>
    )
}