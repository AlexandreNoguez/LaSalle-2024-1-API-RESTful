import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/axios-config";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await API.get('/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div className="container flex flex-col justify-center items-center mt-4">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Produto</th>
                        <th className="px-4 py-2">Categoria</th>
                        <th className="px-4 py-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id} className="border-b border-gray-200">
                            <td className="px-4 py-2">
                                <Link to={`/product/${product._id}`} className="text-blue-500 hover:underline font-bold">
                                    {product.productName}
                                </Link>
                            </td>
                            <td className="px-4 py-2">
                                {product.productCategory}
                            </td>
                            <td className="flex gap-2 text-center px-4 py-2">
                                <p className="text-red-600">X</p>
                                <p className="text-blue-600">Editar</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;