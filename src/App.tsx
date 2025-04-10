
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import MainLayout from './components/layout/MainLayout';
import MilestoneTracker from './pages/MilestoneTracker';
import GrowthTracker from './pages/GrowthTracker';
import HealthTracker from './pages/HealthTracker';
import LearningTracker from './pages/LearningTracker';
import SettingsPage from './pages/Settings';
import MilestoneView from './pages/MilestoneView';
import Index from './pages/Index';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-react-theme">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout activeSection={activeSection} setActiveSection={setActiveSection} />}>
            <Route index element={<Index />} /> {/* Use Index component for home page */}
            <Route path="growth" element={<GrowthTracker />} />
            <Route path="milestones" element={<MilestoneTracker />} />
            <Route path="health" element={<HealthTracker />} />
            <Route path="learning" element={<LearningTracker />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="/milestone/:id" element={<MilestoneView />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
