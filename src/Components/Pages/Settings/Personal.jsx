import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

const Personal = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Card sx={{ height: 60 + "vh" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" sx={{ color: "#141414" }}>
                                    Personal Information
                                </Typography>
                                {/* <Box height={20} /> */}
                                <Divider />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ height: 60 + "vh" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" sx={{ color: "#141414" }}>
                                    Personal Information
                                </Typography>
                                {/* <Box height={20} /> */}
                                <Divider />
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Box>

        </div>
    )
}

export default Personal
