
import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Edit } from 'lucide-react';
import { Button } from "@/components/ui/button";
import MilestoneActions from './MilestoneActions';

interface MilestoneContentProps {
  description: string;
  isSelected: boolean;
  milestoneId: string;
  milestoneNote: string;
  isCompleted: boolean;
  onChangeMilestoneNote: (note: string) => void;
  onEditNotes: (id: string) => void;
  onSaveNotes: () => void;
}

const MilestoneContent: React.FC<MilestoneContentProps> = ({
  description,
  isSelected,
  milestoneId,
  milestoneNote,
  isCompleted,
  onChangeMilestoneNote,
  onEditNotes,
  onSaveNotes
}) => {
  return (
    <div className="px-4 pb-4 space-y-3">
      <div className="ml-8 p-3 bg-gray-50 dark:bg-gray-900 rounded-md">
        <p className="text-sm">{description}</p>
      </div>
      
      {isSelected ? (
        <div className="ml-8 space-y-3">
          <Textarea
            placeholder="Add notes about this milestone"
            value={milestoneNote}
            onChange={(e) => onChangeMilestoneNote(e.target.value)}
            className="text-sm min-h-[100px] resize-none focus:ring-indigo-500"
          />
          <MilestoneActions
            milestoneId={milestoneId}
            isSelected={isSelected}
            isCompleted={isCompleted}
            onEditNotes={onEditNotes}
            onSaveNotes={onSaveNotes}
          />
        </div>
      ) : (
        <div className="ml-8">
          <MilestoneActions
            milestoneId={milestoneId}
            isSelected={isSelected}
            isCompleted={isCompleted}
            onEditNotes={onEditNotes}
            onSaveNotes={onSaveNotes}
          />
        </div>
      )}
    </div>
  );
};

export default MilestoneContent;
