import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { useState, useEffect } from "react";
import _ from "lodash";

const Graph = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    const unsortedArray = _.shuffle(_.range(1, 101));
    setArray(unsortedArray);
  }, []);

  const bubbleSort = async () => {
    let arr = [...array];
    setIsSorting(true);
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

          setArray([...arr]);

          await new Promise((resolve) => setTimeout(resolve, 2));
        }
      }
    }
    setIsSorting(false);
  };

  const chartData = {
    labels: array.map((_, idx) => idx + 1),
    datasets: [
      {
        label: "Array Values",
        data: array,
        backgroundColor: "rgba(17, 26, 40, 0.5)",
        borderColor: "#d51010",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[50%] h-[16rem] flex flex-col justify-between items-center mb-24 ">
        <button onClick={bubbleSort} className="btn">
          Start Bubble Sort
        </button>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Graph;
