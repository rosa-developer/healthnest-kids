
import React, { useState, useRef } from 'react';
import PageTransition from '@/components/common/PageTransition';
import { useToast } from "@/hooks/use-toast";
import { Photo } from '@/types/photo';

// Importing refactored components
import PhotoGrid from '@/components/photos/PhotoGrid';
import EmptyPhotoState from '@/components/photos/EmptyPhotoState';
import PhotoControls from '@/components/photos/PhotoControls';
import PhotoCategoryTabs from '@/components/photos/PhotoCategoryTabs';
import EditPhotoModal from '@/components/photos/EditPhotoModal';

const PhotoInsert = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [editCaption, setEditCaption] = useState<string>('');
  const [editCategory, setEditCategory] = useState<string>('other');
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

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
      const newPhotos = Array.from(files).map(file => {
        const id = `photo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        return {
          id,
          src: URL.createObjectURL(file),
          caption: file.name.split('.')[0] || 'New Photo',
          category: 'other',
          date: new Date().toISOString(),
        };
      });
      
      setPhotos(prev => [...prev, ...newPhotos]);
      
      toast({
        title: "Photos Added",
        description: `${files.length} photo(s) have been successfully added.`,
      });
      
      // Reset file input
      e.target.value = '';
    }
  };

  const handleDelete = (id: string) => {
    setPhotos(prev => prev.filter(photo => photo.id !== id));
    toast({
      title: "Photo Deleted",
      description: "The photo has been removed.",
    });
  };

  const handleEdit = (photo: Photo) => {
    setSelectedPhoto(photo.id);
    setEditCaption(photo.caption);
    setEditCategory(photo.category);
    setShowEditModal(true);
  };

  const saveEdit = () => {
    if (selectedPhoto) {
      setPhotos(prev => prev.map(photo => 
        photo.id === selectedPhoto 
          ? { ...photo, caption: editCaption, category: editCategory }
          : photo
      ));
      
      setShowEditModal(false);
      setSelectedPhoto(null);
      
      toast({
        title: "Photo Updated",
        description: "Photo details have been updated successfully.",
      });
    }
  };

  // Filter photos based on active category and search query
  const filteredPhotos = photos.filter(photo => {
    const matchesCategory = activeCategory === 'all' || photo.category === activeCategory;
    const matchesSearch = photo.caption.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentPhoto = selectedPhoto 
    ? photos.find(photo => photo.id === selectedPhoto)
    : null;

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
              onEdit={handleEdit}
              onDelete={handleDelete}
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
            onSave={saveEdit}
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
