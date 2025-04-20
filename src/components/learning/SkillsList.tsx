
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LearningCategory } from '@/data/learningCategories';

interface SkillsListProps {
  category: LearningCategory;
}

const SkillsList: React.FC<SkillsListProps> = ({ category }) => {
  const renderSkillStatus = (status: string) => {
    switch(status) {
      case 'completed':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Completed
        </span>;
      case 'in-progress':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          In Progress
        </span>;
      case 'upcoming':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          Upcoming
        </span>;
      default:
        return null;
    }
  };

  return (
    <Card className="h-full bg-gradient-to-br from-white to-primary-purple/5 dark:from-gray-900 dark:to-primary-purple/10">
      <CardHeader>
        <div className="flex items-center space-x-3">
          {category.icon}
          <CardTitle>{category.name}</CardTitle>
        </div>
        <CardDescription>{category.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Developmental Skills</h3>
          <ul className="space-y-4">
            {category.skills.map((skill, index) => (
              <li key={index} className="p-4 rounded-xl border border-primary-purple/20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 transition-all duration-300 hover:border-primary-purple/40 hover:shadow-md">
                <div>
                  <div className="font-medium">{skill.name}</div>
                  <div className="text-sm text-muted-foreground">Expected age: {skill.age}</div>
                </div>
                <div className="flex items-center space-x-2">
                  {renderSkillStatus(skill.status)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          size="sm"
          className="border-primary-purple/30 hover:bg-primary-purple/10 text-primary-purple"
        >
          Record New Progress
        </Button>
        <Button 
          size="sm"
          className="bg-gradient-to-r from-primary-purple to-primary-pink hover:opacity-90"
        >
          Add Custom Skill
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SkillsList;
