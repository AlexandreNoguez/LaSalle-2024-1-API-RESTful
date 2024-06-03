import { Link } from "react-router-dom";
import BarChart from "../components/BarChart";
import API from "../services/axios-config";
import { separateCategories } from "../helpers/separateCategories";
import { useEffect, useState } from "react";
import PieChart from "../components/PieChart";

function Dashboard() {
    const [dataChart, setDataChart] = useState();

    const getData = async () => {
        const { data } = await API.get('/products');

        let categoriesCount = [];

        for (let categories of data) {
            categoriesCount.push({
                productName: categories.productName,
                productCategory: categories.productCategory
            })
        }

        const dataChart = separateCategories(categoriesCount);
        setDataChart(dataChart);

    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="container mt-4">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <div className="flex justify-between">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Categories</h3>
                    {/* <p>Total: {categoriesCount.length}</p> */}
                    <Link to="/categories" className="text-blue-500 hover:underline">View Categories</Link>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Products</h3>
                    {/* <p>Total: {productsCount.length}</p> */}
                    <Link to="/" className="text-blue-500 hover:underline">View Products</Link>
                </div>
            </div>
            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Quantidade de produtos por categoria</h3>
                <div className="flex gap-2 w-full">
                    <div className="flex w-1/2">
                        {dataChart ? (
                            <BarChart dataChart={dataChart} />
                        ) : null}
                    </div>
                    <div className="flex w-1/2">
                        {dataChart ? (
                            <PieChart dataChart={dataChart} />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
