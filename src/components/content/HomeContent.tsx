
import React from 'react';
import { Ruler, Baby, Heart, BookOpen } from 'lucide-react';
import BabyAdviceSection from '../wordpress/BabyAdviceSection';

interface HomeContentProps {
  setActiveSection: (section: string) => void;
}

const HomeContent: React.FC<HomeContentProps> = ({ setActiveSection }) => {
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
};

export default HomeContent;
