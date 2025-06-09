import React from 'react';
import { Grid } from '@mui/material';

const ResponsiveGrid = ({ children, spacing = 3 }) => {
    return (
        <Grid container spacing={spacing} justifyContent="center" maxWidth="xl">
            {React.Children.map(children, (child, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    {child}
                </Grid>
            ))}
        </Grid>
    );
};

export default ResponsiveGrid;
