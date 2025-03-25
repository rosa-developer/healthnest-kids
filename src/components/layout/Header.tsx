
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Bell, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import ChildProfileSelector from '@/components/common/ChildProfileSelector';

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
    navigate('/settings');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 dark:bg-[#1A1F2C]/90 backdrop-blur-xl border-b border-border dark:border-white/10 z-50 transition-all duration-400">
      <div className="max-w-screen-lg mx-auto px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <ChildProfileSelector />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight animate-fade-in">
              {getPageTitle(location.pathname)}
            </h1>
            {location.pathname === '/' && (
              <p className="text-sm text-muted-foreground animate-fade-in">
                Track your child's growth journey
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleNotification}
            className="transition-all duration-300 hover:bg-primary/10 dark:hover:bg-white/5 text-foreground dark:text-white/80 rounded-full"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSettingsClick}
            className="transition-all duration-300 hover:bg-primary/10 dark:hover:bg-white/5 text-foreground dark:text-white/80 rounded-full"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
