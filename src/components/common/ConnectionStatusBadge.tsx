
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Wifi, WifiOff, AlertCircle } from 'lucide-react';

const ConnectionStatusBadge = () => {
  // Mock connection status - in real app this would come from context/state
  const connectionStatus = 'connected'; // 'connected' | 'disconnected' | 'error'

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'connected':
        return {
          icon: Wifi,
          variant: 'success' as const,
          text: 'Connected',
          className: 'bg-success/20 text-success border-success/30'
        };
      case 'disconnected':
        return {
          icon: WifiOff,
          variant: 'warning' as const,
          text: 'Offline',
          className: 'bg-warning/20 text-warning border-warning/30'
        };
      case 'error':
        return {
          icon: AlertCircle,
          variant: 'destructive' as const,
          text: 'Error',
          className: 'bg-destructive/20 text-destructive border-destructive/30'
        };
      default:
        return {
          icon: Wifi,
          variant: 'outline' as const,
          text: 'Unknown',
          className: 'bg-gray-100 text-gray-600 border-gray-300'
        };
    }
  };

  const config = getStatusConfig(connectionStatus);
  const Icon = config.icon;

  return (
    <Badge 
      variant={config.variant}
      className={`${config.className} backdrop-blur-sm transition-all duration-300 hover:scale-105`}
    >
      <Icon className="h-3 w-3 mr-1" />
      {config.text}
    </Badge>
  );
};

export default ConnectionStatusBadge;
