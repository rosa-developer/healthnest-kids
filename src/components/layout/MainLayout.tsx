
import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../navigation/MainNavigation';

interface MainLayoutProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ activeSection, setActiveSection }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-primary-yellow/20 via-white to-primary-yellow/10">
      {/* Enhanced main content area with better spacing */}
      <div className="flex-1 pb-24 md:pb-28">
        <div className="main-container">
          <Outlet />
        </div>
      </div>
      
      {/* Enhanced navigation with better positioning */}
      <MainNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-pink/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default MainLayout;
