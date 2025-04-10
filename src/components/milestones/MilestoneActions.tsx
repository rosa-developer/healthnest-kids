
import React from 'react';
import { Button } from "@/components/ui/button";
import { Camera, Mic, Calendar, PenLine, Eye, Save } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

interface MilestoneActionsProps {
  milestoneId: string;
  isSelected: boolean;
  isCompleted: boolean;
  onEditNotes: (id: string) => void;
  onSaveNotes: () => void;
}

const MilestoneActions: React.FC<MilestoneActionsProps> = ({
  milestoneId,
  isSelected,
  isCompleted,
  onEditNotes,
  onSaveNotes
}) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
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
    navigate(`/milestone/${milestoneId}`);
  };

  if (isSelected) {
    return (
      <div className="flex flex-wrap justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white dark:bg-gray-800 border-indigo-100 dark:border-indigo-900/30 hover:bg-indigo-50 dark:hover:bg-indigo-950/30"
            onClick={handleCapturePhoto}
          >
            <Camera className="h-4 w-4 mr-1.5 text-indigo-500" />
            Photo
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white dark:bg-gray-800 border-indigo-100 dark:border-indigo-900/30 hover:bg-indigo-50 dark:hover:bg-indigo-950/30"
            onClick={handleRecordAudio}
          >
            <Mic className="h-4 w-4 mr-1.5 text-indigo-500" />
            Audio
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white dark:bg-gray-800 border-indigo-100 dark:border-indigo-900/30 hover:bg-indigo-50 dark:hover:bg-indigo-950/30"
            onClick={handleSetDate}
          >
            <Calendar className="h-4 w-4 mr-1.5 text-indigo-500" />
            Date
          </Button>
        </div>
        <Button 
          size="sm" 
          className="bg-indigo-500 hover:bg-indigo-600 text-white"
          onClick={onSaveNotes}
        >
          <Save className="h-4 w-4 mr-1.5" />
          Save
        </Button>
      </div>
    );
  }
  
  return (
    <div className="flex flex-wrap gap-2">
      <Button 
        variant="outline" 
        size="sm"
        className="bg-white dark:bg-gray-800 border-indigo-100 dark:border-indigo-900/30 hover:bg-indigo-50 dark:hover:bg-indigo-950/30"
        onClick={() => onEditNotes(milestoneId)}
      >
        <PenLine className="h-4 w-4 mr-1.5 text-indigo-500" />
        Add Notes
      </Button>
      
      <Button 
        variant="outline" 
        size="sm"
        className="bg-white dark:bg-gray-800 border-indigo-100 dark:border-indigo-900/30 hover:bg-indigo-50 dark:hover:bg-indigo-950/30"
        onClick={handleViewMilestone}
      >
        <Eye className="h-4 w-4 mr-1.5 text-indigo-500" />
        View Details
      </Button>
      
      {isCompleted && (
        <Button 
          variant="outline" 
          size="sm"
          className="bg-white dark:bg-gray-800 border-indigo-100 dark:border-indigo-900/30 hover:bg-indigo-50 dark:hover:bg-indigo-950/30"
          onClick={handleCapturePhoto}
        >
          <Camera className="h-4 w-4 mr-1.5 text-indigo-500" />
          Add Media
        </Button>
      )}
    </div>
  );
};

export default MilestoneActions;
