
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Circle, 
  CheckCircle2, 
  Edit, 
  Camera, 
  Mic, 
  Calendar,
  Save,
  ChevronDown,
  ChevronUp,
  Eye
} from 'lucide-react';
import { Milestone } from '@/types/milestone';
import { useToast } from "@/hooks/use-toast";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { format } from 'date-fns';

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
  const { toast } = useToast();
  const navigate = useNavigate();
  const isSelected = selectedMilestoneId === milestone.id;
  const [isOpen, setIsOpen] = useState(false);
  
  const handleCapturePhoto = () => {
    toast({
      title: "Capture Photo",
      description: "Photo capturing will be available in the next update!"
    });
  };
  
  const handleRecordAudio = () => {
    toast({
      title: "Record Audio",
      description: "Audio recording will be available in the next update!"
    });
  };
  
  const handleSetDate = () => {
    toast({
      title: "Set Achievement Date",
      description: "Date picker will be available in the next update!"
    });
  };
  
  const handleViewMilestone = () => {
    navigate(`/milestone/${milestone.id}`);
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    try {
      return format(new Date(dateString), 'MMM d, yyyy');
    } catch (e) {
      return dateString;
    }
  };
  
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
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`h-6 w-6 rounded-full p-0 ${
                  milestone.completed ? 'text-green-500' : 'text-gray-400'
                }`}
                onClick={() => onToggleMilestone(milestone.id)}
              >
                {milestone.completed ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <Circle className="h-5 w-5" />
                )}
              </Button>
              <h4 className="font-medium">{milestone.title}</h4>
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
              {milestone.completed ? (
                <p className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  Achieved on {formatDate(milestone.completedDate || milestone.date)}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Typically achieved at {milestone.ageRange}
                </p>
              )}
            </div>
            
            {!isSelected && milestone.notes && (
              <div className="mt-2 ml-8 text-sm text-muted-foreground p-2 bg-gray-50 dark:bg-gray-900 rounded-md">
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
      </div>
      
      <CollapsibleContent>
        <div className="px-4 pb-4 space-y-3">
          <div className="ml-8 p-3 bg-gray-50 dark:bg-gray-900 rounded-md">
            <p className="text-sm">{milestone.description}</p>
          </div>
          
          {isSelected ? (
            <div className="ml-8 space-y-3">
              <Textarea
                placeholder="Add notes about this milestone"
                value={milestoneNote}
                onChange={(e) => onChangeMilestoneNote(e.target.value)}
                className="text-sm min-h-[100px] resize-none focus:ring-indigo-500"
              />
              <div className="flex flex-wrap justify-between gap-2">
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-white dark:bg-gray-800"
                    onClick={handleCapturePhoto}
                  >
                    <Camera className="h-4 w-4 mr-1.5 text-indigo-500" />
                    Photo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-white dark:bg-gray-800"
                    onClick={handleRecordAudio}
                  >
                    <Mic className="h-4 w-4 mr-1.5 text-indigo-500" />
                    Audio
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-white dark:bg-gray-800"
                    onClick={handleSetDate}
                  >
                    <Calendar className="h-4 w-4 mr-1.5 text-indigo-500" />
                    Date
                  </Button>
                </div>
                <Button 
                  size="sm" 
                  className="bg-indigo-500 hover:bg-indigo-600"
                  onClick={onSaveNotes}
                >
                  <Save className="h-4 w-4 mr-1.5" />
                  Save
                </Button>
              </div>
            </div>
          ) : (
            <div className="ml-8 flex flex-wrap gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white dark:bg-gray-800"
                onClick={() => onEditNotes(milestone.id)}
              >
                <Edit className="h-4 w-4 mr-1.5 text-indigo-500" />
                Add Notes
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white dark:bg-gray-800"
                onClick={handleViewMilestone}
              >
                <Eye className="h-4 w-4 mr-1.5 text-indigo-500" />
                View Details
              </Button>
              
              {milestone.completed && (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-white dark:bg-gray-800"
                  onClick={handleCapturePhoto}
                >
                  <Camera className="h-4 w-4 mr-1.5 text-indigo-500" />
                  Add Media
                </Button>
              )}
            </div>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default MilestoneItem;
