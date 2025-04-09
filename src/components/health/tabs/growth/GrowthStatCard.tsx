
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight } from 'lucide-react';

interface GrowthStatCardProps {
  title: string;
  icon: React.ReactNode;
  currentValue: string;
  change: string;
  percentage: number;
  colorClass: string;
  bgColorClass: string;
  iconBgClass: string;
}

const GrowthStatCard: React.FC<GrowthStatCardProps> = ({ 
  title, 
  icon, 
  currentValue, 
  change, 
  percentage, 
  colorClass,
  bgColorClass,
  iconBgClass
}) => {
  return (
    <Card className="overflow-hidden border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className={`bg-gradient-to-r ${bgColorClass} p-6`}>
        <div className="flex justify-between items-start mb-4">
          <div className={`h-12 w-12 rounded-lg bg-gradient-to-r ${iconBgClass} flex items-center justify-center shadow-md`}>
            {icon}
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-white/80 backdrop-blur-sm shadow-sm`}>
            <TrendingUp className={`h-3.5 w-3.5 inline-block mr-1 text-green-500`} />
            {change}
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">Current {title}</p>
          <p className={`text-3xl font-bold bg-gradient-to-r ${colorClass} bg-clip-text text-transparent`}>
            {currentValue}
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="relative h-2 bg-white/70 rounded-full overflow-hidden shadow-inner">
            <div 
              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${colorClass} rounded-full`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-gray-500">6 months</span>
            <span className="text-xs text-gray-500">18 months</span>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="mt-4 text-gray-600 hover:text-gray-900 p-0 h-auto">
          View History <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default GrowthStatCard;
