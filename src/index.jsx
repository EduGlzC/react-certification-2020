import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import ThemeProvider from './providers/Theme/Theme.provider';
import './global.css';

ReactDOM.render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
