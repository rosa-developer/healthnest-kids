
import React from 'react';
import { User } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ProfileSection = () => {
  const { toast } = useToast();
  
  const handleAction = (action: string) => {
    toast({
      title: action,
      description: "This feature will be available in the next update!",
    });
  };

  return (
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
  );
};

export default ProfileSection;
