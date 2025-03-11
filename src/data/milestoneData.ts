
import { Milestone, MilestoneCategory } from "../types/milestone";
import { Brain } from 'lucide-react';

// Milestone categories
export const milestoneCategories: MilestoneCategory[] = [
  {
    id: 'physical',
    name: 'Physical Development',
    icon: Brain,
    color: 'bg-healthnest-soft-purple text-purple-500',
  },
  {
    id: 'cognitive',
    name: 'Cognitive Development',
    icon: Brain,
    color: 'bg-healthnest-soft-blue text-healthnest-primary',
  },
  {
    id: 'social',
    name: 'Social & Emotional',
    icon: Brain,
    color: 'bg-healthnest-soft-pink text-pink-500',
  },
  {
    id: 'language',
    name: 'Language & Communication',
    icon: Brain,
    color: 'bg-healthnest-soft-green text-green-500',
  },
];

// Mock milestone data for 6-9 month old
export const mockMilestones: Milestone[] = [
  {
    id: '1',
    category: 'physical',
    title: 'Sits without support',
    description: 'Baby can maintain a sitting position without needing support from pillows or caregivers.',
    ageRange: '6-8 months',
    completed: true,
    date: '2023-04-02',
    notes: 'Emma started sitting without support during playtime.'
  },
  {
    id: '2',
    category: 'physical',
    title: 'Crawls',
    description: 'Baby moves around on hands and knees or by pulling body forward with arms.',
    ageRange: '7-10 months',
    completed: true,
    date: '2023-04-10',
    notes: 'Began army-crawling, then progressed to hands-and-knees crawling.'
  },
  {
    id: '3',
    category: 'physical',
    title: 'Pulls to stand',
    description: 'Baby can pull up to a standing position by holding onto furniture or support.',
    ageRange: '8-10 months',
    completed: false
  },
  {
    id: '4',
    category: 'cognitive',
    title: 'Looks for hidden objects',
    description: 'Baby searches for objects that are hidden from view, showing object permanence.',
    ageRange: '7-9 months',
    completed: true,
    date: '2023-03-15',
    notes: 'Started looking for toys when they were hidden under a blanket.'
  },
  {
    id: '5',
    category: 'cognitive',
    title: 'Explores objects',
    description: 'Baby examines objects by turning, shaking, mouthing, and banging them.',
    ageRange: '6-9 months',
    completed: true,
    date: '2023-02-20',
    notes: 'Loves to examine toys, put them in mouth, and bang them together.'
  },
  {
    id: '6',
    category: 'social',
    title: 'Shows anxiety with strangers',
    description: 'Baby becomes anxious or fearful around unfamiliar people, showing stranger anxiety.',
    ageRange: '6-10 months',
    completed: false
  },
  {
    id: '7',
    category: 'language',
    title: 'Babbles with consonant sounds',
    description: 'Baby produces consonant sounds in repetitive patterns, such as "baba" or "dada".',
    ageRange: '6-9 months',
    completed: true,
    date: '2023-03-10',
    notes: 'Started making "ba", "da", and "ma" sounds regularly.'
  },
  {
    id: '8',
    category: 'language',
    title: 'Responds to own name',
    description: 'Baby turns head or looks when their name is called.',
    ageRange: '6-9 months',
    completed: true,
    date: '2023-02-28',
    notes: 'Consistently turns head when called by name.'
  }
];
