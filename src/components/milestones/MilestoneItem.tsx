
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { PenLine } from 'lucide-react';
import { Milestone } from '@/types/milestone';
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import MilestoneHeader from './MilestoneHeader';
import MilestoneContent from './MilestoneContent';

interface MilestoneItemProps {
  milestone: Milestone;
  selectedMilestoneId: string | null;
  milestoneNote: string;
  onToggleMilestone: (id: string) => void;
  onEditNotes: (id: string) => void;
  onChangeMilestoneNote: (note: string) => void;
  onSaveNotes: () => void;
}

const MilestoneItem: React.FC<MilestoneItemProps> = ({
  milestone,
  selectedMilestoneId,
  milestoneNote,
  onToggleMilestone,
  onEditNotes,
  onChangeMilestoneNote,
  onSaveNotes
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isSelected = selectedMilestoneId === milestone.id;
  
  return (
    <Collapsible 
      open={isOpen} 
      onOpenChange={setIsOpen}
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        milestone.completed 
          ? 'bg-gradient-to-br from-green-50/80 to-emerald-50/50 dark:from-green-950/30 dark:to-emerald-950/20 border-green-100 dark:border-green-900/30' 
          : 'bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-950 border-gray-200 dark:border-gray-800'
      } ${
        isOpen ? 'shadow-md' : 'hover:shadow-sm'
      }`}
    >
      <div className="p-4">
        <MilestoneHeader
          title={milestone.title}
          ageRange={milestone.ageRange}
          isCompleted={milestone.completed}
          completedDate={milestone.completedDate}
          date={milestone.date}
          notes={milestone.notes}
          isOpen={isOpen}
          onToggleMilestone={onToggleMilestone}
          milestoneId={milestone.id}
        />
        
        {!isSelected && milestone.notes && (
          <div className="mt-2 ml-8 text-sm text-slate-600 dark:text-slate-400 p-3 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-100 dark:border-gray-800">
            {milestone.notes}
          </div>
        )}
        
        <div className="flex justify-end mt-2">
          <Button 
            variant="ghost" 
            size="icon"
            className="h-7 w-7 text-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/30"
            onClick={() => onEditNotes(milestone.id)}
          >
            <PenLine className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <CollapsibleContent>
        <MilestoneContent
          description={milestone.description}
          isSelected={isSelected}
          milestoneId={milestone.id}
          milestoneNote={milestoneNote}
          isCompleted={milestone.completed}
          onChangeMilestoneNote={onChangeMilestoneNote}
          onEditNotes={onEditNotes}
          onSaveNotes={onSaveNotes}
        />
      </CollapsibleContent>
    </Collapsible>
  );
};

export default MilestoneItem;
