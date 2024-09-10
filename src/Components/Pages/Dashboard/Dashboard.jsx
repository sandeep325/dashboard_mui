import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import Navbar from '../../Nvbar/Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import "./Dashboard.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
const Dashboard = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  return (<>
    <Navbar />
    <Box height={50} />
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack direction="row" spacing={2}>
                <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>

            <Grid item xs={4}>
              <Stack direction="column" spacing={2}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Stack direction="row" spacing={2}>
                      <div className ="icon-style">
                        <StorefrontIcon />
                      </div>

                      <div className='paddingAll'>
                        <span className='priceTitle'>$120k</span>
                        <span className='priceSubtitle'>Total Income</span>
                      </div>
                    </Stack>

                  </CardContent>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>

                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>

                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>

                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  </>
  )
}

export default Dashboard
