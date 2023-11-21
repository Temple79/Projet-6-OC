

function Cards(props) {
    return (
        <article className="cards" style={{ backgroundImage: `url(${props.data.cover})` }}>
            <h2>{props.data.title}</h2>
        </article>
    )
}

export default Cards