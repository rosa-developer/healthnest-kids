
import React from 'react';
import DatabaseStatus from './DatabaseStatus';

interface WelcomeSectionProps {
  dbStatus: 'connecting' | 'connected' | 'error';
}

const WelcomeSection = ({ dbStatus }: WelcomeSectionProps) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="relative">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Welcome Back
        </h1>
        <p className="mt-2 text-muted-foreground">
          Track your child's health journey and milestones
        </p>
        
        <DatabaseStatus status={dbStatus} />
      </div>
    </div>
  );
};

export default WelcomeSection;
