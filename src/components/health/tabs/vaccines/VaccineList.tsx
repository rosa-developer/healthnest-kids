
import React from 'react';
import { ShieldCheck, Activity } from 'lucide-react';
import VaccineItem from './VaccineItem';

const VaccineList: React.FC = () => {
  return (
    <div className="space-y-4">
      <VaccineItem 
        title="9-Month Vaccines"
        status="upcoming"
        date="Due in 4 weeks"
        icon={<Activity className="h-5 w-5 text-green-500" />}
      />

      <VaccineItem 
        title="6-Month Vaccines"
        status="complete"
        date="Completed on Feb 10, 2023"
        icon={<ShieldCheck className="h-5 w-5 text-purple-500" />}
      />

      <VaccineItem 
        title="4-Month Vaccines"
        status="complete"
        date="Completed on Dec 15, 2022"
        icon={<ShieldCheck className="h-5 w-5 text-purple-500" />}
      />
    </div>
  );
};

export default VaccineList;
