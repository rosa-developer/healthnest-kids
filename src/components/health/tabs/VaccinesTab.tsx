
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Activity, Clock, Calendar } from 'lucide-react';

const VaccinesTab = () => {
  return (
    <Card className="border border-border shadow-soft overflow-hidden">
      <CardHeader className="pb-2 border-b bg-gradient-to-r from-healthnest-soft-blue/50 to-muted">
        <CardTitle className="text-lg flex items-center">
          <ShieldCheck className="h-5 w-5 mr-2 text-healthnest-primary" />
          Vaccination Schedule
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
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
            icon={<ShieldCheck className="h-5 w-5 text-healthnest-primary" />}
          />

          <VaccineItem 
            title="4-Month Vaccines"
            status="complete"
            date="Completed on Dec 15, 2022"
            icon={<ShieldCheck className="h-5 w-5 text-healthnest-primary" />}
          />
        </div>
      </CardContent>
    </Card>
  );
};

interface VaccineItemProps {
  title: string;
  status: 'upcoming' | 'complete';
  date: string;
  icon: React.ReactNode;
}

const VaccineItem: React.FC<VaccineItemProps> = ({ title, status, date, icon }) => {
  const isUpcoming = status === 'upcoming';
  
  return (
    <div className={`flex items-center p-4 ${
      isUpcoming 
        ? 'bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/10 rounded-xl border border-green-200 dark:border-green-800/30' 
        : 'bg-white rounded-xl border border-border shadow-sm'
    }`}>
      <div className={`h-12 w-12 rounded-full ${
        isUpcoming 
          ? 'bg-white border border-green-200' 
          : 'bg-healthnest-soft-blue'
        } flex items-center justify-center mr-4 shadow-sm`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center">
          <h3 className="font-medium">{title}</h3>
          <div className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold ${
            isUpcoming 
              ? 'bg-green-100 text-green-700 border border-green-200' 
              : 'bg-healthnest-soft-blue text-healthnest-primary border border-healthnest-primary/20'
          }`}>
            {isUpcoming ? 'Upcoming' : 'Complete'}
          </div>
        </div>
        <div className="flex items-center mt-1">
          {isUpcoming 
            ? <Clock className="h-3.5 w-3.5 text-muted-foreground mr-1" />
            : <Calendar className="h-3.5 w-3.5 text-muted-foreground mr-1" />
          }
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </div>
      {isUpcoming && <Button size="sm" variant="outline" className="shadow-sm">Remind</Button>}
    </div>
  );
};

export default VaccinesTab;
