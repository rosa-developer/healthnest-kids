
import React from 'react';
import { Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const NotificationsSection = () => {
  const { toast } = useToast();
  
  const handleAction = (action: string) => {
    toast({
      title: action,
      description: "This feature will be available in the next update!",
    });
  };

  return (
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
  );
};

export default NotificationsSection;
