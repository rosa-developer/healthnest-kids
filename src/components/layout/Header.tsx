
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Bell, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const getPageTitle = (pathname: string) => {
    switch (pathname) {
      case '/':
        return 'Dashboard';
      case '/health':
        return 'Health';
      case '/memories':
        return 'Memories';
      case '/advice':
        return 'Parenting Advice';
      case '/settings':
        return 'Settings';
      default:
        return 'HealthNest';
    }
  };

  const handleNotification = () => {
    toast({
      title: "Notifications",
      description: "Coming soon in the next update!",
    });
  };

  const handleSettingsClick = () => {
    // Use navigate for client-side routing instead of window.location
    navigate('/settings');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50 transition-all duration-400">
      <div className="max-w-screen-lg mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold tracking-tight animate-fade-in">
              {getPageTitle(location.pathname)}
            </h1>
            {location.pathname === '/' && (
              <p className="text-sm text-muted-foreground animate-fade-in">
                Track your child's growth journey
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleNotification}
            className="transition-all duration-300 hover:bg-primary/10 text-foreground"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSettingsClick}
            className="transition-all duration-300 hover:bg-primary/10 text-foreground"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
