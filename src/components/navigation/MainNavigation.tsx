
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Ruler, Baby, Heart, BookOpen, Settings } from 'lucide-react';

interface MainNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const MainNavigation: React.FC<MainNavigationProps> = ({ activeSection, setActiveSection }) => {
  const navigate = useNavigate();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white p-4 rounded-t-3xl shadow-lg flex justify-around">
      <button 
        className={`kid-nav-button ${activeSection === 'home' ? 'bg-primary-purple/20' : 'bg-purple-100'}`}
        onClick={() => {
          setActiveSection('home');
          navigate('/'); // Navigate to root instead of /home
        }}
      >
        <Home className={`w-8 h-8 ${activeSection === 'home' ? 'text-primary-purple' : 'text-primary-purple/60'}`} />
        <span className="text-xs mt-1">Home</span>
      </button>
      
      <button 
        className={`kid-nav-button ${activeSection === 'growth' ? 'bg-blue-200' : 'bg-blue-100'}`}
        onClick={() => {
          setActiveSection('growth');
          navigate('/growth');
        }}
      >
        <Ruler className={`w-8 h-8 ${activeSection === 'growth' ? 'text-blue-600' : 'text-blue-400'}`} />
        <span className="text-xs mt-1">Growth</span>
      </button>
      
      <button 
        className={`kid-nav-button ${activeSection === 'milestones' ? 'bg-red-200' : 'bg-red-100'}`}
        onClick={() => {
          setActiveSection('milestones');
          navigate('/milestones');
        }}
      >
        <Baby className={`w-8 h-8 ${activeSection === 'milestones' ? 'text-red-600' : 'text-red-400'}`} />
        <span className="text-xs mt-1">Milestones</span>
      </button>
      
      <button 
        className={`kid-nav-button ${activeSection === 'health' ? 'bg-green-200' : 'bg-green-100'}`}
        onClick={() => {
          setActiveSection('health');
          navigate('/health');
        }}
      >
        <Heart className={`w-8 h-8 ${activeSection === 'health' ? 'text-green-600' : 'text-green-400'}`} />
        <span className="text-xs mt-1">Health</span>
      </button>
      
      <button 
        className={`kid-nav-button ${activeSection === 'learning' ? 'bg-yellow-200' : 'bg-yellow-100'}`}
        onClick={() => {
          setActiveSection('learning');
          navigate('/learning');
        }}
      >
        <BookOpen className={`w-8 h-8 ${activeSection === 'learning' ? 'text-yellow-600' : 'text-yellow-400'}`} />
        <span className="text-xs mt-1">Learning</span>
      </button>
      
      <button 
        className={`kid-nav-button ${activeSection === 'settings' ? 'bg-gray-200' : 'bg-gray-100'}`}
        onClick={() => {
          setActiveSection('settings');
          navigate('/settings');
        }}
      >
        <Settings className={`w-8 h-8 ${activeSection === 'settings' ? 'text-gray-600' : 'text-gray-400'}`} />
        <span className="text-xs mt-1">Settings</span>
      </button>
    </nav>
  );
};

export default MainNavigation;
