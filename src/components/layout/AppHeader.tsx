
import React from 'react';
import { Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProfileSelector from '../ProfileSelector';

interface AppHeaderProps {
  setActiveSection: (section: string) => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ setActiveSection }) => {
  const navigate = useNavigate();
  
  return (
    <header className="kid-header flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-3xl font-bold mb-2 md:mb-0">Baby Growth Tracker</h1>
      <div className="flex items-center gap-4">
        <button 
          onClick={() => {
            navigate('/wordpress-settings');
          }}
          className="flex items-center gap-1 text-sm font-medium text-primary-purple hover:text-primary-purple/80 transition-colors"
        >
          <Globe className="w-4 h-4" />
          Configure WordPress
        </button>
        <ProfileSelector />
      </div>
    </header>
  );
};

export default AppHeader;
