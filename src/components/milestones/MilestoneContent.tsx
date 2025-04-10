
import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { BookOpen } from 'lucide-react';
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
    <div className="px-4 pb-4 space-y-4">
      <div className="ml-8 p-4 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-lg border border-indigo-100 dark:border-indigo-900/30">
        <div className="flex items-center mb-2 text-indigo-700 dark:text-indigo-400">
          <BookOpen className="h-4 w-4 mr-2" />
          <h5 className="text-sm font-medium">Description</h5>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300">{description}</p>
      </div>
      
      {isSelected ? (
        <div className="ml-8 space-y-3">
          <Textarea
            placeholder="Add notes about this milestone"
            value={milestoneNote}
            onChange={(e) => onChangeMilestoneNote(e.target.value)}
            className="text-sm min-h-[100px] resize-none focus:ring-indigo-500 border-indigo-100 dark:border-indigo-900/30 bg-white dark:bg-gray-900"
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
