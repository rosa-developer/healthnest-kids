
import React from 'react';
import './index.css';
import { BookOpen, Palette } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-primary-yellow p-5">
      <header className="kid-header">
        <h1 className="text-3xl font-bold">Kindergarten Learning</h1>
      </header>
      
      <main className="space-y-6">
        {/* Welcome Section */}
        <section className="kid-card">
          <h2 className="text-2xl font-bold text-primary-purple mb-3">Welcome, Little Explorer!</h2>
          <p className="text-gray-700 mb-4">Let's discover fun activities and games today!</p>
          <button className="kid-button">
            Start Learning
          </button>
        </section>
        
        {/* Learning Categories */}
        <div className="grid grid-cols-2 gap-4">
          <div className="kid-category-card bg-blue-100">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Letters</h3>
            <p className="text-gray-700 text-sm mb-3">Learn the alphabet</p>
            <div className="flex justify-center">
              <BookOpen className="w-16 h-16 text-blue-500" />
            </div>
          </div>
          
          <div className="kid-category-card bg-red-100">
            <h3 className="text-xl font-bold text-red-600 mb-2">Numbers</h3>
            <p className="text-gray-700 text-sm mb-3">Count and learn math</p>
            <div className="flex justify-center">
              <span className="text-5xl text-red-500">123</span>
            </div>
          </div>
          
          <div className="kid-category-card bg-green-100">
            <h3 className="text-xl font-bold text-green-600 mb-2">Colors</h3>
            <p className="text-gray-700 text-sm mb-3">Discover colors</p>
            <div className="flex justify-center">
              <Palette className="w-16 h-16 text-green-500" />
            </div>
          </div>
          
          <div className="kid-category-card bg-yellow-100">
            <h3 className="text-xl font-bold text-yellow-600 mb-2">Shapes</h3>
            <p className="text-gray-700 text-sm mb-3">Learn geometry</p>
            <div className="flex justify-center">
              <div className="flex space-x-1">
                <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                <div className="w-5 h-5 bg-yellow-500"></div>
                <div className="w-5 h-5 bg-yellow-500 rounded-md transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Daily Activity */}
        <section className="kid-card bg-orange-100">
          <h2 className="text-2xl font-bold text-orange-600 mb-3">Today's Activity</h2>
          <div className="bg-white rounded-xl p-4">
            <h3 className="text-xl font-bold text-primary-purple mb-2">Color the Animals</h3>
            <p className="text-gray-700 mb-3">Learn animal names while coloring them!</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300">
              Start Activity
            </button>
          </div>
        </section>
        
        {/* Navigation Footer */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white p-4 rounded-t-3xl shadow-lg flex justify-around">
          <button className="kid-nav-button bg-purple-100">
            <span className="kid-nav-icon bg-primary-purple"></span>
          </button>
          <button className="kid-nav-button bg-blue-100">
            <span className="kid-nav-icon bg-primary-blue"></span>
          </button>
          <button className="kid-nav-button bg-green-100">
            <span className="kid-nav-icon bg-primary-green"></span>
          </button>
          <button className="kid-nav-button bg-yellow-100">
            <span className="kid-nav-icon bg-yellow-500"></span>
          </button>
        </nav>
      </main>
    </div>
  );
}

export default App;
