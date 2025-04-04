
import React, { useState, useEffect } from 'react';
import PageTransition from '@/components/common/PageTransition';
import { useChildProfile } from '@/contexts/ChildProfileContext';
import { useToast } from "@/hooks/use-toast";
import WelcomeSection from '@/components/home/WelcomeSection';
import LoadingState from '@/components/home/LoadingState';
import ErrorState from '@/components/home/ErrorState';
import DashboardContent from '@/components/home/DashboardContent';
import { getConnectionStatus } from '@/lib/firebase';
import { useBabyGrowthAdvice } from '@/hooks/useWordPress';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const { activeProfile, isLoading: profileLoading, error: profileError } = useChildProfile();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const [dbStatus, setDbStatus] = useState<'connecting' | 'connected' | 'error'>(getConnectionStatus());
  const { advice } = useBabyGrowthAdvice();

  // Monitor Firebase connection status and profile loading
  useEffect(() => {
    const loadDashboard = async () => {
      try {
        // Check Firebase connection
        const connectionStatus = getConnectionStatus();
        setDbStatus(connectionStatus);
        
        // Simulate API/data loading time
        await new Promise(resolve => setTimeout(resolve, 400));
        
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
    <div className="main-container bg-gradient-to-b from-background to-muted/20">
      <PageTransition>
        <div className="space-y-8 animate-fade-in">
          {/* Welcome Hero Section with glass morphism */}
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 z-0"></div>
            <div className="absolute inset-0 bg-grid-white/10 z-0"></div>
            <Card className="border-none bg-transparent shadow-none">
              <CardContent className="p-8 relative z-10">
                <WelcomeSection dbStatus={dbStatus} />
              </CardContent>
            </Card>
          </div>

          {isLoading || profileLoading ? (
            <LoadingState />
          ) : (
            <DashboardContent />
          )}

          {/* Featured Advice Section */}
          {advice && advice.length > 0 && (
            <div className="mt-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">Expert Growth Tips</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {advice.slice(0, 2).map((post) => (
                      <div key={post.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                        <div className="p-5">
                          <h3 className="font-medium text-lg mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                          <div className="text-sm text-muted-foreground line-clamp-3" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                          <a 
                            href={post.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-3 text-primary hover:text-primary/80 text-sm font-medium"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </PageTransition>
    </div>
  );
};

export default Index;
