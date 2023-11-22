
import { Link } from "react-router-dom"

function Card(props) {
    return (
        <Link  to="/">
            <article className="card" style={{ backgroundImage: `url(${props.data.cover})` }}>
                <div className="card__content">
                    <div className="card__title">
                        <h2 >{props.data.title}</h2>
                    </div>

                </div>
            </article>
        </Link>
    )
}

export default Card