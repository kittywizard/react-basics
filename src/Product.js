
function Product(props) {
    return (
        <div>
            <h5>Name: {props.name}</h5>
            <h5>Description: {props.description}</h5>
            <h5>Price: {props.price}</h5>
        </div>
    )

}

export default Product;

/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/