import React from 'react'
import Sidebar from '../../Sidebar/Sidebar';
import Navbar from '../../Nvbar/Navbar';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from './List';
const Settings = () => {
  return (
    <>
    <div className='bgcolor' >
      <Navbar />
      <Box height={70}/>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <List/>
        </Box>
      </Box>
      </div>
    </>

  )
}

export default Settings;
