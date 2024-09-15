import Box from '@mui/material/Box';
import React from "react";
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const AddProduct = (props) => {

    return (<>
        <Box sx={{ m: 2 }} />
        <Typography variant="h5" align='center'>
            Add Product
        </Typography>
        <IconButton style={{ position: "absolute", top: "0", right: "0" }} onClick={props?.CloseEvent}>
            <CloseIcon />
        </IconButton>
        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography> */}

    </>);
}
export default AddProduct;