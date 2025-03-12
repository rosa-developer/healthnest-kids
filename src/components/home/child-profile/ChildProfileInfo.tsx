
import React from 'react';
import { useChildProfile } from '@/contexts/ChildProfileContext';
import { Badge } from "@/components/ui/badge";

const ChildProfileInfo = () => {
  const { activeProfile } = useChildProfile();
  
  // Log to verify component is rendering with correct data
  console.log("ChildProfileInfo rendering with:", activeProfile);
  
  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 sm:w-1/3">
      <div className="flex flex-col items-center sm:items-start">
        <div className="h-24 w-24 rounded-full bg-white/80 flex items-center justify-center mb-3 overflow-hidden border-2 border-white shadow-sm">
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
        <h2 className="text-xl font-semibold text-gray-800">
          {activeProfile?.name || 'Child Profile'}
        </h2>
        <p className="text-sm text-gray-600">
          {activeProfile?.age || 'Age not available'}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-blue-100 text-blue-600 hover:bg-blue-200">
            Healthy
          </Badge>
          <Badge variant="outline" className="bg-purple-100 text-purple-600 hover:bg-purple-200">
            Crawling
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default ChildProfileInfo;
