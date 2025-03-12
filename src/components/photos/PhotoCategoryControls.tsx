
import React from 'react';
import PhotoCategoryTabs from './PhotoCategoryTabs';
import ViewModeToggle from './ViewModeToggle';

interface PhotoCategoryControlsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const PhotoCategoryControls: React.FC<PhotoCategoryControlsProps> = ({ 
  activeCategory, 
  setActiveCategory
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <PhotoCategoryTabs 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <ViewModeToggle />
    </div>
  );
};

export default PhotoCategoryControls;
