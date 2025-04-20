
import React, { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Baby, ChevronRight, Heart, Camera, Info, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const BabyPhotoSection = () => {
  const navigate = useNavigate();
  const [activePhoto, setActivePhoto] = useState(0);

  // Gallery images updated to be unique and subject-relevant (using available uploads & placeholders)
  const familyPhotos = [
    {
      src: "/baby-emma.jpg",
      alt: "Baby Emma"
    },
    {
      src: "/lovable-uploads/09704aa0-0bda-4497-942b-b783bd82f948.png",
      alt: "Happy family moments"
    },
    {
      src: "/lovable-uploads/40981d4d-5381-44c9-a78f-c22d7a65cdcf.png",
      alt: "Family playtime"
    },
    // Use a cat placeholder as a cute close-up for demo, since no specific baby close-up is in assets
    {
      src: "/photo-1535268647677-300dbf3d78d1.jpg",
      alt: "Baby close-up"
    },
    // Living room as "Fun times" for a family context placeholder
    {
      src: "/photo-1721322800607-8c38375eef04.jpg",
      alt: "Fun times"
    },
    // Use baby's face again as "Family portrait"
    {
      src: "/baby-emma.jpg",
      alt: "Family portrait"
    },
  ];

  return (
    <div className="animate-scale-in mb-8" id="memories">
      <div className="glass-panel p-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary-pink/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary-blue/10 rounded-full blur-lg"></div>

        {/* Enhanced header with tooltip */}
        <div className="flex justify-between items-center mb-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <h2 className="text-2xl font-semibold font-heading flex items-center gap-2 cursor-help">
                  <Heart className="h-5 w-5 text-primary-pink animate-pulse-soft" />
                  Family Memories
                  <Info className="h-4 w-4 text-muted-foreground" />
                </h2>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">Capture and cherish special moments with your baby and family</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-primary flex items-center group"
            onClick={() => navigate('/memories')}
          >
            View all <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-all duration-300" />
          </Button>
        </div>

        <div className="flex flex-col space-y-6 relative z-10">
          {/* Baby profile section */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl group">
              <AspectRatio ratio={4/3}>
                <img 
                  src="/baby-emma.jpg" 
                  alt="Baby Emma" 
                  className="object-cover w-full h-full rounded-xl transform transition-all duration-500 group-hover:scale-105"
                  onError={(e) => {
                    console.error("Failed to load baby image");
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Emma's journey</p>
                </div>
              </AspectRatio>
            </div>
            <div className="flex-1 space-y-4">
              <p className="text-muted-foreground">
                Track your baby's growth, milestones, health records, and cherish every moment with photos and memories.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg border border-primary-purple/10 relative overflow-hidden group hover:border-primary-purple/30 transition-all duration-300">
                <div className="absolute top-0 right-0 h-16 w-16 bg-primary-purple/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl group-hover:bg-primary-purple/20 transition-all duration-500"></div>
                <p className="font-medium text-sm flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary-purple animate-pulse-slow" />
                  Did you know?
                </p>
                <p className="text-sm text-muted-foreground">
                  Babies typically triple their birth weight by their first birthday.
                </p>
              </div>
              <div className="flex items-center space-x-3 mt-4 p-2 rounded-lg hover:bg-muted/20 transition-all duration-300 cursor-pointer" onClick={() => navigate('/growth')}>
                <Avatar className="h-12 w-12 border-2 border-white shadow-sm ring-2 ring-primary-pink/20 ring-offset-2 ring-offset-background">
                  <AvatarImage 
                    src="/baby-emma.jpg" 
                    alt="Baby Emma" 
                    onError={(e) => {
                      console.error("Failed to load avatar image");
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                  <AvatarFallback className="bg-primary-purple/10">
                    <Baby className="h-6 w-6 text-purple-500" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">Emma</h3>
                  <p className="text-sm text-muted-foreground">8 months old</p>
                </div>
                <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground" />
              </div>
            </div>
          </div>
          
          {/* Updated photo gallery */}
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <Camera className="h-4 w-4 mr-2 text-primary-blue" />
              Happy Family Moments
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {familyPhotos.map((photo, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer",
                    activePhoto === index && "ring-2 ring-primary-blue ring-offset-2 ring-offset-background"
                  )}
                  onClick={() => setActivePhoto(index)}
                >
                  <AspectRatio ratio={1/1}>
                    <img 
                      src={photo.src} 
                      alt={photo.alt} 
                      className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
                      onError={(e) => {
                        console.error(`Failed to load image: ${photo.src}`);
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-2">
                      <p className="text-white text-xs font-medium truncate w-full">{photo.alt}</p>
                    </div>
                    {activePhoto === index && (
                      <div className="absolute top-2 right-2 h-6 w-6 bg-primary-blue text-white rounded-full flex items-center justify-center">
                        <Heart className="h-3 w-3" fill="white" />
                      </div>
                    )}
                  </AspectRatio>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <Button 
                className="bg-primary-pink/90 hover:bg-primary-pink text-white shadow-md transition-all duration-300 hover:shadow-lg rounded-full group"
                onClick={() => navigate('/memories')}
              >
                <Camera className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                Add New Photos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabyPhotoSection;

