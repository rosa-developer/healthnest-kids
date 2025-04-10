
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mic, Camera, Calendar, Plus } from 'lucide-react';

interface ChildMilestoneHeaderProps {
  onCaptureAudio: () => void;
  onAddRecord: () => void;
  photoSrc?: string;
}

const ChildMilestoneHeader: React.FC<ChildMilestoneHeaderProps> = ({
  onCaptureAudio,
  onAddRecord,
  photoSrc
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-center">
        <div className="h-16 w-16 rounded-full bg-white shadow-sm flex items-center justify-center mr-4 overflow-hidden border-2 border-indigo-200 dark:border-indigo-800">
          {photoSrc ? (
            <img src={photoSrc} alt="Child" className="w-full h-full object-cover" />
          ) : (
            <img src="/baby-emma.jpg" alt="Emma" className="w-full h-full object-cover" />
          )}
        </div>
        <div>
          <h2 className="font-semibold text-xl">Emma's Milestones</h2>
          <div className="flex items-center mt-1">
            <Calendar className="h-4 w-4 text-indigo-500 mr-1.5" />
            <p className="text-sm text-muted-foreground">8 months old</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900"
          onClick={onCaptureAudio}
        >
          <Mic className="h-4 w-4 mr-1.5 text-indigo-500" />
          Record
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900"
          onClick={onAddRecord}
        >
          <Camera className="h-4 w-4 mr-1.5 text-indigo-500" />
          Capture
        </Button>
        <Button 
          size="sm" 
          className="bg-indigo-500 hover:bg-indigo-600 text-white"
          onClick={onAddRecord}
        >
          <Plus className="h-4 w-4 mr-1.5" />
          Add Milestone
        </Button>
      </div>
    </div>
  );
};

export default ChildMilestoneHeader;
