
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Circle, 
  CheckCircle2, 
  Edit, 
  Camera, 
  Mic, 
  Trash, 
  Save,
  ChevronDown,
  ChevronUp,
  Calendar,
  Eye
} from 'lucide-react';
import { Milestone } from '@/types/milestone';
import { useToast } from "@/hooks/use-toast";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
  
  return (
    <Collapsible 
      open={isOpen} 
      onOpenChange={setIsOpen}
      className={`p-3 border border-border rounded-lg transition-colors ${
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
              <p className="text-sm text-muted-foreground">
                Achieved on {new Date(milestone.completedDate || milestone.date).toLocaleDateString('en-US', {
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
      
      <CollapsibleContent>
        <div className="mt-3 ml-8 space-y-3">
          <p className="text-sm">{milestone.description}</p>
          
          {isSelected ? (
            <div className="space-y-2">
              <Textarea
                placeholder="Add notes about this milestone"
                value={milestoneNote}
                onChange={(e) => onChangeMilestoneNote(e.target.value)}
                className="text-sm min-h-[100px]"
              />
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleCapturePhoto}
                  >
                    <Camera className="h-4 w-4 mr-1" />
                    Photo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleRecordAudio}
                  >
                    <Mic className="h-4 w-4 mr-1" />
                    Audio
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleSetDate}
                  >
                    <Calendar className="h-4 w-4 mr-1" />
                    Date
                  </Button>
                </div>
                <Button size="sm" onClick={onSaveNotes}>
                  <Save className="h-4 w-4 mr-1" />
                  Save
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onEditNotes(milestone.id)}
              >
                <Edit className="h-4 w-4 mr-1" />
                Add Notes
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleViewMilestone}
              >
                <Eye className="h-4 w-4 mr-1" />
                View
              </Button>
              
              {milestone.completed && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleCapturePhoto}
                >
                  <Camera className="h-4 w-4 mr-1" />
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
