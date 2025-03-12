
export interface Photo {
  id: string;
  src: string;
  caption: string;
  category: string;
  date: string;
  favorite?: boolean;
}

export const photoCategories = [
  { id: 'favorites', name: 'Favorites' },
  { id: 'family', name: 'Family' },
  { id: 'events', name: 'Events' },
  { id: 'outdoor', name: 'Outdoor' },
  { id: 'baby', name: 'Baby' },
  { id: 'milestones', name: 'Milestones' },
  { id: 'uncategorized', name: 'Uncategorized' }
];
