import { Box } from "@mui/material";
import PieChart from "./PieChart";
import Header from "../../Header";

const Pie = () => {
  return (
    <Box>
      <Header title="PIE CHART" description="Simple Pie Chart" />
      <PieChart />
    </Box>
  );
};

export default Pie;
