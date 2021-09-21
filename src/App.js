
import Product from "./Product";
import vschoolProducts from "./vschoolProducts";

function App() {
    const productComponents = vschoolProducts.map(product => <Product key={product.id} name={product.name} description={product.description} price={product.price}/>);
    return (
        <div>
            {productComponents}
        </div>
    )
}

export default App;