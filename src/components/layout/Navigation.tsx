
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Heart, Camera, Book, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleAddNew = () => {
    toast({
      title: "Add New Entry",
      description: "This feature will be available in the next update!",
    });
  };

  // Smooth scroll to section when clicking on nav links
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navItems = [
    { path: '/', label: 'Home', icon: Home, sectionId: 'home' },
    { path: '/health', label: 'Health', icon: Heart, sectionId: 'health' },
    { path: '/memories', label: 'Memories', icon: Camera, sectionId: 'memories' },
    { path: '/advice', label: 'Advice', icon: Book, sectionId: 'advice' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/95 dark:bg-[#1A1F2C]/95 backdrop-blur-xl border-t border-border dark:border-white/10 z-50 transition-all duration-400">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.path} 
              to={item.path}
              onClick={(e) => {
                if (location.pathname === item.path) {
                  e.preventDefault();
                  scrollToSection(item.sectionId);
                }
              }}
              className={cn(
                'flex flex-col items-center justify-center px-3 py-2 rounded-xl transition-all duration-300',
                isActive 
                  ? 'text-primary bg-primary/10 dark:bg-primary/5' 
                  : 'text-muted-foreground hover:text-primary hover:bg-primary/5 dark:hover:text-white/90 dark:hover:bg-white/5'
              )}
            >
              <Icon className={cn('h-5 w-5 mb-1', isActive && 'animate-bounce-slow')} />
              <span className="text-xs font-medium">{item.label}</span>
              {isActive && (
                <div className="h-1 w-6 bg-primary dark:bg-white/80 rounded-full mt-1 animate-pulse-soft" />
              )}
            </Link>
          );
        })}
        
        <Button 
          onClick={handleAddNew}
          size="icon"
          className="flex items-center justify-center rounded-full bg-gradient-primary dark:bg-primary text-primary-foreground dark:text-primary-foreground h-12 w-12 shadow-medium transition-all duration-300 hover:scale-105 hover:shadow-xl animate-bounce-slow"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
