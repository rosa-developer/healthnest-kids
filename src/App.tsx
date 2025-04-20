
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import MainLayout from './components/layout/MainLayout';
import MilestoneTracker from './pages/MilestoneTracker';
import GrowthTracker from './pages/GrowthTracker';
import HealthTracker from './pages/HealthTracker';
import LearningTracker from './pages/LearningTracker';
import SettingsPage from './pages/Settings';
import MilestoneView from './pages/MilestoneView';
import Index from './pages/Index';
import Memories from './pages/Memories';
import WordPressSettings from './components/wordpress/settings/WordPressSettings';
import { AnimatePresence, motion } from 'framer-motion';

// Page transition component
const PageTransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  // Update active section based on path
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') setActiveSection('home');
    else if (path === '/growth') setActiveSection('growth');
    else if (path === '/milestones') setActiveSection('milestones');
    else if (path === '/health') setActiveSection('health');
    else if (path === '/learning') setActiveSection('learning');
    else if (path === '/settings') setActiveSection('settings');
    else if (path === '/memories') setActiveSection('memories');
  }, []);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-react-theme">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout activeSection={activeSection} setActiveSection={setActiveSection} />}>
            <Route index element={
              <PageTransitionWrapper>
                <Index />
              </PageTransitionWrapper>
            } />
            <Route path="growth" element={
              <PageTransitionWrapper>
                <GrowthTracker />
              </PageTransitionWrapper>
            } />
            <Route path="milestones" element={
              <PageTransitionWrapper>
                <MilestoneTracker />
              </PageTransitionWrapper>
            } />
            <Route path="health" element={
              <PageTransitionWrapper>
                <HealthTracker />
              </PageTransitionWrapper>
            } />
            <Route path="learning" element={
              <PageTransitionWrapper>
                <LearningTracker />
              </PageTransitionWrapper>
            } />
            <Route path="settings" element={
              <PageTransitionWrapper>
                <SettingsPage />
              </PageTransitionWrapper>
            } />
            <Route path="memories" element={
              <PageTransitionWrapper>
                <Memories />
              </PageTransitionWrapper>
            } />
            <Route path="/milestone/:id" element={
              <PageTransitionWrapper>
                <MilestoneView />
              </PageTransitionWrapper>
            } />
            <Route path="wordpress-settings" element={
              <PageTransitionWrapper>
                <WordPressSettings />
              </PageTransitionWrapper>
            } />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
