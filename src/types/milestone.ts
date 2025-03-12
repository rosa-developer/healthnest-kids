
export interface Milestone {
  id: string;
  category: string;
  title: string;
  description: string;
  ageRange: string;
  completed: boolean;
  completedDate?: string;
  notes?: string;
}
