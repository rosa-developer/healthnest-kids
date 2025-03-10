
import React from 'react';
import PageTransition from '@/components/common/PageTransition';
import FamilyMembersSection from '@/components/profile/FamilyMembersSection';
import ProfileSettingsSection from '@/components/profile/ProfileSettingsSection';

const UserProfiles: React.FC = () => {
  return (
    <div className="main-container">
      <PageTransition>
        <div className="mb-6">
          <div className="chip bg-healthnest-soft-blue text-healthnest-primary mb-4">User Profiles</div>
          <FamilyMembersSection />
          <ProfileSettingsSection />
        </div>
      </PageTransition>
    </div>
  );
};

export default UserProfiles;
