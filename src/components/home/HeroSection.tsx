
import React from 'react';
import { ArrowRight, Heart, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden rounded-3xl mb-8 bg-gradient-to-r from-primary-purple/10 to-primary-blue/10 group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/40 via-primary-blue/30 to-primary-pink/30 z-0 transition-all duration-500 group-hover:opacity-80"></div>
      <div className="absolute inset-0 bg-grid-white/10 z-0"></div>
      
      <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="md:w-3/5 space-y-5 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-purple via-primary-blue to-primary-pink bg-clip-text text-transparent">
            Track Your Baby's Journey
          </h1>
          
          <p className="text-lg text-foreground/80 max-w-lg">
            Document every precious milestone, capture beautiful moments, and watch your little one grow.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Button 
              className="bg-gradient-to-r from-primary-green to-primary-green/80 hover:from-primary-green/90 hover:to-primary-green/70 text-white shadow-md transition-all duration-500 hover:shadow-lg hover:translate-y-[-2px] rounded-full px-6 group"
              onClick={() => navigate('/growth')}
            >
              Start Tracking
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-primary-purple/30 hover:bg-primary-purple/10 text-primary-purple shadow-sm transition-all duration-500 hover:shadow-md hover:translate-y-[-2px] rounded-full"
              onClick={() => navigate('/memories')}
            >
              <Star className="mr-2 h-4 w-4" />
              Create Memories
            </Button>
          </div>
        </div>
        
        <div className="md:w-2/5 flex justify-center md:justify-end animate-scale-in">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-purple via-primary-blue to-primary-pink rounded-3xl blur-lg opacity-70"></div>
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/50 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498036882173-b4e08b3128c9"
                alt="Baby Growth Journey" 
                className="w-full h-full object-cover aspect-[4/3]"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <div className="bg-white/90 rounded-full p-2 shadow-lg animate-bounce-slow">
                  <Heart className="h-5 w-5 text-primary-pink" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
