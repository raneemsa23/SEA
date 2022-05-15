import React, { useState } from "react";
import CoursesTable from "../components/Tables/CoursesTable";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import NewCourseModal from "../components/NewCourseModal";
export default function Courses(props) {
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
              {props.buttonName || "New Course"}
            </Button>
          </>
        </Grid>

        <Grid item xs={12}>
          <>
            <CoursesTable />
          </>
        </Grid>
      </Grid>
      <NewCourseModal open={open} closeModal={closeModal} />
    </Box>
  );
}
