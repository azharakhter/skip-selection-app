import React from 'react';
import { Grid } from '@mui/material';

const ResponsiveGrid = ({ children, spacing = 3 }) => {
    return (
        <Grid container spacing={spacing}>
            {React.Children.map(children, (child, index) => (
                <Grid item xs={12} sm={12} md={4} key={index}>
                    {child}
                </Grid>
            ))}
        </Grid>
    );
};

export default ResponsiveGrid;
