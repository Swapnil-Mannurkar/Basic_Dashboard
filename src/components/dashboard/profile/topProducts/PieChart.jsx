import React from "react";
import { Pie } from "react-chartjs-2";
import "./PieChart.css"

function PieChart() {
  const data = {
    labels: ["Super Hoodies", "Custom Short Pants", "Basic tees"],
    datasets: [
      {
        data: [14, 31, 55],
        backgroundColor: ["#EE8484", "#F6DC7D", "#98D89E"],
        pointBackgroundColor: ["#EE8484", "#F6DC7D", "#98D89E"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => {
                const value = data.datasets[0].data[i];
                return {
                  text: `${label} - ${value}%`,
                  strokeStyle: data.datasets[0].backgroundColor[i],
                  fillStyle: data.datasets[0].backgroundColor[i],
                  hidden: isNaN(data.datasets[0].data[i]),
                  index: i,
                };
              });
            }
            return [];
          },
        },
      },
    },
  };

  return (
    <div
      className="piechartContainer"
      style={{ width: "400px", height: "338px" }}
    >
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
