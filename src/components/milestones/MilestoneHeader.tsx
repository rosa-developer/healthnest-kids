
import React from 'react';
import { Button } from "@/components/ui/button";
import { CircleCheck, Circle, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { format } from 'date-fns';
import { CollapsibleTrigger } from "@/components/ui/collapsible";

interface MilestoneHeaderProps {
  title: string;
  ageRange: string;
  isCompleted: boolean;
  completedDate?: string;
  date?: string;
  notes?: string;
  isOpen: boolean;
  onToggleMilestone: (id: string) => void;
  milestoneId: string;
}

const MilestoneHeader: React.FC<MilestoneHeaderProps> = ({
  title,
  ageRange,
  isCompleted,
  completedDate,
  date,
  notes,
  isOpen,
  onToggleMilestone,
  milestoneId
}) => {
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    try {
      return format(new Date(dateString), 'MMM d, yyyy');
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="flex justify-between items-start">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className={`h-6 w-6 rounded-full p-0 ${
              isCompleted ? 'text-green-500' : 'text-gray-400'
            }`}
            onClick={() => onToggleMilestone(milestoneId)}
          >
            {isCompleted ? (
              <CircleCheck className="h-5 w-5" />
            ) : (
              <Circle className="h-5 w-5" />
            )}
          </Button>
          <h4 className="font-medium">{title}</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="ml-auto p-0 h-7 w-7">
              {isOpen ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <div className="ml-8">
          {isCompleted ? (
            <p className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              Achieved on {formatDate(completedDate || date)}
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">
              Typically achieved at {ageRange}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MilestoneHeader;
