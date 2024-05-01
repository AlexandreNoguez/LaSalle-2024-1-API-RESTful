import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto mt-4">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product._id} className="mb-2">
                        <Link to={`/product/${product._id}`} className="text-blue-500 hover:underline">
                            <span className="font-bold">{product.productName}</span> - {product.productQuantity}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;