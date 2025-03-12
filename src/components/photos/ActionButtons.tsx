
import React from 'react';
import { Button } from "@/components/ui/button";
import { Upload, Camera } from 'lucide-react';

interface ActionButtonsProps {
  onUploadClick: () => void;
  onCaptureClick: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onUploadClick, onCaptureClick }) => {
  return (
    <div className="flex gap-3">
      <Button 
        onClick={onUploadClick}
        className="bg-primary text-white hover:bg-primary/90"
      >
        <Upload className="h-4 w-4 mr-2" />
        Upload
      </Button>
      <Button 
        variant="outline"
        onClick={onCaptureClick}
      >
        <Camera className="h-4 w-4 mr-2" />
        Capture
      </Button>
    </div>
  );
};

export default ActionButtons;
