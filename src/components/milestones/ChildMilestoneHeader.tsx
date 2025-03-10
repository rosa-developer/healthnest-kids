
import React from 'react';
import { Button } from "@/components/ui/button";
import { Brain, Mic, Camera } from 'lucide-react';

interface ChildMilestoneHeaderProps {
  onCaptureAudio: () => void;
  onAddRecord: () => void;
}

const ChildMilestoneHeader: React.FC<ChildMilestoneHeaderProps> = ({
  onCaptureAudio,
  onAddRecord
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-healthnest-soft-purple flex items-center justify-center mr-3">
          <Brain className="h-5 w-5 text-purple-500" />
        </div>
        <div>
          <h3 className="font-medium text-lg">Emma's Milestones</h3>
          <p className="text-sm text-muted-foreground">8 months old</p>
        </div>
      </div>
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="text-healthnest-primary"
          onClick={onCaptureAudio}
        >
          <Mic className="h-4 w-4 mr-1" />
          Record
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="text-healthnest-primary"
          onClick={onAddRecord}
        >
          <Camera className="h-4 w-4 mr-1" />
          Capture
        </Button>
      </div>
    </div>
  );
};

export default ChildMilestoneHeader;
