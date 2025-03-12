
import React from 'react';
import { Button } from "@/components/ui/button";
import { Camera, Upload } from 'lucide-react';

interface EmptyPhotoStateProps {
  searchQuery: string;
  onUploadClick: () => void;
}

const EmptyPhotoState: React.FC<EmptyPhotoStateProps> = ({ searchQuery, onUploadClick }) => {
  return (
    <div className="text-center p-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
      <Camera className="h-12 w-12 mx-auto text-gray-400 mb-4" />
      <h3 className="text-lg font-medium text-gray-600 mb-2">
        {searchQuery ? 'No matching photos found' : 'No Photos Yet'}
      </h3>
      <p className="text-gray-500 mb-4">
        {searchQuery 
          ? 'Try changing your search or uploading new photos.' 
          : 'Upload some photos to get started!'}
      </p>
      <Button 
        onClick={onUploadClick}
        className="bg-healthnest-primary text-white hover:bg-healthnest-primary/90"
      >
        <Upload className="h-4 w-4 mr-2" />
        Add Photos
      </Button>
    </div>
  );
};

export default EmptyPhotoState;
