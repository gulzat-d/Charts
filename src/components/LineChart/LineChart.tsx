import { LineChart as MUILineChart } from "@mui/x-charts";

const LineChart = () => {
  return (
    <MUILineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />
  );
};

export default LineChart;

