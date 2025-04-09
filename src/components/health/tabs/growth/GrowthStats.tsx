
import React from 'react';
import { Weight, Ruler } from 'lucide-react';
import { GrowthRecord } from '@/types/GrowthRecord';
import GrowthStatCard from './GrowthStatCard';

interface GrowthStatsProps {
  records: GrowthRecord[];
}

const GrowthStats: React.FC<GrowthStatsProps> = ({ records }) => {
  // Calculate current values and changes
  const currentWeight = records.length > 0 ? records[0].weight : null;
  const previousWeight = records.length > 1 ? records[1].weight : null;
  const weightChange = (currentWeight && previousWeight) 
    ? (currentWeight - previousWeight).toFixed(1) 
    : null;
  
  const currentHeight = records.length > 0 ? records[0].height : null;
  const previousHeight = records.length > 1 ? records[1].height : null;
  const heightChange = (currentHeight && previousHeight) 
    ? (currentHeight - previousHeight).toFixed(1) 
    : null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <GrowthStatCard 
        title="Weight"
        icon={<Weight className="h-6 w-6 text-white" />}
        currentValue={currentWeight ? `${currentWeight} kg` : "N/A"}
        change={weightChange ? `${weightChange.startsWith('-') ? '' : '+'}${weightChange} kg` : "N/A"}
        percentage={75}
        colorClass="from-blue-500 to-blue-400"
        bgColorClass="from-blue-100 to-blue-50"
        iconBgClass="from-blue-500 to-blue-400"
      />

      <GrowthStatCard 
        title="Height"
        icon={<Ruler className="h-6 w-6 text-white" />}
        currentValue={currentHeight ? `${currentHeight} cm` : "N/A"}
        change={heightChange ? `${heightChange.startsWith('-') ? '' : '+'}${heightChange} cm` : "N/A"}
        percentage={80}
        colorClass="from-emerald-500 to-green-400"
        bgColorClass="from-emerald-100 to-green-50"
        iconBgClass="from-emerald-500 to-green-400"
      />
    </div>
  );
};

export default GrowthStats;
