import axios from "axios";
import { useState } from "react";

function AddProduct() {
    const [productName, setProductName] = useState('');
    const [productQuantity, setProductQuantity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/products', {
                productName,
                productQuantity
            });
            alert('Product added successfully!');
            setProductName('');
            setProductQuantity('');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className="container mx-auto mt-4">
            <h2 className="text-2xl font-bold mb-4">Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="productName">Product Name:</label>
                    <input
                        type="text"
                        id="productName"
                        className="border border-gray-300 rounded p-2 w-full"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="productQuantity">Product Quantity:</label>
                    <input
                        type="number"
                        id="productQuantity"
                        className="border border-gray-300 rounded p-2 w-full"
                        value={productQuantity}
                        onChange={(e) => setProductQuantity(e.target.value)}
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;