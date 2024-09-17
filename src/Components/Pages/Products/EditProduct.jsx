import Box from '@mui/material/Box';
import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { db } from '../../../Firebase-config';
import { collection, getDocs, addDoc,doc, updateDoc } from "firebase/firestore";
import Swal from 'sweetalert2';
import { useAppStore } from '../../../AppStore';
const empCollectionRef = collection(db, "products");
const categoryList = [
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

const EditProduct = (props) => {
    console.log(props?.EditFormData);
    const [name, setName] = useState("");
    const [Price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    // const [rows, setRows] = useState([]);
useEffect(()=>{
    setPrice(props?.EditFormData?.price);
    setCategory(props?.EditFormData?.category);
    setName(props?.EditFormData?.product_name);

},[]);
const setRows = useAppStore((state)=> state.setRows);
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
    const CreateProdcut = async (e) => {
        e.preventDefault();
        const userDocs = doc(db,'products',props?.EditFormData?.id);
        const newflied = {
                      product_name: name,
                Price: Price,
                category: category,
                date: String(new Date()),
        }
        await updateDoc(userDocs, newflied);
           getUsers();
        props.CloseEvent();
        Swal.fire("Submitted!", "Your product edit successfully.");
    }

    const getUsers = async () => {
        try {
            const data = await getDocs(empCollectionRef);
            setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } catch (error) {
            console.error("Error fetching data: ", error);
            Swal.fire("Error", "Failed to fetch data. Please try again later.", "error");
        }
    };

    return (<>
        <Box sx={{ m: 2 }} />
        <Typography variant="h5" align='center'>
            Edit Product
        </Typography>
        <IconButton style={{ position: "absolute", top: "0", right: "0" }} onClick={props?.CloseEvent}>
            <CloseIcon />
        </IconButton>
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
                    value={name}
                    onChange={handleChange} />
            </Grid>

            <Grid item xs={6}>
                <TextField
                    id="outlined-basic"
                    label="Price"
                    name='price'
                    type='number'
                    //         InputProps={{
                    //             startAdornment:(
                    //   <InputAdornment position="start">
                    //     <CurrencyRupeeIcon />
                    //   </InputAdornment>
                    //         )
                    //         }}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CurrencyRupeeIcon />
                                </InputAdornment>
                            ),
                        },
                    }}
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
                    onChange={handleChange}>

                    {categoryList.map((option) => (
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
export default EditProduct;