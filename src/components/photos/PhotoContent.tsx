
import React from 'react';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Photo } from '@/types/photo';
import PhotoGrid from './PhotoGrid';
import DragDropUpload from './DragDropUpload';
import EmptyPhotoState from './EmptyPhotoState';
import { motion } from "framer-motion";

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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-xl p-6 shadow-sm relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-24 opacity-20 pointer-events-none">
        <img 
          src="/lovable-uploads/40981d4d-5381-44c9-a78f-c22d7a65cdcf.png" 
          alt="Decorative baby elements" 
          className="w-full"
        />
      </div>
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-primary-pink/5 rounded-full blur-3xl"></div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsContent value="all" className="mt-0">
          <DragDropUpload onFilesAdded={onFilesAdded || (() => {})}>
            {filteredPhotos.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <PhotoGrid 
                  photos={filteredPhotos}
                  onEdit={onEditPhoto}
                  onDelete={onDeletePhoto}
                  onToggleFavorite={onToggleFavorite}
                />
              </motion.div>
            ) : (
              <EmptyPhotoState 
                searchQuery={searchQuery}
                onUploadClick={onUploadClick}
              />
            )}
          </DragDropUpload>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default PhotoContent;
