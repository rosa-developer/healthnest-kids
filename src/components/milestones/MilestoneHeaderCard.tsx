
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
    <Card className="border border-indigo-100 dark:border-indigo-800/30 shadow-lg mb-6 rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6">
        <ChildMilestoneHeader 
          onCaptureAudio={onCaptureAudio}
          onAddRecord={onAddRecord}
        />
        
        <div className="mt-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Overall Progress</span>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{completionPercentage}%</span>
          </div>
          <Progress value={completionPercentage} className="h-2.5 bg-indigo-100 dark:bg-indigo-900/50" indicatorClassName="bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>
      </div>
      
      <CardContent className="p-6">
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
