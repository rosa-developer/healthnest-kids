
export type Milestone = {
  id: string;
  category: string;
  title: string;
  ageRange: string;
  completed: boolean;
  date?: string;
  notes?: string;
};

export type MilestoneCategory = {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
};
