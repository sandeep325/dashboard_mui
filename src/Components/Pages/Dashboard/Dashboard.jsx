import React from 'react'
import "./Dashboard.css";
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
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionComp from './AccordionComp';
import { BarChart } from '../../Charts/BarChart';
import CountUp from 'react-countup';

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
    <div className='bgcolor'>
      <Navbar />
      <Box height={50} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack direction="row" spacing={2}>
                  <Card sx={{ minWidth: 49 + "%", height: 140 }} className='gradient-light2'>
                    <CardContent>
                      <div style={{ color: "#fff" }}><CreditCardIcon /></div>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                        $<CountUp delay={0.6} end={500.99} duration={1}/>
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{ color: "white" }}>
                        Total Earning
                      </Typography>

                    </CardContent>
                  </Card>

                  <Card sx={{ minWidth: 49 + "%", height: 140 }} className='gradient-light1'>
                    <CardContent>
                      <div style={{ color: "#fff" }}><ShoppingBagIcon /></div>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                        $<CountUp delay={0.6} end={800.99} duration={1}/>
                      </Typography>

                      <Typography gutterBottom variant="body2" component="div" sx={{ color: "white" }}>
                        Total Order
                      </Typography>

                    </CardContent>
                  </Card>
                </Stack>
              </Grid>

              <Grid item xs={4}>
                <Stack direction="column" spacing={2}>
                  <Card sx={{ maxWidth: 345 }} className='gradient-light2'>
                    <CardContent>
                      <Stack direction="row" spacing={2}>
                        <div className="icon-style">
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
                      <Stack direction="row" spacing={2}>
                        <div className="icon-style" style={{ color: "black" }}>
                          <StorefrontIcon />
                        </div>
                        <div className='paddingAll'>
                          <span className='priceTitle'>$120k</span>
                          <span className='priceSubtitle'>Total Income</span>
                        </div>
                      </Stack>
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
                   <BarChart/>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <div className='paddingAll'>
                      <span className='priceTitle'>Popular Products</span>
                    </div>
                    <AccordionComp />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  </>
  )
}

export default Dashboard
