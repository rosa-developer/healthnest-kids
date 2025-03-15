
export interface ChildProfile {
  id: string;
  name: string;
  age: string;
  isActive: boolean;
}

// Mock child profiles for demo
export const mockProfiles = [
  { id: '1', name: 'Emma', age: '8 months', isActive: true },
  { id: '2', name: 'Noah', age: '2 years', isActive: false },
  { id: '3', name: 'Oliver', age: 'Pregnancy (24 weeks)', isActive: false }
];
