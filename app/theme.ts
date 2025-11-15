'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Extend breakpoints to match Tailwind's 3xl (1920px) and 4k (3840px)
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      '3xl': 1920,
      '4k': 3840,
    } as any,
  },
  palette: {
    primary: {
      main: '#2563eb', // Blue color matching your inspiration
      dark: '#1e40af',
      light: '#3b82f6',
    },
    secondary: {
      main: '#10b981',
    },
    background: {
      default: '#ffffff',
      paper: '#f8fafc',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
    },
    grey: {
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
    },
  },
  typography: {
    fontFamily: 'inherit',
  },
  shadows: [
    'none',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    ...Array(18).fill('none'),
  ] as any,
});

export default theme;