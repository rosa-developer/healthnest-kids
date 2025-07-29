import React from 'react';
import { useChildProfile } from '@/contexts/ChildProfileContext';
import WelcomeSection from '@/components/home/WelcomeSection';
import LoadingState from '@/components/home/LoadingState';
import ErrorState from '@/components/home/ErrorState';
import DashboardContent from '@/components/home/DashboardContent';
import HeroSection from '@/components/home/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import ConnectionStatusBadge from '@/components/common/ConnectionStatusBadge';

const Index = () => {
  const { activeProfile, isLoading: profileLoading, error: profileError } = useChildProfile();

  if (profileError) {
    return <ErrorState error={profileError} />;
  }

  return (
    <div className="main-container">
      <div className="space-y-12 animate-fade-in">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Connection Status Badge */}
        <div className="fixed top-16 right-4 z-50">
          <ConnectionStatusBadge />
        </div>
        
        {/* Welcome Section */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-purple/20 via-primary-pink/10 to-primary-blue/20"></div>
          <Card className="border-none bg-transparent shadow-none relative z-10">
            <CardContent className="p-8 backdrop-blur-sm">
              <WelcomeSection dbStatus="connected" />
            </CardContent>
          </Card>
        </div>

        {profileLoading ? (
          <LoadingState />
        ) : (
          <DashboardContent />
        )}
      </div>
    </div>
  );
};

export default Index;