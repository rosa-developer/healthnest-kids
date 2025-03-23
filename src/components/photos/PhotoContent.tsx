
import React from 'react';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Photo } from '@/types/photo';
import PhotoGrid from './PhotoGrid';
import DragDropUpload from './DragDropUpload';
import EmptyPhotoState from './EmptyPhotoState';

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
              <EmptyPhotoState 
                searchQuery={searchQuery}
                onUploadClick={onUploadClick}
              />
            )}
          </DragDropUpload>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PhotoContent;
