import { useEffect, useState } from "react";
import API from "../services/axios-config";
import { Line } from "react-chartjs-2";

function Dashboard() {
    const [categoriesData, setCategoriesData] = useState({});

    useEffect(() => {
        fetchCategoriesData();
    }, []);

    async function fetchCategoriesData() {
        try {
            const response = await API.get('/products');
            const productsData = response.data;
            console.log(productsData);

            const categoriesCount = {};
            console.log(categoriesCount);

            productsData.forEach(product => {
                const category = product.productCategory;
                if (!categoriesCount[category]) {
                    categoriesCount[category] = 1;
                } else {
                    categoriesCount[category]++;
                }
            });

            const categoryLabels = Object.keys(categoriesCount);
            const productsCountData = Object.values(categoriesCount);

            setCategoriesData({
                labels: categoryLabels,
                datasets: [
                    {
                        label: 'Products per Category',
                        data: productsCountData,
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1,
                    },
                ],
            });
        } catch (error) {
            console.error('Error fetching categories data:', error);
        }
    }

    return (
        <div className="container mt-4">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Products per Category</h3>
                <Line
                    data={categoriesData}
                    options={{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    precision: 0,
                                },
                            }],
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default Dashboard;
