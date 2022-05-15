import React, { useState } from "react";
import LibraryTable from "../components/Tables/LibraryTable";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import NewBookModal from "../components/NewBookModal";
export default function Library(props) {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
          <>
            <Button variant="outlined" onClick={openModal}>
              New Book
            </Button>
          </>
        </Grid>

        <Grid item xs={12}>
          <>
            <LibraryTable />
          </>
        </Grid>
      </Grid>
      <NewBookModal open={open} closeModal={closeModal} />
    </Box>
  );
}
