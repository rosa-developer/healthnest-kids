
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProfileSettingsSection: React.FC = () => {
  return (
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
  );
};

export default ProfileSettingsSection;
