import React, { useState } from 'react';

import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    Fade,
    Chip
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTheme } from '@mui/material/styles';
import { formatPrice } from '../../utils/formatters';
import { cardStyles } from './SkipCard.styles';
import { useSelection } from '../../features/SkipSelection/selectionContext';

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

                    <Box sx={cardStyles.features}>
                        {skip.features.map((feature, index) => (
                            <Typography key={index} variant="body2" sx={cardStyles.featureItem}>
                                • {feature}
                            </Typography>
                        ))}
                    </Box>
                </CardContent>

                <Button
                    variant={isSelected ? "contained" : "outlined"}
                    color="primary"
                    fullWidth
                    sx={cardStyles.button}
                >
                    {isSelected ? 'Selected' : 'Select'}
                </Button>
            </Card>
        </Fade>
    );
};

export default SkipCard;