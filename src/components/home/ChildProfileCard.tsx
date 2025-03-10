
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Weight, Ruler, Brain } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ChildProfileCard = () => {
  const { toast } = useToast();

  const handleChildSelection = () => {
    toast({
      title: "Coming Soon",
      description: "Multiple children profiles will be available in the next update!",
    });
  };

  return (
    <div className="mb-6">
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

      <Card className="border border-border shadow-soft overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col sm:flex-row">
            <div className="bg-gradient-to-br from-healthnest-soft-blue to-healthnest-light-blue p-6 sm:w-1/3">
              <div className="flex flex-col items-center sm:items-start">
                <div className="h-24 w-24 rounded-full bg-white/80 flex items-center justify-center mb-3 overflow-hidden">
                  <img 
                    src="/baby-emma.jpg" 
                    alt="Baby Emma" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Emma</h2>
                <p className="text-sm text-gray-600">8 months old</p>
              </div>
            </div>
            <div className="p-6 sm:w-2/3">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Growth Stats</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-healthnest-soft-pink flex items-center justify-center mr-3">
                    <Weight className="h-5 w-5 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Weight</p>
                    <p className="font-medium">8.2 kg</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-healthnest-soft-green flex items-center justify-center mr-3">
                    <Ruler className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Height</p>
                    <p className="font-medium">68 cm</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-healthnest-soft-purple flex items-center justify-center mr-3">
                    <Brain className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Milestone</p>
                    <p className="font-medium">Crawling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChildProfileCard;
