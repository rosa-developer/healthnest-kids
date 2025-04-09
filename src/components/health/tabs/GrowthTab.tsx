
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Weight, Ruler, ArrowRight, TrendingUp } from 'lucide-react';

const GrowthTab = () => {
  return (
    <div className="space-y-8">
      <Card className="border border-border shadow-soft overflow-hidden">
        <CardHeader className="pb-2 border-b bg-gradient-to-r from-healthnest-soft-blue/50 to-muted">
          <CardTitle className="text-lg flex items-center">
            <BarChart3 className="h-5 w-5 mr-2 text-healthnest-primary" />
            Growth Chart
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-64 flex items-center justify-center bg-muted/30 rounded-xl border border-healthnest-neutral-dark/30">
            <div className="text-center p-4">
              <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground opacity-40" />
              <p className="mt-3 text-muted-foreground">
                Growth chart visualization will appear here
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <GrowthStatCard 
          title="Weight Tracking"
          icon={<Weight className="h-5 w-5 mr-2 text-healthnest-primary" />}
          currentValue="8.2 kg"
          change="+0.4 kg"
          percentage={75}
          colorClass="from-healthnest-primary to-blue-400"
        />

        <GrowthStatCard 
          title="Height Tracking"
          icon={<Ruler className="h-5 w-5 mr-2 text-healthnest-primary" />}
          currentValue="68 cm"
          change="+2.5 cm"
          percentage={80}
          colorClass="from-healthnest-secondary to-yellow-400"
        />
      </div>
    </div>
  );
};

interface GrowthStatCardProps {
  title: string;
  icon: React.ReactNode;
  currentValue: string;
  change: string;
  percentage: number;
  colorClass: string;
}

const GrowthStatCard: React.FC<GrowthStatCardProps> = ({ 
  title, 
  icon, 
  currentValue, 
  change, 
  percentage, 
  colorClass 
}) => {
  return (
    <Card className="border border-border shadow-soft overflow-hidden">
      <CardHeader className="pb-2 bg-gradient-to-r from-healthnest-soft-blue/40 to-transparent border-b">
        <CardTitle className="text-base flex items-center">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-3xl font-semibold bg-gradient-to-br from-healthnest-primary to-blue-500 bg-clip-text text-transparent">{currentValue}</p>
            <p className="text-sm text-muted-foreground">Current {title.toLowerCase().replace(' tracking', '')}</p>
          </div>
          <div className="text-right">
            <p className="text-healthnest-primary font-medium flex items-center justify-end">
              <TrendingUp className="h-4 w-4 mr-1" />
              {change}
            </p>
            <p className="text-sm text-muted-foreground">from last month</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-muted">
          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${colorClass} rounded-full`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-muted-foreground">6 months</span>
            <span className="text-xs text-muted-foreground">18 months</span>
          </div>
        </div>
        <Button variant="link" size="sm" className="px-0 mt-3 text-healthnest-primary">
          View History <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default GrowthTab;
