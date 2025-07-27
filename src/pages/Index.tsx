
import React from 'react';
import PageTransition from '@/components/common/PageTransition';
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
    <div className="space-y-8 animate-fade-in">
      {/* Enhanced Hero Section */}
      <HeroSection />
      
      {/* Connection Status Badge with better positioning */}
      <div className="fixed top-4 right-4 z-50">
        <ConnectionStatusBadge />
      </div>
      
      {/* Enhanced Welcome Section with improved glassmorphism */}
      <div className="relative rounded-4xl overflow-hidden group kid-hover-lift">
        {/* Enhanced background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/10 via-primary-blue/5 to-primary-pink/10 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 z-0"></div>
        
        {/* Animated decorative elements */}
        <div className="absolute top-6 right-6 w-24 h-24 bg-primary-purple/10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-6 left-6 w-32 h-32 bg-primary-blue/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] z-0"></div>
        
        <Card className="border-none bg-transparent shadow-none">
          <CardContent className="p-8 md:p-12 relative z-10">
            <WelcomeSection dbStatus="connected" />
          </CardContent>
        </Card>
      </div>

      {/* Enhanced loading and content states */}
      {profileLoading ? (
        <div className="kid-loading">
          <LoadingState />
        </div>
      ) : (
        <div className="space-y-8">
          <DashboardContent />
        </div>
      )}
      
      {/* Enhanced decorative footer */}
      <div className="relative h-32 overflow-hidden rounded-4xl">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-purple/5 via-primary-blue/5 to-primary-pink/5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-purple/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-primary-blue/20 rounded-full blur-lg animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-primary-pink/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-sm text-gray-500 font-medium">
              Made with ❤️ for growing families
            </div>
            <div className="text-xs text-gray-400 mt-1">
              HealthNest Kids - Your Baby's Digital Memory Book
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
