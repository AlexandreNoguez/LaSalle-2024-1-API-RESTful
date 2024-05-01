import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import ProductById from "../pages/ProductById";

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/add" element={<AddProduct />} />
            <Route path="/product/id" element={<ProductById />} />
        </Routes>
    );
}

export default AppRoutes;