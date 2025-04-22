
import React from 'react';
import { FileImage, Upload } from 'lucide-react';
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
        <FileImage className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-semibold mb-2">No photos found</h3>
      <p className="text-muted-foreground max-w-md mb-4">
        {searchQuery 
          ? `No photos match "${searchQuery}". Try another search term.` 
          : "Upload your first photo to get started."}
      </p>
      <div className="bg-muted/20 rounded-lg p-4 mb-6 max-w-md">
        <p className="text-sm text-muted-foreground">
          Supported formats: JPG, PNG, GIF, WebP (up to 5MB)
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Drag and drop photos here or use the button below
        </p>
      </div>
      
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <div className="max-w-sm rounded-lg shadow-md overflow-hidden">
          <img 
            src="/lovable-uploads/40981d4d-5381-44c9-a78f-c22d7a65cdcf.png" 
            alt="Baby photo example" 
            className="max-w-sm rounded-lg" 
            onError={(e) => {
              console.error("Failed to load baby example image");
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
        </div>
      </div>
      
      <Button onClick={onUploadClick} className="gap-2">
        <Upload className="h-4 w-4" />
        Upload Photos
      </Button>
    </div>
  );
};

export default EmptyPhotoState;
