
import React, { useState, useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Index from './pages/Index';
import Health from './pages/Health';
import Memories from './pages/Memories';
import Advice from './pages/Advice';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();
  
  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pb-24">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/health" element={<Health />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Navigation />
    </div>
  );
}

export default App;
