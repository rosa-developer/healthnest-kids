
export interface Milestone {
  id: string;
  title: string;
  description: string;
  category: string;
  ageRange: string;
  completed: boolean;
  date?: string;
  notes?: string;
  mediaUrls?: string[];
}

export const milestoneCategories = [
  { id: 'all', name: 'All Milestones' },
  { id: 'physical', name: 'Physical' },
  { id: 'cognitive', name: 'Cognitive' },
  { id: 'social', name: 'Social' },
  { id: 'language', name: 'Language' },
  { id: 'other', name: 'Other' }
];
