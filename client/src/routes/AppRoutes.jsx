import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import ProductDetails from "../pages/ProductDetails";

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/add" element={<AddProduct />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
}

export default AppRoutes;