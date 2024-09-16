import Box from '@mui/material/Box';
import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
const AddProduct = (props) => {

    const CreateProdcut = ()=>{
        const [name,setName] = useState("");
        const [Price,setPrice] = useState(0);
        const [category,setCategory] = useState("");
        

    }
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
        <Box height={20} />
        <Grid container spacing={2}>

            <Grid item xs={12}>
                <TextField id="outlined-basic" label="Name" variant="outlined" size='small' sx={{ minWidth: "100%" }} />
            </Grid>

            <Grid item xs={6}>
                <TextField id="outlined-basic" label="Price" variant="outlined" size='small' sx={{ minWidth: "100%" }} />
            </Grid>

            <Grid item xs={6}>
                <TextField id="outlined-basic" label="Category" variant="outlined" size='small' sx={{ minWidth: "100%" }} />
            </Grid>

            <Grid item xs={12}>
                <Typography variant='h5' align='center'>
                    <Button variant='contained' onClick={CreateProdcut} >
                        Submit
                    </Button>
                </Typography>
            </Grid>
        </Grid>
        <Box sx={{ m: 4 }} />
    </>);
}
export default AddProduct;