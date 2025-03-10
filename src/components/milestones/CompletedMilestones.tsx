
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Check } from 'lucide-react';
import { Milestone } from '@/types/milestone';
import MilestoneItem from './MilestoneItem';

interface CompletedMilestonesProps {
  filteredMilestones: Milestone[];
  selectedMilestoneId: string | null;
  milestoneNote: string;
  onToggleMilestone: (id: string) => void;
  onEditNotes: (id: string) => void;
  onChangeMilestoneNote: (note: string) => void;
  onSaveNotes: () => void;
}

const CompletedMilestones: React.FC<CompletedMilestonesProps> = ({
  filteredMilestones,
  selectedMilestoneId,
  milestoneNote,
  onToggleMilestone,
  onEditNotes,
  onChangeMilestoneNote,
  onSaveNotes
}) => {
  const completedMilestones = filteredMilestones.filter(m => m.completed);
  
  return (
    <Card className="border border-border shadow-soft">
      <CardHeader className="pb-2 flex justify-between items-center">
        <CardTitle className="text-lg flex items-center">
          <Check className="h-5 w-5 mr-2 text-green-500" />
          Completed Milestones
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {completedMilestones.map(milestone => (
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
          
          {completedMilestones.length === 0 && (
            <div className="text-center py-6">
              <p className="text-muted-foreground">No completed milestones in this category yet.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CompletedMilestones;
