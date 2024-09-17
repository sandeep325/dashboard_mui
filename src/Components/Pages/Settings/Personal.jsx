import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Divider, Grid2 } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
const Personal = () => {

    const RoleList = [
        {
            value: 'Admin',
            label: 'Admin',
        },
        {
            value: 'Staff',
            label: 'Staff',
        },
    ];
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Card sx={{ height: 50 + "vh" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" sx={{ color: "#141414" }}>
                                    Personal Basic Information
                                </Typography>
                                <Divider />
                                <Box height={20} />
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Name"
                                            name='name'
                                            variant="outlined"
                                            size='small'
                                            sx={{ minWidth: "100%" }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Location"
                                            name='location'
                                            variant="outlined"
                                            size='small'
                                            sx={{ minWidth: "100%" }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Bio"
                                            name='bio'
                                            variant="outlined"
                                            // size='small'
                                            sx={{ minWidth: "100%" }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Category"
                                            name='category'
                                            select
                                            variant="outlined"
                                            size='small'
                                            sx={{ minWidth: "100%" }}>
                                            {RoleList.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ height: 50 + "vh" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" sx={{ color: "#141414" }}>
                                    Contact Information
                                </Typography>
                                <Divider />
                                <Box height={20} />
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Contact Number"
                                            name='phone'
                                            variant="outlined"
                                            size='small'
                                            sx={{ minWidth: "100%" }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Email"
                                            name='email'
                                            variant="outlined"
                                            size='small'
                                            sx={{ minWidth: "100%" }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Profile URL"
                                            name='profile_url'
                                            variant="outlined"
                                            size='small'
                                            sx={{ minWidth: "100%" }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Address"
                                            name='address'
                                            variant="outlined"
                                            size='large'
                                            sx={{ minWidth: "100%" }}
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Box>
        </div >
    )
}

export default Personal
