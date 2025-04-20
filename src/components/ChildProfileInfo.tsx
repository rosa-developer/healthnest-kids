
import React from 'react';
import { useChildProfile } from '../../../contexts/ChildProfileContext';
import { Badge } from "@/components/ui/badge";
import { Image } from 'lucide-react';

const ChildProfileInfo = () => {
  const { activeProfile } = useChildProfile();
  
  if (!activeProfile) {
    return (
      <div className="bg-gradient-to-br from-healthnest-soft-blue to-healthnest-neutral p-6 sm:w-1/3 rounded-2xl">
        <div className="flex flex-col items-center sm:items-start">
          <div className="h-24 w-24 rounded-full bg-white/90 flex items-center justify-center mb-4 overflow-hidden border-2 border-white shadow-md">
            <Image className="h-12 w-12 text-muted-foreground/50" />
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
    <div className="bg-gradient-to-br from-healthnest-soft-blue to-healthnest-neutral p-6 sm:w-1/3 rounded-2xl">
      <div className="flex flex-col items-center sm:items-start">
        <div className="relative h-24 w-24 mb-4">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-purple via-primary-blue to-primary-pink rounded-full blur opacity-75"></div>
          <div className="relative h-full w-full rounded-full bg-white/90 flex items-center justify-center overflow-hidden border-2 border-white shadow-md transform hover:scale-105 transition-all duration-300">
            <img 
              src="/lovable-uploads/40981d4d-5381-44c9-a78f-c22d7a65cdcf.png"
              alt={`Baby ${activeProfile.name}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error("Failed to load baby image");
                e.currentTarget.src = "/lovable-uploads/09704aa0-0bda-4497-942b-b783bd82f948.png";
              }}
            />
          </div>
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
            Growing
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default ChildProfileInfo;
