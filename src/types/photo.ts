
export interface Photo {
  id: string;
  src: string;
  caption: string;
  category: string;
  date: string;
  isFavorite?: boolean;
}

export const photoCategories = [
  { id: 'all', name: 'All Photos' },
  { id: 'favorites', name: 'Favorites' },
  { id: 'milestones', name: 'Milestones' },
  { id: 'family', name: 'Family' },
  { id: 'medical', name: 'Medical' },
  { id: 'ultrasound', name: 'Ultrasound' },
  { id: 'uncategorized', name: 'Uncategorized' },
];
