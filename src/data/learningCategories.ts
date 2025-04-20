
import { Book, Brain, Palette, Award, Lightbulb } from 'lucide-react';
import React from 'react';

export interface LearningSkill {
  name: string;
  age: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface LearningCategory {
  id: string;
  name: string;
  icon: React.ReactNode | (() => React.ReactNode);
  description: string;
  skills: LearningSkill[];
}

// Helper function to create icon renderer functions
const createIconRenderer = (Icon: any, className: string) => {
  return () => React.createElement(Icon, { className });
};

export const learningCategories: LearningCategory[] = [
  { 
    id: "cognitive", 
    name: "Cognitive Skills", 
    icon: createIconRenderer(Brain, "h-6 w-6 text-indigo-500"),
    description: "Track problem-solving, memory, and thinking skills",
    skills: [
      { name: "Object Permanence", age: "4-8 months", status: "completed" },
      { name: "Cause and Effect", age: "6-12 months", status: "completed" },
      { name: "Sorting & Categorizing", age: "12-18 months", status: "in-progress" },
      { name: "Number Recognition", age: "24-36 months", status: "upcoming" },
      { name: "Pattern Recognition", age: "36-48 months", status: "upcoming" }
    ]
  },
  { 
    id: "language", 
    name: "Language Development", 
    icon: createIconRenderer(Book, "h-6 w-6 text-blue-500"),
    description: "Monitor speech, vocabulary, and communication progress",
    skills: [
      { name: "First Words", age: "10-14 months", status: "completed" },
      { name: "Two-Word Phrases", age: "18-24 months", status: "in-progress" },
      { name: "Complete Sentences", age: "30-36 months", status: "upcoming" },
      { name: "Storytelling", age: "36-48 months", status: "upcoming" },
      { name: "Reading Readiness", age: "48-60 months", status: "upcoming" }
    ]
  },
  { 
    id: "motor", 
    name: "Fine Motor Skills", 
    icon: createIconRenderer(Palette, "h-6 w-6 text-pink-500"),
    description: "Track drawing, writing, and hand coordination",
    skills: [
      { name: "Grasping Objects", age: "3-6 months", status: "completed" },
      { name: "Pincer Grasp", age: "9-12 months", status: "completed" },
      { name: "Scribbling", age: "12-18 months", status: "in-progress" },
      { name: "Drawing Lines", age: "24-30 months", status: "upcoming" },
      { name: "Using Scissors", age: "36-48 months", status: "upcoming" }
    ]
  },
  { 
    id: "social", 
    name: "Social Learning", 
    icon: createIconRenderer(Award, "h-6 w-6 text-amber-500"),
    description: "Monitor interaction, sharing, and emotional understanding",
    skills: [
      { name: "Social Smiling", age: "2-3 months", status: "completed" },
      { name: "Separation Anxiety", age: "8-14 months", status: "completed" },
      { name: "Parallel Play", age: "18-24 months", status: "in-progress" },
      { name: "Cooperative Play", age: "30-36 months", status: "upcoming" },
      { name: "Understand Rules", age: "36-48 months", status: "upcoming" }
    ]
  },
  { 
    id: "activities", 
    name: "Learning Activities", 
    icon: createIconRenderer(Lightbulb, "h-6 w-6 text-yellow-500"),
    description: "Age-appropriate educational activities and resources",
    skills: [
      { name: "Sensory Play", age: "0-12 months", status: "completed" },
      { name: "Music & Rhythm", age: "6-18 months", status: "in-progress" },
      { name: "Picture Books", age: "12-24 months", status: "in-progress" },
      { name: "Counting Games", age: "24-36 months", status: "upcoming" },
      { name: "STEM Activities", age: "36-60 months", status: "upcoming" }
    ]
  }
];
