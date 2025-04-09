
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight } from 'lucide-react';

const ScheduleButton: React.FC = () => {
  return (
    <div className="mt-8 pt-4 border-t border-border/50">
      <Button variant="outline" className="w-full border-dashed border-purple-200 text-purple-700 bg-purple-50/50 hover:bg-purple-100/50 hover:border-purple-300 h-auto py-3">
        <Calendar className="h-4 w-4 mr-2" />
        View Full Vaccination Schedule
        <ChevronRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default ScheduleButton;
