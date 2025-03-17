
import React, { useState } from 'react';
import { User } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import { EditProfileForm } from './EditProfileForm';

const ProfileSection = () => {
  const [open, setOpen] = useState(false);
  
  const handleSuccess = () => {
    setOpen(false);
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
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="mt-4 w-full"
            >
              Edit Profile
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <EditProfileForm onSuccess={handleSuccess} />
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ProfileSection;
