
import React from 'react';
import PageTransition from '@/components/common/PageTransition';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCircle, Baby, Plus } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const UserProfiles: React.FC = () => {
  const { toast } = useToast();
  
  const handleAddProfile = () => {
    toast({
      title: "Coming Soon",
      description: "Profile creation will be available in the next update!"
    });
  };

  return (
    <div className="main-container">
      <PageTransition>
        <div className="mb-6">
          <div className="chip bg-healthnest-soft-blue text-healthnest-primary mb-4">User Profiles</div>
          
          <Card className="border border-border shadow-soft mb-6">
            <CardHeader className="pb-2 flex justify-between items-center">
              <CardTitle className="text-lg flex items-center">
                <UserCircle className="h-5 w-5 mr-2 text-healthnest-primary" />
                Family Members
              </CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={handleAddProfile}
                className="text-healthnest-primary"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Profile
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-healthnest-soft-purple flex items-center justify-center mr-4">
                      <Baby className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Emma</h3>
                      <p className="text-sm text-muted-foreground">8 months old</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-border shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Profile Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Manage your family profiles and privacy settings. Control who can access your children's health information.
              </p>
            </CardContent>
          </Card>
        </div>
      </PageTransition>
    </div>
  );
};

export default UserProfiles;
