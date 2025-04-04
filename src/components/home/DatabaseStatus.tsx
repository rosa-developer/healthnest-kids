
import React from 'react';
import { Database, Shield, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";
import { cn } from '@/lib/utils';

interface DatabaseStatusProps {
  status: 'connecting' | 'connected' | 'error';
}

const DatabaseStatus = ({ status }: DatabaseStatusProps) => {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-4">
      <div className={cn(
        "flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium",
        status === 'connected' && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
        status === 'connecting' && "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
        status === 'error' && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
      )}>
        <Database className="h-3.5 w-3.5" />
        <span>
          {status === 'connected' && (
            <span className="flex items-center">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Connected
            </span>
          )}
          {status === 'connecting' && (
            <span className="flex items-center">
              <Loader2 className="h-3 w-3 mr-1 animate-spin" />
              Connecting
            </span>
          )}
          {status === 'error' && (
            <span className="flex items-center">
              <AlertTriangle className="h-3 w-3 mr-1" />
              Fallback Mode
            </span>
          )}
        </span>
      </div>
      
      <div className="flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-3 py-1.5 text-xs font-medium dark:bg-blue-900/30 dark:text-blue-400">
        <Shield className="h-3.5 w-3.5" />
        <span>Real-time Sync</span>
      </div>
    </div>
  );
};

export default DatabaseStatus;
