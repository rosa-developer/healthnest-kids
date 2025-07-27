
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Ruler, Baby, Heart, BookOpen, Settings, Sparkles } from 'lucide-react';

interface MainNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const MainNavigation: React.FC<MainNavigationProps> = ({ activeSection, setActiveSection }) => {
  const navigate = useNavigate();
  
  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/', color: 'purple' },
    { id: 'growth', icon: Ruler, label: 'Growth', path: '/growth', color: 'blue' },
    { id: 'milestones', icon: Baby, label: 'Milestones', path: '/milestones', color: 'pink' },
    { id: 'health', icon: Heart, label: 'Health', path: '/health', color: 'green' },
    { id: 'learning', icon: BookOpen, label: 'Learning', path: '/learning', color: 'orange' },
    { id: 'settings', icon: Settings, label: 'Settings', path: '/settings', color: 'gray' },
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    const baseClasses = "transition-all duration-300";
    const activeClasses = "shadow-kid border border-white/30 backdrop-blur-sm";
    
    switch (color) {
      case 'purple':
        return `${baseClasses} ${isActive ? 'bg-gradient-to-br from-primary-purple/20 to-primary-purple/10 ' + activeClasses : 'bg-primary-purple/10 hover:bg-primary-purple/20'}`;
      case 'blue':
        return `${baseClasses} ${isActive ? 'bg-gradient-to-br from-primary-blue/20 to-primary-blue/10 ' + activeClasses : 'bg-primary-blue/10 hover:bg-primary-blue/20'}`;
      case 'pink':
        return `${baseClasses} ${isActive ? 'bg-gradient-to-br from-primary-pink/20 to-primary-pink/10 ' + activeClasses : 'bg-primary-pink/10 hover:bg-primary-pink/20'}`;
      case 'green':
        return `${baseClasses} ${isActive ? 'bg-gradient-to-br from-primary-green/20 to-primary-green/10 ' + activeClasses : 'bg-primary-green/10 hover:bg-primary-green/20'}`;
      case 'orange':
        return `${baseClasses} ${isActive ? 'bg-gradient-to-br from-primary-orange/20 to-primary-orange/10 ' + activeClasses : 'bg-primary-orange/10 hover:bg-primary-orange/20'}`;
      case 'gray':
        return `${baseClasses} ${isActive ? 'bg-gradient-to-br from-gray-200/20 to-gray-200/10 ' + activeClasses : 'bg-gray-100/10 hover:bg-gray-200/20'}`;
      default:
        return baseClasses;
    }
  };

  const getIconColor = (color: string, isActive: boolean) => {
    if (isActive) {
      switch (color) {
        case 'purple': return 'text-primary-purple';
        case 'blue': return 'text-primary-blue';
        case 'pink': return 'text-primary-pink';
        case 'green': return 'text-primary-green';
        case 'orange': return 'text-primary-orange';
        case 'gray': return 'text-gray-600';
        default: return 'text-primary-purple';
      }
    } else {
      switch (color) {
        case 'purple': return 'text-primary-purple/60';
        case 'blue': return 'text-primary-blue/60';
        case 'pink': return 'text-primary-pink/60';
        case 'green': return 'text-primary-green/60';
        case 'orange': return 'text-primary-orange/60';
        case 'gray': return 'text-gray-400';
        default: return 'text-primary-purple/60';
      }
    }
  };
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      {/* Enhanced background with glassmorphism */}
      <div className="bg-white/80 backdrop-blur-md border-t border-white/30 shadow-kid-lg">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex justify-around items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button 
                  key={item.id}
                  className={`kid-nav-button ${getColorClasses(item.color, isActive)} ${
                    isActive ? 'scale-110' : 'hover:scale-105'
                  }`}
                  onClick={() => {
                    setActiveSection(item.id);
                    navigate(item.path);
                  }}
                >
                  <div className="relative">
                    <Icon className={`w-7 h-7 ${getIconColor(item.color, isActive)} transition-all duration-300`} />
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-purple rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <span className={`text-xs mt-1 font-medium transition-all duration-300 ${
                    isActive ? 'text-gray-800' : 'text-gray-500'
                  }`}>
                    {item.label}
                  </span>
                  
                  {/* Enhanced active indicator */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-purple rounded-full animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-16 h-1 bg-gradient-to-r from-transparent via-primary-purple/30 to-transparent rounded-full"></div>
      <div className="absolute top-0 right-1/4 w-16 h-1 bg-gradient-to-r from-transparent via-primary-blue/30 to-transparent rounded-full"></div>
    </nav>
  );
};

export default MainNavigation;
