
import React from 'react';
import { useChildProfile } from '../../../contexts/ChildProfileContext';
import { Badge } from "@/components/ui/badge";

const ChildProfileInfo = () => {
  const { activeProfile } = useChildProfile();
  
  // Log to verify component is rendering with correct data
  console.log("ChildProfileInfo rendering with:", activeProfile);
  
  // If no active profile is available, show a placeholder
  if (!activeProfile) {
    return (
      <div className="bg-gradient-to-br from-healthnest-soft-blue to-healthnest-neutral p-6 sm:w-1/3">
        <div className="flex flex-col items-center sm:items-start">
          <div className="h-24 w-24 rounded-full bg-white/90 flex items-center justify-center mb-4 overflow-hidden border-2 border-white shadow-md">
            <img 
              src="/placeholder.svg" 
              alt="No Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-1">
            No Profile Selected
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            Please create or select a profile
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gradient-to-br from-healthnest-soft-blue to-healthnest-neutral p-6 sm:w-1/3">
      <div className="flex flex-col items-center sm:items-start">
        <div className="h-24 w-24 rounded-full bg-white/90 flex items-center justify-center mb-4 overflow-hidden border-2 border-white shadow-md transform hover:scale-105 transition-all duration-300">
          <img 
            src="/lovable-uploads/40981d4d-5381-44c9-a78f-c22d7a65cdcf.png" 
            alt={`Baby ${activeProfile.name}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error("Failed to load baby image");
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-1">
          {activeProfile.name}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          {activeProfile.age}
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-healthnest-soft-green text-green-600 hover:bg-healthnest-light-green border-none dark:bg-green-900/40 dark:text-green-300 px-3 py-1">
            Healthy
          </Badge>
          <Badge className="bg-healthnest-soft-purple text-purple-600 hover:bg-healthnest-light-purple border-none dark:bg-purple-900/40 dark:text-purple-300 px-3 py-1">
            Crawling
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default ChildProfileInfo;
