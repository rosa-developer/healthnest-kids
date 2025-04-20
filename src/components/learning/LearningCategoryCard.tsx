
import React from 'react';
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { LearningCategory } from '@/data/learningCategories';

interface LearningCategoryCardProps {
  category: LearningCategory;
  isActive: boolean;
  onClick: () => void;
}

const LearningCategoryCard: React.FC<LearningCategoryCardProps> = ({
  category,
  isActive,
  onClick
}) => {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
        isActive 
          ? 'border-2 border-primary-purple shadow-md bg-gradient-to-br from-primary-purple/10 to-transparent' 
          : 'border border-border hover:border-primary-purple/30'
      }`}
      onClick={onClick}
    >
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center justify-between">
          {category.icon}
          {isActive && (
            <div className="h-2 w-2 rounded-full bg-primary-purple animate-pulse"></div>
          )}
        </div>
        <CardTitle className="text-md mt-2">{category.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <CardDescription className="text-xs h-10">
          {category.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default LearningCategoryCard;
