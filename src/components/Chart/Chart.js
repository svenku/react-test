import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const maxAmount = Math.max(...dataPointValues); // ... pulls 12 values from array

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxAmount}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
