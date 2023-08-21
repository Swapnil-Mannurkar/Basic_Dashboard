import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import UserData from "./Data";
import "./Chart.css";

const Chart = () => {
  const userData = {
    labels: UserData.map((data) => data.xAxis),
    datasets: [
      {
        label: "Guest",
        data: UserData.map((data) => data.yAxis2),
        tension: 0.5,
        borderColor: "#E9A0A0",
        pointBackgroundColor: "#E9A0A0",
        labelColor: "#000000",
      },
      {
        label: "User",
        data: UserData.map((data) => data.yAxis1),
        tension: 0.5,
        borderColor: "#9BDD7C",
        pointBackgroundColor: "#9BDD7C",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 500,
        ticks: {
          stepSize: 100,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div
      className="custom-legend-spacing"
      style={{ width: "100%", height: "90%" }}
    >
      <Line data={userData} options={options} />
    </div>
  );
};

export default Chart;
