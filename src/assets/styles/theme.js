// assets/styles/theme.js
import { createTheme } from '@mui/material/styles';

// Base theme settings that apply to both modes
const baseTheme = {
    typography: {
        fontFamily: [
            'Inter',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        h4: {
            fontWeight: 700,
            fontSize: '1.8rem',
            lineHeight: 1.2,
        },
        h5: {
            fontWeight: 600,
            fontSize: '1.4rem',
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 12,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '10px 24px',
                    fontSize: '1rem',
                    transition: 'all 0.2s ease',
                },
                contained: {
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                        boxShadow: '0 6px 18px rgba(0, 0, 0, 0.15)',
                        transform: 'translateY(-2px)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    transition: 'all 0.3s ease',
                    overflow: 'visible',
                },
            },
        },
        MuiStepper: {
            styleOverrides: {
                root: {
                    padding: '24px 0',
                },
            },
        },
    },
};

// Light Theme
export const lightTheme = createTheme({
    ...baseTheme,
    palette: {
        mode: 'light',
        primary: {
            main: '#2e7d32', // Deep green
            light: '#4caf50',
            dark: '#1b5e20',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#ff9800', // Amber
            light: '#ffb74d',
            dark: '#f57c00',
        },
        background: {
            default: '#f8f9fa',
            paper: '#ffffff',
        },
        text: {
            primary: '#212121',
            secondary: '#5f6368',
        },
        success: {
            main: '#4caf50',
        },
        warning: {
            main: '#ff9800',
        },
        error: {
            main: '#f44336',
        },
        divider: 'rgba(0, 0, 0, 0.08)',
    },
    components: {
        ...baseTheme.components,
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
                    border: '1px solid rgba(0, 0, 0, 0.04)',
                    '&:hover': {
                        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
                    },
                },
            },
        },
    },
});

// Dark Theme
export const darkTheme = createTheme({
    ...baseTheme,
    palette: {
        mode: 'dark',
        primary: {
            main: '#66bb6a', // Light green
            light: '#81c784',
            dark: '#388e3c',
            contrastText: '#121212',
        },
        secondary: {
            main: '#ffb74d', // Light amber
            light: '#ffe97d',
            dark: '#c88719',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#e0e0e0',
            secondary: '#a0a0a0',
        },
        success: {
            main: '#66bb6a',
        },
        warning: {
            main: '#ffb74d',
        },
        error: {
            main: '#f44336',
        },
        divider: 'rgba(255, 255, 255, 0.08)',
    },
    components: {
        ...baseTheme.components,
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                    '&:hover': {
                        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5)',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                contained: {
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.3)',
                    '&:hover': {
                        boxShadow: '0 6px 18px rgba(0, 0, 0, 0.5)',
                    },
                },
            },
        },
    },
});

// Theme toggle context (for implementation in App.js)
export const getDesignTokens = (mode) => ({
    ...(mode === 'light' ? lightTheme : darkTheme),
});