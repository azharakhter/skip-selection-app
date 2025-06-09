import React from 'react';
import {
    Skeleton,
    Card,
    CardContent,
    Box
} from '@mui/material';

const SkipCardSkeleton = () => {
    return (
        <Card>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Skeleton variant="text" width="60%" height={30} />
                    <Skeleton variant="circular" width={24} height={24} />
                </Box>

                <Skeleton variant="text" width="40%" height={40} sx={{ mb: 2 }} />

                <Skeleton variant="rectangular" width="30%" height={32} sx={{ mb: 2, borderRadius: 16 }} />

                <Skeleton variant="text" width="100%" height={20} sx={{ mb: 1 }} />
                <Skeleton variant="text" width="90%" height={20} sx={{ mb: 1 }} />
                <Skeleton variant="text" width="80%" height={20} sx={{ mb: 1 }} />

                <Box sx={{ mt: 2 }}>
                    <Skeleton variant="text" width="100%" height={20} sx={{ mb: 0.5 }} />
                    <Skeleton variant="text" width="100%" height={20} sx={{ mb: 0.5 }} />
                    <Skeleton variant="text" width="80%" height={20} sx={{ mb: 0.5 }} />
                </Box>

                <Skeleton
                    variant="rectangular"
                    height={40}
                    sx={{ mt: 3, borderRadius: 2 }}
                />
            </CardContent>
        </Card>
    );
};

export default SkipCardSkeleton;