
function Banner(props) {
    return (
        <div className={props.className}>
            <img src={props.image} alt={props.alt} />{props.children}
        </div>
    )
}

export default Banner