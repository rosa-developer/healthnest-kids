
import React from 'react';
import { ArrowRight, Heart, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden rounded-3xl mb-8">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/40 via-primary-blue/30 to-primary-pink/30 z-0"></div>
      <div className="absolute inset-0 bg-grid-white/10 z-0"></div>
      
      {/* Hero content */}
      <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Text content */}
        <div className="md:w-3/5 space-y-4 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading bg-gradient-to-r from-primary-purple via-primary-blue to-primary-pink bg-clip-text text-transparent">
            Watching Your Little Ones Grow
          </h1>
          
          <p className="text-lg text-foreground/80 max-w-lg animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Track milestones, capture memories, and celebrate every step of your child's journey with our comprehensive growth tracker.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              className="bg-gradient-to-r from-primary-green to-primary-green/80 hover:from-primary-green/90 hover:to-primary-green/70 text-white shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] rounded-full px-6 py-6"
              onClick={() => navigate('/growth')}
            >
              Start Tracking
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-primary-purple/30 hover:bg-primary-purple/10 text-primary-purple shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] rounded-full"
              onClick={() => navigate('/milestones')}
            >
              <Star className="mr-2 h-4 w-4" />
              View Milestones
            </Button>
          </div>
          
          {/* Feature badges */}
          <div className="flex flex-wrap gap-2 pt-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-purple/20 text-primary-purple">
              <Heart className="w-3 h-3 mr-1" /> Growth Tracking
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-pink/20 text-primary-pink">
              Milestone Alerts
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-blue/20 text-primary-blue">
              Photo Memories
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-green/20 text-primary-green">
              Health Records
            </span>
          </div>
        </div>
        
        {/* Illustration */}
        <div className="md:w-2/5 flex justify-center md:justify-end animate-scale-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-purple via-primary-blue to-primary-pink rounded-full blur-lg opacity-70 animate-pulse-slow"></div>
            <img 
              src="/baby-emma.jpg" 
              alt="Happy baby with family" 
              className="relative w-full max-w-sm object-cover rounded-2xl shadow-xl border-2 border-white/50 transform rotate-2"
            />
            <div className="absolute -bottom-3 -right-3 bg-white rounded-full p-2 shadow-lg border border-primary-purple/30 animate-bounce-slow">
              <Star className="h-8 w-8 text-primary-purple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
