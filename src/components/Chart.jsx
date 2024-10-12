import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from 'chart.js';
import useWebSocket from '../hooks/useWebSocket';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement);

function Chart({ coin, interval, chartType }) {
  const { data } = useWebSocket(coin, interval);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (data[interval].length > 0) {
      const labels = data[interval].map((point) => new Date(point.time).toLocaleTimeString());
      const prices = data[interval].map((point) => point.price);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: `${coin.toUpperCase()} Price`,
            data: prices,
            borderColor: 'rgba(255, 255, 255, 0.8)', 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
          },
        ],
      });
    } else {
      // Clear chart data if no data received
      setChartData({
        labels: [],
        datasets: [],
      });
    }
  }, [data, coin, interval]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
      },
      y: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
      },
    },
  };

  return (
    <div className="w-full md:w-[800px] lg:w-[900px] h-[400px] md:h-[500px] bg-[#7FA1C3] p-4 rounded-xl mx-auto my-4">
      {chartType === 'line' ? (
        <Line data={chartData} options={options} />
      ) : (
        <Bar data={chartData} options={options} />
      )}
    </div>
  );
}

export default Chart;
