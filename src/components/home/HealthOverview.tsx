
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Weight, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthOverview = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-healthnest-soft-blue/80 flex items-center justify-center mr-2">
            <Activity className="h-4 w-4 text-healthnest-primary" />
          </div>
          <h2 className="text-xl font-semibold">Health Overview</h2>
        </div>
        <Button variant="link" className="text-healthnest-primary" asChild>
          <Link to="/health">
            View Details <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Card className="border border-border shadow-soft overflow-hidden">
          <CardHeader className="pb-2 bg-gradient-to-r from-healthnest-soft-blue/40 to-transparent border-b">
            <CardTitle className="text-base flex items-center">
              <ShieldCheck className="h-5 w-5 mr-2 text-healthnest-primary" />
              Vaccination Status
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-sm text-muted-foreground">Next vaccination due in:</p>
            <p className="text-2xl font-semibold mt-1 bg-gradient-to-br from-healthnest-primary to-blue-500 bg-clip-text text-transparent">4 weeks</p>
            <div className="mt-4 mb-2">
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-healthnest-primary to-blue-400 h-2 rounded-full" style={{ width: '67%' }}></div>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-muted-foreground">0</span>
                <span className="text-xs text-muted-foreground">12</span>
              </div>
            </div>
            <div className="mt-3 text-sm flex items-center justify-between">
              <span className="text-healthnest-primary font-medium">8 of 12 complete</span>
              <Button variant="link" size="sm" className="p-0 h-auto text-healthnest-primary">
                See Schedule
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border shadow-soft overflow-hidden">
          <CardHeader className="pb-2 bg-gradient-to-r from-healthnest-soft-blue/40 to-transparent border-b">
            <CardTitle className="text-base flex items-center">
              <Weight className="h-5 w-5 mr-2 text-healthnest-primary" />
              Growth Percentile
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-muted-foreground">Weight</span>
                  <span className="text-sm font-medium flex items-center">
                    <TrendingUp className="h-3.5 w-3.5 mr-1 text-healthnest-primary" />
                    65th percentile
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-healthnest-primary to-blue-400 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted-foreground">0%</span>
                  <span className="text-xs text-muted-foreground">100%</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-muted-foreground">Height</span>
                  <span className="text-sm font-medium flex items-center">
                    <TrendingUp className="h-3.5 w-3.5 mr-1 text-healthnest-primary" />
                    70th percentile
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-healthnest-secondary to-yellow-400 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted-foreground">0%</span>
                  <span className="text-xs text-muted-foreground">100%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HealthOverview;
