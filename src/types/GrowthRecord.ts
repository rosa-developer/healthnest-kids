
export interface GrowthRecord {
  id: string;
  date: Date;
  weight?: number;
  height?: number;
  headCircumference?: number;
  notes?: string;
  childId: string;
}

export const mockGrowthRecords: GrowthRecord[] = [
  {
    id: '1',
    date: new Date('2023-05-10'),
    weight: 8.2,
    height: 68,
    headCircumference: 42.5,
    notes: 'Regular checkup with Dr. Johnson',
    childId: '1'
  },
  {
    id: '2',
    date: new Date('2023-04-12'),
    weight: 7.8,
    height: 65.5,
    headCircumference: 41.8,
    notes: 'Healthy growth pattern',
    childId: '1'
  },
  {
    id: '3',
    date: new Date('2023-03-15'),
    weight: 7.3,
    height: 64,
    headCircumference: 41.2,
    notes: 'Growing according to chart',
    childId: '1'
  }
];
