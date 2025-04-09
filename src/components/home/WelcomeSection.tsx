
import React from 'react';
import DatabaseStatus from './DatabaseStatus';
import { useChildProfile } from '@/contexts/ChildProfileContext';
import { CalendarClock, Heart, LineChart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-lg text-foreground/80 max-w-lg">
            Track {childName}'s growth journey, milestones, and create lasting memories all in one place.
          </p>
          
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <Button className="bg-primary-green hover:bg-primary-green/90 text-white shadow-md transition-all duration-300 hover:translate-y-[-2px]">
              <LineChart className="mr-2 h-4 w-4" />
              Track Growth
            </Button>
            <Button variant="outline" className="border-primary-pink/30 hover:bg-primary-pink/10 text-primary-pink shadow-sm transition-all duration-300 hover:translate-y-[-2px]">
              <Heart className="mr-2 h-4 w-4" />
              Record Milestone
            </Button>
            <Button variant="outline" className="border-primary-purple/30 hover:bg-primary-purple/10 text-primary-purple shadow-sm transition-all duration-300 hover:translate-y-[-2px]">
              <Star className="mr-2 h-4 w-4" />
              New Memory
            </Button>
          </div>
          
          <DatabaseStatus status={dbStatus} />
        </div>
        
        <div className="flex-shrink-0">
          <div className="flex items-center gap-4 bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-primary-orange/30 dark:border-white/10 bg-gradient-to-br from-white to-primary-yellow/20 hover:shadow-xl transition-all duration-300">
            <CalendarClock className="h-12 w-12 text-primary-orange" />
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
