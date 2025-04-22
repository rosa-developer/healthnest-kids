
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
    date: new Date('2024-04-15'),
    weight: 8.5,
    height: 71.2,
    headCircumference: 44.1,
    notes: 'Regular checkup. Growing well according to growth charts.',
    childId: '1'
  },
  {
    id: '2',
    date: new Date('2024-03-12'),
    weight: 8.1,
    height: 69.8,
    headCircumference: 43.5,
    notes: 'Started on solid foods. Weight gain is steady.',
    childId: '1'
  },
  {
    id: '3',
    date: new Date('2024-02-15'),
    weight: 7.6,
    height: 68.3,
    headCircumference: 42.8,
    notes: 'Healthy development, meeting all milestones.',
    childId: '1'
  },
  {
    id: '4',
    date: new Date('2024-01-18'),
    weight: 7.2,
    height: 66.5,
    headCircumference: 42.1,
    notes: 'Regular growth pattern continues.',
    childId: '1'
  },
  {
    id: '5',
    date: new Date('2023-12-20'),
    weight: 6.8,
    height: 65.0,
    headCircumference: 41.5,
    notes: 'First vaccinations complete. Growing as expected.',
    childId: '1'
  }
];
