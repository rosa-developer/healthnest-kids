
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Baby, ChevronRight, Sparkles } from 'lucide-react';

const BabyProfileCard = () => {
  const navigate = useNavigate();
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    console.log(`Image failed to load, using fallback: ${fallbackSrc}`);
    e.currentTarget.src = fallbackSrc;
  };
  
  return (
    <>
      <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl group">
        <AspectRatio ratio={4/3}>
          <img 
            src="/baby-emma.jpg" 
            alt="Baby Emma" 
            className="object-cover w-full h-full rounded-xl transform transition-all duration-500 group-hover:scale-105"
            onError={(e) => handleImageError(e, "/placeholder.svg")}
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
              onError={(e) => handleImageError(e, "/placeholder.svg")}
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
    </>
  );
};

export default BabyProfileCard;
