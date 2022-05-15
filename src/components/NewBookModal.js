import  React , { useCallback } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

import { styled } from "@mui/material/styles";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { DropzoneArea } from "material-ui-dropzone";

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
export default function NewBookModal(props) {
  const classes = useStyles();
  // let bookUploaded;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   
    const newBookData={
      bookName: data.get('bookName'),
      specialization: data.get('specialization'),
      author: data.get('author'),
      link: data.get('link'),
      description: data.get('description'),
      image: data.get('image'),
      bookUpLoaded:data.get('bookUploaded'),
      
    }
    console.log(newBookData);
  };
  const onDrop = useCallback(acceptedFiles => {
  }, []);

  return (
    <div>
      <Modal
      
        open={props.open}
        onClose={props.closeModal}
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
              <CloseOutlinedIcon  onClick={props.closeModal} sx={{cursor:'pointer'}}/>

              </Box>
            <Typography
              variant="h6"
              component="h6"
              sx={{ color: "#1976d2"}}
            >
            New Book
            </Typography>
            <div>
              <TextField
                id="outlined-basic"
                name='bookName'
                label='Book Name'
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                name='specialization'
                label="Specialization"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                name='author'
                label="Author"
                variant="outlined"
              />
              <TextField id="outlined-basic" label="Link" variant="outlined" name='link' />
            </div>{" "}
            <div>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                name='description'
                multiline
                min-rows={1}
                variant="outlined"
              />

              <label htmlFor="contained-button-file" style={{ margin: "10px" }}>
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  name='image'
                  type="file"
                />
                <Button variant="contained" component="span">
                  Upload Image
                  <AddAPhotoOutlinedIcon
                    sx={{ color: "white", fontSize: "20px", marginLeft: 2 }}
                  />
                </Button>
              </label>
             
               <DropzoneArea
               onDrop={onDrop} 
               inputProps= {{name: "bookUploaded"}}
               showPreviews={true}
               showPreviewsInDropzone={false}
               useChipsForPreview
               previewGridProps={{container: { spacing: 1, direction: 'row' }}}
               previewChipProps={{classes: { root: classes.previewChip } }}
               previewText="Selected files"
             />
          
            </div>
            <div style={{margin:"8px"}}>
              <Button variant="contained" type="submit" >OK</Button>
              <Button variant="outlined" sx={{marginLeft:2}}>Cancel</Button>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
