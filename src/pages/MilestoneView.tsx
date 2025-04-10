
import React from 'react';
import { useParams } from 'react-router-dom';

const MilestoneView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div className="container mx-auto pt-6">
      <h1 className="text-2xl font-bold mb-6">Milestone Details</h1>
      <p className="text-muted-foreground">Viewing milestone with ID: {id}</p>
    </div>
  );
};

export default MilestoneView;
