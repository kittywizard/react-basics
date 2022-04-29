import { Link, useParams } from "react-router-dom";

export default function Product(props) {

    const {productID} = useParams();

    console.log(productID)
    return (
        <div>
            <Link to={`/products/${props.id}`}>
                <h5>{props.name}</h5>
            </Link>
            <h6>${props.price}</h6>
            <p>{props.desc}</p>
        
        </div>
    )
}