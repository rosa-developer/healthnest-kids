
import { useState, useEffect } from 'react';
import { Photo } from '@/types/photo';
import { useToast } from '@/hooks/use-toast';

export type SortOption = 'newest' | 'oldest' | 'favorites';

export const usePhotoManagement = () => {
  const [photos, setPhotos] = useState<Photo[]>(() => {
    const storedPhotos = localStorage.getItem('photos');
    return storedPhotos ? JSON.parse(storedPhotos) : [];
  });
  const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>(photos);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [showEditModal, setShowEditModal] = useState(false);
  const [editCaption, setEditCaption] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [currentPhoto, setCurrentPhoto] = useState<Photo | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem('photos', JSON.stringify(photos));
    filterPhotos();
  }, [photos, searchQuery, activeCategory, sortOption]);

  const handleAddPhotos = (files: FileList) => {
    const newPhotos: Photo[] = Array.from(files).map(file => {
      const imageUrl = URL.createObjectURL(file);
      return {
        id: Date.now().toString() + '-' + Math.random().toString(36).substring(2, 9),
        src: imageUrl,
        caption: file.name,
        category: 'uncategorized',
        date: new Date().toISOString(),
        isFavorite: false,
      };
    });

    setPhotos(prevPhotos => [...prevPhotos, ...newPhotos]);
    toast({
      title: "Photos Uploaded",
      description: `Successfully uploaded ${files.length} photos.`,
    });
  };

  const handleDeletePhoto = (id: string) => {
    setPhotos(prevPhotos => {
      const updatedPhotos = prevPhotos.filter(photo => photo.id !== id);
      return updatedPhotos;
    });
    toast({
      title: "Photo Deleted",
      description: "The photo has been successfully deleted.",
    });
  };

  const handleEditPhoto = (photo: Photo) => {
    setCurrentPhoto(photo);
    setEditCaption(photo.caption);
    setEditCategory(photo.category);
    setShowEditModal(true);
  };

  const saveEditPhoto = () => {
    if (!currentPhoto) return;

    setPhotos(prevPhotos =>
      prevPhotos.map(photo =>
        photo.id === currentPhoto.id
          ? { ...photo, caption: editCaption, category: editCategory }
          : photo
      )
    );

    setShowEditModal(false);
    toast({
      title: "Photo Updated",
      description: "The photo details have been updated.",
    });
  };

  const toggleFavorite = (id: string) => {
    setPhotos(prevPhotos =>
      prevPhotos.map(photo =>
        photo.id === id
          ? { ...photo, isFavorite: !photo.isFavorite }
          : photo
      )
    );
  };

  const filterPhotos = () => {
    let filtered = [...photos];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(photo =>
        photo.caption.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter(photo => photo.category === activeCategory);
    }

    // Apply sorting
    switch (sortOption) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'favorites':
        filtered = filtered.filter(photo => photo.isFavorite);
        break;
    }

    setFilteredPhotos(filtered);
  };

  return {
    photos,
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
  };
};
