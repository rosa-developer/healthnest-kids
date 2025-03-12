
import { useState } from 'react';
import { Photo } from '@/types/photo';
import { useToast } from "@/hooks/use-toast";

export function usePhotoManagement() {
  const { toast } = useToast();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [editCaption, setEditCaption] = useState<string>('');
  const [editCategory, setEditCategory] = useState<string>('other');
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleAddPhotos = (files: FileList) => {
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
    }
  };

  const handleDeletePhoto = (id: string) => {
    setPhotos(prev => prev.filter(photo => photo.id !== id));
    toast({
      title: "Photo Deleted",
      description: "The photo has been removed.",
    });
  };

  const handleEditPhoto = (photo: Photo) => {
    setSelectedPhoto(photo.id);
    setEditCaption(photo.caption);
    setEditCategory(photo.category);
    setShowEditModal(true);
  };

  const saveEditPhoto = () => {
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

  const cancelEditPhoto = () => {
    setShowEditModal(false);
    setSelectedPhoto(null);
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

  return {
    // State
    photos,
    filteredPhotos,
    searchQuery,
    activeCategory,
    showEditModal,
    editCaption,
    editCategory,
    currentPhoto,
    
    // Setters
    setSearchQuery,
    setActiveCategory,
    setShowEditModal,
    setEditCaption,
    setEditCategory,
    
    // Actions
    handleAddPhotos,
    handleDeletePhoto,
    handleEditPhoto,
    saveEditPhoto,
    cancelEditPhoto
  };
}
