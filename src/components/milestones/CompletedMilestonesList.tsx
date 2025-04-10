
import React from 'react';
import { Milestone } from '@/types/milestone';
import MilestoneItem from './MilestoneItem';
import { Trophy } from 'lucide-react';

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
      <div className="text-center py-10">
        <Trophy className="h-12 w-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
        <p className="text-muted-foreground">No completed milestones in this category yet.</p>
        <p className="text-sm text-muted-foreground mt-1">Check back after marking some milestones as complete.</p>
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
