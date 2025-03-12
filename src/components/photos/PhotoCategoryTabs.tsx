
import React from 'react';
import { photoCategories } from '@/types/photo';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface PhotoCategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const PhotoCategoryTabs: React.FC<PhotoCategoryTabsProps> = ({ 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex items-center space-x-1 overflow-x-auto pb-2 hide-scrollbar">
      <Button
        variant={activeCategory === 'all' ? "default" : "ghost"}
        size="sm"
        onClick={() => onCategoryChange('all')}
        className={cn(
          "rounded-lg whitespace-nowrap",
          activeCategory === 'all' ? "bg-primary text-primary-foreground" : ""
        )}
      >
        All Photos
      </Button>
      
      {photoCategories.map(category => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "default" : "ghost"}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "rounded-lg whitespace-nowrap transition-all duration-300",
            activeCategory === category.id 
              ? `bg-primary text-primary-foreground` 
              : ""
          )}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default PhotoCategoryTabs;
