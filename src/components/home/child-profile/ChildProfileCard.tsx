
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ChildProfileHeader from './ChildProfileHeader';
import ChildProfileInfo from './ChildProfileInfo';
import GrowthStats from '../growth-stats/GrowthStats';
import { useChildProfile } from '../../../contexts/ChildProfileContext';

const ChildProfileCard = () => {
  const { activeProfile } = useChildProfile();
  
  // Log to verify component is rendering with correct data
  console.log("ChildProfileCard rendering with:", activeProfile);
  
  return (
    <div className="mb-6 animate-fade-in">
      <ChildProfileHeader />

      <Card className="border border-border shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300">
        <CardContent className="p-0">
          <div className="flex flex-col sm:flex-row">
            <ChildProfileInfo />
            <GrowthStats />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChildProfileCard;
