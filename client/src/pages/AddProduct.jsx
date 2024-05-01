import { useState } from "react";
import API from "../services/axios-config";

function AddProduct() {
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post('/products', {
                productName,
                productCategory
            });

            alert('Product added successfully!');

            setProductName('');
            setProductCategory('');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className="container mx-auto mt-4">
            <h2 className="text-2xl font-bold mb-4">Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="productName">Nome do Produto:</label>
                    <input
                        type="text"
                        id="productName"
                        className="border border-gray-300 rounded p-2 w-full"
                        value={productName}
                        placeholder="digite o nome do produto..."
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="productCategory">Categoria:</label>
                    <input
                        type="text"
                        id="productCategory"
                        className="border border-gray-300 rounded p-2 w-full"
                        placeholder="digite a categoria d produto..."
                        value={productCategory}
                        onChange={(e) => setProductCategory(e.target.value)}
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;