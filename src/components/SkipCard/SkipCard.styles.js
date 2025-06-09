// SkipCard.styles.js
export const cardStyles = {
    card: (isSelected, theme) => ({
        border: isSelected
            ? `2px solid ${theme.palette.primary.main}`
            : `1px solid ${theme.palette.divider}`,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: theme.shadows[6],
            borderColor: isSelected
                ? theme.palette.primary.main
                : theme.palette.grey[400],
        }
    }),
    image: {
        objectFit: 'cover',
        width: '100%',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 1,
    },
    title: {
        fontWeight: 700,
        fontSize: '1.1rem',
    },
    icon: {
        fontSize: '1.5rem',
    },
    price: {
        fontWeight: 800,
        color: 'primary.main',
    },
    descriptionContainer: {
        position: 'relative',
        mb: 2,
        minHeight: '4.5em', // Fixed height for 3 lines of text
    },
    descriptionRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1,
    },
    descriptionText: {
        color: 'text.secondary',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        flexGrow: 1,
    },
    readMoreButton: {
        flexShrink: 0,
        paddingLeft: '2px',
        minWidth: 'auto',
        textTransform: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },

    featureItem: {
        color: 'text.secondary',
        fontSize: '0.9rem',
        mb: 1,
        lineHeight: 1.4,
    },
};