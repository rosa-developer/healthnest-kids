
import React from 'react';
import ProfileSection from '@/components/settings/ProfileSection';
import ChildProfileSection from '@/components/settings/ChildProfileSection';
import AppSettingsSection from '@/components/settings/AppSettingsSection';
import NotificationsSection from '@/components/settings/NotificationsSection';
import DataPrivacySection from '@/components/settings/DataPrivacySection';
import ActionButtonsSection from '@/components/settings/ActionButtonsSection';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SettingsPage: React.FC = () => {
  return (
    <div className="container mx-auto pt-16 pb-24 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <ProfileSection />

        <ChildProfileSection />

        <AppSettingsSection />

        <NotificationsSection />

        <DataPrivacySection />
        
        <div className="border border-border rounded-lg shadow-soft p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Globe className="h-5 w-5 mr-2 text-healthnest-primary" />
              <h2 className="text-lg font-medium">WordPress Integration</h2>
            </div>
            <Link to="/wordpress-settings">
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            Connect to a WordPress site to display baby growth advice content
          </p>
        </div>
        
        <ActionButtonsSection />
      </div>
    </div>
  );
};

export default SettingsPage;
