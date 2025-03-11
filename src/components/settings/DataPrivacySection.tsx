
import React from 'react';
import { Cloud, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const DataPrivacySection = () => {
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
  );
};

export default DataPrivacySection;
