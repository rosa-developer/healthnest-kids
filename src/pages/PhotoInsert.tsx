
import React, { useRef } from 'react';
import PageTransition from '@/components/common/PageTransition';
import { useToast } from "@/hooks/use-toast";
import { usePhotoManagement } from '@/hooks/usePhotoManagement';
import EditPhotoModal from '@/components/photos/EditPhotoModal';
import PhotoGalleryHeader from '@/components/photos/PhotoGalleryHeader';
import PhotoSearchControls from '@/components/photos/PhotoSearchControls';
import PhotoCategoryControls from '@/components/photos/PhotoCategoryControls';
import PhotoSortControls from '@/components/photos/PhotoSortControls';
import PhotoContent from '@/components/photos/PhotoContent';
import FeaturedPhotos from '@/components/photos/FeaturedPhotos';

const PhotoInsert = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const {
    filteredPhotos,
    searchQuery,
    activeCategory,
    sortOption,
    showEditModal,
    editCaption,
    editCategory,
    currentPhoto,
    
    setSearchQuery,
    setActiveCategory,
    setSortOption,
    setShowEditModal,
    setEditCaption,
    setEditCategory,
    
    handleAddPhotos,
    handleDeletePhoto,
    handleEditPhoto,
    saveEditPhoto,
    toggleFavorite
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

  const handleFilesAdded = (files: FileList) => {
    if (files && files.length > 0) {
      handleAddPhotos(files);
      toast({
        title: "Photos Uploaded",
        description: `Successfully added ${files.length} photos via drag and drop.`,
      });
    }
  };

  return (
    <div className="main-container">
      <PageTransition>
        <div className="space-y-6">
          <PhotoGalleryHeader />

          <PhotoSearchControls 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onUploadClick={handleUploadClick}
            onCaptureClick={handleCaptureClick}
          />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <PhotoCategoryControls 
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            <PhotoSortControls
              sortOption={sortOption}
              setSortOption={setSortOption}
            />
          </div>

          <PhotoContent 
            filteredPhotos={filteredPhotos}
            searchQuery={searchQuery}
            onUploadClick={handleUploadClick}
            onEditPhoto={handleEditPhoto}
            onDeletePhoto={handleDeletePhoto}
            onToggleFavorite={toggleFavorite}
            onFilesAdded={handleFilesAdded}
          />

          {filteredPhotos.length > 0 && (
            <FeaturedPhotos photos={filteredPhotos} />
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
