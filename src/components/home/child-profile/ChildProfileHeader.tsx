
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const ChildProfileHeader = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="chip bg-blue-100 text-blue-600">
        Current Child
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="text-sm font-normal"
      >
        Switch Child <ChevronDown className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
};

export default ChildProfileHeader;
