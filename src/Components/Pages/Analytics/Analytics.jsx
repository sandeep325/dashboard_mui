import React from 'react'
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
import Sidebar from '../../Sidebar/Sidebar';

const Analytics = () => {

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
    return (
        <>
            <div className='bgcolor'>
                <Navbar />
                <Box height={50} />
                <Box sx={{ display: "flex" }}>
                    <Sidebar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Stack direction="column" spacing={2} >
                                        <Stack direction="row" spacing={2} >
                                            <Card sx={{ minWidth: 49 + "%", height: 140 }} className='gradient-light1'>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                                        Visitors
                                                    </Typography>

                                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                                        26000
                                                    </Typography>
                                                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "white" }}>
                                                        Since last weak
                                                    </Typography>

                                                </CardContent>
                                            </Card>
                                            <Card sx={{ minWidth: 49 + "%", height: 140 }} className='gradient-light2'>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                                        Visitors
                                                    </Typography>

                                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                                        26000
                                                    </Typography>
                                                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "white" }}>
                                                        Since last weak
                                                    </Typography>

                                                </CardContent>
                                            </Card>
                                        </Stack>

                                        <Stack direction="row" spacing={2} >
                                            <Card sx={{ minWidth: 49 + "%", height: 140 }} className='gradient-light1'>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                                        Visitors
                                                    </Typography>

                                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                                        26000
                                                    </Typography>
                                                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "white" }}>
                                                        Since last weak
                                                    </Typography>

                                                </CardContent>
                                            </Card>
                                            <Card sx={{ minWidth: 49 + "%", height: 140 }} className='gradient-light2'>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                                        Visitors
                                                    </Typography>

                                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                                        26000
                                                    </Typography>
                                                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "white" }}>
                                                        Since last weak
                                                    </Typography>

                                                </CardContent>
                                            </Card>
                                        </Stack>

                                    </Stack>
                                </Grid>

                                <Grid item xs={8}>
                                    <Card sx={{ height: 45 + "vh" }}>
                                        <CardContent>

                                        </CardContent>
                                    </Card>
                                </Grid>

                            </Grid>
                            <Box height={20} />

                            <Grid container spacing={2}>
                            <Grid item xs={8}>
                                    <Card sx={{ height: 45 + "vh" }}>
                                        <CardContent>

                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card sx={{ height: 45 + "vh" }}>
                                        <CardContent>

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

export default Analytics;
