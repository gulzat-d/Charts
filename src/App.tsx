import { Grid } from '@mui/material';
import { BarChart, LineChart, PieChart } from 'components';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Аналитика</h1>
      <Grid>
        <LineChart />
        <PieChart />
        <BarChart />
      </Grid>
    </>
  );
}

export default App;
