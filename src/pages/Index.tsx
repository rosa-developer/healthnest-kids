
import React from 'react';
import PageTransition from '@/components/common/PageTransition';
import ChildProfileCard from '@/components/home/child-profile/ChildProfileCard';
import UpcomingAppointments from '@/components/home/UpcomingAppointments';
import RecentTimeline from '@/components/home/RecentTimeline';
import HealthOverview from '@/components/home/HealthOverview';

const Index = () => {
  return (
    <div className="main-container">
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
