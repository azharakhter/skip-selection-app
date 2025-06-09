import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    Fade,
    Chip,
    CardMedia,
    Divider,
    Tooltip,
    Stack,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarningIcon from '@mui/icons-material/Warning';
import ScaleIcon from '@mui/icons-material/Scale';
import { useTheme } from '@mui/material/styles';
import { formatPrice } from '../../utils/formatters';
import { cardStyles } from './SkipCard.styles';
import { useSelection } from '../../features/SkipSelection/selectionContext';

// Import all skip images
import Yard4 from "../../assets/images/4-yarder-skip.jpg";
import Yard6 from "../../assets/images/6-yarder-skip.jpg";
import Yard8 from "../../assets/images/8-yarder-skip.jpg";
import Yard10 from "../../assets/images/10-yarder-skip.jpg";
import Yard12 from "../../assets/images/12-yarder-skip.jpg";
import Yard14 from "../../assets/images/14-yarder-skip.jpg";
import Yard16 from "../../assets/images/16-yarder-skip.jpg";
import Yard20 from "../../assets/images/20-yarder-skip.jpg";
import Yard40 from "../../assets/images/40-yarder-skip.jpg";
import defaultYard from "../../assets/images/4-yarder-skip.jpg";

// Map skip sizes to images
const sizeToImage = {
    4: Yard4,
    6: Yard6,
    8: Yard8,
    10: Yard10,
    12: Yard12,
    14: Yard14,
    16: Yard16,
    20: Yard20,
    40: Yard40
};

const SkipCard = ({ skip, loading }) => {
    const theme = useTheme();
    const { selectedSkip, setSelectedSkip } = useSelection(null);
    const isSelected = selectedSkip?.id === skip.id;
    const [dialogOpen, setDialogOpen] = useState(false);

    // Get image based on skip size
    const skipImage = sizeToImage[skip.size] || defaultYard;

    const handleClick = () => {
        return null;
    };

    const handleReadMore = (e) => {
        e.stopPropagation();
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <Fade in={!loading} timeout={500}>
            <Card
                sx={cardStyles.card(isSelected, theme)}
                onClick={() => setSelectedSkip(skip)}
                elevation={isSelected ? 8 : 2}
            >
                {/* Image with indicators */}
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        height="180"
                        image={skipImage}
                        alt={skip.name}
                        sx={cardStyles.image}
                    />

                    {/* Top indicators */}
                    <Box sx={{
                        position: 'absolute',
                        top: 10,
                        left: 0,
                        right: 0,
                        display: 'flex',
                        justifyContent: 'space-between',
                        px: 1,
                        gap: 1,
                    }}>
                        {/* Road Allowance */}
                        <Tooltip
                            title={skip.allowed_on_road
                                ? "Allowed on public roads"
                                : "Not allowed on public roads - Permit required"
                            }
                            placement="top"
                            disableInteractive
                        >
                            <Chip
                                icon={skip.allowed_on_road ? <LocalShippingIcon /> : <WarningIcon />}
                                label={skip.allowed_on_road ? "Road Legal" : "Permit Needed"}
                                size="small"
                                sx={{
                                    backgroundColor: skip.allowed_on_road
                                        ? theme.palette.success.light
                                        : theme.palette.warning.light,
                                    color: theme.palette.getContrastText(
                                        skip.allowed_on_road
                                            ? theme.palette.success.light
                                            : theme.palette.warning.light
                                    ),
                                    fontWeight: 'bold',
                                    maxWidth: '48%',
                                    '& .MuiChip-label': {
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }
                                }}
                                onClick={handleClick}
                            />
                        </Tooltip>

                        {/* Heavy Waste Indicator */}
                        <Tooltip
                            title={skip.allows_heavy_waste
                                ? "Heavy waste allowed (soil, rubble, etc.)"
                                : "Does not allow heavy waste (soil, rubble, etc.)"
                            }
                            placement="top"
                            disableInteractive
                        >
                            <Chip
                                icon={<ScaleIcon />}
                                label={skip.allows_heavy_waste ? "Heavy Waste" : "No Heavy Waste"}
                                size="small"
                                onClick={handleClick}
                                sx={{
                                    backgroundColor: skip.allows_heavy_waste
                                        ? theme.palette.success.light
                                        : theme.palette.warning.light,
                                    color: theme.palette.getContrastText(
                                        skip.allows_heavy_waste
                                            ? theme.palette.success.light
                                            : theme.palette.warning.light
                                    ),
                                    fontWeight: 'bold',
                                    maxWidth: '55%',
                                    '& .MuiChip-label': {
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }
                                }}
                            />
                        </Tooltip>
                    </Box>
                </Box>

                <CardContent>
                    <Box sx={cardStyles.header}>
                        <Typography variant="h6" sx={cardStyles.title}>
                            {skip.name}
                        </Typography>
                        {isSelected && (
                            <CheckCircleIcon
                                color="success"
                                sx={cardStyles.icon}
                            />
                        )}
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 1 }}>
                        <Typography variant="h5" sx={cardStyles.price}>
                            {formatPrice(skip.price_before_vat)}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            +VAT
                        </Typography>
                    </Box>

                    <Stack direction="row" spacing={3} sx={{ mb: 2, mt: 2 }}>
                        <Chip
                            label={`${skip.size} yd³`}
                            color="secondary"
                            sx={{ fontWeight: 'bold', fontSize: '1.4rem' }}
                        />
                        <Chip
                            label={`${skip.hire_period_days} day hire`}
                            variant="outlined"
                            sx={{ fontWeight: '500' }}
                        />
                    </Stack>

                    {/* Updated description section with line clamping */}
                    <Typography variant="body2" sx={cardStyles.descriptionText}>
                        {skip?.description || (
                            <>
                                This is a short to This working <br />
                                a short to..a is a short to..a
                            </>
                        )}

                    </Typography>
                    <Button
                        variant="text"
                        size="small"
                        onClick={handleReadMore}
                        sx={cardStyles.readMoreButton}
                    >
                        Read More
                    </Button>


                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ maxHeight: 120, overflowY: 'auto', pr: 1 }}>
                        {skip.features.map((feature, index) => (
                            <Typography
                                key={index}
                                variant="body2"
                                sx={cardStyles.featureItem}
                            >
                                • {feature}
                            </Typography>
                        ))}
                    </Box>
                </CardContent>

                <Box sx={{ px: 2, pb: 2 }}>
                    <Button
                        variant={isSelected ? "contained" : "outlined"}
                        color="primary"
                        fullWidth
                        size="medium"
                        sx={{ fontWeight: 'bold' }}
                    >
                        {isSelected ? 'Selected' : 'Select Skip'}
                    </Button>
                </Box>

                {/* Description Modal */}
                <Dialog open={dialogOpen} onClose={handleCloseDialog}>
                    <DialogTitle>{skip.name} Details</DialogTitle>
                    <DialogContent>
                        <Typography variant="body1">
                            {skip?.description ||
                                `This ${skip.size} cubic yard skip is ideal for ${skip.size < 10 ? 'small' :
                                    skip.size < 15 ? 'medium' : 'large'} projects. It comes with a ${skip.hire_period_days}-day hire period.`
                            }
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Card>
        </Fade>
    );
};

export default SkipCard;