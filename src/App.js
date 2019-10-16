import React from 'react';
import './style/App.css';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';

const theme = {
  primary: '#00bb77',
  secondary: '#282a36',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
