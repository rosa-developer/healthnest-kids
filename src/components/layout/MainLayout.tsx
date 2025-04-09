
import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../navigation/MainNavigation';

interface MainLayoutProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ activeSection, setActiveSection }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-1 pb-20">
        <Outlet />
      </div>
      <MainNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
};

export default MainLayout;
