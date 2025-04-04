
import React from 'react';
import { Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingState: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Loading indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center gap-3 bg-primary-blue/20 px-4 py-2 rounded-full border border-primary-blue/30 shadow-sm">
          <Loader2 className="h-5 w-5 text-primary-blue animate-spin" />
          <span className="text-sm font-medium text-primary-blue">Loading your dashboard...</span>
        </div>
      </div>
      
      {/* Profile card skeleton */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-primary-yellow/30 dark:border-gray-700 bg-gradient-to-br from-white to-primary-yellow/10">
        <div className="flex items-center gap-4 mb-6">
          <Skeleton className="h-16 w-16 rounded-full bg-primary-purple/20 dark:bg-gray-700" />
          <div className="space-y-2">
            <Skeleton className="h-5 w-32 bg-primary-orange/20 dark:bg-gray-700" />
            <Skeleton className="h-4 w-24 bg-primary-orange/10 dark:bg-gray-700" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-20 bg-primary-green/20 dark:bg-gray-700" />
              <Skeleton className="h-8 w-full bg-primary-green/10 dark:bg-gray-700" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Content cards skeletons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-primary-pink/30 dark:border-gray-700 bg-gradient-to-br from-white to-primary-pink/10">
          <Skeleton className="h-6 w-40 mb-4 bg-primary-pink/20 dark:bg-gray-700" />
          <div className="space-y-3">
            <Skeleton className="h-16 w-full bg-primary-pink/10 dark:bg-gray-700" />
            <Skeleton className="h-16 w-full bg-primary-pink/10 dark:bg-gray-700" />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-primary-blue/30 dark:border-gray-700 bg-gradient-to-br from-white to-primary-blue/10">
          <Skeleton className="h-6 w-40 mb-4 bg-primary-blue/20 dark:bg-gray-700" />
          <div className="space-y-3">
            <Skeleton className="h-16 w-full bg-primary-blue/10 dark:bg-gray-700" />
            <Skeleton className="h-16 w-full bg-primary-blue/10 dark:bg-gray-700" />
          </div>
        </div>
      </div>
      
      {/* Photos skeleton */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-primary-green/30 dark:border-gray-700 bg-gradient-to-br from-white to-primary-green/10">
        <Skeleton className="h-6 w-40 mb-4 bg-primary-green/20 dark:bg-gray-700" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-32 w-full rounded-lg bg-primary-green/10 dark:bg-gray-700" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingState;
