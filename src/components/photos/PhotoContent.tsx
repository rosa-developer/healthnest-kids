
import React from 'react';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { ImageIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Upload } from 'lucide-react';
import { Photo } from '@/types/photo';
import PhotoGrid from './PhotoGrid';
import DragDropUpload from './DragDropUpload';

interface PhotoContentProps {
  filteredPhotos: Photo[];
  searchQuery: string;
  onUploadClick: () => void;
  onEditPhoto: (photo: Photo) => void;
  onDeletePhoto: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  onFilesAdded?: (files: FileList) => void;
}

const PhotoContent: React.FC<PhotoContentProps> = ({ 
  filteredPhotos, 
  searchQuery, 
  onUploadClick,
  onEditPhoto,
  onDeletePhoto,
  onToggleFavorite,
  onFilesAdded
}) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm">
      <Tabs defaultValue="all" className="w-full">
        <TabsContent value="all" className="mt-0">
          <DragDropUpload onFilesAdded={onFilesAdded || (() => {})}>
            {filteredPhotos.length > 0 ? (
              <PhotoGrid 
                photos={filteredPhotos}
                onEdit={onEditPhoto}
                onDelete={onDeletePhoto}
                onToggleFavorite={onToggleFavorite}
              />
            ) : (
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
                <Button onClick={onUploadClick}>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Photos
                </Button>
              </div>
            )}
          </DragDropUpload>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PhotoContent;
