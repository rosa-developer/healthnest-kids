
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Weight, ArrowRight } from 'lucide-react';

const HealthOverview = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Health Overview</h2>
        <Button variant="link" className="text-healthnest-primary">
          View Details <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="border border-border shadow-soft">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center">
              <Activity className="h-5 w-5 mr-2 text-healthnest-primary" />
              Vaccination Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Next vaccination due in:</p>
            <p className="text-2xl font-semibold mt-1">4 weeks</p>
            <div className="mt-2 text-sm flex items-center justify-between">
              <span className="text-healthnest-primary">8 of 12 complete</span>
              <Button variant="link" size="sm" className="p-0 h-auto">
                See Schedule
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border shadow-soft">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center">
              <Weight className="h-5 w-5 mr-2 text-healthnest-primary" />
              Growth Percentile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Weight</span>
                <span className="text-sm font-medium">65th percentile</span>
              </div>
              <div className="w-full bg-healthnest-neutral-dark rounded-full h-2">
                <div className="bg-healthnest-primary h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
              
              <div className="flex items-center justify-between mt-3">
                <span className="text-sm text-muted-foreground">Height</span>
                <span className="text-sm font-medium">70th percentile</span>
              </div>
              <div className="w-full bg-healthnest-neutral-dark rounded-full h-2">
                <div className="bg-healthnest-secondary h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HealthOverview;
