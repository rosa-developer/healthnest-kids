
import React, { useState } from 'react';
import { GraduationCap, Book } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useBabyGrowthAdvice } from '@/hooks/useWordPress';
import { learningCategories } from '@/data/learningCategories';
import LearningCategoryCard from '@/components/learning/LearningCategoryCard';
import SkillsList from '@/components/learning/SkillsList';

const LearningTracker: React.FC = () => {
  const [activeTab, setActiveTab] = useState("cognitive");
  const { advice, isLoading } = useBabyGrowthAdvice();

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
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Book className="h-5 w-5 text-yellow-500" />
                Resources & Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {isLoading ? (
                <div className="flex items-center justify-center h-40">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  {advice && advice.slice(0, 3).map((post, index) => (
                    <div key={index} className="p-3 rounded-lg border border-border hover:border-indigo-200 dark:hover:border-indigo-800 transition-all">
                      <h4 className="font-medium text-sm mb-1" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                      <p className="text-xs text-muted-foreground line-clamp-2" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Learning Progress Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text text-transparent">
          Learning Progress
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Monthly Progress Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[200px] flex items-center justify-center">
              <div className="text-muted-foreground text-sm flex flex-col items-center">
                <GraduationCap className="h-12 w-12 mb-2 text-muted-foreground/50" />
                <span>Progress chart visualization will appear here</span>
                <span className="text-xs">Track more skills to see your child's learning journey</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LearningTracker;
