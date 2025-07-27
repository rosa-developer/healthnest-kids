
import React from 'react';
import { Loader2, Sparkles, Baby, Heart } from 'lucide-react';

const LoadingState = () => {
  return (
    <div className="kid-loading">
      <div className="flex flex-col items-center justify-center space-y-6 p-8">
        {/* Enhanced loading animation */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary-purple/20 border-t-primary-purple rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-primary-blue rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          <div className="absolute inset-2 w-12 h-12 border-4 border-transparent border-t-primary-pink rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
        </div>
        
        {/* Enhanced loading text */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">
            Loading Your Baby's Journey
          </h3>
          <p className="text-gray-600 text-sm">
            Preparing beautiful memories and milestones...
          </p>
        </div>
        
        {/* Enhanced decorative elements */}
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-2 text-primary-purple animate-pulse">
            <Baby className="h-5 w-5" />
            <span className="text-sm font-medium">Milestones</span>
          </div>
          <div className="flex items-center space-x-2 text-primary-blue animate-pulse" style={{ animationDelay: '0.5s' }}>
            <Heart className="h-5 w-5" />
            <span className="text-sm font-medium">Memories</span>
          </div>
          <div className="flex items-center space-x-2 text-primary-pink animate-pulse" style={{ animationDelay: '1s' }}>
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium">Growth</span>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="kid-progress-bar h-full animate-pulse" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;
