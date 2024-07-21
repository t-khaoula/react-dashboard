import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { rows, columns } from "./data";
import { GridToolbar } from "@mui/x-data-grid";
import Header from "../../Header";

const Contacts = () => {
  return (
    // @ts-ignore
    <Box style={{ height: 600, width: "98%", mx: "auto" }}>
      <Header
        title="CONTACTS"
        description="List of Contacts for Future Reference"
      />
      <DataGrid
        slots={{ toolbar: GridToolbar }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Contacts;
