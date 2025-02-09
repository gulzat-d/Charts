// import { BarChart } from '@mui/x-charts/BarChart';

import { BarChart as MUIBarChart } from "@mui/x-charts";
import { dataset } from "dataset";

const BarChart = () => {
  return (
    <MUIBarChart
      dataset={dataset}
      height={290}
      xAxis={[
        { scaleType: 'band', dataKey: 'month' },
      ]}
      yAxis={[
        {
          label: 'count',
        },
      ]}
      series={[{ dataKey: 'thematic', label: 'Тематикики' }]}
    // margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
};

export default BarChart;