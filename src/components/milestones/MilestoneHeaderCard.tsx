
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ChildMilestoneHeader from '@/components/milestones/ChildMilestoneHeader';
import CategorySelector from '@/components/milestones/CategorySelector';
import { MilestoneCategory } from '@/types/milestone';
import MilestoneRecorder from './MilestoneRecorder';
import { Progress } from "@/components/ui/progress";

interface MilestoneHeaderCardProps {
  categories: MilestoneCategory[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  getCompletedCount: (categoryId: string) => number;
  getTotalCount: (categoryId: string) => number;
  onCaptureAudio: () => void;
  onAddRecord: () => void;
  showRecorder: boolean;
  onHideRecorder: () => void;
}

const MilestoneHeaderCard: React.FC<MilestoneHeaderCardProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  getCompletedCount,
  getTotalCount,
  onCaptureAudio,
  onAddRecord,
  showRecorder,
  onHideRecorder
}) => {
  const totalCompleted = getCompletedCount('all');
  const totalMilestones = getTotalCount('all');
  const completionPercentage = totalMilestones > 0 ? Math.round((totalCompleted / totalMilestones) * 100) : 0;

  return (
    <Card className="border border-border shadow-md mb-6 rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-100 to-violet-100 dark:from-indigo-950/40 dark:to-violet-950/40 p-4">
        <ChildMilestoneHeader 
          onCaptureAudio={onCaptureAudio}
          onAddRecord={onAddRecord}
        />
        
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-sm font-medium">{completionPercentage}%</span>
          </div>
          <Progress value={completionPercentage} className="h-2" />
        </div>
      </div>
      
      <CardContent className="p-4 pt-5">
        <CategorySelector 
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={onSelectCategory}
          getCompletedCount={getCompletedCount}
          getTotalCount={getTotalCount}
        />
        
        <MilestoneRecorder
          showRecorder={showRecorder}
          onHideRecorder={onHideRecorder}
        />
      </CardContent>
    </Card>
  );
};

export default MilestoneHeaderCard;
