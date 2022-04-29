import {Link, Routes, Route} from "react-router-dom"
import Home from "./Home"
import Products from "./Products"

export default function App() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>

                <Route path="/products" element={<Products/>}/>

            </Routes>
            
        </div>
    )
}