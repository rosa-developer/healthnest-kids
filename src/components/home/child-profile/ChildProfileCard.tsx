
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ChildProfileHeader from './ChildProfileHeader';
import ChildProfileInfo from './ChildProfileInfo';
import GrowthStats from './growth-stats/GrowthStats';

const ChildProfileCard = () => {
  return (
    <div className="mb-6">
      <ChildProfileHeader />

      <Card className="border border-border shadow-soft overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col sm:flex-row">
            <ChildProfileInfo />
            <GrowthStats />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChildProfileCard;
