
export interface Photo {
  id: string;
  src: string;
  caption: string;
  category: string;
  date: string;
}

export const photoCategories = [
  { id: 'all', name: 'All Photos' },
  { id: 'favorites', name: 'Favorites' },
  { id: 'family', name: 'Family' },
  { id: 'milestones', name: 'Milestones' },
  { id: 'activities', name: 'Activities' },
  { id: 'other', name: 'Other' },
];
