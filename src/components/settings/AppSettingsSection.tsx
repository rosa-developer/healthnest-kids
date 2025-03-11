
import React from 'react';
import { Settings as SettingsIcon, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const AppSettingsSection = () => {
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
  );
};

export default AppSettingsSection;
