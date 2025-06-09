import React, { useState, useMemo } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  IconButton,
  Box
} from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { GlobalStyles } from './assets/styles/globalStyles';
import { lightTheme, darkTheme } from './assets/styles/theme';
import SkipSelection from './features/SkipSelection/SkipSelection';
import { SelectionProvider } from './features/SkipSelection/selectionContext';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useMemo(() =>
    darkMode ? darkTheme : lightTheme
    , [darkMode]);

  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <SelectionProvider>
          <Box sx={{
            position: 'fixed',
            top: 16,
            right: 16,
            zIndex: 1200
          }}>
            <IconButton
              onClick={() => setDarkMode(!darkMode)}
              color="inherit"
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
          <SkipSelection />
        </SelectionProvider>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
