
import React from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-yellow-200 p-5">
      <header className="bg-purple-500 rounded-3xl p-5 mb-6 shadow-lg">
        <h1 className="text-3xl font-bold text-white text-center">Kindergarten Learning</h1>
      </header>
      
      <main className="space-y-6">
        {/* Welcome Section */}
        <section className="bg-white rounded-3xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-purple-600 mb-3">Welcome, Little Explorer!</h2>
          <p className="text-gray-700 mb-4">Let's discover fun activities and games today!</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300">
            Start Learning
          </button>
        </section>
        
        {/* Learning Categories */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-100 rounded-2xl p-5 shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Letters</h3>
            <p className="text-gray-700 text-sm mb-3">Learn the alphabet</p>
            <div className="flex justify-center">
              <img 
                src="https://placehold.co/100x100/FFC0CB/000000.png?text=ABC" 
                alt="Letters" 
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
          
          <div className="bg-red-100 rounded-2xl p-5 shadow-md">
            <h3 className="text-xl font-bold text-red-600 mb-2">Numbers</h3>
            <p className="text-gray-700 text-sm mb-3">Count and learn math</p>
            <div className="flex justify-center">
              <img 
                src="https://placehold.co/100x100/FFFFE0/000000.png?text=123" 
                alt="Numbers" 
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
          
          <div className="bg-green-100 rounded-2xl p-5 shadow-md">
            <h3 className="text-xl font-bold text-green-600 mb-2">Colors</h3>
            <p className="text-gray-700 text-sm mb-3">Discover colors</p>
            <div className="flex justify-center">
              <img 
                src="https://placehold.co/100x100/87CEEB/000000.png?text=🎨" 
                alt="Colors" 
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
          
          <div className="bg-yellow-100 rounded-2xl p-5 shadow-md">
            <h3 className="text-xl font-bold text-yellow-600 mb-2">Shapes</h3>
            <p className="text-gray-700 text-sm mb-3">Learn geometry</p>
            <div className="flex justify-center">
              <img 
                src="https://placehold.co/100x100/ADD8E6/000000.png?text=⭐" 
                alt="Shapes" 
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
        </div>
        
        {/* Daily Activity */}
        <section className="bg-orange-100 rounded-3xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-orange-600 mb-3">Today's Activity</h2>
          <div className="bg-white rounded-xl p-4">
            <h3 className="text-xl font-bold text-purple-600 mb-2">Color the Animals</h3>
            <p className="text-gray-700 mb-3">Learn animal names while coloring them!</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300">
              Start Activity
            </button>
          </div>
        </section>
        
        {/* Navigation Footer */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white p-4 rounded-t-3xl shadow-lg flex justify-around">
          <button className="p-2 bg-purple-100 rounded-full">
            <span className="block h-8 w-8 rounded-full bg-purple-500"></span>
          </button>
          <button className="p-2 bg-blue-100 rounded-full">
            <span className="block h-8 w-8 rounded-full bg-blue-500"></span>
          </button>
          <button className="p-2 bg-green-100 rounded-full">
            <span className="block h-8 w-8 rounded-full bg-green-500"></span>
          </button>
          <button className="p-2 bg-yellow-100 rounded-full">
            <span className="block h-8 w-8 rounded-full bg-yellow-500"></span>
          </button>
        </nav>
      </main>
    </div>
  );
}

export default App;
