
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './index.css';
import AppHeader from './components/layout/AppHeader';
import MainNavigation from './components/navigation/MainNavigation';
import ContentSection from './components/content/ContentSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  
  // Check if redirected from advice section for WordPress configuration
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('configure') === 'wordpress') {
      setActiveSection('settings');
    }
  }, []);

  // Update activeSection based on location
  useEffect(() => {
    if (location.pathname === '/settings') {
      setActiveSection('settings');
    } else if (location.pathname === '/wordpress-settings') {
      setActiveSection('settings');
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-primary-yellow p-5 pb-24">
      <AppHeader setActiveSection={setActiveSection} />
      <ContentSection activeSection={activeSection} setActiveSection={setActiveSection} />
      <MainNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;
