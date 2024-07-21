import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { rows, columns } from "./data.js";
import { GridToolbar } from "@mui/x-data-grid";
import Header from "../../Header";

const Invoices = () => {
  return (
    // @ts-ignore
    <Box style={{ height: 600, width: "98%", mx: "auto" }}>
      <Header title="INVOICES" description="List of Invoice Balances" />
      <DataGrid
        checkboxSelection
        slots={{ toolbar: GridToolbar }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Invoices;
