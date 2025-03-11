
import React from 'react';
import PageTransition from '@/components/common/PageTransition';
import ProfileSection from '@/components/settings/ProfileSection';
import ChildProfileSection from '@/components/settings/ChildProfileSection';
import NotificationsSection from '@/components/settings/NotificationsSection';
import DataPrivacySection from '@/components/settings/DataPrivacySection';
import AppSettingsSection from '@/components/settings/AppSettingsSection';
import ActionButtonsSection from '@/components/settings/ActionButtonsSection';

const Settings = () => {
  return (
    <div className="main-container">
      <PageTransition>
        <div className="mb-6">
          <div className="chip bg-healthnest-soft-blue text-healthnest-primary mb-4">
            Settings & Preferences
          </div>

          <ProfileSection />

          <div className="space-y-6">
            <ChildProfileSection />
            <NotificationsSection />
            <DataPrivacySection />
            <AppSettingsSection />
            <ActionButtonsSection />
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Settings;
