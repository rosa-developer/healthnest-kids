
import React from 'react';
import { useChildProfile } from '@/contexts/ChildProfileContext';

const ChildProfileInfo = () => {
  const { activeProfile } = useChildProfile();
  
  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 sm:w-1/3">
      <div className="flex flex-col items-center sm:items-start">
        <div className="h-24 w-24 rounded-full bg-white/80 flex items-center justify-center mb-3 overflow-hidden border-2 border-white shadow-sm">
          <img 
            src="/baby-emma.jpg" 
            alt={`Baby ${activeProfile.name}`}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">{activeProfile.name}</h2>
        <p className="text-sm text-gray-600">{activeProfile.age}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="chip bg-blue-100 text-blue-600">Healthy</span>
          <span className="chip bg-purple-100 text-purple-600">Crawling</span>
        </div>
      </div>
    </div>
  );
};

export default ChildProfileInfo;
