
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
        "flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1",
        status === 'connected' && "bg-gradient-to-r from-primary-green/30 to-primary-green/10 text-primary-green dark:from-primary-green/40 dark:to-primary-green/20 border border-primary-green/30",
        status === 'connecting' && "bg-gradient-to-r from-primary-orange/30 to-primary-orange/10 text-primary-orange dark:from-primary-orange/40 dark:to-primary-orange/20 border border-primary-orange/30",
        status === 'error' && "bg-gradient-to-r from-primary-pink/30 to-primary-pink/10 text-primary-pink dark:from-primary-pink/40 dark:to-primary-pink/20 border border-primary-pink/30"
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
      
      <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-blue/30 to-primary-blue/10 text-primary-blue px-4 py-2 text-xs font-medium border border-primary-blue/30 shadow-md dark:from-primary-blue/40 dark:to-primary-blue/20 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
        <Shield className="h-4 w-4" />
        <span>Real-time Sync</span>
      </div>
    </div>
  );
};

export default DatabaseStatus;
