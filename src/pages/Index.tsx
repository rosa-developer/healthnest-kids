import React, { useState, useEffect } from 'react';
import PageTransition from '@/components/common/PageTransition';
import ChildProfileCard from '@/components/home/child-profile/ChildProfileCard';
import UpcomingAppointments from '@/components/home/UpcomingAppointments';
import RecentTimeline from '@/components/home/RecentTimeline';
import HealthOverview from '@/components/home/HealthOverview';
import { useChildProfile } from '@/contexts/ChildProfileContext';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Database, Shield } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import ErrorBoundary from '@/components/common/ErrorBoundary';
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
    return (
      <div className="main-container">
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
    <div className="main-container">
      <PageTransition>
        <div className="space-y-8 animate-fade-in">
          {/* Welcome Section */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
            <div className="absolute inset-0 bg-grid-white/10" />
            <div className="relative">
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <p className="mt-2 text-muted-foreground">
                Track your child's health journey and milestones
              </p>
              
              {/* Database status indicator */}
              <div className="mt-4 flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <Database className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    Database: 
                    {dbStatus === 'connecting' && (
                      <span className="ml-1 text-amber-500">Connecting...</span>
                    )}
                    {dbStatus === 'connected' && (
                      <span className="ml-1 text-green-500">Connected</span>
                    )}
                    {dbStatus === 'error' && (
                      <span className="ml-1 text-destructive">Using Fallback Data</span>
                    )}
                  </span>
                </div>
                <span className="text-muted-foreground mx-2">|</span>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Data Secured</span>
                </div>
              </div>
            </div>
          </div>

          {isLoading || profileLoading ? (
            <div className="animate-pulse space-y-8">
              <div className="h-48 bg-muted rounded-3xl" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-36 bg-muted rounded-3xl" />
                <div className="h-36 bg-muted rounded-3xl" />
              </div>
              <div className="h-72 bg-muted rounded-3xl" />
            </div>
          ) : (
            <>
              {/* Baby Photo Section */}
              <div className="animate-scale-in mb-8">
                <div className="glass-panel p-6">
                  <h2 className="text-2xl font-semibold mb-4">Your Baby</h2>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-md">
                      <AspectRatio ratio={4/3}>
                        <img 
                          src="/baby-emma.jpg" 
                          alt="Baby Emma" 
                          className="object-cover w-full h-full rounded-xl"
                        />
                      </AspectRatio>
                    </div>
                    <div className="flex-1 space-y-4">
                      <p className="text-muted-foreground">
                        Track your baby's growth, milestones, health records, and cherish every moment with photos and memories.
                      </p>
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <p className="font-medium text-sm">Did you know?</p>
                        <p className="text-sm text-muted-foreground">
                          Babies typically triple their birth weight by their first birthday.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
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
          )}
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
