
import React from 'react';
import { MilestoneCategory } from '@/types/milestone';

interface CategorySelectorProps {
  categories: MilestoneCategory[];
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
  getCompletedCount: (categoryId: string) => number;
  getTotalCount: (categoryId: string) => number;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  getCompletedCount,
  getTotalCount
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {categories.map(category => (
        <div 
          key={category.id}
          className={`p-3 rounded-lg border cursor-pointer transition-colors ${
            activeCategory === category.id 
              ? 'bg-white border-healthnest-primary shadow-soft' 
              : 'bg-healthnest-neutral border-transparent hover:bg-healthnest-neutral-dark'
          }`}
          onClick={() => onSelectCategory(category.id)}
        >
          <div className={`h-8 w-8 rounded-full ${category.color} flex items-center justify-center mb-2`}>
            <category.icon className="h-4 w-4" />
          </div>
          <h4 className="text-sm font-medium line-clamp-1">{category.name}</h4>
          <p className="text-xs text-muted-foreground">
            {getCompletedCount(category.id)}/{getTotalCount(category.id)} completed
          </p>
        </div>
      ))}
    </div>
  );
};

export default CategorySelector;
