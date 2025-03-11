
import React from 'react';
import { User, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const ChildProfileSection = () => {
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
  );
};

export default ChildProfileSection;
