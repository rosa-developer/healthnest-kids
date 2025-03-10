
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Circle, CheckCircle2, Edit } from 'lucide-react';
import { Milestone } from '@/types/milestone';

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
  const isSelected = selectedMilestoneId === milestone.id;
  
  return (
    <div 
      key={milestone.id} 
      className={`p-3 border border-border rounded-lg ${
        milestone.completed ? 'bg-healthnest-soft-green/10' : ''
      }`}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className={`h-6 w-6 rounded-full ${
                milestone.completed ? 'hover:bg-healthnest-soft-green' : 'hover:bg-healthnest-soft-blue'
              }`}
              onClick={() => onToggleMilestone(milestone.id)}
            >
              {milestone.completed ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground" />
              )}
            </Button>
            <h4 className="font-medium">{milestone.title}</h4>
          </div>
          
          <div className="ml-8">
            {milestone.completed ? (
              <p className="text-sm text-muted-foreground">
                Achieved on {new Date(milestone.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Typically achieved at {milestone.ageRange}
              </p>
            )}
          </div>
          
          {!isSelected && milestone.notes && (
            <div className="mt-2 ml-8 text-sm text-muted-foreground">
              {milestone.notes}
            </div>
          )}
        </div>
        <Button 
          variant="ghost" 
          size="icon"
          className="h-7 w-7"
          onClick={() => onEditNotes(milestone.id)}
        >
          <Edit className="h-4 w-4 text-muted-foreground" />
        </Button>
      </div>
      
      {isSelected && (
        <div className="mt-3 ml-8">
          <div className="flex gap-2 mb-2">
            <Input
              placeholder="Add notes about this milestone"
              value={milestoneNote}
              onChange={(e) => onChangeMilestoneNote(e.target.value)}
              className="text-sm"
            />
            <Button size="sm" onClick={onSaveNotes}>Save</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MilestoneItem;
