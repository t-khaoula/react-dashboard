import LineChart from "./LineChart";
import Header from "../../Header";
import { Box } from "@mui/material";

const Line = () => {
  return (
    <Box>
      <Header title="LINE CHART" description="Simple Line Chart" />
      <LineChart />
    </Box>
  );
};

export default Line;
