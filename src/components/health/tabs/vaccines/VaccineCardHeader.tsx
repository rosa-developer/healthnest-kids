
import React from 'react';
import { CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck } from 'lucide-react';

const VaccineCardHeader: React.FC = () => {
  return (
    <CardHeader className="pb-4 border-b bg-gradient-to-r from-purple-50/80 to-transparent dark:from-purple-900/20 dark:to-transparent">
      <CardTitle className="text-lg flex items-center">
        <ShieldCheck className="h-5 w-5 mr-2 text-purple-500" />
        Vaccination Schedule
      </CardTitle>
    </CardHeader>
  );
};

export default VaccineCardHeader;
