import * as React from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { errMsg } from "../utils/network";
import Button from "@mui/material/Button";
import { retryRequest } from "../utils/network";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ErrorAlert(props) {
  const { open, setOpen } = props;
  console.log("err in alert", errMsg);

  const handleClose = (event) => {
    if (event === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {errMsg}
        <Button
          size="small"
          onClick={retryRequest}
          sx={{
            color: "white",
            border: "1px solid 	white",
            marginLeft: "20px",
          }}
        >
          Retry
        </Button>
      </Alert>
    </Snackbar>
  );
}
