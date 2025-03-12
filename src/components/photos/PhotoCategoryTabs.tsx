
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { photoCategories } from '@/types/photo';

interface PhotoCategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const PhotoCategoryTabs: React.FC<PhotoCategoryTabsProps> = ({ 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <Tabs 
      defaultValue="all" 
      value={activeCategory}
      onValueChange={onCategoryChange}
      className="mb-6"
    >
      <TabsList className="w-full overflow-x-auto flex justify-start sm:justify-center no-scrollbar p-1">
        {photoCategories.map(category => (
          <TabsTrigger 
            key={category.id} 
            value={category.id}
            className="min-w-24"
          >
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default PhotoCategoryTabs;
