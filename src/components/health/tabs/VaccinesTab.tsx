
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Activity, Clock, Calendar, ChevronRight, Bell } from 'lucide-react';

const VaccinesTab = () => {
  return (
    <div className="p-6">
      <Card className="border-none shadow-none overflow-hidden bg-transparent">
        <CardHeader className="pb-4 border-b bg-gradient-to-r from-purple-50/80 to-transparent">
          <CardTitle className="text-lg flex items-center">
            <ShieldCheck className="h-5 w-5 mr-2 text-purple-500" />
            Vaccination Schedule
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-6">
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
          
          <div className="mt-8 pt-4 border-t border-border/50">
            <Button variant="outline" className="w-full border-dashed border-purple-200 text-purple-700 bg-purple-50/50 hover:bg-purple-100/50 hover:border-purple-300 h-auto py-3">
              <Calendar className="h-4 w-4 mr-2" />
              View Full Vaccination Schedule
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
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
    <div className={`flex items-center p-5 rounded-xl transition-all duration-300 ${
      isUpcoming 
        ? 'bg-gradient-to-r from-green-50 to-green-100/50 border border-green-200 shadow hover:shadow-md' 
        : 'bg-white border border-border/30 shadow-sm hover:shadow hover:border-border'
    }`}>
      <div className={`h-12 w-12 rounded-full ${
        isUpcoming 
          ? 'bg-white border border-green-200' 
          : 'bg-purple-50 border border-purple-100'
        } flex items-center justify-center mr-4 shadow-sm`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center">
          <h3 className="font-medium">{title}</h3>
          <div className={`ml-2 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
            isUpcoming 
              ? 'bg-green-100 text-green-700 border border-green-200' 
              : 'bg-purple-100 text-purple-700 border border-purple-200'
          }`}>
            {isUpcoming ? 'Upcoming' : 'Complete'}
          </div>
        </div>
        <div className="flex items-center mt-1.5">
          {isUpcoming 
            ? <Clock className="h-3.5 w-3.5 text-muted-foreground mr-1.5" />
            : <Calendar className="h-3.5 w-3.5 text-muted-foreground mr-1.5" />
          }
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </div>
      {isUpcoming && 
        <Button size="sm" variant="outline" className="shadow-sm border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800">
          <Bell className="h-3.5 w-3.5 mr-1.5" />
          Remind
        </Button>
      }
    </div>
  );
};

export default VaccinesTab;
