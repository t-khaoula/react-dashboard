import { Box } from "@mui/material";
import BarChart from "./BarChart";
import Header from "../../Header";

const Bar = () => {
  return (
    <Box>
      <Header
        title="BAR CHART"
        description="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <BarChart />;
    </Box>
  );
};

export default Bar;
