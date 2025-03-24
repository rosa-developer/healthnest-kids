
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Baby } from 'lucide-react';

const BabyPhotoSection = () => {
  return (
    <div className="animate-scale-in mb-8">
      <div className="glass-panel p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Baby</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-md">
            <AspectRatio ratio={4/3}>
              <img 
                src="/1.jpg" 
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
                <AvatarImage src="/1.jpg" alt="Baby Emma" />
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
      </div>
    </div>
  );
};

export default BabyPhotoSection;
