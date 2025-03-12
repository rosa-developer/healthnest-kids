
export interface Milestone {
  id: string;
  title: string;
  description: string;
  category: string;
  ageRange: string;
  completed: boolean;
  date?: string;
}

export interface MilestoneCategory {
  id: string;
  name: string;
  icon: string;
}
