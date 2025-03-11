
import React from 'react';
import PageTransition from '@/components/common/PageTransition';
import { Card } from "@/components/ui/card";
import { Settings as SettingsIcon, User, Bell, Shield, Cog, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const Settings = () => {
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
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="main-container">
      <PageTransition>
        <div className="mb-6">
          <div className="chip bg-healthnest-soft-blue text-healthnest-primary mb-4">
            Settings & Preferences
          </div>

          {/* Profile Section */}
          <Card className="border border-border shadow-soft mb-6">
            <div className="p-6">
              <div className="flex items-center">
                <div className="h-16 w-16 bg-healthnest-soft-blue rounded-full flex items-center justify-center mr-4">
                  <User className="h-8 w-8 text-healthnest-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Sarah Johnson</h2>
                  <p className="text-muted-foreground">Parent</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="mt-4 w-full"
                onClick={() => handleAction("Edit Profile")}
              >
                Edit Profile
              </Button>
            </div>
          </Card>

          <div className="space-y-6">
            {/* Settings Sections */}
            <Card className="border border-border shadow-soft">
              <div className="p-6 space-y-4">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => handleAction("Notifications")}
                >
                  <div className="flex items-center">
                    <Bell className="h-5 w-5 mr-3 text-healthnest-primary" />
                    <div>
                      <h3 className="font-medium">Notifications</h3>
                      <p className="text-sm text-muted-foreground">Manage your alerts and notifications</p>
                    </div>
                  </div>
                  <SettingsIcon className="h-5 w-5 text-muted-foreground" />
                </div>
                
                <Separator />
                
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => handleAction("Privacy & Security")}
                >
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-healthnest-primary" />
                    <div>
                      <h3 className="font-medium">Privacy & Security</h3>
                      <p className="text-sm text-muted-foreground">Manage your privacy settings</p>
                    </div>
                  </div>
                  <SettingsIcon className="h-5 w-5 text-muted-foreground" />
                </div>
                
                <Separator />
                
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => handleAction("App Settings")}
                >
                  <div className="flex items-center">
                    <Cog className="h-5 w-5 mr-3 text-healthnest-primary" />
                    <div>
                      <h3 className="font-medium">App Settings</h3>
                      <p className="text-sm text-muted-foreground">Customize your app experience</p>
                    </div>
                  </div>
                  <SettingsIcon className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-4">
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
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Settings;
