import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import './assets/styles/index.css';
// eslint-disable-next-line import/no-unresolved
import '@splidejs/react-splide/css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
