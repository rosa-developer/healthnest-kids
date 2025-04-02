
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ChildProfileProvider } from './contexts/ChildProfileContext';

// Create root once and render the App
const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ChildProfileProvider>
      <App />
    </ChildProfileProvider>
  </React.StrictMode>
);
