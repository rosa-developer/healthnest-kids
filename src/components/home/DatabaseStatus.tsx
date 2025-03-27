
import React from 'react';
import { Database, Shield } from "lucide-react";

interface DatabaseStatusProps {
  status: 'connecting' | 'connected' | 'error';
}

const DatabaseStatus = ({ status }: DatabaseStatusProps) => {
  return (
    <div className="mt-4 flex items-center gap-2">
      <div className="flex items-center gap-2">
        <Database className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm">
          Firebase: 
          {status === 'connecting' && (
            <span className="ml-1 text-amber-500">Connecting...</span>
          )}
          {status === 'connected' && (
            <span className="ml-1 text-green-500">Connected</span>
          )}
          {status === 'error' && (
            <span className="ml-1 text-destructive">Using Fallback Data</span>
          )}
        </span>
      </div>
      <span className="text-muted-foreground mx-2">|</span>
      <div className="flex items-center gap-2">
        <Shield className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Real-time Sync Active</span>
      </div>
    </div>
  );
};

export default DatabaseStatus;
