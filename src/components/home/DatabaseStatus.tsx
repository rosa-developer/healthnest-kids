
import React from 'react';
import { Database, Shield, CheckCircle2, AlertTriangle, Loader2, CloudOff, RefreshCw } from "lucide-react";
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface DatabaseStatusProps {
  status: 'connecting' | 'connected' | 'error';
}

const DatabaseStatus = ({ status }: DatabaseStatusProps) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="mt-4 flex flex-wrap items-center gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
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
                  <span className="flex items-center gap-1">
                    <AlertTriangle className="h-3 w-3" />
                    Offline Mode
                  </span>
                )}
              </span>
            </div>
          </TooltipTrigger>
          <TooltipContent className="max-w-[200px] text-center">
            {status === 'connected' && (
              <p>Database is connected. All changes will be saved in the cloud.</p>
            )}
            {status === 'connecting' && (
              <p>Establishing connection to the database. Please wait...</p>
            )}
            {status === 'error' && (
              <div className="space-y-2">
                <p>Working in offline mode. Changes won't be saved to the cloud.</p>
                <Button 
                  variant="outline" 
                  className="text-xs h-7" 
                  onClick={handleRefresh}
                >
                  <RefreshCw className="h-3 w-3 mr-1" />
                  Try reconnecting
                </Button>
              </div>
            )}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
      <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-blue/30 to-primary-blue/10 text-primary-blue px-4 py-2 text-xs font-medium border border-primary-blue/30 shadow-md dark:from-primary-blue/40 dark:to-primary-blue/20 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
        <Shield className="h-4 w-4" />
        <span>Real-time Sync</span>
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500/30 to-amber-500/10 text-amber-500 px-4 py-2 text-xs font-medium border border-amber-500/30 shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
          <CloudOff className="h-4 w-4" />
          <span>Using Local Data</span>
        </div>
      )}
    </div>
  );
};

export default DatabaseStatus;
