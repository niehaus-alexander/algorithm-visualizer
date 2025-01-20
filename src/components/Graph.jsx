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
import { useState } from "react";
import _ from "lodash";

const Graph = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    const unsortedArray = _.shuffle(_.range(1, 101));
    setArray(unsortedArray);
  }, []);

  function bubbleSort(unsortedArray) {
    // Bubble Sort implementieren
  }

  const chartData = {
    labels: data.map((_, idx) => idx + 1),
    datasets: [
      {
        label: "Array Values",
        data: data,
        backgroundColor: "rgba(17, 26, 40, 0.5)",
        borderColor: "#d51010",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[50%] h-[16rem] flex flex-col justify-between items-center mb-24 ">
        <button className="btn">Start Bubble Sort</button>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Graph;
