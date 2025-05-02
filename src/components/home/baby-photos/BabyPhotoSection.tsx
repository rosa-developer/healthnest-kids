
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import BabyProfileCard from './BabyProfileCard';
import FamilyPhotoGrid from './FamilyPhotoGrid';
import FeaturedBabyMoments from './FeaturedBabyMoments';
import BabyInfoBox from './BabyInfoBox';

const BabyPhotoSection = () => {
  const { toast } = useToast();

  return (
    <div className="animate-scale-in mb-8" id="memories">
      <div className="glass-panel p-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary-pink/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary-blue/10 rounded-full blur-lg"></div>

        <BabyInfoBox />
        
        <div className="flex flex-col space-y-6 relative z-10">
          {/* Baby profile section */}
          <div className="flex flex-col md:flex-row gap-6">
            <BabyProfileCard />
          </div>
          
          {/* Featured baby photos */}
          <FeaturedBabyMoments />
          
          {/* Updated photo gallery */}
          <FamilyPhotoGrid />
        </div>
      </div>
    </div>
  );
};

export default BabyPhotoSection;
