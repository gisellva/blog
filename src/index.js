import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { ThemeProvider } from '@mui/material/styles'; // Asegúrate de importar desde @mui/material/styles
import { createTheme } from '@mui/material/styles'; 
import { pink, blue } from '@mui/material/colors';

// Definición del tema antes de utilizarlo
const theme = createTheme({
  palette: {
    primary: {
      main: pink[100],
    },
    secondary: {
      main: blue[200],
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
