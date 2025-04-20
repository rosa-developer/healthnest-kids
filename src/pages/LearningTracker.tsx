
import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { learningCategories } from '@/data/learningCategories';
import LearningCategoryCard from '@/components/learning/LearningCategoryCard';
import SkillsList from '@/components/learning/SkillsList';
import ResourcesSection from '@/components/learning/ResourcesSection';

const LearningTracker: React.FC = () => {
  const [activeTab, setActiveTab] = useState("cognitive");
  const activeCategory = learningCategories.find(cat => cat.id === activeTab);

  return (
    <div className="container max-w-screen-xl mx-auto pt-20 pb-32 px-4 md:px-6">
      {/* Header Section */}
      <div className="mb-8 bg-gradient-to-br from-primary-purple/20 via-primary-blue/10 to-primary-pink/20 dark:from-primary-purple/10 dark:via-primary-blue/5 dark:to-primary-pink/10 p-8 rounded-3xl border border-primary-purple/20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary-purple via-primary-blue to-primary-pink bg-clip-text text-transparent">
              Learning Tracker
            </h1>
            <p className="text-lg text-foreground/80 max-w-lg">
              Track your child's educational journey, cognitive development, and learning milestones in one place.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-12 w-12 text-primary-purple animate-bounce-slow" />
          </div>
        </div>
      </div>

      {/* Learning Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {learningCategories.map((category) => (
          <LearningCategoryCard
            key={category.id}
            category={category}
            isActive={activeTab === category.id}
            onClick={() => setActiveTab(category.id)}
          />
        ))}
      </div>

      {/* Learning Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Skills Column */}
        <div className="col-span-2">
          {activeCategory && <SkillsList category={activeCategory} />}
        </div>

        {/* Resources Column */}
        <div>
          <ResourcesSection />
        </div>
      </div>
    </div>
  );
};

export default LearningTracker;
