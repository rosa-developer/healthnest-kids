
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
  
  return (
    <div className="main-container pt-16 pb-20 px-4 mx-auto">
      <PageTransition>
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center mb-2">
            <div className="h-1.5 w-12 bg-primary rounded mr-2"></div>
            <h2 className="text-xl font-semibold tracking-tight">Dashboard</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <ChildProfileCard />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-hover rounded-xl bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 shadow-soft overflow-hidden">
                <UpcomingAppointments />
              </div>
              
              <div className="card-hover rounded-xl bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 shadow-soft overflow-hidden">
                <RecentTimeline />
              </div>
            </div>
            
            <div className="card-hover rounded-xl bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 shadow-soft overflow-hidden">
              <HealthOverview />
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Index;
