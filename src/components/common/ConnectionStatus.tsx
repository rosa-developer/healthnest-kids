
import React from 'react';
import { Cloud, CloudOff, CloudLightning, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getConnectionStatus } from '@/lib/firebase';

interface ConnectionStatusProps {
  className?: string;
  showReconnect?: boolean;
}

const ConnectionStatus: React.FC<ConnectionStatusProps> = ({ 
  className, 
  showReconnect = false 
}) => {
  const [status, setStatus] = React.useState(getConnectionStatus());
  const [isRetrying, setIsRetrying] = React.useState(false);

  React.useEffect(() => {
    // Update status every 2 seconds
    const interval = setInterval(() => {
      setStatus(getConnectionStatus());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleRetry = async () => {
    setIsRetrying(true);
    try {
      // Force a page refresh to retry connection
      window.location.reload();
    } catch (error) {
      console.error('Reconnection failed:', error);
      setIsRetrying(false);
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {status === 'connected' && (
        <div className="flex items-center text-primary-green">
          <Cloud size={16} className="mr-1" />
          <span className="text-xs font-medium">Connected</span>
          <span className="ml-2 h-2 w-2 rounded-full bg-primary-green animate-pulse" />
        </div>
      )}
      
      {status === 'connecting' && (
        <div className="flex items-center text-amber-500">
          <CloudLightning size={16} className="mr-1 animate-pulse" />
          <span className="text-xs font-medium">Connecting...</span>
          <span className="ml-2 h-2 w-2 rounded-full bg-amber-500 animate-ping" />
        </div>
      )}
      
      {status === 'error' && (
        <div className="flex items-center gap-2">
          <div className="flex items-center text-destructive">
            <CloudOff size={16} className="mr-1" />
            <span className="text-xs font-medium">Offline Mode</span>
            <span className="ml-2 h-2 w-2 rounded-full bg-destructive" />
          </div>
          
          {showReconnect && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-7 px-2 text-xs" 
              onClick={handleRetry}
              disabled={isRetrying}
            >
              <RefreshCw size={14} className={cn("mr-1", isRetrying && "animate-spin")} />
              Retry
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default ConnectionStatus;
