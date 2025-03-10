
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ChildProfileHeader = () => {
  const { toast } = useToast();

  const handleChildSelection = () => {
    toast({
      title: "Coming Soon",
      description: "Multiple children profiles will be available in the next update!",
    });
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="chip bg-healthnest-soft-blue text-healthnest-primary">
        Current Child
      </div>
      <Button
        variant="ghost"
        className="text-sm text-muted-foreground"
        onClick={handleChildSelection}
      >
        Change Child
      </Button>
    </div>
  );
};

export default ChildProfileHeader;
