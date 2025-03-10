
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GrowthStatProps {
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
  label: string;
  value: string;
}

const GrowthStat = ({ icon: Icon, iconColor, bgColor, label, value }: GrowthStatProps) => {
  return (
    <div className="flex items-center">
      <div className={`h-10 w-10 rounded-full ${bgColor} flex items-center justify-center mr-3`}>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
};

export default GrowthStat;
