import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/axios-config";

function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        productName: "",
        productCategory: ""
    });

    useEffect(() => {
        fetchProduct();
    }, []);

    async function fetchProduct() {
        try {
            const response = await API.get(`/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await API.put(`/products/${id}`, product);
            navigate('/')
        } catch (error) {
            console.error('Error editing product:', error);
        }
    }

    return (
        <div className="container flex flex-col justify-center items-center mt-4">
            <h2 className="text-2xl font-bold mb-4">Editar Produto</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <div className="mb-4">
                    <label htmlFor="productName" className="block text-gray-700 font-bold mb-2">Nome do Produto</label>
                    <input type="text" id="productName" name="productName" value={product.productName} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-6">
                    <label htmlFor="productCategory" className="block text-gray-700 font-bold mb-2">Categoria do Protuto</label>
                    <input type="text" id="productCategory" name="productCategory" value={product.productCategory} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Salvar Alterações</button>
            </form>
        </div>
    );
}

export default EditProduct;
