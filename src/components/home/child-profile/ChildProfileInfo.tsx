
import React from 'react';

const ChildProfileInfo = () => {
  return (
    <div className="bg-gradient-to-br from-healthnest-soft-blue to-healthnest-light-blue p-6 sm:w-1/3">
      <div className="flex flex-col items-center sm:items-start">
        <div className="h-24 w-24 rounded-full bg-white/80 flex items-center justify-center mb-3 overflow-hidden">
          <img 
            src="/baby-emma.jpg" 
            alt="Baby Emma" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Emma</h2>
        <p className="text-sm text-gray-600">8 months old</p>
      </div>
    </div>
  );
};

export default ChildProfileInfo;
