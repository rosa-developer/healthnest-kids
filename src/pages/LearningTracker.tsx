
import React, { useState } from 'react';
import { Book, GraduationCap, Lightbulb, Award, Brain, Palette } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useBabyGrowthAdvice } from '@/hooks/useWordPress';

const LearningTracker: React.FC = () => {
  const [activeTab, setActiveTab] = useState("cognitive");
  const { advice, isLoading } = useBabyGrowthAdvice();

  // Learning categories with their icons
  const learningCategories = [
    { 
      id: "cognitive", 
      name: "Cognitive Skills", 
      icon: <Brain className="h-6 w-6 text-indigo-500" />,
      description: "Track problem-solving, memory, and thinking skills",
      skills: [
        { name: "Object Permanence", age: "4-8 months", status: "completed" },
        { name: "Cause and Effect", age: "6-12 months", status: "completed" },
        { name: "Sorting & Categorizing", age: "12-18 months", status: "in-progress" },
        { name: "Number Recognition", age: "24-36 months", status: "upcoming" },
        { name: "Pattern Recognition", age: "36-48 months", status: "upcoming" },
      ]
    },
    { 
      id: "language", 
      name: "Language Development", 
      icon: <Book className="h-6 w-6 text-blue-500" />,
      description: "Monitor speech, vocabulary, and communication progress",
      skills: [
        { name: "First Words", age: "10-14 months", status: "completed" },
        { name: "Two-Word Phrases", age: "18-24 months", status: "in-progress" },
        { name: "Complete Sentences", age: "30-36 months", status: "upcoming" },
        { name: "Storytelling", age: "36-48 months", status: "upcoming" },
        { name: "Reading Readiness", age: "48-60 months", status: "upcoming" },
      ]
    },
    { 
      id: "motor", 
      name: "Fine Motor Skills", 
      icon: <Palette className="h-6 w-6 text-pink-500" />,
      description: "Track drawing, writing, and hand coordination",
      skills: [
        { name: "Grasping Objects", age: "3-6 months", status: "completed" },
        { name: "Pincer Grasp", age: "9-12 months", status: "completed" },
        { name: "Scribbling", age: "12-18 months", status: "in-progress" },
        { name: "Drawing Lines", age: "24-30 months", status: "upcoming" },
        { name: "Using Scissors", age: "36-48 months", status: "upcoming" },
      ]
    },
    { 
      id: "social", 
      name: "Social Learning", 
      icon: <Award className="h-6 w-6 text-amber-500" />,
      description: "Monitor interaction, sharing, and emotional understanding",
      skills: [
        { name: "Social Smiling", age: "2-3 months", status: "completed" },
        { name: "Separation Anxiety", age: "8-14 months", status: "completed" },
        { name: "Parallel Play", age: "18-24 months", status: "in-progress" },
        { name: "Cooperative Play", age: "30-36 months", status: "upcoming" },
        { name: "Understand Rules", age: "36-48 months", status: "upcoming" },
      ]
    },
    { 
      id: "activities", 
      name: "Learning Activities", 
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
      description: "Age-appropriate educational activities and resources",
      skills: [
        { name: "Sensory Play", age: "0-12 months", status: "completed" },
        { name: "Music & Rhythm", age: "6-18 months", status: "in-progress" },
        { name: "Picture Books", age: "12-24 months", status: "in-progress" },
        { name: "Counting Games", age: "24-36 months", status: "upcoming" },
        { name: "STEM Activities", age: "36-60 months", status: "upcoming" },
      ]
    },
  ];

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

  const activeCategory = learningCategories.find(cat => cat.id === activeTab);

  return (
    <div className="container max-w-screen-xl mx-auto pt-20 pb-32 px-4 md:px-6">
      {/* Header Section */}
      <div className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 p-6 rounded-2xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Learning Tracker</h1>
            <p className="text-muted-foreground max-w-lg">
              Track your child's educational journey, cognitive development, and learning milestones in one place.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-10 w-10 text-indigo-500 animate-bounce-slow" />
          </div>
        </div>
      </div>

      {/* Learning Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {learningCategories.map((category) => (
          <Card 
            key={category.id}
            className={`cursor-pointer transition-all hover:shadow-md hover:-translate-y-1 ${
              activeTab === category.id 
                ? 'border-2 border-indigo-500 dark:border-indigo-400 shadow-md' 
                : 'border border-border hover:border-indigo-200 dark:hover:border-indigo-800'
            }`}
            onClick={() => setActiveTab(category.id)}
          >
            <CardHeader className="p-4 pb-2">
              <div className="flex items-center justify-between">
                {category.icon}
                {activeTab === category.id && (
                  <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></div>
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
        ))}
      </div>

      {/* Learning Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Skills Column */}
        <div className="col-span-2">
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center space-x-3">
                {activeCategory?.icon}
                <CardTitle>{activeCategory?.name}</CardTitle>
              </div>
              <CardDescription>{activeCategory?.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Developmental Skills</h3>
                <ul className="space-y-4">
                  {activeCategory?.skills.map((skill, index) => (
                    <li key={index} className="p-4 rounded-lg border border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
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
              <Button variant="outline" size="sm">Record New Progress</Button>
              <Button size="sm">Add Custom Skill</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Resources Column */}
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                Resources & Tips
              </CardTitle>
              <CardDescription>
                Age-appropriate learning resources and advice
              </CardDescription>
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
                  
                  <div className="p-4 rounded-lg bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-800/20">
                    <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                      <Book className="h-4 w-4" />
                      Recommended Activities
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-500 mt-1.5"></span>
                        <span>Interactive storytelling with picture books</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-500 mt-1.5"></span>
                        <span>Sorting games with shapes and colors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-500 mt-1.5"></span>
                        <span>Sensory bins for tactile exploration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View More Learning Resources</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Learning Progress Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Learning Progress</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Monthly Progress Overview</CardTitle>
            <CardDescription>Track the development across all learning domains</CardDescription>
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
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">Previous Month</Button>
            <Button variant="outline" size="sm">Next Month</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LearningTracker;
