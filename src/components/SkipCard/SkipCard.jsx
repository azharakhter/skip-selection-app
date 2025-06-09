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
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTheme } from '@mui/material/styles';
import { formatPrice } from '../../utils/formatters';
import { cardStyles } from './SkipCard.styles';
import { useSelection } from '../../features/SkipSelection/selectionContext';
import defaultYard from "../../assets/images/40-yarder-skip.jpg"
import Yard4 from "../../assets/images/40-yarder-skip.jpg"
import Yard5 from "../../assets/images/40-yarder-skip.jpg"
import Yard6 from "../../assets/images/40-yarder-skip.jpg"
import Yard8 from "../../assets/images/40-yarder-skip.jpg"
import Yard10 from "../../assets/images/40-yarder-skip.jpg"
import Yard14 from "../../assets/images/40-yarder-skip.jpg"
import Yard16 from "../../assets/images/40-yarder-skip.jpg"
import Yard20 from "../../assets/images/40-yarder-skip.jpg"
import Yard40 from "../../assets/images/40-yarder-skip.jpg"




const SkipCard = ({ skip, loading }) => {
    const theme = useTheme();
    const { selectedSkip, setSelectedSkip } = useSelection(null);
    const isSelected = selectedSkip?.id === skip.id;

    return (
        <Fade in={!loading} timeout={500}>
            <Card
                sx={cardStyles.card(isSelected, theme)}
                onClick={() => setSelectedSkip(skip)}
                elevation={isSelected ? 8 : 2}
            >
                {/* Image */}
                <CardMedia
                    component="img"
                    height="180"
                    image={skip.image || defaultYard}
                    alt={skip.name}
                    sx={cardStyles.image}
                />

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

                    <Chip
                        label={`${skip.size} yd³`}
                        color="secondary"
                        sx={cardStyles.sizeChip}
                    />

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
