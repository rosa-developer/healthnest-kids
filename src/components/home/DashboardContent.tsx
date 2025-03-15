
import React from 'react';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import ChildProfileCard from '@/components/home/child-profile/ChildProfileCard';
import UpcomingAppointments from '@/components/home/UpcomingAppointments';
import RecentTimeline from '@/components/home/RecentTimeline';
import HealthOverview from '@/components/home/HealthOverview';
import BabyPhotoSection from './BabyPhotoSection';

// Fallback component for card errors
const CardError = ({ title }: { title: string }) => (
  <div className="p-5 text-center">
    <h3 className="font-medium text-lg">{title}</h3>
    <p className="text-muted-foreground text-sm mt-2">
      Unable to load content. Please try refreshing.
    </p>
  </div>
);

const DashboardContent = () => {
  return (
    <>
      <BabyPhotoSection />
      
      {/* Profile Section */}
      <div className="animate-scale-in">
        <div className="glass-panel p-6">
          <ChildProfileCard />
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="content-card card-hover card-expand animate-slide-up overflow-hidden">
          <ErrorBoundary fallback={<CardError title="Appointments" />}>
            <div className="p-6">
              <UpcomingAppointments />
            </div>
          </ErrorBoundary>
        </div>
        
        <div className="content-card card-hover card-expand animate-slide-up overflow-hidden" style={{animationDelay: "0.1s"}}>
          <ErrorBoundary fallback={<CardError title="Timeline" />}>
            <div className="p-6">
              <RecentTimeline />
            </div>
          </ErrorBoundary>
        </div>
      </div>
      
      {/* Health Overview Section */}
      <div className="content-card card-hover card-expand animate-slide-up" style={{animationDelay: "0.2s"}}>
        <div className="p-6">
          <ErrorBoundary fallback={<CardError title="Health Overview" />}>
            <HealthOverview />
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
};

export default DashboardContent;
