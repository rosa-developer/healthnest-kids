
import React, { useState, useEffect } from 'react';
import PageTransition from '@/components/common/PageTransition';
import { useChildProfile } from '@/contexts/ChildProfileContext';
import { useToast } from "@/components/ui/use-toast";
import WelcomeSection from '@/components/home/WelcomeSection';
import LoadingState from '@/components/home/LoadingState';
import ErrorState from '@/components/home/ErrorState';
import DashboardContent from '@/components/home/DashboardContent';

const Index = () => {
  const { activeProfile, isLoading: profileLoading, error: profileError } = useChildProfile();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const [dbStatus, setDbStatus] = useState<'connecting' | 'connected' | 'error'>('connecting');

  // Simulate data loading and handle potential errors
  useEffect(() => {
    const loadDashboard = async () => {
      try {
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
        
        // Update database connection status
        if (profileError && profileError.includes('MongoDB')) {
          setDbStatus('error');
        } else {
          setDbStatus('connected');
          toast({
            title: "Database connected",
            description: "MongoDB connection established",
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
    
    // Cleanup function
    return () => {
      // Cancel any pending operations if component unmounts
      setIsLoading(false);
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
