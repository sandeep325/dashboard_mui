import React from 'react'
import Navbar from '../../Nvbar/Navbar';
import Box from '@mui/material/Box';
import Sidebar from '../../Sidebar/Sidebar';


const Products = () => {
    return (
        <div className='bgcolor' style={{height:"100vh"}}>
            <Navbar />
            <Box height={50} />
            <Box sx={{ display: "flex" }}>
            <Sidebar/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <h3>Products</h3>
            </Box>
            </Box>
        </div>
    )
}

export default Products;
