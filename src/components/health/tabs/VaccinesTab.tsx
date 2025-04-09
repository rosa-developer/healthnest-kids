
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import VaccineCardHeader from './vaccines/VaccineCardHeader';
import VaccineList from './vaccines/VaccineList';
import ScheduleButton from './vaccines/ScheduleButton';

const VaccinesTab = () => {
  return (
    <div className="p-6">
      <Card className="border-none shadow-none overflow-hidden bg-transparent">
        <VaccineCardHeader />
        <CardContent className="p-4 pt-6">
          <VaccineList />
          <ScheduleButton />
        </CardContent>
      </Card>
    </div>
  );
};

export default VaccinesTab;
