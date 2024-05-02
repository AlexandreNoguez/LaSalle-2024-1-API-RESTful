import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/axios-config";

function Home() {
    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        try {
            const response = await API.get('/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    async function confirmDelete(productId) {
        const isConfirmed = window.confirm("Tem certeza que deseja excluir este produto?");
        if (isConfirmed) {
            try {
                await API.delete(`/products/${productId}`);
                fetchProducts();
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
    }

    return (
        <div className="container flex flex-col justify-center items-center mt-4">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            {products && products.length ? (
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="w-28">Produto</th>
                            <th className="w-28">Categoria</th>
                            <th className="w-28">Ações</th>
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
                                    <p
                                        className="cursor-pointer"
                                        onClick={() => confirmDelete(product._id)}
                                    >
                                        ❌
                                    </p>
                                    <Link to={`/product/edit/${product._id}`}>
                                        <p className="text-blue-600">
                                            🖊
                                        </p>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) :
                <h2>Ainda não há produtos cadastrados</h2>
            }
        </div>
    );
}

export default Home;