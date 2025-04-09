
import React from 'react';
import { Button } from "@/components/ui/button";
import { Activity, FilePlus } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface HealthHeaderProps {
  handleAddRecord: () => void;
}

const HealthHeader: React.FC<HealthHeaderProps> = ({ handleAddRecord }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-healthnest-soft-pink to-pink-300 flex items-center justify-center mr-4 shadow-md">
          <Activity className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-healthnest-primary to-healthnest-medium-blue bg-clip-text text-transparent">Emma's Health</h1>
          <p className="text-sm md:text-base text-muted-foreground mt-1">Track growth, vaccines & medical visits</p>
        </div>
      </div>
      <Button 
        onClick={handleAddRecord} 
        size="sm" 
        className="bg-gradient-to-r from-healthnest-primary to-healthnest-medium-blue text-white hover:opacity-90 shadow-lg px-5 py-2 h-auto rounded-xl transition-all duration-300"
      >
        <FilePlus className="h-4 w-4 mr-2" />
        Add Health Record
      </Button>
    </div>
  );
};

export default HealthHeader;
