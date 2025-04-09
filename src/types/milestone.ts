
import { LucideIcon } from 'lucide-react';

export interface Milestone {
  id: string;
  title: string;
  category: string;
  ageRange: string;
  icon: LucideIcon | string;
  description: string;
  completed: boolean;
  date?: string;
  notes?: string;
  media?: {
    type: string;
    url: string;
  }[];
  completedDate?: string;
}

export interface MilestoneCategory {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
}

export const milestoneCategories = [
  { id: 'all', name: 'All Milestones' },
  { id: 'physical', name: 'Physical Development' },
  { id: 'cognitive', name: 'Cognitive Development' },
  { id: 'social', name: 'Social & Emotional' },
  { id: 'language', name: 'Language & Communication' },
  { id: 'custom', name: 'Custom Milestones' },
];
