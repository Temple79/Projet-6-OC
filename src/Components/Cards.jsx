import Card from './Card'

function Cards(props) {

    return (
        <main className="cards">
            {props.datas.map((data)=> (
                <Card key={data.id} data={data} />
            ))}
         </main>

    )
}

export default Cards