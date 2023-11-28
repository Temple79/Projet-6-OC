
function Rate ({props}) {
    const value= props;
    const range=[1,2,3,4,5];
    return (
        <>
        { range.map((rangeElement) =>
            value >= rangeElement ? 
            <span className="star" key={rangeElement}>&#9733;</span>
            :
            <span className="star--empty" key={rangeElement}>&#9733;</span>
            )
        }
        </>       
    );
}

export default Rate