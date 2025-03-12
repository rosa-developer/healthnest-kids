
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Upload, Camera } from 'lucide-react';

interface PhotoControlsProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onUploadClick: () => void;
  onCaptureClick: () => void;
}

const PhotoControls: React.FC<PhotoControlsProps> = ({ 
  searchQuery, 
  onSearchChange, 
  onUploadClick, 
  onCaptureClick 
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search photos..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9"
        />
      </div>
      <div className="flex gap-3">
        <Button 
          onClick={onUploadClick}
          className="bg-healthnest-primary text-white hover:bg-healthnest-primary/90"
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
    </div>
  );
};

export default PhotoControls;
