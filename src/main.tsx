
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ChildProfileProvider } from './contexts/ChildProfileContext';

// Create root once and render the App
const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChildProfileProvider>
        <App />
      </ChildProfileProvider>
    </BrowserRouter>
  </React.StrictMode>
);
