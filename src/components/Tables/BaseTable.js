import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { DeleteOutline } from "@mui/icons-material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { retryRequest } from "../../utils/network";
import { errMsg } from "../../utils/network";
export default function BaseTable(props) {
  const { widths, fields, columnsHeaders, actions, avatar, data } = props;

  console.log("dataaaa", data);
  console.log(actions);
  let columns = [];
  if (avatar) {
    columns.push({
      headerClassName: "test",
      field: "icon",
      headerName: "Image",
      width: 120,
      renderCell: (params) => (
        <strong>
          <Avatar alt={params.row.title} src="." />
        </strong>
      ),
    });
  }
  for (let i = 0; i < columnsHeaders.length; i++) {
    columns.push({
      headerClassName: `test`,
      field: `${fields[i]}`,
      headerName: `${columnsHeaders[i]}`,
      width: `${widths[i]}`,
      ///for render name in specialisation
      valueFormatter: ({ value }) => value.name,
    });
  }

  // actions delete or edit
  actions.map((obj) => {
    if (obj.actionName == "delete") {
      columns.push({
        field: "actions",
        type: "actions",
        sortable: false,
        width: 100,
        renderCell: (params) => {
          return (
            <div>
              <DeleteOutline
                sx={{ cursor: "pointer", color: "red" }}
                onClick={() => obj.handelClick(params.row.id)}
                className="deleteIcon"
              />
            </div>
          );
        },
      });
    }
  });

  function CustomNoRowsOverlay() {
    if (errMsg !== undefined) {
      return (
        <Typography
          color="red"
          sx={{
            width: "100%",
            height: "100%",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {errMsg}
        </Typography>
      );
    } else {
      return (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress disableShrink />
        </Box>
      );
    }
  }

  return (
    <Box sx={{ height: 450, width: "100%" }}>
      <RefreshIcon
        onClick={retryRequest}
        sx={{
          width: "195%",
          display: "flex",
          justifyContent: "end",
          color: "#1976d2",
          marginBottom: "10px",
          cursor: "pointer",
        }}
      />
      <DataGrid
        sx={{
          boxShadow: 2,
          border: 2,
          padding: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={7}
        components={{
          NoRowsOverlay: CustomNoRowsOverlay,
        }}
      />
    </Box>
  );
}
