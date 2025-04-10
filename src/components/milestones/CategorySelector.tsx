
import React from 'react';
import { MilestoneCategory } from '@/types/milestone';
import { Brain, Heart, MessageCircle, Baby, PlusCircle, Sparkles } from 'lucide-react';

interface CategorySelectorProps {
  categories: MilestoneCategory[];
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
  getCompletedCount: (categoryId: string) => number;
  getTotalCount: (categoryId: string) => number;
}

const CategorySelectorItem = ({ 
  id, 
  name, 
  icon, 
  isActive, 
  completedCount,
  totalCount,
  onClick
}: { 
  id: string;
  name: string;
  icon: React.ReactNode;
  isActive: boolean;
  completedCount: number;
  totalCount: number;
  onClick: () => void;
}) => {
  const progressPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  
  return (
    <div 
      className={`flex flex-col items-center p-3 rounded-xl cursor-pointer transition-all duration-300 
        ${isActive 
          ? 'bg-gradient-to-br from-indigo-50 to-indigo-100/50 dark:from-indigo-950/40 dark:to-indigo-900/20 border border-indigo-200 dark:border-indigo-800 shadow-sm' 
          : 'hover:bg-gray-50/80 dark:hover:bg-gray-900/50 border border-transparent'
        }`}
      onClick={onClick}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 
        ${isActive 
          ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/70 dark:text-indigo-300' 
          : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
        }`}>
        {icon}
      </div>
      <span className="text-xs font-medium text-center mb-1 line-clamp-1">{name}</span>
      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5 mt-1 overflow-hidden">
        <div 
          className="bg-indigo-500 h-1.5 rounded-full transition-all duration-500" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <span className="text-xs text-muted-foreground mt-1">
        {completedCount}/{totalCount}
      </span>
    </div>
  );
};

const getCategoryIcon = (id: string) => {
  switch (id) {
    case 'physical':
      return <Baby className="w-6 h-6" />;
    case 'cognitive':
      return <Brain className="w-6 h-6" />;
    case 'social':
      return <Heart className="w-6 h-6" />;
    case 'language':
      return <MessageCircle className="w-6 h-6" />;
    case 'custom':
      return <PlusCircle className="w-6 h-6" />;
    case 'all':
      return <Sparkles className="w-6 h-6" />;
    default:
      return <Brain className="w-6 h-6" />;
  }
};

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  getCompletedCount,
  getTotalCount
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
      {categories.map(category => (
        <CategorySelectorItem
          key={category.id}
          id={category.id}
          name={category.name}
          icon={getCategoryIcon(category.id)}
          isActive={activeCategory === category.id}
          completedCount={getCompletedCount(category.id)}
          totalCount={getTotalCount(category.id)}
          onClick={() => onSelectCategory(category.id)}
        />
      ))}
    </div>
  );
};

export default CategorySelector;
