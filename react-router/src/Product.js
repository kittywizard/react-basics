
export default function Product(props) {
    return (
        <div>
            <h5>{props.name}</h5>
            <h6>${props.price}</h6>
            <p>{props.desc}</p>
        
        </div>
    )
}