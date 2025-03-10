
import React from 'react';
import { Weight, Ruler, Brain } from 'lucide-react';
import GrowthStat from './GrowthStat';

const GrowthStats = () => {
  return (
    <div className="p-6 sm:w-2/3">
      <h3 className="text-sm font-medium text-muted-foreground mb-3">Growth Stats</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <GrowthStat 
          icon={Weight} 
          iconColor="text-pink-500" 
          bgColor="bg-healthnest-soft-pink" 
          label="Weight" 
          value="8.2 kg" 
        />
        <GrowthStat 
          icon={Ruler} 
          iconColor="text-green-500" 
          bgColor="bg-healthnest-soft-green" 
          label="Height" 
          value="68 cm" 
        />
        <GrowthStat 
          icon={Brain} 
          iconColor="text-purple-500" 
          bgColor="bg-healthnest-soft-purple" 
          label="Milestone" 
          value="Crawling" 
        />
      </div>
    </div>
  );
};

export default GrowthStats;
