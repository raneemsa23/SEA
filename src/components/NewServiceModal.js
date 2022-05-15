import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

import { styled } from "@mui/material/styles";
import { createStyles, makeStyles } from '@material-ui/core/styles';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Input = styled("input")({
  display: "none",
});
const useStyles = makeStyles(theme => createStyles({
  previewChip: {
    minWidth: 160,
    maxWidth: 210
  },
}));
export default function NewServiceModal(props) {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   
    const newServiceData={
      serviceName: data.get('serviceName'),
      contactMethod: data.get('contactMethod'),
      image: data.get('image'),
      details:data.get('details'),
      
    }
    console.log(newServiceData);
  };
  return (
    <div>
      <Modal

        open={props.open}
        onClose={props.handelCloseNewServiceModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            onSubmit={handleSubmit} 
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
               <Box sx={{display:"flex",justifyContent:"end",color:"#1976d2"}} >
              <CloseOutlinedIcon  onClick={props.handelCloseNewServiceModal} sx={{cursor:'pointer'}}/>

              </Box>
            <Typography
              variant="h6"
              component="h6"
              sx={{ color: "#1976d2", marginLeft: 1 }}
            >
              New Service
            </Typography>
            <div>
              <TextField
              name='serviceName'
                id="outlined-basic"
                label='Service Name'
                variant="outlined"
              />
              <TextField
              name='contactMethod'
                id="outlined-basic"
                label="Contact Method"
                variant="outlined"
              />
            </div>
           
            <div>
              <TextField
              name='details'
                id="outlined-multiline-static"
                label="Details"
                multiline
                min-rows={1}
                variant="outlined"
              />

              <label htmlFor="contained-button-file" style={{ margin: "10px" }}>
                <Input
                name='image'
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <Button variant="contained" component="span" >
                  Upload Image
                  <AddAPhotoOutlinedIcon
                    sx={{ color: "white", fontSize: "20px", marginLeft: 2 }}
                  />
                </Button>
              </label>
              
            </div>
            <div style={{margin:"8px"}}>
              <Button variant="contained" type="submit">OK</Button>
              <Button variant="outlined" sx={{marginLeft:2}}>Cancel</Button>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
