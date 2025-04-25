
import React from 'react';
import { Weight, Ruler, CircleRuler } from 'lucide-react';
import { GrowthRecord } from '@/types/GrowthRecord';
import GrowthStatCard from './GrowthStatCard';
import { Progress } from "@/components/ui/progress";

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
    
  const currentHeadSize = records.length > 0 ? records[0].headCircumference : null;
  const previousHeadSize = records.length > 1 ? records[1].headCircumference : null;
  const headSizeChange = (currentHeadSize && previousHeadSize) 
    ? (currentHeadSize - previousHeadSize).toFixed(1) 
    : null;

  // Calculate percentage for progress bars (based on average growth for 8-month-old babies)
  const weightPercentile = currentWeight ? Math.min(100, (currentWeight / 9) * 100) : 0;
  const heightPercentile = currentHeight ? Math.min(100, (currentHeight / 75) * 100) : 0;
  const headPercentile = currentHeadSize ? Math.min(100, (currentHeadSize / 45) * 100) : 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <GrowthStatCard 
        title="Weight"
        icon={<Weight className="h-6 w-6 text-white" />}
        currentValue={currentWeight ? `${currentWeight} kg` : "N/A"}
        change={weightChange ? `${weightChange.startsWith('-') ? '' : '+'}${weightChange} kg` : "N/A"}
        percentage={weightPercentile}
        colorClass="from-blue-500 to-blue-400"
        bgColorClass="from-blue-100 to-blue-50"
        iconBgClass="from-blue-500 to-blue-400"
      />

      <GrowthStatCard 
        title="Height"
        icon={<Ruler className="h-6 w-6 text-white" />}
        currentValue={currentHeight ? `${currentHeight} cm` : "N/A"}
        change={heightChange ? `${heightChange.startsWith('-') ? '' : '+'}${heightChange} cm` : "N/A"}
        percentage={heightPercentile}
        colorClass="from-emerald-500 to-green-400"
        bgColorClass="from-emerald-100 to-green-50"
        iconBgClass="from-emerald-500 to-green-400"
      />

      <GrowthStatCard 
        title="Head Circumference"
        icon={<CircleRuler className="h-6 w-6 text-white" />}
        currentValue={currentHeadSize ? `${currentHeadSize} cm` : "N/A"}
        change={headSizeChange ? `${headSizeChange.startsWith('-') ? '' : '+'}${headSizeChange} cm` : "N/A"}
        percentage={headPercentile}
        colorClass="from-purple-500 to-purple-400"
        bgColorClass="from-purple-100 to-purple-50"
        iconBgClass="from-purple-500 to-purple-400"
      />
    </div>
  );
};

export default GrowthStats;
