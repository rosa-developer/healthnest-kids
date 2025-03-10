
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, FilePlus, Check } from 'lucide-react';
import { Milestone, MilestoneCategory } from '@/types/milestone';
import MilestoneItem from './MilestoneItem';

interface UpcomingMilestonesProps {
  activeCategory: string;
  filteredMilestones: Milestone[];
  selectedMilestoneId: string | null;
  milestoneNote: string;
  onToggleMilestone: (id: string) => void;
  onEditNotes: (id: string) => void;
  onChangeMilestoneNote: (note: string) => void;
  onSaveNotes: () => void;
  onAddRecord: () => void;
  categories: MilestoneCategory[];
}

const UpcomingMilestones: React.FC<UpcomingMilestonesProps> = ({
  activeCategory,
  filteredMilestones,
  selectedMilestoneId,
  milestoneNote,
  onToggleMilestone,
  onEditNotes,
  onChangeMilestoneNote,
  onSaveNotes,
  onAddRecord,
  categories
}) => {
  const upcomingMilestones = filteredMilestones.filter(m => !m.completed);
  const activeCategName = categories.find(c => c.id === activeCategory)?.name || '';
  
  return (
    <Card className="border border-border shadow-soft">
      <CardHeader className="pb-2 flex justify-between items-center">
        <CardTitle className="text-lg flex items-center">
          <Brain className="h-5 w-5 mr-2 text-healthnest-primary" />
          {activeCategName} Milestones
        </CardTitle>
        <Button 
          variant="outline" 
          size="sm"
          className="text-healthnest-primary"
          onClick={onAddRecord}
        >
          <FilePlus className="h-4 w-4 mr-1" />
          Add Custom
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {upcomingMilestones.map(milestone => (
            <MilestoneItem
              key={milestone.id}
              milestone={milestone}
              selectedMilestoneId={selectedMilestoneId}
              milestoneNote={milestoneNote}
              onToggleMilestone={onToggleMilestone}
              onEditNotes={onEditNotes}
              onChangeMilestoneNote={onChangeMilestoneNote}
              onSaveNotes={onSaveNotes}
            />
          ))}
          
          {upcomingMilestones.length === 0 && (
            <div className="text-center py-6">
              <Check className="h-12 w-12 mx-auto text-green-500 mb-2" />
              <p className="text-muted-foreground">All milestones in this category completed!</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingMilestones;
