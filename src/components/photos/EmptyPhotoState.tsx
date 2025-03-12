
import React from 'react';
import { Button } from "@/components/ui/button";
import { ImageIcon, Upload } from 'lucide-react';

interface EmptyPhotoStateProps {
  searchQuery: string;
  onUploadClick: () => void;
}

const EmptyPhotoState: React.FC<EmptyPhotoStateProps> = ({ 
  searchQuery, 
  onUploadClick 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-muted/20 rounded-xl border border-dashed border-muted">
      <div className="bg-primary/10 rounded-full p-6 mb-6">
        <ImageIcon className="h-10 w-10 text-primary/80" />
      </div>
      <h3 className="text-xl font-semibold mb-3">No photos found</h3>
      <p className="text-muted-foreground max-w-md mb-8">
        {searchQuery 
          ? `No photos match "${searchQuery}". Try another search term or clear your search.` 
          : "Start creating your photo collection by uploading your favorite memories."}
      </p>
      <Button 
        onClick={onUploadClick} 
        size="lg"
        className="bg-primary hover:bg-primary/90"
      >
        <Upload className="h-4 w-4 mr-2" />
        Upload Photos
      </Button>
    </div>
  );
};

export default EmptyPhotoState;
