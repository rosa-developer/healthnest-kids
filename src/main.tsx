
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ChildProfileProvider } from './contexts/ChildProfileContext';

// Error handler for unhandled exceptions
const handleError = (event: ErrorEvent) => {
  console.error('Unhandled error:', event.error);
  // Prevent the default browser error handler
  event.preventDefault();
};

// Add global error listener
window.addEventListener('error', handleError);

// Create root and render the App with error handling
try {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    throw new Error('Root element not found');
  }
  
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ChildProfileProvider>
        <App />
      </ChildProfileProvider>
    </React.StrictMode>
  );
} catch (error) {
  console.error('Error rendering application:', error);
  
  // Create fallback UI if rendering fails
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column; font-family: Arial, sans-serif;">
        <h1 style="color: #e11d48;">Application Error</h1>
        <p>We're sorry, but the application failed to load.</p>
        <button onclick="window.location.reload()" style="margin-top: 20px; padding: 8px 16px; background-color: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Reload Page
        </button>
      </div>
    `;
  }
}
