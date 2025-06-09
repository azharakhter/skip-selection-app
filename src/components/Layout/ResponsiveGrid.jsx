import React from 'react';
import { Grid, Box } from '@mui/material';

const ResponsiveGrid = ({ children, spacing = 3 }) => {
    return (
        <Grid container spacing={spacing} justifyContent="center" maxWidth="xl">
            {React.Children.map(children, (child, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ display: 'flex' }}>
                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                        {child}
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default ResponsiveGrid;
