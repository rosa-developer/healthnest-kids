
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GrowthPage from '../growth/GrowthPage';
import WordPressSettings from '../wordpress/WordPressSettings';
import SettingsPage from '../../pages/Settings';
import HomeContent from './HomeContent';
import { Baby, Heart, BookOpen } from 'lucide-react';

interface ContentSectionProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const ContentSection: React.FC<ContentSectionProps> = ({ activeSection, setActiveSection }) => {
  const renderContent = () => {
    switch(activeSection) {
      case 'growth':
        return <GrowthPage />;
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
        return <HomeContent setActiveSection={setActiveSection} />;
    }
  };

  return (
    <main className="space-y-6">
      <Routes>
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/wordpress-settings" element={<WordPressSettings />} />
        <Route path="*" element={renderContent()} />
      </Routes>
    </main>
  );
};

export default ContentSection;
