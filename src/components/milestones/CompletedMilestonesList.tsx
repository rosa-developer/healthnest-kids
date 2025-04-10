
import React from 'react';
import { Milestone } from '@/types/milestone';
import MilestoneItem from './MilestoneItem';

interface CompletedMilestonesListProps {
  milestones: Milestone[];
  selectedMilestoneId: string | null;
  milestoneNote: string;
  onToggleMilestone: (id: string) => void;
  onEditNotes: (id: string) => void;
  onChangeMilestoneNote: (note: string) => void;
  onSaveNotes: () => void;
}

const CompletedMilestonesList: React.FC<CompletedMilestonesListProps> = ({
  milestones,
  selectedMilestoneId,
  milestoneNote,
  onToggleMilestone,
  onEditNotes,
  onChangeMilestoneNote,
  onSaveNotes
}) => {
  if (milestones.length === 0) {
    return (
      <div className="text-center py-6">
        <p className="text-muted-foreground">No completed milestones in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {milestones.map(milestone => (
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
    </div>
  );
};

export default CompletedMilestonesList;
