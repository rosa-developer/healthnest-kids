
import React, { useState, useEffect } from 'react';
import PageTransition from '@/components/common/PageTransition';
import { useChildProfile } from '@/contexts/ChildProfileContext';
import { useToast } from "@/hooks/use-toast";
import WelcomeSection from '@/components/home/WelcomeSection';
import LoadingState from '@/components/home/LoadingState';
import ErrorState from '@/components/home/ErrorState';
import DashboardContent from '@/components/home/DashboardContent';
import { getConnectionStatus } from '@/lib/firebase';

const Index = () => {
  const { activeProfile, isLoading: profileLoading, error: profileError } = useChildProfile();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const [dbStatus, setDbStatus] = useState<'connecting' | 'connected' | 'error'>(getConnectionStatus());

  // Monitor Firebase connection status and profile loading
  useEffect(() => {
    const loadDashboard = async () => {
      try {
        // Check Firebase connection
        const connectionStatus = getConnectionStatus();
        setDbStatus(connectionStatus);
        
        // Simulate API/data loading time
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Check if profile is available
        if (!activeProfile || !activeProfile.id) {
          console.warn("No active profile found");
          toast({
            title: "Profile loaded",
            description: "Using default profile data",
            duration: 3000,
          });
        }
        
        // Update database connection status based on Firebase status
        if (connectionStatus === 'error') {
          toast({
            variant: "destructive",
            title: "Database Error",
            description: "Using fallback data - changes won't be saved",
            duration: 5000,
          });
        } else if (connectionStatus === 'connected') {
          toast({
            title: "Database connected",
            description: "Firebase connection established",
            duration: 3000,
          });
        }
        
        setIsLoading(false);
      } catch (err) {
        console.error("Dashboard loading error:", err);
        setError("Unable to load dashboard data. Please try again later.");
        setIsLoading(false);
        setDbStatus('error');
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load dashboard. Please try again.",
          duration: 5000,
        });
      }
    };

    loadDashboard();
    
    const checkConnectionInterval = setInterval(() => {
      const currentStatus = getConnectionStatus();
      if (currentStatus !== dbStatus) {
        setDbStatus(currentStatus);
      }
    }, 5000);
    
    // Cleanup function
    return () => {
      clearInterval(checkConnectionInterval);
    };
  }, [activeProfile, toast, profileError]);

  const handleRetry = () => {
    setError(null);
    setIsLoading(true);
    setDbStatus('connecting');
    // Force re-run of the effect
    const timer = setTimeout(() => {
      window.location.reload();
    }, 300);
    return () => clearTimeout(timer);
  };

  if (error) {
    return <ErrorState error={error} onRetry={handleRetry} />;
  }

  return (
    <div className="main-container">
      <PageTransition>
        <div className="space-y-8 animate-fade-in">
          {/* Welcome Section */}
          <WelcomeSection dbStatus={dbStatus} />

          {isLoading || profileLoading ? (
            <LoadingState />
          ) : (
            <DashboardContent />
          )}
        </div>
      </PageTransition>
    </div>
  );
};

export default Index;
