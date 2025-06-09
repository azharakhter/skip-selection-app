import React from 'react';
import {
    Container,
    Typography,
    Button,
    Box,
    CircularProgress,
    Alert,
    Snackbar
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SkipCard from '../../components/SkipCard/SkipCard';
import SkipCardSkeleton from '../../components/SkipCard/SkipCardSkeleton';
import StepStepper from '../../components/StepStepper/StepStepper';
import PageContainer from '../../components/Layout/PageContainer';
import ResponsiveGrid from '../../components/Layout/ResponsiveGrid';
import useFetchSkips from './useFetchSkips';
import { useSelection } from './selectionContext';

const SkipSelection = () => {
    const theme = useTheme();
    const { userLocation } = useSelection();
    const {
        data: skips,
        loading,
        error,
        refetch
    } = useFetchSkips(userLocation.postcode, userLocation.area);

    const { selectedSkip, nextStep } = useSelection();
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const handleRetry = () => {
        refetch();
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    return (
        <PageContainer fullWidth>
            <Container maxWidth="xl">
                <StepStepper activeStep={2} />

                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        textAlign: 'center',
                        color: theme.palette.primary.main,
                        mb: 2
                    }}
                >
                    Choose Your Skip Size
                </Typography>

                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    gutterBottom
                    sx={{
                        textAlign: 'center',
                        mb: 4
                    }}
                >
                    Select the perfect skip for your garden waste removal
                </Typography>

                {error && (
                    <Box sx={{ mb: 4, textAlign: 'center' }}>
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {error}
                        </Alert>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleRetry}
                        >
                            Retry
                        </Button>
                    </Box>
                )}

                {loading && !error ? (
                    <ResponsiveGrid spacing={4}>
                        {[1, 2, 3, 4].map((id) => (
                            <SkipCardSkeleton key={id} />
                        ))}
                    </ResponsiveGrid>
                ) : (
                    <ResponsiveGrid spacing={2}>
                        {skips?.map((skip) => (
                            <SkipCard
                                key={skip.id}
                                skip={skip}
                                loading={loading}
                            />
                        ))}
                    </ResponsiveGrid>
                )}

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    mt: 6,
                    position: 'sticky',
                    bottom: 20,
                    zIndex: 100,
                    backgroundColor: 'background.paper',
                    py: 2,
                    borderRadius: theme.shape.borderRadius,
                    boxShadow: theme.shadows[2],
                    px: 3
                }}>
                    <Button
                        variant="contained"
                        size="large"
                        disabled={!selectedSkip}
                        onClick={nextStep}
                        sx={{
                            py: 1.5,
                            px: 6,
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                            transform: 'scale(1)',
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'scale(1.03)'
                            }
                        }}
                    >
                        Next
                    </Button>
                </Box>
            </Container>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
        </PageContainer>
    );
};

export default SkipSelection;