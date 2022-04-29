import productsData from "./productsData"
import Product from "./Product"

function Products() {    
    const productMap = productsData.map(product => (
        <Product 
            key={product.id}
            name={product.name}
            desc={product.description}
            price={product.price}
        />
    ))
    return (
        <div>        
            <h1>Products Page</h1>
            <div>
                {productMap}
            </div>
        </div>

    )
}

export default Products