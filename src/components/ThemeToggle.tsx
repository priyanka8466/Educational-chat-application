// src/components/ThemeToggle.tsx
import React from 'react';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import useThemeStore from '../store/useThemeStore';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore(); // Use `theme` and `toggleTheme`

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} {/* Check `theme` instead of `darkMode` */}
    </IconButton>
  );
};

export default ThemeToggle;