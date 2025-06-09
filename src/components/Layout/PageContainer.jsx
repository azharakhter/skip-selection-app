import React from 'react';
import { Container, Box } from '@mui/material';

const PageContainer = ({ children }) => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                py: { xs: 3, md: 6 },
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Box sx={{ flex: 1 }}>
                {children}
            </Box>

            {/* Footer would go here */}
            <Box sx={{ py: 3, textAlign: 'center', color: 'text.secondary' }}>
                © {new Date().getFullYear()} Waste Management
            </Box>
        </Container>
    );
};

export default PageContainer;