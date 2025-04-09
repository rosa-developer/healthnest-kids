
import React from 'react';
import { ArrowRight, Heart, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl mb-8 transition-all duration-500 hover:shadow-xl group">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/40 via-primary-blue/30 to-primary-pink/30 z-0 transition-all duration-500 group-hover:opacity-80"></div>
      <div className="absolute inset-0 bg-grid-white/10 z-0"></div>
      
      {/* Hero content */}
      <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Text content */}
        <div className="md:w-3/5 space-y-5 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading bg-gradient-to-r from-primary-purple via-primary-blue to-primary-pink bg-clip-text text-transparent">
            Watching Your Little Ones Grow
          </h1>
          
          <p className="text-lg text-foreground/80 max-w-lg animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Track milestones, capture memories, and celebrate every step of your child's journey with our comprehensive growth tracker.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              className="bg-gradient-to-r from-primary-green to-primary-green/80 hover:from-primary-green/90 hover:to-primary-green/70 text-white shadow-md transition-all duration-500 hover:shadow-lg hover:translate-y-[-2px] rounded-full px-6 py-6 group"
              onClick={() => scrollToSection('health')}
            >
              Start Tracking
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-primary-purple/30 hover:bg-primary-purple/10 text-primary-purple shadow-sm transition-all duration-500 hover:shadow-md hover:translate-y-[-2px] rounded-full group"
              onClick={() => navigate('/milestones')}
            >
              <Star className="mr-2 h-4 w-4 group-hover:rotate-45 transition-transform duration-300" />
              <span className="relative inline-block">
                View Milestones
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-purple group-hover:w-full transition-all duration-300"></span>
              </span>
            </Button>
          </div>
          
          {/* Feature badges */}
          <div className="flex flex-wrap gap-2 pt-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-purple/20 text-primary-purple transition-all hover:bg-primary-purple/30 hover:shadow-md cursor-pointer">
              <Heart className="w-3 h-3 mr-1" /> Growth Tracking
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-pink/20 text-primary-pink transition-all hover:bg-primary-pink/30 hover:shadow-md cursor-pointer">
              Milestone Alerts
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-blue/20 text-primary-blue transition-all hover:bg-primary-blue/30 hover:shadow-md cursor-pointer">
              Photo Memories
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-green/20 text-primary-green transition-all hover:bg-primary-green/30 hover:shadow-md cursor-pointer">
              Health Records
            </span>
          </div>
        </div>
        
        {/* Illustration - Updated with a family image */}
        <div className="md:w-2/5 flex justify-center md:justify-end animate-scale-in group" style={{ animationDelay: "0.4s" }}>
          <div className="relative transition-all duration-500 group-hover:scale-105">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-purple via-primary-blue to-primary-pink rounded-full blur-lg opacity-70 animate-pulse-slow"></div>
            <img 
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=1000" 
              alt="Happy family with baby" 
              className="relative w-full max-w-sm object-cover rounded-2xl shadow-xl border-2 border-white/50 transform rotate-2 transition-all duration-500 group-hover:rotate-0 group-hover:shadow-2xl"
              onError={(e) => {
                console.error("Failed to load family image");
                e.currentTarget.src = "/baby-emma.jpg";
              }}
            />
            <div className="absolute -bottom-3 -right-3 bg-white rounded-full p-2 shadow-lg border border-primary-purple/30 animate-bounce-slow group-hover:animate-swing transition-all duration-300">
              <Star className="h-8 w-8 text-primary-purple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
