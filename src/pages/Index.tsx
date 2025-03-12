
import React, { useState, useEffect } from 'react';
import PageTransition from '@/components/common/PageTransition';
import ChildProfileCard from '@/components/home/child-profile/ChildProfileCard';
import UpcomingAppointments from '@/components/home/UpcomingAppointments';
import RecentTimeline from '@/components/home/RecentTimeline';
import HealthOverview from '@/components/home/HealthOverview';
import { useChildProfile } from '@/contexts/ChildProfileContext';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import ErrorBoundary from '@/components/common/ErrorBoundary';

const Index = () => {
  const { activeProfile } = useChildProfile();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

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
        
        setIsLoading(false);
      } catch (err) {
        console.error("Dashboard loading error:", err);
        setError("Unable to load dashboard data. Please try again later.");
        setIsLoading(false);
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
  }, [activeProfile, toast]);

  const handleRetry = () => {
    setError(null);
    setIsLoading(true);
    // Force re-run of the effect
    const timer = setTimeout(() => {
      window.location.reload();
    }, 300);
    return () => clearTimeout(timer);
  };

  if (error) {
    return (
      <div className="main-container pt-16 pb-20 px-4 mx-auto">
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
        <button 
          onClick={handleRetry}
          className="btn-primary mt-4 mx-auto block"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="main-container pt-16 pb-20 px-4 mx-auto">
      <PageTransition>
        <div className="space-y-6 animate-fade-in">
          <div className="section-title">
            <div className="section-title-bar"></div>
            <h2 className="section-title-text">Dashboard</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {isLoading ? (
              <div className="animate-pulse space-y-6">
                <div className="h-40 bg-muted rounded-xl"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="h-32 bg-muted rounded-xl"></div>
                  <div className="h-32 bg-muted rounded-xl"></div>
                </div>
                <div className="h-64 bg-muted rounded-xl"></div>
              </div>
            ) : (
              <>
                <div className="animate-scale-in">
                  <ChildProfileCard />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="content-card card-hover card-expand animate-slide-up overflow-hidden">
                    <ErrorBoundary fallback={<CardError title="Appointments" />}>
                      <UpcomingAppointments />
                    </ErrorBoundary>
                  </div>
                  
                  <div className="content-card card-hover card-expand animate-slide-up overflow-hidden" style={{animationDelay: "0.1s"}}>
                    <ErrorBoundary fallback={<CardError title="Timeline" />}>
                      <RecentTimeline />
                    </ErrorBoundary>
                  </div>
                </div>
                
                <div className="content-card card-hover card-expand animate-slide-up" style={{animationDelay: "0.2s"}}>
                  <ErrorBoundary fallback={<CardError title="Health Overview" />}>
                    <HealthOverview />
                  </ErrorBoundary>
                </div>
              </>
            )}
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

// Fallback component for card errors
const CardError = ({ title }: { title: string }) => (
  <div className="p-5 text-center">
    <h3 className="font-medium text-lg">{title}</h3>
    <p className="text-muted-foreground text-sm mt-2">
      Unable to load content. Please try refreshing.
    </p>
  </div>
);

export default Index;
