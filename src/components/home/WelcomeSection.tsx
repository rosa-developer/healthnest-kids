
import React from 'react';
import { CalendarClock, Heart, LineChart, Star, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useChildProfile } from '@/contexts/ChildProfileContext';
import DatabaseStatus from './DatabaseStatus';
import { Badge } from "@/components/ui/badge";

interface WelcomeSectionProps {
  dbStatus: 'connecting' | 'connected' | 'error';
}

const WelcomeSection = ({ dbStatus }: WelcomeSectionProps) => {
  const { activeProfile } = useChildProfile();
  const childName = activeProfile?.name || 'your child';
  
  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary-purple via-primary-pink to-primary-purple bg-clip-text text-transparent animate-fade-in">
              Welcome Back
            </h1>
            {dbStatus === 'error' && (
              <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/30">
                <Cloud className="h-3 w-3 mr-1" />
                Offline
              </Badge>
            )}
          </div>
          
          <p className="text-lg text-foreground/80 max-w-lg animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Track {childName}'s growth journey, milestones, and create lasting memories all in one place.
          </p>
          
          <div className="flex flex-wrap items-center gap-3 mt-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button className="bg-gradient-to-r from-primary-green to-primary-green/80 hover:from-primary-green/90 hover:to-primary-green/70 text-white shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
              <LineChart className="mr-2 h-4 w-4" />
              Track Growth
            </Button>
            <Button variant="outline" className="border-primary-pink/30 hover:bg-primary-pink/10 text-primary-pink shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
              <Heart className="mr-2 h-4 w-4" />
              Record Milestone
            </Button>
            <Button variant="outline" className="border-primary-purple/30 hover:bg-primary-purple/10 text-primary-purple shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
              <Star className="mr-2 h-4 w-4" />
              New Memory
            </Button>
          </div>
          
          <DatabaseStatus status={dbStatus} />
        </div>
        
        <div className="flex-shrink-0 animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-4 bg-gradient-to-br from-white/90 to-primary-yellow/40 dark:from-black/40 dark:to-primary-orange/10 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-primary-orange/20 dark:border-white/5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CalendarClock className="h-12 w-12 text-primary-orange animate-pulse-soft" />
            <div>
              <h3 className="font-medium text-primary-orange text-lg">Next Check-up</h3>
              <p className="text-muted-foreground">
                {activeProfile?.nextCheckup || 'No upcoming appointments'}
              </p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="mt-2 text-primary-orange/80 hover:text-primary-orange p-0 h-auto"
              >
                Schedule Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
