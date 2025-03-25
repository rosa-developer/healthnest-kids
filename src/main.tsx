
import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';

// Create root once and render the App
const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
