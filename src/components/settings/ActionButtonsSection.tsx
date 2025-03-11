
import React from 'react';
import { HelpCircle, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

const ActionButtonsSection = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleAction = (action: string) => {
    toast({
      title: action,
      description: "This feature will be available in the next update!",
    });
  };

  const handleLogout = () => {
    toast({
      title: "Logging Out",
      description: "You have been logged out successfully!",
    });
    // Navigate to home after logout
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="space-y-4">
      <Button 
        variant="outline" 
        className="w-full flex items-center justify-center"
        onClick={() => handleAction("Help & Support")}
      >
        <HelpCircle className="h-5 w-5 mr-2" />
        Help & Support
      </Button>
      
      <Button 
        variant="outline" 
        className="w-full flex items-center justify-center"
        onClick={handleLogout}
      >
        <LogOut className="h-5 w-5 mr-2" />
        Log Out
      </Button>
      
      <div className="text-center text-sm text-muted-foreground">
        <p>HealthNest v1.0.0</p>
        <p className="mt-1">© 2023 HealthNest. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ActionButtonsSection;
