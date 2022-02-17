import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      contrastText: '#ffffff',
      main: '#2d2a6d'
    },
    secondary: {
      contrastText: '#ffffff',
      main: '#f49614'
    },
    
  }
});

export default theme;
