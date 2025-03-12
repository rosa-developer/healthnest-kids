
import React, { useState, useEffect } from 'react';
import PageTransition from '@/components/common/PageTransition';
import ChildProfileCard from '@/components/home/child-profile/ChildProfileCard';
import UpcomingAppointments from '@/components/home/UpcomingAppointments';
import RecentTimeline from '@/components/home/RecentTimeline';
import HealthOverview from '@/components/home/HealthOverview';
import { useChildProfile } from '@/contexts/ChildProfileContext';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const Index = () => {
  const { activeProfile } = useChildProfile();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Simulate data loading and handle potential errors
  useEffect(() => {
    const loadDashboard = async () => {
      try {
        // Simulate API/data loading time
        await new Promise(resolve => setTimeout(resolve, 300));
        setIsLoading(false);
      } catch (err) {
        console.error("Dashboard loading error:", err);
        setError("Unable to load dashboard data. Please try again later.");
        setIsLoading(false);
      }
    };

    loadDashboard();
  }, []);

  if (error) {
    return (
      <div className="main-container pt-16 pb-20 px-4 mx-auto">
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="main-container pt-16 pb-20 px-4 mx-auto">
      <PageTransition>
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center mb-2">
            <div className="h-1.5 w-12 bg-primary rounded mr-2"></div>
            <h2 className="text-xl font-semibold tracking-tight">Dashboard</h2>
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
                <ChildProfileCard />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card-hover rounded-xl bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 shadow-soft overflow-hidden">
                    <UpcomingAppointments />
                  </div>
                  
                  <div className="card-hover rounded-xl bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 shadow-soft overflow-hidden">
                    <RecentTimeline />
                  </div>
                </div>
                
                <div className="card-hover rounded-xl bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 shadow-soft overflow-hidden">
                  <HealthOverview />
                </div>
              </>
            )}
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default Index;
