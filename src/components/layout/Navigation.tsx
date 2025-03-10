
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Heart, Camera, Book, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Navigation: React.FC = () => {
  const location = useLocation();
  const { toast } = useToast();
  
  const handleAddNew = () => {
    toast({
      title: "Add New Entry",
      description: "This feature will be available in the next update!",
    });
  };

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/health', label: 'Health', icon: Heart },
    { path: '/memories', label: 'Memories', icon: Camera },
    { path: '/advice', label: 'Advice', icon: Book },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t border-border z-50">
      <div className="max-w-screen-lg mx-auto px-4 py-2 flex items-center justify-between">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.path} 
              to={item.path}
              className={cn(
                'flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-all duration-300',
                isActive 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
              )}
            >
              <Icon className={cn('h-5 w-5 mb-1', isActive && 'animate-scale-in')} />
              <span className="text-xs font-medium">{item.label}</span>
              {isActive && (
                <div className="h-1 w-1 bg-primary rounded-full mt-1" />
              )}
            </Link>
          );
        })}
        
        <Button 
          onClick={handleAddNew}
          size="icon"
          className="flex items-center justify-center rounded-full bg-primary text-primary-foreground h-10 w-10 shadow-medium transition-all duration-300 hover:scale-105"
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
