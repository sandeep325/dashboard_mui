import React from 'react'
import Navbar from '../../Nvbar/Navbar';
import Box from '@mui/material/Box';
import Sidebar from '../../Sidebar/Sidebar';
import ProductsList from './ProductsList';


const Products = () => {
    return (
        <div className='bgcolor' >
            <Navbar />
            <Box height={50} />
            <Box sx={{ display: "flex" }}>
            <Sidebar/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <ProductsList/>
            </Box>
            </Box>
        </div>
    )
}

export default Products;
