import React from 'react'
import Sidebar from '../../Sidebar/Sidebar';
import Navbar from '../../Nvbar/Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const About = () => {
  return (
    <>
      <Navbar />
      <Box height={30}/>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h3>About</h3>
        </Box>
      </Box>
    </>
  )
}

export default About;
