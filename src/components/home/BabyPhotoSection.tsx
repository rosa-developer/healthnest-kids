
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const BabyPhotoSection = () => {
  return (
    <div className="animate-scale-in mb-8">
      <div className="glass-panel p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Baby</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-md">
            <AspectRatio ratio={4/3}>
              <img 
                src="/baby-emma.jpg" 
                alt="Baby Emma" 
                className="object-cover w-full h-full rounded-xl"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabyPhotoSection;
