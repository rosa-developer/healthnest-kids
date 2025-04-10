
import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Milestone } from '@/types/milestone';
import CompletedMilestonesHeader from './CompletedMilestonesHeader';
import CompletedMilestonesList from './CompletedMilestonesList';

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
        <CompletedMilestonesHeader />
      </CardHeader>
      <CardContent>
        <CompletedMilestonesList
          milestones={completedMilestones}
          selectedMilestoneId={selectedMilestoneId}
          milestoneNote={milestoneNote}
          onToggleMilestone={onToggleMilestone}
          onEditNotes={onEditNotes}
          onChangeMilestoneNote={onChangeMilestoneNote}
          onSaveNotes={onSaveNotes}
        />
      </CardContent>
    </Card>
  );
};

export default CompletedMilestones;
