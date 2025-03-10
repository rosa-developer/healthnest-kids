
import React from 'react';
import PageTransition from '@/components/common/PageTransition';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Bell, 
  Settings as SettingsIcon, 
  Lock, 
  HelpCircle, 
  LogOut, 
  ChevronRight,
  Cloud
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  
  const handleAction = (action: string) => {
    toast({
      title: action,
      description: "This feature will be available in the next update!",
    });
  };

  return (
    <div className="main-container">
      <PageTransition>
        <div className="mb-6">
          <div className="chip bg-healthnest-soft-blue text-healthnest-primary mb-4">
            Settings & Preferences
          </div>

          <Card className="border border-border shadow-soft mb-6">
            <CardContent className="p-6">
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
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border border-border shadow-soft">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <User className="h-5 w-5 mr-2 text-healthnest-primary" />
                  Child Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => handleAction("Edit Child Profile")}
                  >
                    <div>
                      <h3 className="font-medium">Emma</h3>
                      <p className="text-sm text-muted-foreground">8 months old</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                  <Separator />
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleAction("Add Child")}
                  >
                    Add Another Child
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border shadow-soft">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-healthnest-primary" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Appointment Reminders</h3>
                      <p className="text-sm text-muted-foreground">Receive reminders for upcoming doctor visits</p>
                    </div>
                    <Switch defaultChecked onClick={() => handleAction("Toggle Appointment Reminders")} />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Milestone Alerts</h3>
                      <p className="text-sm text-muted-foreground">Get notified about upcoming developmental milestones</p>
                    </div>
                    <Switch defaultChecked onClick={() => handleAction("Toggle Milestone Alerts")} />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Vaccination Reminders</h3>
                      <p className="text-sm text-muted-foreground">Receive alerts for upcoming vaccinations</p>
                    </div>
                    <Switch defaultChecked onClick={() => handleAction("Toggle Vaccination Reminders")} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border shadow-soft">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Cloud className="h-5 w-5 mr-2 text-healthnest-primary" />
                  Data & Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Automatic Backup</h3>
                      <p className="text-sm text-muted-foreground">Backup your data to the cloud</p>
                    </div>
                    <Switch defaultChecked onClick={() => handleAction("Toggle Automatic Backup")} />
                  </div>
                  <Separator />
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => handleAction("Export Data")}
                  >
                    <div>
                      <h3 className="font-medium">Export Data</h3>
                      <p className="text-sm text-muted-foreground">Download all your data</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                  <Separator />
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => handleAction("Privacy Settings")}
                  >
                    <div>
                      <h3 className="font-medium">Privacy Settings</h3>
                      <p className="text-sm text-muted-foreground">Manage your privacy preferences</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border shadow-soft">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <SettingsIcon className="h-5 w-5 mr-2 text-healthnest-primary" />
                  App Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => handleAction("Units of Measurement")}
                  >
                    <div>
                      <h3 className="font-medium">Units of Measurement</h3>
                      <p className="text-sm text-muted-foreground">Set preferred units (Imperial/Metric)</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                  <Separator />
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => handleAction("Language")}
                  >
                    <div>
                      <h3 className="font-medium">Language</h3>
                      <p className="text-sm text-muted-foreground">English (US)</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

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
                onClick={() => handleAction("Logout")}
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
