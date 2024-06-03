import BarChart from "../components/BarChart";
import API from "../services/axios-config";
import { separateCategories } from "../helpers/separateCategories";
import { useEffect, useState } from "react";
import PieChart from "../components/PieChart";

function Dashboard() {
    const [dataChart, setDataChart] = useState();
    const [quantitiesCount, setQuantitiesCount] = useState();

    useEffect(() => {
        if (dataChart) {

            let sum = 0;

            for (let i = 0; i < dataChart.quantities.length; i++) {
                sum += dataChart.quantities[i];
            }
            setQuantitiesCount(sum);
        }
    }, [dataChart])

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
                {dataChart ? (
                    <>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Total de Categorias: {dataChart?.categoryNames?.length}</h3>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Total de Produtos: {quantitiesCount}</h3>
                        </div>
                    </>
                ) : null}

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
