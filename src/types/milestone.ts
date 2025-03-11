
import { ElementType } from 'react';

export interface Milestone {
  id: string;
  title: string;
  description: string;
  category: string;
  ageRange: string;
  completed: boolean;
  date?: string;
  notes?: string;
}

export interface MilestoneCategory {
  id: string;
  name: string;
  icon: ElementType;
  color: string;
}
