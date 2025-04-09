
import React from 'react';
import { Button } from "@/components/ui/button";
import { Activity, FilePlus } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface HealthHeaderProps {
  handleAddRecord: () => void;
}

const HealthHeader: React.FC<HealthHeaderProps> = ({ handleAddRecord }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-healthnest-soft-pink flex items-center justify-center mr-3">
          <Activity className="h-5 w-5 text-pink-500" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Emma's Health</h1>
          <p className="text-sm text-muted-foreground">Track growth, vaccines & medical visits</p>
        </div>
      </div>
      <Button 
        onClick={handleAddRecord} 
        size="sm" 
        className="bg-gradient-to-r from-healthnest-primary to-healthnest-medium-blue text-white hover:opacity-90 shadow-md"
      >
        <FilePlus className="h-4 w-4 mr-2" />
        Add Record
      </Button>
    </div>
  );
};

export default HealthHeader;
