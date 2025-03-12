
import React, { useEffect } from 'react';
import PageTransition from '@/components/common/PageTransition';
import ChildProfileCard from '@/components/home/child-profile/ChildProfileCard';
import UpcomingAppointments from '@/components/home/UpcomingAppointments';
import RecentTimeline from '@/components/home/RecentTimeline';
import HealthOverview from '@/components/home/HealthOverview';
import { useChildProfile } from '@/contexts/ChildProfileContext';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  // Make sure we're using the child profile context
  const { activeProfile } = useChildProfile();
  
  useEffect(() => {
    // Ensure components are properly loaded
    console.log("Index page rendering with active profile:", activeProfile);
  }, [activeProfile]);

  // This will help diagnose if the items aren't working
  const handleComponentError = (componentName: string) => {
    toast({
      title: `${componentName} Error`,
      description: `There was an issue loading the ${componentName} component. Please try again.`,
      variant: "destructive",
    });
  };
  
  return (
    <div className="main-container pt-16 pb-20 px-4 max-w-screen-lg mx-auto">
      <PageTransition>
        <div className="space-y-6">
          {/* Wrap each component in error boundary */}
          <React.Suspense fallback={<div>Loading profile...</div>}>
            <ChildProfileCard />
          </React.Suspense>
          
          <React.Suspense fallback={<div>Loading appointments...</div>}>
            <UpcomingAppointments />
          </React.Suspense>
          
          <React.Suspense fallback={<div>Loading timeline...</div>}>
            <RecentTimeline />
          </React.Suspense>
          
          <React.Suspense fallback={<div>Loading health data...</div>}>
            <HealthOverview />
          </React.Suspense>
        </div>
      </PageTransition>
    </div>
  );
};

export default Index;
