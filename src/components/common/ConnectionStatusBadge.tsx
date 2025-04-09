
import React from 'react';
import { cn } from '@/lib/utils';
import { Database, CheckCircle, AlertCircle, Loader2, CloudOff } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { getConnectionStatus } from '@/lib/firebase';

interface ConnectionStatusBadgeProps {
  className?: string;
  withLabel?: boolean;
}

const ConnectionStatusBadge: React.FC<ConnectionStatusBadgeProps> = ({ 
  className,
  withLabel = true
}) => {
  const [status, setStatus] = React.useState(getConnectionStatus());
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getConnectionStatus());
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={cn(
            "flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium transition-all duration-300",
            status === 'connected' && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800/50",
            status === 'connecting' && "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50",
            status === 'error' && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800/50",
            className
          )}>
            {status === 'connected' && (
              <>
                <CheckCircle className="h-3 w-3" />
                {withLabel && <span>Connected</span>}
              </>
            )}
            {status === 'connecting' && (
              <>
                <Loader2 className="h-3 w-3 animate-spin" />
                {withLabel && <span>Connecting</span>}
              </>
            )}
            {status === 'error' && (
              <>
                <CloudOff className="h-3 w-3" />
                {withLabel && <span>Offline</span>}
              </>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="text-xs">
          {status === 'connected' && (
            <p>Database connected. All changes will be saved.</p>
          )}
          {status === 'connecting' && (
            <p>Establishing connection to the database...</p>
          )}
          {status === 'error' && (
            <p>Working in offline mode. Changes won't be saved.</p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ConnectionStatusBadge;
