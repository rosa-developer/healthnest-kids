
import React from 'react';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import ChildProfileCard from '@/components/home/child-profile/ChildProfileCard';
import UpcomingAppointments from '@/components/home/UpcomingAppointments';
import RecentTimeline from '@/components/home/RecentTimeline';
import HealthOverview from '@/components/home/HealthOverview';
import BabyPhotoSection from './baby-photos';
import RemindersSection from './RemindersSection';

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
    <div id="home" className="section-container content-spacing">
      <BabyPhotoSection />
      
      {/* Profile Section */}
      <div className="animate-scale-in">
        <div className="glass-panel">
          <ChildProfileCard />
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="card-grid-2">
        <div 
          className="content-card rounded-3xl overflow-hidden group animate-slide-in-fade-up delay-100 hover:transform hover:-translate-y-2 transition-all duration-500"
        >
          <ErrorBoundary fallback={<CardError title="Appointments" />}>
            <div className="p-6">
              <UpcomingAppointments />
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-primary-purple to-primary-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </ErrorBoundary>
        </div>
        
        <div 
          className="content-card rounded-3xl overflow-hidden group animate-slide-in-fade-up delay-200 hover:transform hover:-translate-y-2 transition-all duration-500"
        >
          <ErrorBoundary fallback={<CardError title="Timeline" />}>
            <div className="p-6">
              <RecentTimeline />
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-primary-pink to-primary-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </ErrorBoundary>
        </div>
      </div>
      
      {/* Reminders Section */}
      <div 
        className="content-card rounded-3xl group animate-slide-in-fade-up delay-300 hover:transform hover:-translate-y-2 transition-all duration-500"
      >
        <div className="p-6">
          <ErrorBoundary fallback={<CardError title="Reminders" />}>
            <RemindersSection />
          </ErrorBoundary>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-primary-green to-primary-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
      
      {/* Health Overview Section */}
      <div 
        id="health"
        className="content-card rounded-3xl group animate-slide-in-fade-up delay-400 hover:transform hover:-translate-y-2 transition-all duration-500"
      >
        <div className="p-6">
          <ErrorBoundary fallback={<CardError title="Health Overview" />}>
            <HealthOverview />
          </ErrorBoundary>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-primary-blue to-primary-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </div>
  );
};

export default DashboardContent;
