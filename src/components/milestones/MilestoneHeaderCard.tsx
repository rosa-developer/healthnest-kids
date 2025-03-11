
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ChildMilestoneHeader from '@/components/milestones/ChildMilestoneHeader';
import CategorySelector from '@/components/milestones/CategorySelector';
import { MilestoneCategory } from '@/types/milestone';
import MilestoneRecorder from './MilestoneRecorder';

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
  return (
    <Card className="border border-border shadow-soft mb-6">
      <CardContent className="p-6">
        <ChildMilestoneHeader 
          onCaptureAudio={onCaptureAudio}
          onAddRecord={onAddRecord}
        />
        
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
