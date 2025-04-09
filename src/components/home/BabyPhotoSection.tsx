
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Baby, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const BabyPhotoSection = () => {
  const navigate = useNavigate();
  
  // Family photos array - you can add more images to this array
  const familyPhotos = [
    { src: "/baby-emma.jpg", alt: "Baby Emma" },
    { src: "https://images.unsplash.com/photo-1603710673131-a49917c03b6f?q=80&w=1000", alt: "Happy family outdoors" },
    { src: "https://images.unsplash.com/photo-1535572290543-960a8046f5af?q=80&w=1000", alt: "Parents with baby" },
  ];

  return (
    <div className="animate-scale-in mb-8" id="memories">
      <div className="glass-panel p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Family Memories</h2>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-primary flex items-center"
            onClick={() => navigate('/memories')}
          >
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        
        <div className="flex flex-col space-y-6">
          {/* Baby profile section */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
              <AspectRatio ratio={4/3}>
                <img 
                  src="/baby-emma.jpg" 
                  alt="Baby Emma" 
                  className="object-cover w-full h-full rounded-xl"
                  onError={(e) => {
                    console.error("Failed to load baby image");
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </AspectRatio>
            </div>
            <div className="flex-1 space-y-4">
              <p className="text-muted-foreground">
                Track your baby's growth, milestones, health records, and cherish every moment with photos and memories.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="font-medium text-sm">Did you know?</p>
                <p className="text-sm text-muted-foreground">
                  Babies typically triple their birth weight by their first birthday.
                </p>
              </div>
              <div className="flex items-center space-x-3 mt-4">
                <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                  <AvatarImage 
                    src="/baby-emma.jpg" 
                    alt="Baby Emma" 
                    onError={(e) => {
                      console.error("Failed to load avatar image");
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                  <AvatarFallback>
                    <Baby className="h-6 w-6 text-purple-500" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">Emma</h3>
                  <p className="text-sm text-muted-foreground">8 months old</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Family photos gallery */}
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4">Happy Family Moments</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {familyPhotos.map((photo, index) => (
                <div 
                  key={index} 
                  className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <AspectRatio ratio={4/3}>
                    <img 
                      src={photo.src} 
                      alt={photo.alt} 
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        console.error(`Failed to load image: ${photo.src}`);
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  </AspectRatio>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabyPhotoSection;
