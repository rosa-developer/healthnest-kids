
import React from 'react';
import { ArrowRight, Heart, Star, Sparkles, Baby, Camera, Trophy } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden rounded-4xl mb-8 group">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/20 via-primary-blue/15 to-primary-pink/20 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/30 z-0"></div>
      
      {/* Animated decorative elements */}
      <div className="absolute top-8 right-8 w-32 h-32 bg-primary-pink/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-8 left-8 w-40 h-40 bg-primary-blue/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-purple/15 rounded-full blur-2xl animate-float"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] z-0"></div>
      
      <div className="relative z-10 p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left Content */}
        <div className="lg:w-3/5 space-y-6 animate-fade-in">
          {/* Enhanced badge */}
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-primary-pink/20 to-primary-purple/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
              <Sparkles className="h-5 w-5 text-primary-pink animate-pulse" />
            </div>
            <span className="text-sm font-semibold text-primary-pink/90 bg-gradient-to-r from-primary-pink/10 to-primary-purple/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-pink/20">
              Baby Growth Tracker
            </span>
          </div>
          
          {/* Enhanced heading */}
          <h1 className="kid-heading leading-tight">
            Track Your Baby's
            <span className="block kid-text-gradient">Amazing Journey</span>
          </h1>
          
          {/* Enhanced description */}
          <p className="text-lg text-gray-700/90 max-w-2xl leading-relaxed">
            Document every precious milestone, capture beautiful moments, and watch your little one grow in a beautiful, organized space designed with love.
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Baby className="h-4 w-4 text-primary-pink" />
              <span>Milestone Tracking</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Camera className="h-4 w-4 text-primary-blue" />
              <span>Photo Memories</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Trophy className="h-4 w-4 text-primary-green" />
              <span>Growth Charts</span>
            </div>
          </div>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              className="kid-button-gradient group"
              onClick={() => navigate('/growth')}
            >
              <span className="flex items-center gap-2">
                Start Tracking
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              className="kid-button-outline group"
              onClick={() => navigate('/memories')}
            >
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                Create Memories
              </span>
            </Button>
          </div>
        </div>
        
        {/* Right Content - Enhanced Image Section */}
        <div className="lg:w-2/5 flex justify-center lg:justify-end animate-scale-in">
          <div className="relative w-full max-w-md">
            {/* Enhanced card with multiple layers */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-purple via-primary-blue to-primary-pink rounded-4xl blur-xl opacity-60 animate-pulse-slow"></div>
            <div className="absolute -inset-1 bg-gradient-to-br from-white/50 to-white/20 rounded-4xl blur-lg"></div>
            
            <div className="relative rounded-4xl overflow-hidden border-2 border-white/50 shadow-kid-xl bg-white/20 backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Family with baby" 
                className="w-full h-full object-cover aspect-[4/3]"
                onError={(e) => {
                  console.log("Image failed to load, using fallback");
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
              
              {/* Enhanced overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Enhanced floating elements */}
              <div className="absolute bottom-6 left-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-kid animate-heartbeat">
                  <Heart className="h-6 w-6 text-primary-pink" />
                </div>
              </div>
              
              <div className="absolute top-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-kid animate-float">
                  <Sparkles className="h-6 w-6 text-primary-blue" />
                </div>
              </div>
              
              {/* Enhanced bottom info */}
              <div className="absolute bottom-4 right-4">
                <div className="bg-gradient-to-r from-primary-green/90 to-primary-blue/90 backdrop-blur-sm rounded-2xl px-4 py-2 text-white text-sm font-semibold shadow-kid">
                  Growing Strong! 🌟
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-pink/30 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-blue/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
