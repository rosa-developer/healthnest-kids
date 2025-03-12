
import React from 'react';
import PageTransition from '@/components/common/PageTransition';
import ChildProfileCard from '@/components/home/child-profile/ChildProfileCard';
import UpcomingAppointments from '@/components/home/UpcomingAppointments';
import RecentTimeline from '@/components/home/RecentTimeline';
import HealthOverview from '@/components/home/HealthOverview';
import { useChildProfile } from '@/contexts/ChildProfileContext';

const Index = () => {
  // Make sure we're using the child profile context
  const { activeProfile } = useChildProfile();
  
  console.log("Index page rendering with active profile:", activeProfile);
  
  return (
    <div className="main-container pt-16 pb-20 px-4 max-w-screen-lg mx-auto">
      <PageTransition>
        <ChildProfileCard />
        <UpcomingAppointments />
        <RecentTimeline />
        <HealthOverview />
      </PageTransition>
    </div>
  );
};

export default Index;
