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
import { formatPrice } from '../../utils/formatters';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'stretch', sm: 'center' },
                    mt: 6,
                    position: 'sticky',
                    bottom: 20,
                    zIndex: 100,
                    backgroundColor: 'background.paper',
                    py: 2,
                    borderRadius: {
                        xs: 0,             // No border radius on small screens
                        sm: theme.shape.borderRadius,  // Default radius on sm and up
                    },
                    boxShadow: theme.shadows[2],
                    px: 3,
                    gap: 2
                }}>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="caption" sx={{
                            color: 'text.secondary',
                            display: 'block',
                            maxWidth: 600
                        }}>
                            Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
                        </Typography>

                        {selectedSkip && (
                            <Box sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                mt: 1,
                                gap: 1
                            }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    {selectedSkip.name}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                    {formatPrice(selectedSkip.price_before_vat)}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                                    {selectedSkip.hire_period_days} day hire
                                </Typography>
                            </Box>
                        )}
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column-reverse', sm: 'row' },
                        gap: 2,
                        width: { xs: '100%', sm: 'auto' },
                        mt: { xs: 2, sm: 0 }
                    }}>
                        <Button
                            variant="outlined"
                            size="large"
                            fullWidth={true}
                            startIcon={<ArrowBackIcon />}
                            sx={{
                                py: 1.5,
                                fontWeight: 'bold',
                                fontSize: '1rem'
                            }}
                        >
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            fullWidth={true}
                            disabled={!selectedSkip}
                            onClick={() => { }}
                            sx={{
                                py: 1.5,
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