
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Edit } from 'lucide-react';
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
      className={`border rounded-xl overflow-hidden transition-all duration-200 ${
        milestone.completed 
          ? 'bg-green-50/50 dark:bg-green-950/20 border-green-100 dark:border-green-900/30' 
          : 'bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800'
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
          <div className="mt-2 ml-8 text-sm text-muted-foreground p-2 bg-gray-50 dark:bg-gray-900 rounded-md">
            {milestone.notes}
          </div>
        )}
        
        <div className="flex justify-end">
          <Button 
            variant="ghost" 
            size="icon"
            className="h-7 w-7"
            onClick={() => onEditNotes(milestone.id)}
          >
            <Edit className="h-4 w-4 text-muted-foreground" />
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
