export const cardStyles = {
    card: (isSelected, theme) => ({
        border: isSelected
            ? `2px solid ${theme.palette.primary.main}`
            : `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: theme.shadows[8],
            borderColor: isSelected
                ? theme.palette.primary.main
                : theme.palette.grey[400],
        }
    }),
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 1,
    },
    title: {
        fontWeight: 600,
    },
    icon: {
        fontSize: '1.5rem',
    },
    price: {
        fontWeight: 700,
        color: 'primary.main',
        mb: 1,
    },
    sizeChip: {
        mb: 2,
        fontWeight: 'bold',
    },
    description: {
        color: 'text.secondary',
        mb: 2,
        minHeight: '3em',
    },
    features: {
        mb: 2,
    },
    featureItem: {
        color: 'text.secondary',
        fontSize: '0.9rem',
        mb: 0.5,
    },
    button: {
        mt: 'auto',
    }
};