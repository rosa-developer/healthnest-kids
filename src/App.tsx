
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import { BookOpen, Palette, Baby, Heart, Ruler, Home, Settings, Globe } from 'lucide-react';
import ProfileSelector from './components/ProfileSelector';
import BabyAdviceSection from './components/wordpress/BabyAdviceSection';
import GrowthPage from './components/growth/GrowthPage';
import WordPressSettings from './components/wordpress/WordPressSettings';
import SettingsPage from './pages/Settings';

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
  
  const renderContent = () => {
    switch(activeSection) {
      case 'growth':
        return <GrowthPage />;
      case 'settings':
        return <WordPressSettings />;
      case 'milestones':
        return (
          <section className="kid-card bg-red-100">
            <h2 className="text-2xl font-bold text-red-600 mb-3">Milestones</h2>
            <p className="text-gray-700 mb-4">Track and celebrate your baby's important developmental moments.</p>
            <div className="flex justify-center mb-4">
              <Baby className="w-24 h-24 text-red-500" />
            </div>
            <button className="kid-button bg-red-500 hover:bg-red-600">
              Add Milestone
            </button>
          </section>
        );
      case 'health':
        return (
          <section className="kid-card bg-green-100">
            <h2 className="text-2xl font-bold text-green-600 mb-3">Health Records</h2>
            <p className="text-gray-700 mb-4">Keep track of vaccinations, doctor visits, and health information.</p>
            <div className="flex justify-center mb-4">
              <Heart className="w-24 h-24 text-green-500" />
            </div>
            <button className="kid-button bg-green-500 hover:bg-green-600">
              Add Health Record
            </button>
          </section>
        );
      case 'learning':
        return (
          <section className="kid-card bg-yellow-100">
            <h2 className="text-2xl font-bold text-yellow-600 mb-3">Learning Activities</h2>
            <p className="text-gray-700 mb-4">Track educational activities and skills development.</p>
            <div className="flex justify-center mb-4">
              <BookOpen className="w-24 h-24 text-yellow-500" />
            </div>
            <button className="kid-button bg-yellow-500 hover:bg-yellow-600">
              Log Activity
            </button>
          </section>
        );
      default:
        // Home screen content
        return (
          <>
            {/* Welcome Section */}
            <section className="kid-card">
              <h2 className="text-2xl font-bold text-primary-purple mb-3">Welcome to Baby Growth Tracker!</h2>
              <p className="text-gray-700 mb-4">Track your baby's growth, milestones, and memories in one place.</p>
              <button 
                className="kid-button"
                onClick={() => setActiveSection('growth')} // Navigate to growth tracking section
              >
                Start Tracking
              </button>
            </section>
            
            {/* Tracking Categories */}
            <div className="grid grid-cols-2 gap-4">
              <div className="kid-category-card bg-blue-100" onClick={() => setActiveSection('growth')}>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Growth</h3>
                <p className="text-gray-700 text-sm mb-3">Height, weight & more</p>
                <div className="flex justify-center">
                  <Ruler className="w-16 h-16 text-blue-500" />
                </div>
              </div>
              
              <div className="kid-category-card bg-red-100" onClick={() => setActiveSection('milestones')}>
                <h3 className="text-xl font-bold text-red-600 mb-2">Milestones</h3>
                <p className="text-gray-700 text-sm mb-3">Track developmental firsts</p>
                <div className="flex justify-center">
                  <Baby className="w-16 h-16 text-red-500" />
                </div>
              </div>
              
              <div className="kid-category-card bg-green-100" onClick={() => setActiveSection('health')}>
                <h3 className="text-xl font-bold text-green-600 mb-2">Health</h3>
                <p className="text-gray-700 text-sm mb-3">Vaccinations & check-ups</p>
                <div className="flex justify-center">
                  <Heart className="w-16 h-16 text-green-500" />
                </div>
              </div>
              
              <div className="kid-category-card bg-yellow-100" onClick={() => setActiveSection('learning')}>
                <h3 className="text-xl font-bold text-yellow-600 mb-2">Learning</h3>
                <p className="text-gray-700 text-sm mb-3">Activities & skills</p>
                <div className="flex justify-center">
                  <BookOpen className="w-16 h-16 text-yellow-500" />
                </div>
              </div>
            </div>
            
            {/* WordPress Baby Growth Advice */}
            <BabyAdviceSection />
            
            {/* Daily Growth */}
            <section className="kid-card bg-orange-100">
              <h2 className="text-2xl font-bold text-orange-600 mb-3">Today's Growth Tip</h2>
              <div className="bg-white rounded-xl p-4">
                <h3 className="text-xl font-bold text-primary-purple mb-2">Tummy Time</h3>
                <p className="text-gray-700 mb-3">Daily tummy time helps strengthen your baby's neck, shoulder, and arm muscles!</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300">
                  Log Activity
                </button>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-primary-yellow p-5 pb-24">
      <header className="kid-header flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold mb-2 md:mb-0">Baby Growth Tracker</h1>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setActiveSection('settings')}
            className="flex items-center gap-1 text-sm font-medium text-primary-purple hover:text-primary-purple/80 transition-colors"
          >
            <Globe className="w-4 h-4" />
            Configure WordPress
          </button>
          <ProfileSelector />
        </div>
      </header>
      
      <main className="space-y-6">
        <Routes>
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/wordpress-settings" element={<WordPressSettings />} />
          <Route path="*" element={renderContent()} />
        </Routes>
      </main>
      
      {/* Navigation Footer */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white p-4 rounded-t-3xl shadow-lg flex justify-around">
        <button 
          className={`kid-nav-button ${activeSection === 'home' ? 'bg-primary-purple/20' : 'bg-purple-100'}`}
          onClick={() => setActiveSection('home')}
        >
          <Home className={`w-8 h-8 ${activeSection === 'home' ? 'text-primary-purple' : 'text-primary-purple/60'}`} />
          <span className="text-xs mt-1">Home</span>
        </button>
        
        <button 
          className={`kid-nav-button ${activeSection === 'growth' ? 'bg-blue-200' : 'bg-blue-100'}`}
          onClick={() => setActiveSection('growth')}
        >
          <Ruler className={`w-8 h-8 ${activeSection === 'growth' ? 'text-blue-600' : 'text-blue-400'}`} />
          <span className="text-xs mt-1">Growth</span>
        </button>
        
        <button 
          className={`kid-nav-button ${activeSection === 'milestones' ? 'bg-red-200' : 'bg-red-100'}`}
          onClick={() => setActiveSection('milestones')}
        >
          <Baby className={`w-8 h-8 ${activeSection === 'milestones' ? 'text-red-600' : 'text-red-400'}`} />
          <span className="text-xs mt-1">Milestones</span>
        </button>
        
        <button 
          className={`kid-nav-button ${activeSection === 'health' ? 'bg-green-200' : 'bg-green-100'}`}
          onClick={() => setActiveSection('health')}
        >
          <Heart className={`w-8 h-8 ${activeSection === 'health' ? 'text-green-600' : 'text-green-400'}`} />
          <span className="text-xs mt-1">Health</span>
        </button>
        
        <button 
          className={`kid-nav-button ${activeSection === 'learning' ? 'bg-yellow-200' : 'bg-yellow-100'}`}
          onClick={() => setActiveSection('learning')}
        >
          <BookOpen className={`w-8 h-8 ${activeSection === 'learning' ? 'text-yellow-600' : 'text-yellow-400'}`} />
          <span className="text-xs mt-1">Learning</span>
        </button>
        
        <button 
          className={`kid-nav-button ${activeSection === 'settings' ? 'bg-gray-200' : 'bg-gray-100'}`}
          onClick={() => {
            setActiveSection('settings');
            window.location.href = '/settings';
          }}
        >
          <Settings className={`w-8 h-8 ${activeSection === 'settings' ? 'text-gray-600' : 'text-gray-400'}`} />
          <span className="text-xs mt-1">Settings</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
