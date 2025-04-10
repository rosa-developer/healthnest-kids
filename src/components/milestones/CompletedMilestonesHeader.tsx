
import React from 'react';
import { CardTitle } from "@/components/ui/card";
import { Check } from 'lucide-react';

const CompletedMilestonesHeader: React.FC = () => {
  return (
    <CardTitle className="text-lg flex items-center">
      <Check className="h-5 w-5 mr-2 text-green-500" />
      Completed Milestones
    </CardTitle>
  );
};

export default CompletedMilestonesHeader;
