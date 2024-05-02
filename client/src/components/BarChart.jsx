import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

BarChart.propTypes = {
    dataChart: PropTypes.shape({
        categoryNames: PropTypes.arrayOf(PropTypes.string),
        quantities: PropTypes.arrayOf(PropTypes.number),
    }),
};

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function BarChart({ dataChart }) {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Contagem de itens por categoria',
            },
        },
    };

    const data = {
        labels: dataChart?.categoryNames,
        datasets: [
            {
                label: 'Dataset 1',
                data: dataChart?.quantities,
                backgroundColor: '#5861ff',
            },
        ],
    };

    return (
        <div>
            <Bar options={options} data={data} />
        </div>
    )
}

export default BarChart;