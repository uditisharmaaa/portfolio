import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional, if you’re using Tailwind or other styles
import App from './App'; // Ensure App.js is correctly imported

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
