// src/App.tsx
/*import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box'; // Import the Box component
import useThemeStore from './store/useThemeStore';
import ChatInterface from './components/ChatInterface';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  const { darkMode } = useThemeStore();

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
        <ThemeToggle />
      </Box>
      <ChatInterface />
      <ErrorNotification message={error} onClose={clearError} />
    </ThemeProvider>
  );
};

export default App;*/

// src/App.tsx
import React from 'react';
import Box from '@mui/material/Box'; // Import the Box component
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Helmet } from 'react-helmet';
import useThemeStore from './store/useThemeStore';
import ChatInterface from './components/ChatInterface';
import ThemeToggle from './components/ThemeToggle';
import ErrorNotification from './components/ErrorNotification';
import useErrorHandler from './hooks/useErrorHandler';

const App: React.FC = () => {
  const { theme } = useThemeStore(); // Now correctly typed
  const { error, clearError } = useErrorHandler(); // error can be null

  const muiTheme = createTheme({
    palette: {
      mode: theme, // theme is now correctly typed as 'light' | 'dark'
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Helmet>
        <title>AI Chat Application</title>
        <meta name="description" content="An AI-powered educational chat application." />
      </Helmet>
      <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
        <ThemeToggle />
      </Box>
      <ChatInterface />
      <ErrorNotification message={error} onClose={clearError} /> {/* error can be null */}
    </ThemeProvider>
  );
};

export default App;