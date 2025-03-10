
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from 'lucide-react';

const UpcomingMilestonesPreview: React.FC = () => {
  return (
    <Card className="border border-border shadow-soft">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-healthnest-primary" />
          Upcoming Milestones
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-3 bg-healthnest-soft-blue rounded-lg">
            <h4 className="font-medium mb-1">9-12 Month Milestones</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-white/80 flex items-center justify-center mr-2 mt-0.5">
                  <span className="text-xs text-healthnest-primary">•</span>
                </div>
                <p className="text-sm">Stands alone without support</p>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-white/80 flex items-center justify-center mr-2 mt-0.5">
                  <span className="text-xs text-healthnest-primary">•</span>
                </div>
                <p className="text-sm">Takes first steps</p>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-white/80 flex items-center justify-center mr-2 mt-0.5">
                  <span className="text-xs text-healthnest-primary">•</span>
                </div>
                <p className="text-sm">Says first word</p>
              </li>
            </ul>
          </div>
          
          <Button variant="link" className="text-healthnest-primary p-0 h-auto">
            View all upcoming milestones <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingMilestonesPreview;
