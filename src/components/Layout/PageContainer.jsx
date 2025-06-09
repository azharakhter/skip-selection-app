// PageContainer.jsx
import React from 'react';
import { Container, Box } from '@mui/material';

const PageContainer = ({ children, fullWidth = false }) => {
    return (
        <Container
            maxWidth={fullWidth ? false : 'xl'}
            disableGutters={fullWidth}
            sx={{
                py: { xs: 3, md: 6 },
                minHeight: '100vh',
                ...(fullWidth && { px: 2 }), // add small padding if fullWidth
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box sx={{ flex: 1 }}>
                {children}
            </Box>

            <Box sx={{ py: 3, textAlign: 'center', color: 'text.secondary' }}>
                © {new Date().getFullYear()} Waste Management
            </Box>
        </Container>
    );
};

export default PageContainer;
