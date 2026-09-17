// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // Força o tema claro para evitar conflitos com o navegador
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
    background: { default: '#f4f6f8', paper: '#ffffff' },
    text: {
      primary: '#1A2027', // Força o texto principal a ser escuro
      secondary: '#5E6D79', // Força o texto secundário (labels, etc) a ser cinza escuro
    },
  },
  typography: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', padding: '10px 20px' },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff', // Garante que o input tenha fundo branco
        }
      }
    }
  },
});

export default theme;