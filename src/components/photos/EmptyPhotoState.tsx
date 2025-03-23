
import React from 'react';
import { ImageIcon, Upload } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface EmptyPhotoStateProps {
  searchQuery: string;
  onUploadClick: () => void;
}

const EmptyPhotoState: React.FC<EmptyPhotoStateProps> = ({ 
  searchQuery, 
  onUploadClick 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="bg-muted/40 rounded-full p-4 mb-4">
        <ImageIcon className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-semibold mb-2">No photos found</h3>
      <p className="text-muted-foreground max-w-md mb-6">
        {searchQuery 
          ? `No photos match "${searchQuery}". Try another search term.` 
          : "Upload your first photo to get started."}
      </p>
      <p className="text-muted-foreground max-w-md mb-6">
        Drag and drop photos here or use the button below.
      </p>
      
      {/* Updated to use the new ideogram image */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <img src="/ideogram-baby-collage.jpg" alt="Baby photo collage" className="max-w-sm rounded-lg shadow-md" />
      </div>
      
      <Button onClick={onUploadClick}>
        <Upload className="h-4 w-4 mr-2" />
        Upload Photos
      </Button>
    </div>
  );
};

export default EmptyPhotoState;
