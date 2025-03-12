
import React from 'react';
import { Button } from "@/components/ui/button";
import { LayoutGrid, List } from 'lucide-react';

const ViewModeToggle: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 bg-muted/50 p-1 rounded-lg">
      <Button variant="ghost" size="sm" className="rounded-md">
        <LayoutGrid className="h-4 w-4 mr-2" />
        Grid
      </Button>
      <Button variant="ghost" size="sm" className="rounded-md">
        <List className="h-4 w-4 mr-2" />
        List
      </Button>
    </div>
  );
};

export default ViewModeToggle;
