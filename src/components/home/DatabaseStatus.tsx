
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
        "flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium shadow-sm transition-all duration-300 hover:shadow-md",
        status === 'connected' && "bg-primary-green/20 text-primary-green dark:bg-primary-green/30 dark:text-primary-green border border-primary-green/30",
        status === 'connecting' && "bg-primary-orange/20 text-primary-orange dark:bg-primary-orange/30 dark:text-primary-orange border border-primary-orange/30",
        status === 'error' && "bg-primary-pink/20 text-primary-pink dark:bg-primary-pink/30 dark:text-primary-pink border border-primary-pink/30"
      )}>
        <Database className="h-4 w-4" />
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
      
      <div className="flex items-center gap-2 rounded-full bg-primary-blue/20 text-primary-blue px-4 py-2 text-xs font-medium border border-primary-blue/30 shadow-sm dark:bg-primary-blue/30 dark:border-primary-blue/40 transition-all duration-300 hover:shadow-md">
        <Shield className="h-4 w-4" />
        <span>Real-time Sync</span>
      </div>
    </div>
  );
};

export default DatabaseStatus;
