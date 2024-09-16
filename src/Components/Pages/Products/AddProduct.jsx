import Box from '@mui/material/Box';
import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
    {
      value: 'Phone',
      label: 'Phone',
    },
    {
      value: 'Laptop',
      label: 'Laptop',
    },
    {
      value: 'Headset',
      label: 'Headset',
    },
    {
      value: 'Keyboard',
      label: 'Keyboard',
    },
    {
        value: 'Mouse',
        label: 'Mouse',
      },
  ];

const AddProduct = (props) => {

    const [name, setName] = useState("");
    const [Price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const handleChange = (e) => {
        if (e.target?.name == "name") {
            setName(e.target?.value);
        }
        else if (e.target?.name == "price") {
            setPrice(e.target?.value);
        }
        else if (e.target?.name == "category") {
            setCategory(e.target?.value);
        }
    }


    const CreateProdcut = (e) => {
        e.preventDefault();
        let obj = {
            'product_name': name,
            'Price': Price,
            'category': category
        }
        console.log(obj);
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
                <TextField
                    id="outlined-basic"
                    label="Name"
                    name='name'
                    variant="outlined"
                    size='small'
                    sx={{ minWidth: "100%" }}
                    onChange={handleChange} />
            </Grid>

            <Grid item xs={6}>
                <TextField
                    id="outlined-basic"
                    label="Price"
                    name='price'
                    type='number'
                    variant="outlined"
                    size='small'
                    sx={{ minWidth: "100%" }}
                    value={Price} onChange={handleChange} />
            </Grid>

            <Grid item xs={6}>
                <TextField
                    id="outlined-basic"
                    label="Category"
                    name='category'
                    select
                    variant="outlined"
                    size='small'
                    sx={{ minWidth: "100%" }}
                    value={category}
                    onChange={handleChange} >
                     {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
                    </TextField>
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