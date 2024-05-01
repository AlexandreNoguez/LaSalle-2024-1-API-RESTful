import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import ProductDetails from "../pages/ProductDetails";
import EditProduct from "../pages/EditProduct";
import Dashboard from "../pages/Dashboard";

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/add" element={<AddProduct />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
}

export default AppRoutes;