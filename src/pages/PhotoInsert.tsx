
import React, { useRef } from 'react';
import PageTransition from '@/components/common/PageTransition';
import { useToast } from "@/hooks/use-toast";
import { usePhotoManagement } from '@/hooks/usePhotoManagement';

// Importing refactored components
import PhotoGrid from '@/components/photos/PhotoGrid';
import EmptyPhotoState from '@/components/photos/EmptyPhotoState';
import PhotoControls from '@/components/photos/PhotoControls';
import PhotoCategoryTabs from '@/components/photos/PhotoCategoryTabs';
import EditPhotoModal from '@/components/photos/EditPhotoModal';

const PhotoInsert = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const {
    filteredPhotos,
    searchQuery,
    activeCategory,
    showEditModal,
    editCaption,
    editCategory,
    currentPhoto,
    
    setSearchQuery,
    setActiveCategory,
    setShowEditModal,
    setEditCaption,
    setEditCategory,
    
    handleAddPhotos,
    handleDeletePhoto,
    handleEditPhoto,
    saveEditPhoto
  } = usePhotoManagement();

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleCaptureClick = () => {
    toast({
      title: "Capture Photo",
      description: "Camera capture will be available in the next update!",
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    
    if (files && files.length > 0) {
      handleAddPhotos(files);
      // Reset file input
      e.target.value = '';
    }
  };

  return (
    <div className="main-container">
      <PageTransition>
        <div className="mb-6">
          <div className="chip bg-healthnest-soft-blue text-healthnest-primary mb-4">
            Photo Gallery
          </div>

          <PhotoControls 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onUploadClick={handleUploadClick}
            onCaptureClick={handleCaptureClick}
          />

          <PhotoCategoryTabs 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {filteredPhotos.length > 0 ? (
            <PhotoGrid 
              photos={filteredPhotos}
              onEdit={handleEditPhoto}
              onDelete={handleDeletePhoto}
            />
          ) : (
            <EmptyPhotoState 
              searchQuery={searchQuery}
              onUploadClick={handleUploadClick}
            />
          )}

          <EditPhotoModal
            open={showEditModal}
            onOpenChange={setShowEditModal}
            photo={currentPhoto}
            editCaption={editCaption}
            editCategory={editCategory}
            onEditCaptionChange={setEditCaption}
            onEditCategoryChange={setEditCategory}
            onSave={saveEditPhoto}
          />

          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*" 
            multiple
            onChange={handleFileChange}
          />
        </div>
      </PageTransition>
    </div>
  );
};

export default PhotoInsert;
