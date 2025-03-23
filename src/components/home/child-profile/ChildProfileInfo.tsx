
import React from 'react';
import { useChildProfile } from '../../../contexts/ChildProfileContext';
import { Badge } from "@/components/ui/badge";

const ChildProfileInfo = () => {
  const { activeProfile } = useChildProfile();
  
  // Log to verify component is rendering with correct data
  console.log("ChildProfileInfo rendering with:", activeProfile);
  
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 sm:w-1/3">
      <div className="flex flex-col items-center sm:items-start">
        <div className="h-24 w-24 rounded-full bg-white/80 flex items-center justify-center mb-4 overflow-hidden border-2 border-white shadow-md transform hover:scale-105 transition-all duration-300">
          {/* Make sure the image path is correct */}
          <img 
            src="/baby-emma.jpg" 
            alt={`Baby ${activeProfile?.name || 'Profile'}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error("Failed to load baby image");
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
          {activeProfile?.name || 'Child Profile'}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          {activeProfile?.age || 'Age not available'}
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200 border-none dark:bg-blue-900/40 dark:text-blue-300 px-3 py-1">
            Healthy
          </Badge>
          <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-200 border-none dark:bg-purple-900/40 dark:text-purple-300 px-3 py-1">
            Crawling
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default ChildProfileInfo;
