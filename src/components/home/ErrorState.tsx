
import React from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ErrorStateProps {
  error: Error | string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  const errorMessage = typeof error === 'string' ? error : error.message;

  return (
    <div className="kid-loading">
      <div className="flex flex-col items-center justify-center space-y-6 p-8 text-center">
        {/* Enhanced error icon */}
        <div className="relative">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
            <AlertCircle className="h-10 w-10 text-red-500" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-200 rounded-full flex items-center justify-center">
            <span className="text-red-600 text-xs font-bold">!</span>
          </div>
        </div>
        
        {/* Enhanced error message */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-800">
            Oops! Something went wrong
          </h3>
          <p className="text-gray-600 max-w-md">
            {errorMessage || "We're having trouble loading your baby's information. Don't worry, your data is safe!"}
          </p>
        </div>
        
        {/* Enhanced action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            variant="gradient"
            onClick={() => window.location.reload()}
            className="group"
          >
            <RefreshCw className="h-4 w-4 mr-2 group-hover:animate-spin" />
            Try Again
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.location.href = '/'}
          >
            <Home className="h-4 w-4 mr-2" />
            Go Home
          </Button>
        </div>
        
        {/* Helpful tips */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 max-w-md">
          <h4 className="text-sm font-semibold text-blue-800 mb-2">
            💡 Quick Tips:
          </h4>
          <ul className="text-xs text-blue-700 space-y-1 text-left">
            <li>• Check your internet connection</li>
            <li>• Try refreshing the page</li>
            <li>• Contact support if the problem persists</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ErrorState;
