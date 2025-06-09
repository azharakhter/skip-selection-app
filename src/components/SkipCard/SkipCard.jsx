import React from 'react';
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
    Tooltip
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarningIcon from '@mui/icons-material/Warning';
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

    // Get image based on skip size
    const skipImage = sizeToImage[skip.size] || defaultYard;

    return (
        <Fade in={!loading} timeout={500}>
            <Card
                sx={cardStyles.card(isSelected, theme)}
                onClick={() => setSelectedSkip(skip)}
                elevation={isSelected ? 8 : 2}
            >
                {/* Image with road allowance indicator */}
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        height="180"
                        image={skipImage}
                        alt={skip.name}
                        sx={cardStyles.image}
                    />

                    {/* Road Allowance Indicator */}
                    <Tooltip
                        title={skip.allowed_on_road
                            ? "Allowed on public roads"
                            : "Not allowed on public roads - Permit required"
                        }
                        placement="top"
                    >
                        <Chip
                            icon={skip.allowed_on_road ? <LocalShippingIcon /> : <WarningIcon />}
                            label={skip.allowed_on_road ? "Road Legal" : "Needs Permit"}
                            size="small"
                            sx={{
                                position: 'absolute',
                                bottom: 10,
                                right: 10,
                                backgroundColor: skip.allowed_on_road
                                    ? theme.palette.success.light
                                    : theme.palette.warning.light,
                                color: theme.palette.getContrastText(
                                    skip.allowed_on_road
                                        ? theme.palette.success.light
                                        : theme.palette.warning.light
                                ),
                                fontWeight: 'bold'
                            }}
                        />
                    </Tooltip>
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

                    <Typography variant="h5" sx={cardStyles.price}>
                        {formatPrice(skip.price)}
                    </Typography>

                    {/* Heavy Waste Indicator */}
                    <Typography
                        variant="caption"
                        sx={{
                            display: 'block',
                            color: skip.allows_heavy_waste
                                ? theme.palette.success.main
                                : theme.palette.warning.main,
                            fontWeight: 'bold',
                            mb: 1
                        }}
                    >
                        {skip.allows_heavy_waste
                            ? "✓ Heavy waste allowed"
                            : "✗ No heavy waste"
                        }
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                        <Chip
                            label={`${skip.size} yd³`}
                            color="secondary"
                        />
                        <Chip
                            label={`${skip.hire_period_days} day hire`}
                            variant="outlined"
                        />
                    </Box>

                    <Typography variant="body2" sx={cardStyles.description}>
                        {skip.description}
                    </Typography>

                    <Divider sx={{ my: 1 }} />

                    <Box>
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
                    >
                        {isSelected ? 'Selected' : 'Select'}
                    </Button>
                </Box>
            </Card>
        </Fade>
    );
};

export default SkipCard;