
import React from 'react';

const LoadingState = () => {
  return (
    <div className="animate-pulse space-y-8">
      <div className="h-48 bg-muted rounded-3xl" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-36 bg-muted rounded-3xl" />
        <div className="h-36 bg-muted rounded-3xl" />
      </div>
      <div className="h-72 bg-muted rounded-3xl" />
    </div>
  );
};

export default LoadingState;
